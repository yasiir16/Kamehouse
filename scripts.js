function uploadFiles() {
  const fileInput = document.getElementById('file-input');
  const titleInput = document.getElementById('title-input');
  const descriptionInput = document.getElementById('description-input');
  const gallery = document.getElementById('photo-gallery');

  for (const file of fileInput.files) {
    if (file.size > 1024 * 1024 * 5) {
      alert("File size exceeded! Please upload a file less than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
      const container = createMediaContainer(file.type);
      container.appendChild(createElementWithText('h3', titleInput.value));
      container.appendChild(createElementWithText('p', descriptionInput.value));
      if (file.type.startsWith('image/')) {
        container.appendChild(createImageElement(event.target.result));
      } else if (file.type.startsWith('video/')) {
        container.appendChild(createVideoElement(event.target.result));
      }
      gallery.appendChild(container);
    };

    reader.onerror = function(error) {
      console.error("Error reading file:", error);
      alert("An error occurred while reading the file. Please try again.");
    };

    reader.readAsDataURL(file);
  }

  // Clear the input fields after upload
  titleInput.value = '';
  descriptionInput.value = '';
}

function createMediaContainer(fileType) {
  const container = document.createElement('div');
  container.classList.add('media-container');
  if (fileType.startsWith('image/')) {
    container.classList.add('image-container');
  } else if (fileType.startsWith('video/')) {
    container.classList.add('video-container');
  }
  return container;
}

function createElementWithText(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}

function createVideoElement(src) {
  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  return video;
}
