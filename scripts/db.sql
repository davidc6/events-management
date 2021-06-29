CREATE DATABASE events;

-- connect to events database
\c events;

CREATE TABLE event (
  id serial PRIMARY KEY,
  name VARCHAR ( 50 ) NOT NULL,
  description VARCHAR ( 200 ) NOT NULL,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  date DATE NOT NULL
);

INSERT INTO event (name, description, date) values ('Event 1', 'This is the first event', '2020-01-01T00:00:00.000Z');
INSERT INTO event (name, description, date) values ('Event 2', 'This is the second event', '2020-02-01T00:00:00.000Z');
INSERT INTO event (name, description, date) values ('Event 3', 'This is the third event', '2020-03-01T00:00:00.000Z');
INSERT INTO event (name, description, date) values ('Event 4', 'This is the fourth event', '2020-04-01T00:00:00.000Z');
INSERT INTO event (name, description, date) values ('Event 5', 'This is the fifth event', '2020-05-01T00:00:00.000Z');
INSERT INTO event (name, description, date) values ('Event 6', 'This is the sixth event', '2020-06-01T00:00:00.000Z');
INSERT INTO event (name, description, date) values ('Event 7', 'This is the seventh event', '2020-07-01T00:00:00.000Z');
