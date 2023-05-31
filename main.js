const inputs = document.querySelectorAll(".input");


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
    parent.classList.remove("error");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault(); // ป้องกันการส่งฟอร์ม
      var username = $("input[name='username']").val();
      var password = $("input[name='password']").val();
  
      // ส่งข้อมูลไปยังไฟล์ PHP ด้วย AJAX
      $.ajax({
        type: "POST",
        url: "./login.php", // ชื่อไฟล์ PHP ที่ตรวจสอบการเข้าสู่ระบบ
        data: {username: username, password: password},
        success: function(response){
          // ตรวจสอบผลลัพธ์จากไฟล์ PHP
          if (response.trim() === "success") {
            window.location.href = "./DB/indexDB.html";
          } else {
            $("a[href='#']").text("กรุณากรอก Username และ Password ใหม่อีกรอบ").css("color", "red").css("font-size", "20px");
            
            // รีเฟรชข้อมูลในฟอร์ม
            $("form")[0].reset();
          }
        }
      });
    });
});

  