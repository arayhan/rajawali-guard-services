$(document).ready(function () {
	$("#headerSidenavButton").click(function () {
		$("#headerBackdrop, #headerSidenav").addClass("active");
	});

	$("#headerBackdrop").click(function () {
		$("#headerBackdrop, #headerSidenav").removeClass("active");
	});
});
