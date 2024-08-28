# Daily Habit Tracker

The **Daily Habit Tracker** is a web application designed to help users build and maintain positive habits over time. It enables users to track their daily activities, set goals, and visualize their progress.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add New Habits**: Users can create new habits they want to develop, such as exercising, reading, meditating, or drinking water. Each habit entry can include details like the habit name, description, and completion status.
  
- **Track Habit Progress**: Users can mark their habits as completed each day and see their progress over time.

- **Habit Categories and Tags**: Users can categorize their habits (e.g., health, productivity, mindfulness) to organize and filter them effectively.

- **Visualize Progress**: The application includes visualizations like progress bars to motivate users to achieve their goals.

- **Main Page**:
  - **Habit List**: A list of all habits with options to filter by category or tag, showing the status of each habit.
  - **Add Habit**: A button that opens a modal or navigates to a form page for adding a new habit.
  - **Edit Habit**: An edit button next to each habit to modify its details.
  - **Delete Habit**: A delete button next to each habit to remove it from the tracker.
  - **Habit Filters**: Dropdowns or checkboxes to filter habits by category, frequency, or tag.
  - **Search Field**: A search bar to quickly find specific habits.

## Technologies Used

- **Backend**: 
  - Node.js
  - Express.js

- **Frontend**: 
  - Vite
  - React.js

- **Database**:
  - MongoDB

- **HTTP Client**:
  - Axios

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daily-habit-tracker.git
   cd daily-habit-tracker/backend
