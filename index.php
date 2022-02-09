<!doctype html>

<html lang="en">

<head>
	<title>Telephone Poles & More</title>

	<!-- Page meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/png" href="Assets/Images/favicon.png">

	<!-- Description meta -->
	<meta name="author" content="Aarush Kumbhakern">
	<meta name="description" content="Photographs by Aarush Kumbhakern">

	<!-- OG meta -->
	<meta property="og:site_name" content="Telephone Poles & More">
	<meta property="og:url" content="url">

	<!-- Twitter meta -->
	<meta name="twitter:card" content="summary">

	<!-- OG article meta tags -->
	<meta property="og:type" content="website">
	<meta property="og:title" content="Telephone Poles & More">
	<meta property="og:article:author" content="Aarush Kumbhakern">
	<meta property="og:description" content="Photographs by Aarush Kumbhakern">
	<meta property="og:image" content="thumbnail_url">

	<!-- Twitter article meta tags -->
	<meta name="twitter:card" content="summary_large_image">

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"> 

	<!-- Stylesheets -->
	<link rel="stylesheet" type="text/css" href="CSS/styles.css">
</head>

<body>
	<!-- Page container -->
	<div id="page">
		<!-- Header -->
		<div id="header">
			<div id="heading">Telephone Poles <br> & More.</div>
			<div id="subheading">Photographs by Aarush Kumbhakern.</div>
		</div>

		<!-- Gallery grid -->
		<div id="gallery"></div>

		<!-- Footer -->
		<div id="footer">
			<p>Unlicensed 'cause I couldn't be bothered. Use them as you please, but maybe credit me.</p>
			<p>Telephone Poles & More, by Aarush Kumbhakern | <a href="https://github.com/Positron11/telephone-poles-and-more">Github</a></p>
		</div>
	</div>

	<!-- Backend variables -->
	<script type="text/javascript">var image_count = <?php echo iterator_count(new FilesystemIterator('Gallery/', FilesystemIterator::SKIP_DOTS)); ?>;</script>
	<script type="text/javascript">var image_list = <?php echo json_encode(array_slice(scandir('Gallery/'), 2)); ?>;</script>
	
	<!-- Scripts -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="JS/scripts.js"></script>
</body>

</html>