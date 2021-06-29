# Events Api

## To do

- Remove `any`s
- Set up data store
- Define raw data types
- Error messages

## Structure

- `/src/db` - database setup
- `/src/index.ts` - app setup

## Setting up tables

// Create event table
```sql
CREATE TABLE event (
  id serial PRIMARY KEY,
  name VARCHAR ( 50 ) NOT NULL,
  description VARCHAR ( 200 ) NOT NULL,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  date DATE NOT NULL
);
```
