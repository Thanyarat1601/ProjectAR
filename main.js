const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

// Check if there is an error message
var errorMessage = "<?php echo isset($_SESSION['error_message']) ? $_SESSION['error_message'] : ''; ?>";

if (errorMessage !== '') {
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var loginForm = document.querySelector('form[action="login.php"]');

    loginForm.addEventListener('submit', function(event) {
        if (usernameInput.value === '' || passwordInput.value === '') {
            event.preventDefault(); // ไม่ส่งฟอร์มเมื่อข้อมูลไม่ครบ
            usernameInput.parentNode.parentNode.classList.add('invalid');
            passwordInput.parentNode.parentNode.classList.add('invalid');
        }
    });
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
