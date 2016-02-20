$(document).ready(function() {
	var sidebar = '.sidebar';
	var navbarLinks = '.navbar > a';
	var nav = '.nav';
	var linkNav = '.link-nav';
	var display = 'display';
	var sidebarContainer = $(sidebar).children();

	$(navbarLinks).on('click', function() {
		$(nav).hide();
		var linkClass = $(this).attr('class');
		$(sidebar).show();
		sidebarContainer.hide();
		sidebarContainer.filter('.' + linkClass).show();
	});

	$(linkNav).on('click', function() {
		$(sidebar).hide();
		$(nav).css('display', 'flex');
	});
});