# Blogging-Hub

Welcome to **Blogging-Hub**, a minimalistic and elegant blogging platform built with React.js. This repository contains the source code for a simple blog where you can create, read, update, and delete posts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [usingJsonServer](#Using-JSON-Server)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Introduction

Blogging-Hub is a straightforward blogging application built with React.js. It allows users to create, view, edit, and delete blog posts. The goal of this project is to demonstrate the basic functionalities of a CRUD (Create, Read, Update, Delete) application using modern web development tools.

## Features

- **Create Posts**: Write and publish new blog posts.
- **Read Posts**: View all published posts in a clean and organized manner.
- **Update Posts**: Edit existing posts to correct or update content.
- **Delete Posts**: Remove posts that are no longer needed.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Modern UI**: Clean and minimalistic user interface.

## Live Demo

Check out the live demo of the Blogging-Hub [here](https://drive.google.com/file/d/1ZcPxDboFcFJAFdxjL_9YeedfEfkSIHZj/view?usp=sharing).

## Screenshots
- Home page preview:
  ![Homepage](#)
- That's what you will see when you click on any blog:
  ![DisplayBlog](#)
- When you want to create a new blog you will see something like this:
  ![CreateBlog](#)

## Using-JSON-Server
- Open a new terminal and run command:
   ```bash
   npx json-server --watch data/db.json --port 8000
It will start the json server on port 8000.
Make sure to have a different from that where site is running as two can't run on same port.
You can use any port, I have personally used port 8000 for the data fetching and 3000 for the running site on local system.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AyushiGupta160604/Blogging-Hub.git
2. **Navigate to the project directory**:
   ```bash
   cd blog
3. **Install dependencies**:
   ```bash
   npm install
4. **Start the development server**:
   ```bash
   npm start

The application will be available at `http://localhost:3000`.

## Technologies Used
- Frontend: React.js, HTML, CSS, JavaScript
- State Management: React Hooks (useState, useEffect)
- Routing: React Router
- Styling: CSS Modules, Styled-components and Plain CSS
- Build Tool: Create React App

## Contact
#### If you have any questions or suggestions, feel free to contact me:
- Email: 22cs3022@rgipt.ac.in
- LinkedIn: https://www.linkedin.com/in/ayushigupta1604/
- Twitter: https://x.com/Ayushi_G16
