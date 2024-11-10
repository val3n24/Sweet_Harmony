document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Redirige a la página de resultados con el término de búsqueda como parámetro
        window.location.href = `/resultados?search=${encodeURIComponent(query)}`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        // Lógica para mostrar los productos basados en searchQuery
        console.log(`Mostrando resultados para: ${searchQuery}`);
        // Aquí puedes hacer una solicitud AJAX para obtener los productos y mostrarlos
    }
});
