const inputs = document.querySelectorAll(".input");


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
    if (parent.classList.contains("error")) {
        parent.classList.remove("error");
    }
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
$(document).ready(function() {
    $('form').on('submit', function() {
      var isValid = true;
      $('input').each(function() {
        if ($(this).val() === '') {
          $(this).addClass('error');
          isValid = false;
        } else {
          $(this).removeClass('error');
        }
      });
      if (!isValid) {
        $('.input-div').addClass('error');
      } else {
        $('.input-div').removeClass('error');
      }
      return isValid;
    });
  });
  