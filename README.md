E-commerce Product Management Application
Overview
This project is a simplified e-commerce product management application built using React 18. The application includes features like product listing, filtering, shopping cart functionality, animations, user authentication, state management with Redux and Recoil, and more. The project follows best practices for component structure, state management, and code quality.

Features
Product Listing Page
Fetch Products: Products are fetched from a mock API and displayed in a grid layout showing the product image, name, price, and an "Add to Cart" button.

Filtering: Products can be filtered by category (e.g., Electronics, Clothing, Home).

Shopping Cart
Cart Management: A shopping cart component that displays added products, their quantities, and a total price. Users can adjust quantities and remove items from the cart.

State Management: Used Recoil for efficient cart state management.

Transitions and Animations
Smooth Transitions: Implemented smooth transitions for adding and removing items from the cart using Framer Motion.

Additional Animations: Enhanced user interactions with React Spring for additional animations during transitions.

Data Fetching with Suspense
Loading States: Utilized React 18’s Suspense for loading states while fetching product data, displaying a loading spinner or placeholder during data fetching.

Responsive Design
Mobile-Friendly: Ensured the application is mobile-friendly using styled-components for styling and responsive design.

Search Functionality
Search Bar: Implemented a search bar that filters products based on user input, using lodash.debounce to improve performance during searches.

User Authentication
Authentication Flow: Implemented a simple user authentication flow using Firebase Authentication to manage user sessions.

Persistent Cart
State Persistence: Used Redux Persist to save the shopping cart state in local storage across sessions.

Notifications
User Notifications: Implemented notifications for actions like adding items to the cart or errors using react-toastify.

Admin Dashboard
Product Management: Created a simple dashboard for admins to manage products, including adding, editing, and deleting products. Used Formik for form management and validation.

Category Selection: Added a select box for preset categories in the admin dashboard form.

Review System
User Reviews: Implemented a review system where users can leave ratings and comments for products. Reviews are stored using Firestore.


#Installation
git clone https://github.com/your-username/react-ecommerce.git

cd ecommerce-app
npm install
npm start



