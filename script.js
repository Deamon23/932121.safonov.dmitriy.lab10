const curtain = document.getElementById('curtain');

curtain.addEventListener('click', function() {
    this.classList.toggle('open');
});

curtain.addEventListener('mouseenter', function() {
    this.classList.add('lift');
});

curtain.addEventListener('mouseleave', function() {
    this.classList.remove('lift');
});