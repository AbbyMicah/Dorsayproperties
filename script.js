// Sample data for the news articles
const newsArticles = [
    {
        title: "Breaking News: Major Earthquake Hits City",
        content: "A powerful earthquake of magnitude 7.8 hit the city earlier today, causing widespread damage and panic. Rescue teams are being deployed to assist affected areas."
    },
    {
        title: "Tech Giants Launch New Smartphone",
        content: "The latest smartphone from TechCorp features an AI-powered camera and a stunning OLED display. It promises to be the most advanced phone of 2025."
    },
    {
        title: "Local Team Wins Championship",
        content: "The local basketball team has secured its first-ever championship win after a thrilling final match. Fans are celebrating in the streets as the team returns home with the trophy."
    }
];

// Function to generate news articles dynamically
function loadNews() {
    const newsContainer = document.getElementById('news-container');

    newsArticles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        // Title
        const title = document.createElement('h2');
        title.classList.add('news-title');
        title.textContent = article.title;
        newsItem.appendChild(title);

        // Content
        const content = document.createElement('p');
        content.classList.add('news-content');
        content.textContent = article.content;
        newsItem.appendChild(content);

        // Append the news item to the container
        newsContainer.appendChild(newsItem);
    });
}

// Load the news articles when the page is ready
document.addEventListener('DOMContentLoaded', loadNews);

const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    // If the clicked button is already active, do nothing
    if (button.classList.contains("active")) return;

    // Remove active class from all
    menuButtons.forEach(btn => btn.classList.remove("active"));

    // Add active to the one that was clicked
    button.classList.add("active");
  });
});
