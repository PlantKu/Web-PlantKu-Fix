document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '2f519e1e6570421caa819e2f4371793d'; // Ganti dengan API key News API Anda
    const url = `https://newsapi.org/v2/everything?q=plants&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles.slice(0, 3); // Ambil 3 artikel
            const newsContainer = document.getElementById('news-articles');

            articles.forEach(article => {
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

                newsContainer.appendChild(feature);
            });
        })
        .catch(error => {
            console.error('Error fetching the news:', error);
        });
});
