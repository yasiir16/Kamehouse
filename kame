function uploadFiles() {
    const fileInput = document.getElementById('file-input');
    const gallery = document.getElementById('photo-gallery');

    for (const file of fileInput.files) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
