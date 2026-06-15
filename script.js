// Function triggered on mouseover or element focus
function upDate(previewPic) {
  console.log("Display event triggered (Mouse or Keyboard)!");
  console.log("Alt Text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  const imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// Function triggered on mouseleave or element blur
function undo() {
  console.log("Restore event triggered (Mouse or Keyboard)!");

  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Function called onload to dynamically prepare images for keyboard interaction
function initializeGallery() {
  console.log("Onload event triggered: Initializing gallery properties.");

  // Grab all images with the class 'preview'
  const images = document.querySelectorAll('.preview');

  // Loop through each image to assign accessibility attributes and listeners
  for (let i = 0; i < images.length; i++) {
    console.log(`Setting up tabindex and focus events for image index: ${i}`);
    
    // 1. Add tabindex to make static <img> elements focusable via keyboard Tab key
    images[i].setAttribute('tabindex', '0');

    // 2. Add the focus event listener using the same pattern as mouseover
    images[i].onfocus = function() {
      upDate(this);
    };

    // 3. Add the blur event listener using the same pattern as mouseleave
    images[i].onblur = function() {
      undo();
    };
  }
}