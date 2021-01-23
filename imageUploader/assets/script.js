
//  console.log(   document.getElementById('imgname').setAttribute('class','abc'+j));
// for(j=0;j<img[j];j++){
document.getElementById(img[j]['id']).addEventListener('click', function (e) {
    let t = document.getElementById(img[j]['id']).getAttribute('src');

    // document.getElementById("myModal").style.display = "block";
    openModal(t)
});
// }
function openModal(m) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("m0").setAttribute('src', m);
    console.log(m)
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}