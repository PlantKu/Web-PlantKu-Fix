document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header-placeholder', 'templates/header.html');
    loadHTML('footer-placeholder', 'templates/footer.html');

    function loadHTML(placeholderId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(placeholderId).innerHTML = data;
                console.log(`Loaded content from ${url} into ${placeholderId}`);
            })
            .catch(error => console.error('Error loading HTML:', error));
    }
});
