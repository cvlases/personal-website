// popup.js
document.getElementById('my-computer').addEventListener('click', function() {
    openPopup('html/terminal.html');
});

document.getElementById('about-icon').addEventListener('click', function() {
    openPopup('html/about.html');
});

document.getElementById('portfolio').addEventListener('click', function() {
    openPopup('html/portfolio.html');
});

document.getElementById('art').addEventListener('click', function() {
    openPopup('html/art.html');
});

document.getElementById('earth').addEventListener('click', function() {
    openPopup('html/earth.html');
});

document.getElementById('links').addEventListener('click', function() {
    openPopup('html/links.html');
});

document.getElementById('dino-game').addEventListener('click', function() {
    openPopup('html/dino.html');
});

document.getElementById('close-all').addEventListener('click', function() {
    closeAllPopups();
});

function openPopup(url) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '0';
    popup.style.backgroundColor = '#c0c0c0';
    popup.style.border = '2px solid black';
    popup.style.boxShadow = '5px 5px 0 rgba(0,0,0,0.5)';
    popup.style.zIndex = '1000';
    popup.innerHTML = `
        <div id="popup-header" style="padding: 10px; cursor: move; position: relative;">
            <span onclick="closePopup(this)" style="position: absolute; top: 5px; right: 10px; cursor: pointer; font-size: 24px; font-weight: bold;">&times;</span>
            <iframe src="${url}" width="600" height="400" style="border: none;"></iframe>
        </div>`;
    document.body.appendChild(popup);
    history.pushState({ state: state }, "", `#${state}`);
}

function closePopup(element) {
    document.body.removeChild(element.parentElement.parentElement);
    history.pushState({}, "", window.location.pathname);
}

function closeAllPopups() {
    const popups = document.querySelectorAll('body > div[style*="position: fixed"]');
    popups.forEach(popup => document.body.removeChild(popup));
}

window.addEventListener('popstate', function(event) {
    closeAllPopups();
    if (event.state && event.state.state) {
        switch (event.state.state) {
            case 'home':
                openPopup('html/home.html', 'home');
                break;
            case 'portfolio':
                openPopup('html/links.html', 'portfolio');
                break;
        }
    }
});