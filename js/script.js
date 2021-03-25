document.addEventListener('click', function(){
    document.getElementById("impressiom_mask").style.color='#00ff00';
});
window.addEventListener('pageshow', function(event) {
    const maskID = document.getElementById("impressiom_mask");
    if(maskID) {
        document.getElementById("impressiom_mask").style.color='#0000ff';
        console.log(document.getElementById("impressiom_mask").style.color);
        console.log('123');
    }
});