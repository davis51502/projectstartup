# Movie Ratings Hub

[My Notes](notes.md)

Movie Ratings Hub is a dynamic web application that brings friends together through their shared love of cinema. Users can rate movies, create personalized watchlists, and discover new films through their social network's recommendations. The platform features real-time updates when friends rate movies, making it easy to see what your trusted circle thinks about the latest releases. Whether you're a casual viewer looking for your next weekend watch or a film enthusiast wanting to share your insights, Movie Ratings Hub provides an engaging space to explore, discuss, and celebrate the world of movies.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Tired of missing out on hidden gems?? Movie Ratings Hub is your personalized cinema companion that helps you make informed watching decisions. Unlike generic rating sites, our platform creates a tailored experience by connecting you with your friends and family in a real-time chat environment. Rate and review movies you've watched, discover recommendations based on your preferences, and join vibrant discussions about your favorite blockbusters and indie masterpieces. Movie Ratings Hub helps you cut through the noise and keep track of your favorite movies.

### Design

![Design image](public/movieHubSpec.png)

Here is a sequence diagram that shows how to people would interact with the backend

```mermaid
sequenceDiagram
    actor Sarah
    actor Mike
    actor Emma
    participant Server

    Sarah->>Server: Rates "Inception" 5★
    Server-->>Mike: Updates "Inception" rating
    Server-->>Emma: Updates "Inception" rating
    
    Mike->>Server: Rates "Inception" 4★
    Server-->>Sarah: Updates "Inception" rating
    Server-->>Emma: Updates "Inception" rating
    
    Emma->>Server: Rates "Inception" 5★
    Server-->>Sarah: Updates "Inception" rating
    Server-->>Mike: Updates "Inception" rating
```

### Key features

- **Real-time Rating System** - Users can rate movies on a 5-star scale, with ratings instantly visible to all connected users. 

- **Movie Discovery** - Browse and search for movies using the comprehensive database. Each movie page includes the number of films rated, seen, want to see, and favorited.

- **Social Features** - Connect with friends, follow users with similar taste, and engage in movie discussions.

- **Personalized Recommendations** - Get movie suggestions based of your friends ratings. 

- **Watchlist Management** - Keep track of movies you want to watch, organize them into custom lists.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses semantic HTML structure for the application. Six main HTML pages: login, sign up, home, search, chat, profile. Hyperlinks to all pages.

- **CSS** - Clean styling with a focus on movie posters and color scheme. Uses whitespace neatly and a grid layout.

- **React** - Provides authentication, rating system, and profile management. Uses React Router for navigation between pages.

- **Service** - Backend service with endpoints for:
  - Login
  - Movie search and details
  - Rating submission
  - Watchlist management
  - Friend connections

- **DB/Login** - Store user profiles, movie ratings, and watchlists in database. Secure registration and login system. Stores encrypted credentials.

- **WebSocket** - Real-time updates when friends rate movies or modify their watchlists. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.movieratings.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four HTML pages created: index.html (home), discover.html, watchlist.html, and profile.html. 
- [x] **Proper HTML element usage** - Used nav, header, main, section, footer throughout the HTML. Structured forms for login and search.
- [x] **Links** - Navigation links between all pages, GitHub profile link in footer, and links for movie interactions. 
- [x] **Text** - Clear headings and descriptive text throughout. 
- [x] **3rd party API placeholder** - Search functionality prepared for future (movie database) API integration. Filter options ready for dynamic content.
- [x] **Images** - Profile picture placeholder in profile page, movie poster placeholders in watchlist page. 
- [x] **Login placeholder** - Login form implemented with username/password inputs and create account option. Positioned in navigation area of all pages.
- [x] **DB data placeholder** - Top rated movies section displays movie ratings and vote counts. Watchlist shows saved movies with dates.
- [x] **WebSocket placeholder** - Real-time activity feed showing recent user actions like ratings and watchlist additions. 

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Created headers with Movie Ratings Hub navigation and unique look. Added styled footer and main content uses bootsrap grid for organization.
- [x] **Navigation elements** - Created a responsive design for navagation bar with dropdown menu for mobile and styled login form.
- [x] **Responsive to window resizing** - All pages are responsive using boostrap's grid and media functionalities. Navigation resizes to hamburger menu on mobile.
- [x] **Application elements** - Added styled placeholders for movies and profile info. Hover effects and animations addded to buttons.
- [x] **Application text content** - Used Inter font family and readable text contrast ratios. Added icons as well.
- [x] **Application images** - Added hover effects on images and proper sizing for movie posters and profile pictures. 

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - So amazing what Vite does. Bundling, transpiling, minifying, and HMR.
- [x] **Components** - I have 3 components: discover(allowing to search for movies to be dynamically added to favorites,watched, or watchlist), watchlist(movies shown that are added, recent live activity of ratings), profile(holds stats and profile information and favorited movies)
- [x] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
