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

