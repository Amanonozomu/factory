
const submitButton = document.querySelector('#impressiom_mask');
submitButton.addEventListener('click', () => {
    document.getElementById("impressiom_mask").style.color='#00ff00';
});
window.addEventListener('pageshow', function(event) {
    document.getElementById("impressiom_mask").style.color='#ff0000';
});