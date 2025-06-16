# RealEstatePro

RealEstatePro is a responsive real estate frontend application built with React and Bootstrap. It simulates a modern property listing platform, providing a clean user experience for browsing, viewing, and submitting properties.

## Features

- Property listings with card layout
- Search and filter by location, type, and price
- Property detail pages with:
  - Overview
  - Image gallery
  - Embedded Google Map
- Post Property form with image upload preview
- Responsive design using Bootstrap 5
- Routing with React Router
- State management with useState and localStorage
- Deploy-ready for Netlify or Vercel

## Live Demo

[View Deployed Site][View Deployed Site](https://cheery-crisp-0f29f6.netlify.app)


## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/ramshahm/realestatepro.git
cd realestatepro
npm install
npm start
Folder Structure
php
Copy
Edit
real-estate-client/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Property dataset (static or mock)
│   ├── pages/            # Home, Listings, PropertyDetails, Contact, PostProperty
│   ├── App.js            # Main app and route configuration
│   └── index.js          # Entry point
Technologies Used
React

Bootstrap 5

React Router DOM

Google Maps iframe

localStorage (for saving listings and state)
