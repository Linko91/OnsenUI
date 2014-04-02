(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/bottom_toolbar.tpl",
    "<div class=\"onsen_bottom-toolbar topcoat-navigation-bar topcoat-navigation-bar--bottom\" ng-transclude></div>\n" +
    "");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/button.tpl",
    "<button ng-class=\"'topcoat-button--{{type}}'\" class=\"{{item.animation}} effeckt-button topcoat-button no-select\">\n" +
    "	<span class=\"label\" ng-transclude></span>\n" +
    "	<span class=\"spinner topcoat-button__spinner\"></span>\n" +
    "</button>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/checkbox.tpl",
    "<label class=\"topcoat-checkbox\">\n" +
    "  <input type=\"checkbox\" ng-model=\"ngModel\" ng-true-value=\"{{ngTrueValue || true}}\" ng-false-value=\"{{ngFalseValue || false}}\">\n" +
    "  <div class=\"topcoat-checkbox__checkmark\"></div>\n" +
    "  <span ng-transclude>\n" +
    "  	\n" +
    "  </span>\n" +
    "</label>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/column.tpl",
    "<div class=\"col col-{{align}} col-{{size}} col-{{offset}}\"></div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/icon.tpl",
    "<i class=\"fa fa-{{icon}} fa-{{size}} fa-{{spin}} fa-{{fixedWidth}} fa-rotate-{{rotate}} fa-flip-{{flip}}\"></i>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/if_orientation.tpl",
    "<div ng-show=\"orientation == userOrientation\" ng-transclude>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/if_platform.tpl",
    "<div ng-show=\"platform == userPlatform\" ng-transclude>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/list.tpl",
    "<div class=\"scroller-wrapper full-screen page\" ons-scrollable>\n" +
    "	<div class=\"scroller\">\n" +
    "		<div class=\"topcoat-list__container\">\n" +
    "			<ul class=\"topcoat-list\" ng-transclude>\n" +
    "\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/list_item.tpl",
    "<li class=\"topcoat-list__item\">\n" +
    "		    		\n" +
    "</li>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/navigator.tpl",
    "<div class=\"navigator-container\">\n" +
    "	<div ng-hide=\"hideToolbar\" class=\"topcoat-navigation-bar no-select navigator-toolbar relative\">	 \n" +
    "		<div class=\"navigator-toolbar__content relative\">\n" +
    "			<div class=\"onsen_navigator-item topcoat-navigation-bar__bg onsen_navigator__left-button-container transition hide\">\n" +
    "				<span class=\"topcoat-icon-button--quiet left-section\">\n" +
    "					<i class=\"fa fa-angle-left fa-2x topcoat-navigation-bar__line-height\"></i>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div class=\"onsen_navigator__right-button onsen_navigator-item\">\n" +
    "				<span class=\"topcoat-icon-button--quiet right-section-icon\">\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"relative navigator-content topcoat-page__bg\">\n" +
    "	</div>    \n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/navigator_toolbar.tpl",
    "<div class=\"onse_navigator-toolbar\"></div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/page.tpl",
    "<div class=\"page\"></div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/radio_button.tpl",
    "<label class=\"topcoat-radio-button\">\n" +
    "	{{leftLabel}}\n" +
    "	<input type=\"radio\" name=\"{{name}}\" ng-model=\"ngModel\" value=\"{{value}}\">\n" +
    "	<div class=\"topcoat-radio-button__checkmark\"></div>\n" +
    "	{{rightLabel}}\n" +
    "</label>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/row.tpl",
    "<div class=\"row row-{{align}}\"></div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/screen.tpl",
    "<div class=\"screen\">\n" +
    "</div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/scroller.tpl",
    "<div class=\"scroller-wrapper full-screen page\" ons-scrollable>\n" +
    "	<div class=\"scroller\">\n" +
    "		\n" +
    "	</div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/search_input.tpl",
    "<input type=\"search\" class=\"topcoat-search-input\">");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/select.tpl",
    "<select class=\"topcoat-text-input\" ng-transclude>\n" +
    "</select>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/sliding_menu.tpl",
    "<div class=\"sliding-menu full-screen\">\n" +
    "	<div ng-cloak class=\"onsen_sliding-menu-black-mask\"></div>\n" +
    "	<div class=\"behind full-screen\">\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"above full-screen\">		\n" +
    "	</div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/split_view.tpl",
    "<div class=\"sliding-menu full-screen\">\n" +
    "	<div class=\"onsen_sliding-menu-black-mask\"></div>\n" +
    "	<div class=\"secondary full-screen\">		\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"main full-screen\">		\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/tab_bar.tpl",
    "  <div style=\"margin-bottom: {{tabbarHeight}}\" class=\"tab-bar-content\">\n" +
    "    \n" +
    "  </div>\n" +
    "  <div ng-hide=\"hideTabs\" class=\"topcoat-tab-bar full footer\" ng-transclude>         \n" +
    "  </div>\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/tab_bar_item.tpl",
    "<label class=\"topcoat-tab-bar__item no-select\">\n" +
    "	<input type=\"radio\" name=\"tab-bar-{{tabbarId}}\">\n" +
    "	<button class=\"topcoat-tab-bar__button full\" ng-click=\"setActive()\">\n" +
    "		<i ng-show=\"icon != undefined\" class=\"fa fa-2x fa-{{tabIcon}} {{tabIcon}}\"></i>\n" +
    "		<div class=\"onsen_tab-bar__label\" ng-class=\"{ big: icon === undefined }\">\n" +
    "			{{label}}\n" +
    "		</div>\n" +
    "	</button>\n" +
    "</label>\n" +
    "");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/text_area.tpl",
    "<textarea class=\"topcoat-textarea\"></textarea>");
}]);
})();

(function(module) {
try { app = angular.module("templates-main"); }
catch(err) { app = angular.module("templates-main", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/text_input.tpl",
    "<input class=\"topcoat-text-input\">");
}]);
})();
