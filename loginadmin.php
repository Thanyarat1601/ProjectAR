<!DOCTYPE html>
<html>
<head>
	<title>Admin</title>
	<link rel="stylesheet" type="text/css" href="style2.css">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		.invalid .input,
		.invalid input[type="submit"] {
			border-color: red;
		}
	</style>
</head>
<body>
	<img class="wave" src="img/wave.png">
	<div class="container">
		<div class="img">
			<img src="img/bg.svg">
		</div>
		<div class="login-content">
			<form action="login.php" method="POST">
				<img src="img/avatar.svg">
				<h2 class="title">Welcome</h2>
				<div class="input-div one <?php echo isset($_SESSION['error_message']) ? 'invalid' : ''; ?>">
					<div class="i">
					  <i class="fas fa-user"></i>
					</div>
					<div class="div">
					  <h5>Username</h5>
					  <input type="text" class="input <?php echo isset($_SESSION['error_message']) ? 'invalid' : ''; ?>" name="username" required>
					</div>
				  </div>
				  <div class="input-div pass <?php echo isset($_SESSION['error_message']) ? 'invalid' : ''; ?>">
					<div class="i"> 
					  <i class="fas fa-lock"></i>
					</div>
					<div class="div">
					  <h5>Password</h5>
					  <input type="password" class="input <?php echo isset($_SESSION['error_message']) ? 'invalid' : ''; ?>" name="password" required>
					</div>
				  </div>
						  
				<a href="#">Forgot Password?</a>
				<input type="submit" class="btn" value="Login">
			</form>
			<?php
				if (isset($_SESSION['error_message'])) {
					echo '<div class="error-message">' . $_SESSION['error_message'] . '</div>';
					unset($_SESSION['error_message']);
				}
			?>
		</div>
	</div>
	<script type="text/javascript" src="main.js"></script>
</body>
</html>