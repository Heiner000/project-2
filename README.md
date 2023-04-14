# Everyone's a Critic
## Project Idea and Description
"Everyone's a Critic" is a web app that allows users to search for movies, add them to their watched list, and share their opinions through comments. Inspired by Goodreads, it aims to create a community of movie enthusiasts who can discover, discuss, and connect over their favorite & least favorite films.

Link to live site:  https://evac-app.herokuapp.com/

## Installation Instructions
+ From the terminal, create a new directory, inside it fork and clone this repository.
+ From the terminal, run the command "npm i -y" to quickly install the dependencies.
+ From the terminal, run this command "touch .env" to create a file to store environmental variables.
+ Open the repository in Vscode, navigate to the .env file
+ Inside the .env file, store your bcrypt secret key by adding the following:
  + ENC_KEY="a string of your choice" 
+ Now to navigate to https://www.omdbapi.com/apikey.aspx & sign up for an account to receive an api key via email.
+ Once received, return to the .env file, and store your api key by adding the following:
  + API_KEY="api key string from your email".
+ Fire up your nodemon, you're ready to go.


## Technologies & Approach
This project leverages Node.js, Express.js, EJS, Bootstrap5, Sequelize, and PostgreSql to create a movie search and favorites tracking web app. It follows a Model-View-Controller set up and consumes data from the OMDB API based on user's searches. The app features user authentication, dynamic view rendering, and some edge case handling. It also uses axios, dotenv, and bcrypt to ensure a secure, user-friendly experience.


## API Choice and Proof of Concept
Thunderclient test results fetching movie info from OMDb API using "pirates" search query.
![API-pirates-result](https://i.imgur.com/recDyPM.png)


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
+ I want to add a movie to my favorites list.
+ I want to remove a movie from my favorites list.
+ I want to be able to log out


## MVP Goals
+ Include user authentication and registration.
+ Include movie search functionality using the OMDb API.
+ Create and manage a user's favorites movies list.
+ Allow users to leave comments on movies.


## Stretch Goals
+ Display a list of movies most recently added to favorites.
+ Add to user profiles with profile pictures and bio sections.
+ Allow users to rate movies and display average ratings.
+ Allow users to include tags describing their favorites movies.


## Post-Project Reflection
+ This MVC & RESTful Routing system was initially quite confusing, but as I worked on this project, I things started to make much more sense. There was probably a 50% change in my routes from my pitch to finish, with room to refactor and then expand.
+ The Bootstrap framework looked like an easy choice at first glance, but the initial learning curve was more than I anticipated, and I eventually reached a spot where I was able to get most elements on my page how I wanted, somewhat. Bootstrap is an expansive tool that I can tell will be extremely valuable for quicker styling in the future with more practice.
+ Learning to utilize sequelize to a greater degree would help a lot with future projects. I reached a point where things seemed to be working, but the way I had built out my models left more to be desired, and I didn't want to take too many steps back to integrate more data. It's another tool that feels like it's more powerful than I realize.


## Citations  
fairfax theater photo:
Photo by <a href="https://unsplash.com/@addyire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Addy Ire</a> on <a href="https://unsplash.com/photos/Jz4X5UOoVfs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
login & sign up page:
https://codepen.io/aniketrod/pen/oNGPWXq?editors=1100
