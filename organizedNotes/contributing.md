###Learning in 260


- learned about git status, git pull, git push, git commit, git fetch
    -also about how to style an .md file 

# HTML 
1/15/25
- `<head>` contains things like title, charset, viewport settings
- `<body>` contains the visible page content

1/16/25
## Navigation Best Practices
- Use semantic `<nav>` element for navigation menus
- Navigation links should be in unordered lists `<ul>`

1/17/25
- Relative paths (../pages/index.html) work well for internal links
- Keep navigation consistent across all pages and directories clean so its easy to know where to access changes within files because things get complicated fast
-I am able to work longer when I am more organized

1/18/25
## Common Elements Reviewed
- `<header>` - Contains introductory content/navigation
- `<main>` - Primary content of the page
- `<footer>` - Bottom section with copyright, links etc

1/19/25
- `<section>` - Thematic grouping of content
- `<div>` - Generic container for styling/layout
- Must reference the styles.css to get the changes wanted in the html files
-Its easier to just create a folder for each respective language: html, css, js

# tree structure of my directory
.
├── LICENSE
├── README.md
├── notes.md
├── organizedNotes
│   ├── contributing.md
│   └── inClassNotes.md
└── src
    ├── images
    │   └── movieHubSpec.png
    ├── pages
    │   ├── discover.html
    │   ├── index.html
    │   ├── profile.html
    │   └── watchlist.html
    ├── scripts
    │   └── script.js
    └── styles
        └── styles.css


1/21/25 
sudo systemctl daemon-reload - forces files to be re-read and update its internal state 
sudo systemctl restart caddy - uses the latest settings changed (when I changed :80 to movieratings.click)

# HTML Updates - 1/28/25

## Page Structure & Navigation
- Created consistent header/navigation across all pages
- Added Font Awesome icons for visual elements (`<i class="fas fa-film"></i>`)
- Used favicon emoji in HTML (`<link rel="icon" href="data:image/svg+xml,...">`)

## Search Functionality
- Implemented search bars with filters
- Structure includes:
  - Input field for search
  - Search button with icon
  - Dropdown filters for genre and year
  - Consistent styling across pages

## Content Organization
- Moved "Top Rated Movies" to discover page for better UX
- Created sections for:
  - Movie search and discovery
  - Top rated movies display
  - Watchlist management
  - Real-time activity feed


## Project Requirements Met
- Application data: Movie grid and ratings display
- Authentication: Login form implementation
- Database data: Top rated movies section
- WebSocket: Real-time activity feed structure

2/27/25
- how to implement dropdown filters
- how to use 'useState' and 'useEffect' to mock out login and sign up functionality
- 'useState' is used to manage the login state, user data, and form inputs. 
- 'useEffect' is used to check for stored user data on component mount. 


3/19/25
## Introduction to Node.js
- Node.js is a runtime environment for executing JavaScript code outside the browser.
- Built on Chrome's V8 JavaScript engine.
- Commonly used for building server-side applications.

## Key Features
- **Asynchronous and Event-Driven**: Handles multiple requests without blocking.
- **Non-blocking I/O**: Efficiently handles file and network operations.
- **Single-Threaded**: Uses a single thread with event looping for concurrency.

## Core Modules
- `fs`: File system operations (read/write files).
- `http`: Create and manage HTTP servers.
- `path`: Work with file and directory paths.
- `os`: Provides information about the operating system.

## Package Management
- Uses npm (Node Package Manager) for managing dependencies.
- Install packages using `npm install <package-name>`.

## Example: Simple HTTP Server
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
- Run the server with `node server.js`.
- Access it in the browser at `http://localhost:3000/`.


3/25/25
## 🌟 What I Learned

Throughout the development of Movie Ratings Hub, I gained valuable insights and skills:

- **Markdown Best Practices**: Learned how to structure and format Markdown documents effectively, including embedding images and creating lists for deliverables.

- **Frontend Development**: Improved my understanding of responsive design using CSS and Bootstrap. Learned how to create dynamic and interactive components with React.

- **Backend Development**: Gained experience in setting up a Node.js/Express server, creating RESTful API endpoints, and integrating third-party APIs.

- **Database Management**: Learned how to securely store and retrieve data using MongoDB, including implementing user authentication with hashed passwords.

- **Real-Time Features**: Explored the basics of WebSocket connections and their potential for real-time updates, even though this part is still a work in progress.

- **Project Organization**: Enhanced my ability to break down a project into deliverables, track progress, and document work effectively for grading and collaboration.

- **Full-Stack Integration**: Strengthened my ability to connect the frontend and backend seamlessly, ensuring smooth communication between components.

These lessons have significantly improved my technical skills and prepared me for future development challenges.