window.onload = function() {
  var fileInput = document.querySelector('.file-input');
  var preview = document.querySelector('.preview');
  var modalFileInput = document.querySelector('.modal-content .file-input');
  var modalPreview = document.querySelector('.modal-content .preview');

  fileInput.addEventListener('change', updateImageDisplay);
  modalFileInput.addEventListener('change', updateModalDisplay);

  function updateImageDisplay() {
    var button = document.querySelector('.resume-container__label');

    button.classList.add('active');

    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    var curFiles = fileInput.files;

    if(curFiles[0].size > 5000000) {
      var para = document.createElement('p');

      para.textContent = 'Превышен лимит МБ';
      preview.appendChild(para);
    } else {
      var para = document.createElement('p');

      para.textContent = 'Загружено: ' + curFiles[0].name;
      preview.appendChild(para);
    }
  }

  function updateModalDisplay() {
    var button = document.querySelector('.resume-container__label');

    button.classList.add('active');

    while(modalPreview.firstChild) {
      modalPreview.removeChild(modalPreview.firstChild);
    }

    var curModalFiles = modalFileInput.files;

    if(curModalFiles[0].size > 5000000) {
      var para = document.createElement('p');

      para.textContent = 'Превышен лимит МБ';
      modalPreview.appendChild(para);
    } else {
      var para = document.createElement('p');

      para.textContent = 'Загружено: ' + curModalFiles[0].name;
      modalPreview.appendChild(para);
    }
  }
};
