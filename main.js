const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

// Check if there is an error message
var errorMessage = "<?php echo isset($_SESSION['error_message']) ? $_SESSION['error_message'] : ''; ?>";
var errorClass = "<?php echo isset($_SESSION['error_message']) ? 'invalid' : ''; ?>";

if (errorMessage !== '') {
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="password"]');

    usernameInput.classList.add(errorClass);
    passwordInput.classList.add(errorClass);
    usernameInput.parentNode.parentNode.classList.add("error");
    passwordInput.parentNode.parentNode.classList.add("error");
}

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