# 🎓 NYDev Official Website

## 🚀 Overview

Welcome to the **NYDev Company Website repository**! This project serves as the online presence for **NYDev**, a startup dedicated to **building innovative digital solutions for businesses** seeking to enhance their operational efficiency and online engagement.

The application platform is built with **Next.js** and styled using **Tailwind CSS**. It is designed to showcase our expertise and detail the structured, modular courses we offer in modern development technologies like **React, Next.js, Node.js, Express, and Django**.

## ✨ Features

  - **Detailed Course Pages:** Dynamic routing to display rich course data including a full curriculum, instructor profiles, and pricing.
  - **Interactive Curriculum:** An accordion component that breaks down each course into weekly modules with detailed lesson titles and descriptions.
  - **Responsive Navigation:** A modern, mobile-friendly navbar with clear calls-to-action (CTAs).
  - **Theming:** Seamless integration of light and dark modes using the `next-themes` setup.
  - **Optimized Assets:** Utilizes the Next.js `Image` component for performance-optimized loading of course images and instructor photos.

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js** | React framework for production, handling routing and server-side features. |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for rapid UI development and responsiveness. |
| **Icons** | **Lucide Icons** | Simple, consistent, and customizable icon set. |
| **State/Utils**| **React Hooks** | Manages component state and side effects. |
| **Data Flow** | **`useParams` (Next/router)** | Used to fetch the correct course details based on the URL ID. |

## 📦 Installation & Setup

To get the NYDev platform running locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/NY-Development/NYDev
    cd NYDev
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Define Environment Variables** (if any backend or API calls are used):
    Create a `.env.local` file in the root directory and add any necessary variables (e.g., API keys, database connection strings).

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

## 📁 Project Structure

Key files and directories involved in the current components:

```
nydev-platform/
├── app/
│   ├── [id]/             # Course Detail Page route
│   │   └── page.js       # -> The 'CourseDetail' component
│   └── layout.js
├── components/
│   ├── Navbar.js         # Navigation component
│   ├── ThemeToggle.js    # Dark/Light mode switcher
│   └── ...
└── data/
    └── courseData.js     # Structured course information (including modules, instructors)
```

## 🧩 Key Components

### `Navbar.js`

The site-wide navigation bar. It is fully responsive, switches between light/dark mode, and highlights new or important routes (like the "Courses" badge) using Tailwind CSS for conditional styling.

### `CourseDetail.js`

The core component for viewing curriculum. It fetches course data based on the dynamic URL segment (`id`) and renders:

1.  Hero details (title, description, price).
2.  Instructor profiles.
3.  A nested **Curriculum Accordion** that displays weekly modules and individual lessons.

### `data/courseData.js`

This file serves as the single source of truth for all course information. Its structure supports rich content, including an object of weekly modules, allowing the **CourseDetail** page to render granular lesson plans.

## 🤝 Contribution

We welcome contributions\! If you have suggestions for new features, bug fixes, or course content improvements:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

-----