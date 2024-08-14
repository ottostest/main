document.addEventListener('DOMContentLoaded', function() {
    //fetch and display the latest blog
    fetch('fetch_latest_blog.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('latest-blog').innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.content}</p>
            `;
        });

    //event listener for the legacy blogs button
    document.getElementById('legacy-button').addEventListener('click', function() {
        const legacySection = document.getElementById('legacy-blogs');
        if (legacySection.classList.contains('hidden')) {
            fetch('fetch_legacy_blogs.php')
                .then(response => response.json())
                .then(data => {
                    const blogGrid = document.getElementById('blog-grid');
                    blogGrid.innerHTML = '';
                    data.forEach(blog => {
                        blogGrid.innerHTML += `
                            <div class="blog-tile">
                                <h3>${blog.title}</h3>
                                <p>${blog.excerpt}</p>
                            </div>
                        `;
                    });
                    legacySection.classList.remove('hidden');
                });
        } else {
            legacySection.classList.add('hidden');
        }
    });
});
