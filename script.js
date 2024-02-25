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