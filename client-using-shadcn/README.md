# Project Name: Trading Dashboard

## Overview

This project is a **React-based Trading Dashboard** designed to display trading data in a structured and interactive manner. It provides real-time insights using various data visualization techniques, including charts and tables.

## Features

- **Sidebar Navigation:** Toggleable sidebar for seamless navigation between different sections.
- **Real-time Data Fetching:** Data is fetched and updated dynamically from the backend API.
- **Chart Representation:** Visual representation of trading data using **Chart.js**.
- **Data Tables:** Well-structured tables with conditional formatting for better readability.
- **Responsive Design:** Fully responsive layout built with **Tailwind CSS**.

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Chart.js
- **State Management:** useState, useEffect
- **Backend (API Endpoints Used):** fetching data from `http://localhost:5000/`

## Project Structure

```
project-folder/
│-- src/
│   │-- components/
│   │   ├── Sidebar.jsx
│   │-- pages/
│   │   ├── Detail.jsx
│   │   ├── Summary.jsx
│   │   ├── Bar.jsx
│   │   ├── Chart.jsx
│   │-- App.jsx
│   └── index.js
│-- public/
│-- package.json
│-- README.md
```

 
  

## API Endpoints

The dashboard fetches data from the following API endpoints:

- `GET http://localhost:5000/bar` - Fetches bar chart data.
- `GET http://localhost:5000/details` - Fetches detailed trading data.
- `GET http://localhost:5000/summary` - Fetches summary trading data.
- `GET http://localhost:5000/chart` - Fetches chart trading data.

## Components

### `App.jsx`

- Manages routing and sidebar state.
- Defines navigation using `react-router-dom`.

### `Detail.jsx`

- Displays a detailed table of trading data.
- Fetches data every 2 seconds for real-time updates.
- Uses conditional formatting for better readability.

### `Summary.jsx`

- Provides an overview of trading metrics.
- Includes color-coded profit/loss indicators.

### `BarChart.jsx`

- Fetches and visualizes exposure limit usage with a bar chart.
- Implements **Chart.js** for interactive data representation.

### `Sidebar.jsx`

- A collapsible sidebar for easy navigation.

## Styling & UI

The project is styled using **Tailwind CSS**, ensuring a clean and responsive design.

 

## Author

**Sk Rafikul Islam**  
Frontend Developer  
Email: rafikul.career@gmail.com  
GitHub: [your-github-link](https://github.com/your-profile)
