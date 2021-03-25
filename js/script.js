
const maskID = document.getElementById("impressiom_mask");
window.addEventListener('pageshow', function(event) {
    if(maskID) {
        document.getElementById("impressiom_mask").style.color='#0000ff';
        console.log(document.getElementById("impressiom_mask").style.color);
    }
});