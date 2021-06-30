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

## What can be improved

- Redis to cache data in memory
- Potentially could add a queue (RabbitMQ etc) to improve reliability of the application should one of the components go down (out of service)
- API client specifically for the local API
- Secure the endpoint (rate limiting, api keys / cert)
- Use a different framework (Nest.js for API)
- Split domain logic into `/src/domain/..`
