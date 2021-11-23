CREATE TABLE friends (id INTEGER PRIMARY KEY, 
                      name TEXT UNIQUE,
                      birthday DATE NOT NULL);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940/04/30');

INSERT INTO friends (id, name, birthday)
VALUES (2, 'Marilyin Monroe', '1954/11/23');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'John Kennedy', '1943/07/04');

UPDATE friends SET name = 'Storm' WHERE id = 1;

ALTER TABLE friends ADD COLUMN email TEXT;

UPDATE friends SET email = 'storm@gmail.com' WHERE id = 1;
UPDATE friends SET email = 'MarilynMonroe@gmail.com' WHERE id = 2;
UPDATE friends SET email = 'JohnKenedy@gmail.com' WHERE id = 3;

DELETE FROM friends WHERE id = 1;

SELECT * FROM friends;
