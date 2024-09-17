// butona tıklandıgı anda navigation alanına toggle isminde class ekler,tekrar tıklandıgında kalkar

const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('toggle');
});

// videoları ekrana geldiği anda oynatma
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.targer.play();
            } else {
                entry.target.pause();
            }
        });
    });
    videos.forEach((video) => {
        observer.observer(video);
    })
})
