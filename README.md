# Everyone's a Critic
## Project Idea and Description
"Everyone's a Critic" is a web app that allows users to search for movies using the OMDb api, add them to their watched list, and share their opinions through comments. Inspired by Goodreads, it aims to create a community of movie enthusiasts who can discover, discuss, and connect over their favorite & least favorite films.

## API Choice and Proof of Concept
![API-pirates-result](https://i.imgur.com/OFUgzXu.png)


## ERDs
![ERDs](https://i.imgur.com/PHruWBe.png)


## RESTful Routing Chart
| VERB   | URL                           | CRUD   | DESCRIPTION                               | VIEW           |
| ------ | ----------------------------- | ------ | ----------------------------------------- | -------------- |
| GET    | /                             | Read   | Home page                                 | Home           |
|        |                               |        |                                           |                |
| POST   | /users                        | Create | Add user data to db                       |                |
| GET    | /users/new                    | Read   | Display signup form                       | Signup Form    |
| GET    | /users/login                  | Read   | Display login form                        | Login Form     |
| POST   | /users/login                  | Read   | Checks user credentials against db        |                |
| GET    | /users/logout                 | Read   | Logout user by clearing cookeis           |                |
| GET    | /users/:id/lists              | Read   | Display user's movie list                 | Lists Index    |
| POST   | /users/:id/lists              | Create | Add a movie to user's watched list        |                |
| DELETE | /users/:id/lists              | Delete | Delete a movie from a user's watched list |                |
|        |                               |        |                                           |                |
| GET    | /movies                       | Read   | Display search form for movies            | Movies Index   |
| POST   | /movies/search                | Create | Fetch API data & display results          | Movies Results |
| GET    | /movies/:id                   | Read   | Show details of a specific movie          | Movies Show    |
| GET    | /movies/:id/comments/new      | Read   | Show a form to create comment on movie    | Comment New    |
| POST   | /movies/:id/comments          | Create | Add comment to movie page                 |                |
| GET    | /movies/:id/comments/:id/edit | Read   | Show form to edit a comment on a movie    | Comment Edit   |
| PUT    | /movies/:id/comments/:id      | Update | Update an existing comment                |                |
| DELETE | /movies/:id/comments/:id      | Delete | Delete a comment on a movie               |                |
|        |                               |        |                                           |                |


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
Include user authentication and registration.
Include movie search functionality using the OMDb API.
Create and manage a user's watched movies list.
Allow users to leave comments on movies.

## Stretch Goals
Add to user profiles with profile pictures and bio sections.
Allow users to rate movies and display average ratings.
Allow users to include tags describing their watched movies.

