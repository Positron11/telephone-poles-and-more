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
	$(".photograph").on("load", function () {
		$.when(resizeImage($(this).parent())).then($(this).parent().css("visibility", "visible"));
	});

	// calculate row spans on resize
	$(window).on("resize", function () {
		$(".photograph").each(function () { resizeImage($(this).parent()); });
	});

	// focus image
	$(".image-container").on("click", function () { showFocus(this); })

	// hide focus
	$(window).on("keydown", function (e) { if (e.which === 27) { hideFocus(); } });
	$(document).on("click", function (e) {
		var not_image = !$(e.target).closest('#focus_image').length;
		var not_caption = !$(e.target).closest('#focus_caption').length;
		var not_preview = !$(e.target).closest('.image-container').length;
		if (not_image && not_caption && not_preview) { hideFocus(); }
	});
});


// Calculate row spans
function resizeImage(container) {
	var content_height = 0;
	var extra_space = (container.outerHeight(true) - container.innerHeight()) * 2;
	container.children().each(function () { content_height += $(this).outerHeight(true) });
	container.css("grid-row", "span " + Math.ceil((content_height + extra_space) / 10));
}


// Show focus overlay
function showFocus(container) {
	$("body").css("overflow", "hidden");
	$("body").css("padding-right", String(getScrollBarWidth()) + "px");
	$("#focus_caption").text($(container).children(".image-caption").text());
	$("#focus_image").attr("src", $(container).children(".photograph").attr("src"));
	$("#focus_container").css("margin-right", "0px");
	$("#focus_container").addClass("active");
}


// Hide focus overlay
function hideFocus() {
	$("body").css("overflow", "auto");
	$("body").css("padding-right", "0px");
	$("#focus_container").css("margin-right", String(-getScrollBarWidth()) + "px");
	$("#focus_container").removeClass("active");
	setTimeout(function () {
		$("#focus_caption").text("");
		$("#focus_image").attr("src", "");
	}, 300);
}


// Get scrollbar width
function getScrollBarWidth() {
	var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
		widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
	$outer.remove();
	return 100 - widthWithScroll;
};
