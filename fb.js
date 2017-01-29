function add_desc() {
    if(document.getElementById("fb-photo-info") !== null) {
        document.getElementById("fb-photo-info").remove();
    }
    photo = document.querySelector('.spotlight');
    description = document.querySelector('._xlr');
    container = document.createElement("div");
    container.id = 'fb-photo-info';
    container.style.color = '#365899';
    container.textContent = photo.getAttribute('alt');
    description.insertBefore(container, description.firstChild);
}

window.setInterval(function() {
    add_desc();
}, 1000);
