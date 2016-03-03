$(document).ready(function() {
	var sidebar = '.sidebar';
	var navbarLinks = '.navbar > a';
	var nav = '.nav';
	var linkNav = '.link-nav';
	var display = 'display';
	var activeTab = 'active-tab';
	var sidebarTitle = '.title';
	var foldIcon = '.fold-icon';
	var tags = '.sidebar .tags';
	var navTabs = '.nav a';

	var sidebarContainer = $(sidebar).children();
	var navbar = $('.navbar');

	$(navbarLinks).on('click', function() {
		var linkClass = $(this).attr('class');
		/* check is user click on the active tab or no.
			 if click on active tab -- ignor action
		*/
		if ((linkClass.indexOf(activeTab) == -1) && (('.' + linkClass) != linkNav)) {
			if (($(window).width() <= '767')) {
				$(nav).hide();
			}
			$(sidebar).show();
			sidebarContainer.hide();
			sidebarContainer.filter('.' + linkClass).show();
			setClassActiveTab(this);
		}

		if ((linkClass.indexOf(activeTab) == -1) && ('.' + linkClass) == linkNav ) {
			hideSidebar();
			$(nav).css('display', 'flex');
			setClassActiveTab(this);
		}

		if (($(window).width() >= '768') && ($(window).width() < '1024')) {
			$(tags).show();
		}
	});

	// folding sidebar-area
	$(sidebarTitle).click( function(){
		if (($(window).width() <= '767')) {
			hideSidebar();
		}
		if (($(window).width() >= '768') && ($(window).width() < '1024')) {
			sidebarContainer.hide();
			sidebarContainer.filter(tags).show();
		}
	});

	$(foldIcon).on('click', hideSidebar);

	/*set class active-tab to tabs from nav*/
	$(navTabs).click( function() {
		$(navTabs).removeClass(activeTab);
		$(this).toggleClass(activeTab);
	})

 /*fix navbar on the top of the page on scroll*/
	$(window).scroll(function(){
		var header = $('header');
		var headerHeight = header.height();
		var scroll = $(window).scrollTop();

		if (scroll >= headerHeight) {
			navbar.addClass('fixed');
		}
		else {
			navbar.removeClass('fixed');
		}
	});

	/*set class active-tab to tabs from navbar(not fron nav)*/
	function setClassActiveTab(active) {
		var currentActiveTab = active;
		removeClassActiveTab();
		$(active).toggleClass(activeTab);
	}

	function hideSidebar() {
		$(sidebar).hide();
		removeClassActiveTab();
	}

	function removeClassActiveTab() {
		$(navbarLinks).removeClass(activeTab);
	}
});