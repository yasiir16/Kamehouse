function uploadFiles() {
    const fileInput = document.getElementById('file-input');
    const gallery = document.getElementById('photo-gallery');

    for (const file of fileInput.files) {
        const reader = new FileReader();
        reader.onload = function(event) {
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = event.target.result;
                gallery.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = event.target.result;
                video.controls = true;
                gallery.appendChild(video);
            }
        };
        reader.readAsDataURL(file);
    }
}
