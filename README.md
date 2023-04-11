# Everyone's a Critic
## Project Idea and Description
"Everyone's a Critic" is a web app that allows users to search for movies, add them to their watched list, and share their opinions through comments. Inspired by Goodreads, it aims to create a community of movie enthusiasts who can discover, discuss, and connect over their favorite & least favorite films.

## API Choice and Proof of Concept
Thunderclient test results fetching movie info from OMDb API using "pirates" search query.
![API-pirates-result](https://i.imgur.com/OFUgzXu.png)


## ERDs
![ERDs](https://i.imgur.com/Hts7g7x.png)


## RESTful Routing Chart
| VERB   | URL                   | CRUD    | DESCRIPTION                             | VIEW           |
| ------ | --------------------- | ------- | --------------------------------------- | -------------- |
| GET    | /                     | Read    | Home page                               | Index          |
|        |                       |         |                                         |                |
| POST   | /users                | Create  | Add user data to db                     |                |
| GET    | /users/new            | Read    | Display signup form                     | Users new      |
| GET    | /users/login          | Read    | Display login form                      | Users login    |
| POST   | /users/login          | Read    | Checks user credentials against db      |                |
| GET    | /users/logout         | Read    | Logout user by clearing cookeis         |                |
| GET    | /users/profile        | Read    | Display user's movie list               | Users profile  |
|        |                       |         |                                         |                |
| GET    | /movies               | Read    | Display search form for movies          | Movies index   |
| GET    | /movies/results       | Read    | Fetch API data & display results        | Movies results |
| GET    | /movies/:id           | Read    | Show details of a specific movie        | Movies details |
| POST   | /movies/:id/favorites | Create  | Add a movie to user's favorites         |                |
| DELETE | /movies/:id/favorites | Delete  | Destroy a movie from a user's favs list |                |
|        |                       |         |                                         |                |
| POST   | /comments             | Create  | Add a comment to movie page             |                |
| GET    | /comments/edit/:id    | Read    | Edit user's own comment                 | Comments Edit  |
| PUT    | /comments/:id         | Update  | Process comment's edits                 |                |
| DELETE | /coments/:id          | Destroy | Delete user's own comment               |                |


## Wireframes
![Project2-wireframes](https://i.imgur.com/fkJZOYU.jpg)


## User Stories
As a user...
+ I want to be able to sign up, or log in from the home page.
+ I want to search for movies by title.
+ I want to view detailed information about a movie, including its plot, director, and release year.
+ I want to view other users' comments on a movie's details page.
+ I want to edit or remove my comments on a movie's details page.
+ I want to add a movie to my watched list.
+ I want to remove a movie from my watched list.
+ I want to be able to log out

## MVP Goals
+ Include user authentication and registration.
+ Include movie search functionality using the OMDb API.
+ Create and manage a user's watched movies list.
+ Allow users to leave comments on movies.

## Stretch Goals
+ Add to user profiles with profile pictures and bio sections.
+ Allow users to rate movies and display average ratings.
+ Allow users to include tags describing their watched movies.

