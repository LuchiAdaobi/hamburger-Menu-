Project Name: Simple Navigation Toggle

Description:
This project demonstrates a simple navigation toggle functionality using JavaScript and CSS. When the button is clicked, the navigation menu becomes visible, and clicking the close button hides the navigation menu.

Usage:
To use this project, follow these steps:

Include the HTML structure in your webpage with the following elements:

A button element with the id "btn" that represents the toggle button.
A navigation element with the id "nav" that represents the navigation menu.
A button element with the id "close-btn" that represents the close button.
Add the necessary CSS styles to your CSS file to define the appearance of the navigation menu when it is active.

Add the provided JavaScript code to your JavaScript file or script tag.

Open your webpage in a web browser.

Click the toggle button to show the navigation menu.

Click the close button to hide the navigation menu.

Example Code:

javascript
Copy code
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');

btn.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});
Demo:
A live demo of this project can be found at [link-to-demo].