document.getElementById('bar-icon').addEventListener('click', function() {
    document.getElementById('nav-ul').classList.toggle('show');
});

document.getElementById('cancel-icon').addEventListener('click', function() {
    document.getElementById('nav-ul').classList.remove('show');
});

