// Script for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Ubah angka 2000 dengan interval waktu antar gambar (dalam milidetik)
}

// Script for video background
window.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById('mp4');
    var lastTime = 0;

    // Simpan posisi waktu terakhir saat halaman dimuat kembali
    window.addEventListener('beforeunload', function() {
        lastTime = video.currentTime;
    });

    // Memutar video saat halaman dimuat kembali
    window.addEventListener('pageshow', function(event) {
        video.currentTime = lastTime;
        video.play();
    });

    // Menghentikan video saat halaman ditinggalkan
    window.addEventListener('pagehide', function(event) {
        video.pause();
    });
});