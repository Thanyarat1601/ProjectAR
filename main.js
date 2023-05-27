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

// Check if there is an error message
var errorMessage = "<?php echo isset($_SESSION['error_message']) ? $_SESSION['error_message'] : ''; ?>";

if (errorMessage !== '') {
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="password"]');

    usernameInput.parentNode.parentNode.classList.add("invalid");
    passwordInput.parentNode.parentNode.classList.add("invalid");
}
