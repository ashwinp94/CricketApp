# Kirriket

Kirriket is my first simple CRUD application using React. Kirriket originated as a way for people to track their performances and log their stats for the sport of cricket. The application allows a user to:
1. Record and keep track of your performances in matches
2. Create events for watch parties or upcoming matches
3. Keep track of and add followers
4. See your followers events and their statistics 

## Getting Started
The Kirriket application utilizes React, React-Router-Dom, and Bootstrap.
1. clone repo
2. run `npm install` to pull in dependencies
3. `mkdir /API` in root folder then `cd /API`
4. run the JSON server at `json-server -p 5002 -w database.json` ( `npm install -g json-server` if necessary )
5. Populate the database with sample data
```
{
  "users": [
    {
      "username": "Mary",
      "password": "password",
      "role": "Bowler",
      "age": 20,
      "id": 3
    },
    {
      "username": "Russel",
      "password": "password",
      "role": "Bowler",
      "age": "24",
      "id": 4
    }
  ],
  "batters": [
    {
      "userId": 1,
      "runsScored": 30,
      "ballsFaced": 32,
      "numberofFours": 2,
      "numberofSixes": 2,
      "batDate": "2019-01-15",
      "id": 1
    },
    {
      "userId": 2,
      "runsScored": 12,
      "ballsFaced": 11,
      "numberofFours": 11,
      "numberofSixes": 11,
      "batDate": "2019-02-04",
      "id": 5
    }
  ],
  "bowlers": [
    {
      "userId": 2,
      "oversBowled": 3,
      "runsConceded": 18,
      "wickets": 2,
      "extras": 3,
      "bowlDate": "2019-01-15",
      "id": 1
    },
    {
      "userId": 1,
      "oversBowled": 4,
      "runsConceded": 24,
      "wickets": 1,
      "extras": 0,
      "bowlDate": "2019-01-8",
      "id": 2
    }
  ],
  "roles": [
    {
      "name": "Batter",
      "id": 1
    },
    {
      "name": "Bowler",
      "id": 2
    },
    {
      "name": "All-Rounder",
      "id": 3
    }
  ],
  "events": [
    {
      "eventName": "Pre-launch Party!",
      "eventDate": "2019-01-15",
      "eventTime": "17:00",
      "eventLocation": "NSS",
      "userId": 1,
      "id": 1
    },
    {
      "eventName": "Pre-game Party!",
      "eventDate": "2019-01-15",
      "eventTime": "17:00",
      "eventLocation": "My House",
      "userId": 2,
      "id": 2
    }
  ],
  "friends": [
    {
      "id": 1,
      "userId": 1,
      "currentUserId": 2
    },
    {
      "id": 2,
      "userId": 2,
      "currentuserId": 1
    }
  ]
}
```
6. `npm start` in root directory to start react server
7. `npm install react router dom` and `npm install` moment
8. create a new account and login
