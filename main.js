const inputs = document.querySelectorAll(".input");

// Check if there is an error message
var errorMessage = "<?php echo isset($_SESSION['error_message']) ? $_SESSION['error_message'] : ''; ?>";
var errorClass = "<?php echo isset($_SESSION['error_class']) ? $_SESSION['error_class'] : ''; ?>";

if (errorMessage !== '') {
  var usernameInput = document.querySelector('input[name="username"]');
  var passwordInput = document.querySelector('input[name="password"]');

  usernameInput.classList.add(errorClass);
  passwordInput.classList.add(errorClass);
}

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
	
});
