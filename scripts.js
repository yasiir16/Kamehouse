function uploadFiles() {
    const fileInput = document.getElementById('file-input');
    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');
    const gallery = document.getElementById('photo-gallery');

    for (const file of fileInput.files) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const container = document.createElement('div');
            container.classList.add('media-container');

            const title = document.createElement('h3');
            title.textContent = titleInput.value;

            const description = document.createElement('p');
            description.textContent = descriptionInput.value;

            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = event.target.result;
                container.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = event.target.result;
                video.controls = true;
                container.appendChild(video);
            }

            container.appendChild(title);
            container.appendChild(description);
            gallery.appendChild(container);
        };
        reader.readAsDataURL(file);
    }

    // Clear the input fields after upload
    titleInput.value = '';
    descriptionInput.value = '';
}
