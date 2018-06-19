var fileInput = document.querySelector('.file-input');
var preview = document.querySelector('.preview');

fileInput.addEventListener('change', updateImageDisplay);

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
