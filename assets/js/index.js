$(document).ready(function () {
	$("#headerSidenavButton").click(function () {
		$("#headerBackdrop").addClass("active");
	});

	$("#headerBackdrop").click(function () {
		$("#headerBackdrop").removeClass("active");
	});
});
