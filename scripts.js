const galleryContainer = document.querySelector('.gallery-container');

// Sample image data (replace with your actual image URLs and data)
const images = [
    { src: 'image1.jpg', title: 'Image 1', description: 'Description for image 1' },
    { src: 'image2.jpg', title: 'Image 2', description: 'Description for image 2' },
    // ... more images
];

// Function to create gallery items
function createGalleryItem(image) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    const title = document.createElement('h3');
    title.textContent = image.title;

    const description = document.createElement('p');
    description.textContent = image.description;

    galleryItem.appendChild(img);
    galleryItem.appendChild(title);
    galleryItem.appendChild(description);

    return galleryItem;
}

// Add images to the gallery
images.forEach(image => {
    const galleryItem = createGalleryItem(image);
    galleryContainer.appendChild(galleryItem);
});
