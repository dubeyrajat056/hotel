// Scroll effect for navbar
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Open and close pop-up form
function openForm() {
    document.getElementById('popupForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
}
