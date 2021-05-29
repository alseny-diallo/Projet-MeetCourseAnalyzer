
DELIMITER $$
CREATE TRIGGER calculNoteFormulaire
AFTER 
	INSERT on formulaire
FOR EACH ROW
BEGIN
	DECLARE nbr INT;
    set nbr = ( select count(idSeance) from formulaire where idSeance = New.idSeance);
	IF nbr = 1 THEN
		Insert into note(idSeance, idSeance) values (New.idSeance, New.note);
	ELSE
		UPDATE note
	    SET valeur = (	SELECT AVG(note) 
	    				FROM formulaire
	        			WHERE idSeance = New.idSeance)
	    WHERE idSeance = NEW.idSeance;
	END IF;
end;
$$
DELIMITER;
