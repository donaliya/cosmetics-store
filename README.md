# Assignment 1 – React Project Initialization & SPA Foundations

**Student:** Sultanbek Azaliya  
**Project Topic:** Azi Cosmetics – Online Store  

## 1. Project Proposal

### Project Idea and Purpose  
"Azi Cosmetics" is a simple web application for an online cosmetics store. The goal of this project is to create a clean and modern interface where users can view different beauty and skincare products. This project is built using React and demonstrates the basic principles of a Single Page Application (SPA).

### Target Audience  
The target audience includes people who are interested in makeup and skincare products. It can be useful for students, beauty lovers, and anyone who prefers online shopping.

### Problem the Application Solves  
Many websites reload the entire page when users click on different sections. This can feel slow and inconvenient. This application uses SPA architecture, which allows content to update without reloading the page. As a result, navigation feels faster and smoother.

### Minimum Viable Product (MVP) Features  
- **Home Page** with a short introduction to the store  
- **Product List** displaying product names and prices  
- **Header and Footer** components for basic layout structure  
- **SPA Structure** using React components  

## 2. SPA Theory Questions

### What is a Single Page Application (SPA)?  
A Single Page Application (SPA) is a type of web application that loads a single HTML page and updates the content dynamically using JavaScript. Instead of reloading the entire page, only specific parts of the page change. This makes the application faster and provides a smoother user experience.

### How does SPA differ from traditional Multi-Page Applications (MPA)?  
In a traditional Multi-Page Application (MPA), every user action loads a completely new HTML page from the server. This causes visible page reloads. In contrast, an SPA loads the main page once and then updates content dynamically. This improves speed and makes navigation more comfortable for users.

### What is the Virtual DOM?  
The Virtual DOM is a copy of the real DOM stored in memory. When something changes in a React application, React first updates the Virtual DOM. Then it compares the new version with the previous one and updates only the parts that changed in the real DOM. This process makes React applications more efficient.

### Why does React use a component-based architecture?  
React uses a component-based architecture because it allows developers to divide the user interface into smaller reusable parts, such as Header, Footer, and Product components. This makes the code easier to understand, reuse, and maintain. It also helps organize large projects more effectively.

## 3. Project Structure  

The project follows the required structure:

- `src/components/` — contains `Header.js`, `MainContent.js`, and `Footer.js`  
- `src/pages/` — contains `Home.js`  
- `src/assets/` — used for images and other media files  
- `src/App.js` and `src/index.js` — main application files  
- `src/App.css` — custom styling file  

## 4. How to Run the Project  

1. Clone this repository.  
2. Run `npm install` to install dependencies.  
3. Run `npm start` to start the development server.  
4. Open `http://localhost:3000` in your browser.  