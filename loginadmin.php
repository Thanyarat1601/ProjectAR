<!DOCTYPE html>
<html>
<head>
	<title>Admin</title>
	<link rel="stylesheet" type="text/css" href="style2.css">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<link rel="apple-touch-icon" sizes="180x180" href="public/assets/img/favicons/plant.svg">
             <link rel="icon" type="image/png" sizes="32x32" href="public/assets/img/favicons/plant.svg">
             <link rel="icon" type="image/png" sizes="16x16" href="public/assets/img/favicons/plant.svg">
             <link rel="shortcut icon" type="image/x-icon" href="public/assets/img/favicons/plant.svg">
             <link rel="manifest" href="public/assets/img/favicons/manifest.json">
             <meta name="msapplication-TileImage" content="public/assets/img/favicons/mstile-150x150.png">
             <meta name="theme-color" content="#ffffff">

</head>
<body>
	<img class="wave" src="img/2.png">
	<div class="container">
		<div class="img">
			<img src="img/Crop_04.svg">
		</div>
		<div class="login-content">
			<form action="login.php" method="POST">
				<img src="img/002.svg">
				<h2 class="title">Welcome</h2>
				<div class="input-div one ">
				<div class="i">
					<i class="fas fa-user"></i>
				</div>
				<div class="div">
					<h5>Username</h5>
					<input type="text" class="input" name="username" required>
				</div>
				</div>
				<div class="input-div pass ">
				<div class="i"> 
					<i class="fas fa-lock"></i>
				</div>
				<div class="div">
					<h5>Password</h5>
					<input type="password" class="input" name="password" required>
				</div>
				</div>

				  	  
				<a href="#">กรุณากรอกข้อมูลให้ถูกต้อง</a>
				<input type="submit" class="btn" value="Login">
			</form>
		</div>
	</div>
	<script type="text/javascript" src="main.js"></script>
</body>
</html>