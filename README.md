# RealEstatePro

RealEstatePro is a responsive real estate frontend application built with React and Bootstrap. It simulates a modern property listing platform, providing a clean user experience for browsing, viewing, and submitting properties.

## Live Demo

[https://proplistings.netlify.app](https://proplistings.netlify.app)

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

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/ramshahm/realestatepro.git
cd realestatepro
npm install
npm start

Folder Structure
real-estate-client/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Property dataset (static or mock)
│   ├── pages/            # Home, Listings, PropertyDetails, Contact, PostProperty
│   ├── App.js            # Main app and route configuration
│   └── index.js          # Entry point

Deployment
npm run build

Technologies Used
-React

-Bootstrap 5

-React Router DOM

-Google Maps iframe

-LocalStorage
