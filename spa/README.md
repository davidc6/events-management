# SPA

## Tech choices

- Create-react-app to save time on manual webpack setup
- JavaScript (instead of TypeScript) for quick iterations
- Material UI to make dialog / model creation process less painful
- Jest and React testing library to test the components as they work great together

## Potential improvements

- Add / finish off unit tests for each component
- Add state management if the application grows in complexity
- Add [React Query](https://react-query.tanstack.com/) for caching and fetching data
- Make the app responsive and mobile friendly
- Add client side validation for input fields (add new event)
- Error logging (client side telemetry)
- Handle error states / fallback states (e.g. "Could not save event")
- Extract "save event" functionality into a React hook so that it can be reused
- Allow for environment variable to swap API url
- Serve the application behind teh reverse proxy to cache static assets and for improved security
- Better design
