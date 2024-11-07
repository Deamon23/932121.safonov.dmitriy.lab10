const curtain = document.getElementById('curtain');
const lamp = document.getElementById('lamp');
const light = document.getElementById('light');

curtain.addEventListener('click', function() {
    this.classList.remove('lift');
    this.classList.toggle('open');
});

curtain.addEventListener('mouseenter', function() {
    this.classList.add('lift');
});

curtain.addEventListener('mouseleave', function() {
    this.classList.remove('lift');
});

lamp.addEventListener('click', function() {
    light.classList.toggle('on');
});