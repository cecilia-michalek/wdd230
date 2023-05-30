
//Get all images with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
//Optional parameters being set for the IntersectionalObserver
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
//First check to see if Intersectional Observer is supported
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
//Loop through each img and check status and load if necessary    
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
//just load all images if not supported
