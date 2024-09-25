fetch('proxy.php')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data fetched:', data); // Tambahkan ini untuk debugging
        if (data.articles && Array.isArray(data.articles)) {
            const articles = data.articles.slice(0, 10);
            const blogContainer = document.getElementById('blog-articles');

            articles.forEach(article => {
                if (article.urlToImage && article.title && article.description && article.url) {
                    const feature = document.createElement('div');
                    feature.classList.add('feature');

                    feature.onclick = () => {
                        window.open(article.url, '_blank');
                    };

                    const imgElement = document.createElement('img');
                    imgElement.src = article.urlToImage || 'default-image.jpg';
                    imgElement.alt = 'Article Image';

                    const titleElement = document.createElement('h2');
                    titleElement.textContent = article.title;

                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = article.description;

                    feature.appendChild(imgElement);
                    feature.appendChild(titleElement);
                    feature.appendChild(descriptionElement);

                    blogContainer.appendChild(feature);
                }
            });
        } else {
            console.error("No articles found in the response.");
            const blogContainer = document.getElementById('blog-articles');
            blogContainer.innerHTML = "<p>No articles available at the moment. Please try again later.</p>";
        }
    })
    .catch(error => {
    console.error('Error fetching the news:', error);
    const blogContainer = document.getElementById('blog-articles');

    if (error.message.includes('426')) {
        blogContainer.innerHTML = "<p>Error 426: Please upgrade your request to meet API requirements (e.g. User-Agent). Please try again later.</p>";
    } else {
        blogContainer.innerHTML = "<p>There was an error fetching the news. Please try again later.</p>";
    }
});
