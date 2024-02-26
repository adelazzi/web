function addShadow() {
  document.querySelector('.boot').style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}

function removeShadow() {
  document.querySelector('.boot').style.boxShadow = 'none';
}

function showContainer1() {
  document.getElementById('container1').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideContainer1() {
  document.getElementById('container1').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = 'auto';
}
function changePhoto(event) {
  const fileInput = event.target;
  const displayPhoto = document.getElementById('displayPhoto');

  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          displayPhoto.src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
}
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the paragraph element
  var paragraph = document.getElementById("typing-text");

  // Get the text content of the paragraph
  var text = paragraph.textContent.trim();

  // Set the text content to an empty string
  paragraph.textContent = "";

  // Iterate through each character of the text
  for (var i = 0; i < text.length; i++) {
      // Use setTimeout to create a delay for each character
      setTimeout(function (index) {
          // Append the current character to the paragraph
          paragraph.textContent += text[index];
      }, i * 50, i);
  }
});function addPhoto() {
  // Assuming you have an input field for selecting a photo
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', handlePhotoChange);
  input.click();
}

function handlePhotoChange(event) {
  const photoContainer = document.getElementById('photoContainer');
  const existingPhoto = photoContainer.querySelector('img');
  const editIcon = document.getElementById('editIcon');



  const file = event.target.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.borderRadius = '10px';

    photoContainer.innerHTML = ''; // Clear any existing content
    photoContainer.appendChild(img);

    // Display the edit icon
    editIcon.style.display = 'block';
  }
}

function handleEditClick(titleId, typeId, spaceId, priceId) {
  // Implement the logic for handling the edit click
  const titleContent = document.getElementById(titleId);
  const typeContent = document.getElementById(typeId);
  const spaceContent = document.getElementById(spaceId);
  const priceContent = document.getElementById(priceId);

  // Replace the static values with your variables or dynamic content
  const newTitle = prompt('Enter new title:', titleContent.innerText);
  const newType = prompt('Enter new type:', typeContent.innerText);
  const newSpace = prompt('Enter new space:', spaceContent.innerText);
  const newPrice = prompt('Enter new price:', priceContent.innerText);

  // Update the content with the new values
  titleContent.innerText = newTitle;
  typeContent.innerText = newType;
  spaceContent.innerText = newSpace;
  priceContent.innerText = newPrice;

  

}
