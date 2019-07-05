$(function () {
	$("#byrger").click(function (e) {
		$(".login-byrger").toggleClass("byrger-menu");
		$(".support-byrger").toggleClass("byrger-menu");
		$(".byrger-filter").toggleClass("byrger-menu");

	});
	$("#open-support__akardeon").click(function (e) {
		$(".target").toggleClass("akardion-support-none");
		$("#target-1 a").toggleClass("support__link__akardion");
	});
	$("#open_filter").click(function (e) {
		$(".point").toggleClass("akardion-support-none");
		$("#target-2 a").toggleClass("support__link__akardion");
	});

});