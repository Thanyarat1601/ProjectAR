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