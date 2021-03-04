# Projet-MeetCourseAnalyzer

#### Description

Les années 2020 et 2021 sont marquées par la progression du COVID 19. Les mesures de distanciation
sociale devant être prises en compte dans les enseignements, elles ont précipité/forcé l’usage de
l’enseignement à distance dans les structures académiques. Cependant, du fait de cette précipitation
les outils d’évaluation de la qualité des interactions pendant le cours manquent.

A cet effet, nous souhaitons  concevoir et le développer un système permettant d’alimenter une base de
données des enregistrements de cours, ainsi que de noter l’évolution de la qualité des séances par 3 volets :
  - Un formulaire en ligne a remplir par les participants après chaque séance
  - Une comptabilisation de l’évolution du nombre de présents
  - Une évaluation de la dynamique et des interactions pendant la séance sur Google meet.

Ainsi le système devra comprendre les modules suivants :
- Module de saisie de la liste de présence : il s’agit d’un plugin pour le navigateur google chrome,
qui permettra, après authentification du professeur et du choix de la classe et de la matière, de
détecter la liste des présents et alimenter la base de données pour la séance en cours .

A la fin de la séance, le module enverra dans la base de données à travers des API Rest à définir :
* Pour la séance :
   - L’id de la conference
   - L’heure/Date de debut et de fin
   - S’il y a eu un partage d’écran ou pas
* pour chaque participant :
   -le nombre de déconnexion/connexion ,
   - la durée moyenne de présence,
   - le type de terminal utilisé
   - l’adresse email utilisé
   - la region d’origine de sa connexion
   
### Comment ça marche ?: Etapes de Contribution au projet

1. Importer le repository dans son espace de travail:

   git clone https://github.com/alseny-diallo/Projet-MeetCourseAnalyzer.git
  
2. Creer une branche (ne pas travailler directement sur la branche principale **Master**).

   git branch ma-branche
  
3. Se positionner sur sa branche.

    git checkout ma-branche
  
4. Commiter les modifications ainsi que les nouvelles fonctionnalités ajoutées.

   git commit -m "message du commit"
  
5. Rapatrier le travail dans la branche master.

   git merge ma-branche
  
6. Envoyer le code sur le depot github (Apres validation des membres).

    git push origin master
  
7. Mettre a jour son depot local.

    git pull origin master
  
