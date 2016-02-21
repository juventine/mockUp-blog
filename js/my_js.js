$(document).ready(function() {
	var sidebar = '.sidebar';
	var navbarLinks = '.navbar > a';
	var nav = '.nav';
	var linkNav = '.link-nav';
	var display = 'display';
	var activeTab = 'active-tab';
	var sidebarTitle = '.title';
	var foldIcon = '.fold-icon';

	var sidebarContainer = $(sidebar).children();

	$(navbarLinks).on('click', function() {
		$(nav).hide();
		var linkClass = $(this).attr('class');
		$(linkClass).addClass(activeTab);
		$(sidebar).show();
		sidebarContainer.hide();
		sidebarContainer.filter('.' + linkClass).show();
	});

	$(linkNav).on('click', function() {
		hideSidebar();
		$(nav).css('display', 'flex');
	});

	$(sidebarTitle).on('click', hideSidebar);
	$(foldIcon).on('click', hideSidebar);

	function hideSidebar() {
		$(sidebar).hide();
	}

});