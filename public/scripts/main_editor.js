$(document).ready(function() {

    var quill = new Quill('#main_editor', {
    modules: {
        toolbar: true
      },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  });
  
})