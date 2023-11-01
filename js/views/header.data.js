import { WRender, ComponentsManager, WAjaxTools, WArrayF } from "../WDevCore/WModules/WComponentsTools.js";
import { StylesControlsV2, StylesControlsV3, StyleScrolls } from "../WDevCore/StyleModules/WStyleComponents.js"
import { css } from "../WDevCore/WModules/WStyledRender.js";

<nav class="navbar navbar-default" role="navigation">
  <div class="container">
    
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="navbar-brand navbar-brand-centered">Brand</div>
    </div>

   
    <div class="collapse navbar-collapse" id="navbar-brand-centered">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" data-toggle="dropdown" class="dropdown-toggle">Categories
          <span class="caret"></span>
          </a>
        
          <ul class="dropdown-menu multi-level" id="menu">
          </ul>
        
        </li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  
  </div>
  
</nav>

var JSON = {
  menu: [
  	{ name: 'Category 1', link: '0', sub: null }, 
    { name: 'Category 2', link: '1',
    	sub: [
        { name: 'Product 1 Category 2', link: '0-0', sub: null }, 
        { name: 'Product 2 Category 2', link: '0-1', sub: null }, 
        { name: 'Product 3 Category 2', link: '0-2', sub: null }
      ]
  	}, 
    { name: 'Category 3', link: '2', 
    	sub: [
      	{ name: 'Product 1 Category 3', link: '2-0', 
        sub: [
          { name: 'Product 1 Category 3', link: '0-0', sub: null }, 
          { name: 'Product 2 Category 3', link: '0-1', sub: null }, 
          { name: 'Product 3 Category 3', link: '0-2', sub: null }        	
        ]
    }, 
        { name: 'Product 2 Category 3', link: '2-1', sub: null }
      ]
    },
    { name: 'Category 4', link: '3', 
    	sub: [
      	{ name: 'Product 1 Category 4', link: '3-1', sub: null },
        { name: 'Product 2 Category 4', link: '3-2', sub: null }
      ]
    }
  ]
};


$(function() {

  function parseMenu(ul, menu) {
    for (var i = 0; i < menu.length; i++) {
    
    	 var li = $('<li class="dropdown-submenu"><a href="' + menu[i].link + '">' + menu[i].name + '</a></li>').appendTo(ul);

      // If sub menus contain something 
      if (menu[i].sub != null) {
        var subul = $('<ul id="submenu-' + menu[i].link + '" class="dropdown-menu"></ul>');
       		$(li).append(subul);
        	parseMenu($(subul), menu[i].sub);
      }else {
      	$(li).removeClass('dropdown-submenu');
      }
    }
  }

  var menu = $('#menu');
  parseMenu(menu, JSON.menu);

/*
  $('.dropdown-submenu>a').unbind('click').click(function(e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
*/
});

