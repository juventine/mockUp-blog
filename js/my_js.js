$(document).ready(function() {
	var sidebar = '.sidebar';
	var sectionAbout = '.about';
	var sectionSome = '.some';
	var navbarLinks = '.navbar > a';
	var nav = '.nav';
	var linkAbout = 'link-about';
	var linkSome = 'link-some';
	var linkTabs = '.link-tabs';
	var linkNav = '.link-nav';
	var display = 'display';
	var hide = 'hide';
	var tags = 'tags';
	var sidebarContainer = $(sidebar).children();

	$(navbarLinks).on('click', function() {
		var linkClass = $(this).attr('class');
		$(sidebar).show();
		sidebarContainer.hide();
		sidebarContainer.filter('.' + linkClass).show();
	});
});