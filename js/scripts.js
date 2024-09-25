// Function to fetch and display articles
async function fetchAndDisplayArticles(url, containerSelector) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const articles = data.articles;
        const container = document.querySelector(containerSelector);
        container.innerHTML = '';

        articles.forEach(article => {
            // Check if article data is missing
            if (!article.title || !article.description || !article.urlToImage || !article.url) {
                return; // Skip this article
            }

            const articleBox = `
                <div class="feature">
                    <img src="${article.urlToImage}" alt="Article Image">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `;
            container.innerHTML += articleBox;
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

// Call the function for homepage and blog page
fetchAndDisplayArticles('https://newsapi.org/v2/everything?q=plants&apiKey=2f519e1e6570421caa819e2f4371793d', '.features-container');
