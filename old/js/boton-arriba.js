<script>
window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('back-to-top');
    if (window.pageYOffset > 100) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
