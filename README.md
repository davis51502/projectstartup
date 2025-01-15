# Movie Ratings Hub

[My Notes](notes.md)

Movie Ratings Hub is a dynamic web application that brings friends together through their shared love of cinema. Users can rate movies, create personalized watchlists, and discover new films through their friend's recommendations.


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

![Design image](images/movieHubSpec.png)

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

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

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
