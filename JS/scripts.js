// Main
$(function () {
	// load all images
	for (let i = 1; i <= image_count; i++) {
		var image_container = document.createElement("div");
		$(image_container).addClass("image-container");
		$(image_container).append("<img src='Gallery/" + image_list[i - 1] + "' class='photograph'>");
		$(image_container).append("<div class='image-caption'>" + image_list[i - 1].replace(".jpg", "") + "</div>");
		$("#gallery").append(image_container);
	}

	// calculate row spans on load
	$("img").on("load", function () { resizeImage($(this).parent()); });

	// calculate row spans on resize
	$(window).on("resize", function () { $("img").each(function () { resizeImage($(this).parent()); }); });
});


// Calculate row spans
function resizeImage(container) {
	var content_height = 0;
	var extra_space = (container.outerHeight(true) - container.innerHeight()) * 2;
	container.children().each(function () { content_height += $(this).outerHeight(true) });
	container.css("grid-row", "span " + Math.ceil((content_height + extra_space) / 10));
}
