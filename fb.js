window.old_spotlight = '';

function add_desc(isEvent) {
    if(!document.querySelector('#photos_snowlift').classList.contains('hidden_elem')) {
        photo = document.querySelector('._2-sx .spotlight');
        // Check if image loaded
        if(photo.src.indexOf('.gif') !== -1 || photo.getAttribute('alt') === '' || photo.getAttribute('alt') === null) {
            window.setTimeout(function() {
                add_desc();
            }, 200);
            return;
        }
        description = document.querySelector('._xlr');
        container = document.getElementById("fb-photo-info");
        // If container not exist create
        if(container === null) {
            container = document.createElement("div");
            container.id = 'fb-photo-info';
            container.style.color = '#365899';
            description.insertBefore(container, description.firstChild);
            container = document.getElementById("fb-photo-info");
        }
        // Only when is under an event
        if(isEvent) {
            if(window.old_spotlight === photo.getAttribute('alt')) {
                window.setTimeout(function() {
                        add_desc();
                }, 200);
                return;
            }
        }
        window.old_spotlight = photo.getAttribute('alt');
        container.textContent = photo.getAttribute('alt');
    }
    // Add the event on the arrows
    var arrow = document.querySelectorAll('.snowliftPager');

    Array.from(arrow).forEach(link => {
        link.addEventListener('click', function(event) {
            document.getElementById("fb-photo-info").remove();
            add_desc(true);
        });
    });
}

var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => add_desc());
});

var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subTree: true
  };
observer.observe(document.body, config);

// Support for arrow
document.body.addEventListener('keydown', function (e) {
    e = e || window.event;
    if (e.keyCode == '37' || e.keyCode == '39') {
        document.getElementById("fb-photo-info").remove();
        add_desc(true);
    } 
});
