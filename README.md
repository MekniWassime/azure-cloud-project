# azure cloud project

endpoints:

- /daily
  - get: gamestate
  - post: guess => result/won
  - /rest_board
    - delete:
- /leaderboard
  - get: get leaderboard list
