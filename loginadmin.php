<!DOCTYPE html>
<html>
<head>
	<title>Admin</title>
	<link rel="stylesheet" type="text/css" href="style2.css">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	

</head>
<body>
	<img class="wave" src="img/2.png">
	<div class="container">
		<div class="img">
			<img src="img/Crop_04.svg">
		</div>
		<div class="login-content">
			<form action="login.php" method="POST" >
				<img src="img/002.svg">
				<h2 class="title">Welcome</h2>
				<div class="input-div one ">
					<div class="i">
					  <i class="fas fa-user"></i>
					</div>
					<div class="div">
					  <h5>Username</h5>
					  <input type="text" class="form-control is-invalid" name="username"  id="validationServer03" aria-describedby="validationServer03Feedback" required>
					  <div id="validationServer03Feedback" class="invalid-feedback">
					  Please provide a valid city.
    				</div>
					</div>
				  </div>
				  <div class="input-div pass">
					<div class="i"> 
					  <i class="fas fa-lock"></i>
					</div>
					<div class="div">
					  <h5>Password</h5>
					  <input type="password" class="input" name="password" required>
					</div>
				  </div>
				  	  
				<a href="#">Forgot Password?</a>
				<input type="submit" class="btn" value="Login">
			</form>
		</div>
	</div>
	<script type="text/javascript" src="main.js"></script>
	<script>
	var errorMessage = "<?php echo isset($_SESSION['error_message']) ? $_SESSION['error_message'] : ''; ?>";

	if (errorMessage !== '') {
		var usernameInput = document.querySelector('input[name="username"]');
		var passwordInput = document.querySelector('input[name="password"]');
		var loginForm = document.querySelector('form[action="login.php"]');

		if (usernameInput.classList.contains('invalid')) {
			usernameInput.parentNode.classList.add('invalid');
		}

		if (passwordInput.classList.contains('invalid')) {
			passwordInput.parentNode.classList.add('invalid');
		}

		loginForm.addEventListener('submit', function(event) {
			if (usernameInput.value === '' || passwordInput.value === '') {
				event.preventDefault();
				usernameInput.parentNode.classList.add('invalid');
				passwordInput.parentNode.classList.add('invalid');
			}
		});
	}
	<?php echo !isset($_SESSION['error_class']) && $_SESSION['error_class'] === 'invalid' ? 'invalid' : ''; ?>
</script>

</body>

</html>
