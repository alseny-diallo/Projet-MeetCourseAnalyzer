const readline = require('readline');
const {google} = require('googleapis');
const fs = require('fs');
let seance = Object();
let participant = Object();
let participants = [];
let events;
let trouve = false;
let monCredentials
let url;

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/admin.reports.audit.readonly', 'https://www.googleapis.com/auth/admin.reports.usage.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('../credentials.json', (err, content) => {
  if (err) return console.error('Error loading client secret file', err);

  // Authorize a client with the loaded credentials, then call the
  // Reports API.
  authorize(JSON.parse(content), listLoginEvents);
  // recuperation des identifiants
  monCredentials = JSON.parse(content);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.web;
  const oauth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oauth2Client, callback);
    oauth2Client.credentials = JSON.parse(token);
    moToken = JSON.parse(token);
    callback(oauth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES, 
  });
  // Recuperation de l'url d'authentification
  url = authUrl;
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    }); 
  });
}
/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) return console.warn(`Token not stored to ${TOKEN_PATH}`, err);
    console.log(`Token stored to ${TOKEN_PATH}`);
  });
}


function listLoginEvents(auth) {
  const service = google.admin({version: 'reports_v1', auth});
  service.activities.list({
    userKey: 'all',
    applicationName: 'meet',
    eventName: 'call_ended',
  }, (err, res) => {
    if (err){
      if(err.message === 'No refresh token is set.'){
        console.log('Token danan a renouvener');

        fs.unlink(`${TOKEN_PATH}`, (err) => {
          if(err) return console.log('impossible');

          authorize(monCredentials, listLoginEvents);
        });
        console.log('le fichier token a ete supprimer avec succes');
      }
      return console.error('The API returned an error:', err.message);
    }
    const activities = res.data.items;
    const premier = activities[0].events[0];
    if (activities.length) {
      seance.partage = false;  
      seance.dateFin = filtreDateHeureFin(activities[0].id.time, 'date');
      seance.heureFin = filtreDateHeureFin(activities[0].id.time, 'heure');
      for(let i = 0; i < activities[0].events[0].parameters.length; i++){
        if(premier.parameters[i].name === 'conference_id'){
          seance.id = premier.parameters[i].value;
        }
      }
      activities.forEach((activity) => {
        events = activity.events[0];
        participant.nbConnexion = 1;
        participant.duree = 0;

        for(let i = 0; i < events.parameters.length; i++){
          if(events.parameters[i].name === 'conference_id'){
            participant.conference = events.parameters[i].value;
          }
          if(events.parameters[i].name === 'display_name'){
            participant.nomComplet = events.parameters[i].value;
          }
          if(events.parameters[i].name === 'endpoint_id'){
            participant.IdConnexion = events.parameters[i].value;
          }
          if(events.parameters[i].name === 'duration_seconds'){
            participant.duree += parseInt(events.parameters[i].intValue);
          }
          if(events.parameters[i].name === 'device_type'){
            participant.terminal = events.parameters[i].value;
          }
          if(events.parameters[i].name === 'identifier'){
            participant.email = events.parameters[i].value;
          }
          if(events.parameters[i].name === 'location_region'){
            participant.region = events.parameters[i].value;
          }

          if(events.parameters[i].name === 'video_send_seconds' && participant.conference === seance.id && events.parameters[i].intValue > 0){
            console.log(events.parameters[i].intValue);
            seance.partage = true;
          }
        }
        for(let j = 0; j < participants.length; j++){
          if(participants[j].conference === participant.conference && participants[j].email === participant.email){
            trouve = true;
            participants[j].nbConnexion++;
            participants[j].duree += participant.duree;
          }
        }
        if(!trouve && participant.conference === seance.id){
          ajoutParticipant(participant.conference ,participant.nomComplet, participant.nbConnexion, participant.IdConnexion, participant.duree, participant.terminal, participant.email, participant.region);
        }
        trouve = false;
      });
      console.log(seance);
      console.log(participants);
    } else {
      console.log('Pas de meet trouvé.');
    }
   });
}


function ajoutParticipant(conference, nom, nbConnexion, IdConnexion, duree, terminal, email, region){
  participants.push({conference, nom, nbConnexion, IdConnexion, duree, terminal, email, region});
}


function filtreDateHeureFin(date, quoi){
  if(quoi === 'date')
    return date.slice(0, 10);
  else
    return date.slice(11, date.length-1);
}

module.exports = {
  SCOPES,
  listLoginEvents,
  authorize,
  participants,
  seance,
  monCredentials,
  url
};

