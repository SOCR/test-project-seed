angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial1.html', [
'',
'<p>This is the partial for view 1.</p>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'',
'<p class="navbar-text pull-right"><a href="html/feed.rss" class="btn icon rss"><i class="icon-bullhorn"></i>RSS</a>',
'  <ul class="nav"><!--<li class="active"><a href="#">Home</a></li>  -->',
'    <li class="dropdown"><a id="drop5" role="button" data-toggle="dropdown" href="html/SOCR_About.html" rel="tooltip" title="Learn about the SOCR Resource" class="dropdown-toggle">About<b class="caret"></b></a>',
'      <ul id="menu3" role="menu" aria-labelledby="drop5" class="dropdown-menu">',
'        <li><a tabindex="-1" href="html/SOCR_About.html">About SOCR</a></li>',
'        <li><a tabindex="-1" href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_News">News and Events</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Team.html">SOCR Team</a></li>',
'        <li><a tabindex="-1" href="http://www.socr.ucla.edu/SOCR_UserGoogleMap.html">Geo-Map</a></li>',
'        <li><a tabindex="-1" href="html/SOCR_Contact.html">Contact</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Presentations.html">Presentations</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_References.html">Publications</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Recognitions.html">Recognitions</a></li>',
'        <li><a tabindex="-1" href="http://www.socr.ucla.edu/docs/SOCR_Brochure_Integrated.pdf">Brochure</a></li>',
'        <li class="divider"></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Funding.html">Funding</a></li>',
'        <li><a tabindex="-1" href="http://wiki.stat.ucla.edu/socr/index.php/Socr:Site_support">Donations</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Acknowledgements.html">Acknowledgments</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_CitingLicense.html">Citing/Licences</a></li>',
'        <li class="divider"></li>',
'        <li><a tabindex="-1" href="http://wiki.stat.ucla.edu/socr">SOCR Wiki</a></li>',
'        <li><a tabindex="-1" href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_Servers">SOCR Servers</a></li>',
'        <li><a tabindex="-1" href="http://www.socr.ucla.edu/docs/SOCR_Documentation.html">Documentation</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Download.html">Download</a></li>',
'        <li><a tabindex="-1" href="http://www.socr.ucla.edu/htmls/SOCR_Languages.html">Language Translation</a></li>',
'        <li class="divider"></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/SOCR_HW_Viewer.html" rel="tooltip" title="Hyperbolic Tree Viewer">SOCR HT Navigator</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/SOCR_HW_Viewer.html" rel="tooltip" title="Hyperbolic Wheel Viewer">SOCR HW Navigator</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/Carousel" rel="tooltip" title="Carousel Resource Navigator">Carousel Viewer</a></li>',
'      </ul>',
'    </li>',
'    <li><a href="html/SOCR_Contact.html" rel="tooltip" title="Contact the SOCR Resource">Contact</a></li>',
'    <li class="dropdown"><a id="drop5" role="button" data-toggle="dropdown" href="#" rel="tooltip" title="Use these tools if your browser is Java/JVM 1.6+ enabled!" class="dropdown-toggle">Java Applets<b class="caret"></b></a>',
'      <ul id="menu3" role="menu" aria-labelledby="drop5" class="dropdown-menu">',
'        <li><a tabindex="-1" href="#" rel="tooltip" title="Use these tools if your browser is Java/JVM 1.6+ enabled!">Java 1.6 Applets</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/dist/">Distributions</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/exp">Experiments</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Modeler.html">Modeler</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Analyses.html">Analyzes</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Charts.html">Charts</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/SOCR_Games.html">Games</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/webstart/index.html">Web-Start</a></li>',
'        <li class="divider"></li>',
'        <li><a tabindex="-1" href="#" rel="tooltip" title="For older Java/JVM 1.5 enabled Browsers Use the links below!">Legacy Java 1.5 Applets</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/legacy/htmls/SOCR_Distributions.html">Distributions</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/legacy/htmls/SOCR_Experiments.html">Experiments</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/legacy/htmls/SOCR_Modeler.html">Modeler</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/legacy/htmls/SOCR_Analyses.html">Analyzes</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/legacy/htmls/SOCR_Charts.html">Charts</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/legacy/htmls/SOCR_Games.html">Games</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/webstart/index.html">Web-Start</a></li>',
'      </ul>',
'    </li>',
'    <li class="dropdown"><a id="drop5" role="button" data-toggle="dropdown" href="#" rel="tooltip" title="A collection of portable modern HTML5 Webapps" class="dropdown-toggle">Webapps<b class="caret"></b></a>',
'      <ul id="menu3" role="menu" aria-labelledby="drop5" class="dropdown-menu">',
'        <li><a tabindex="-1" href="http://www.distributome.org/js/DistributomeNavigator.html">Distributome Navigator</a></li>',
'        <li><a tabindex="-1" href="http://www.distributome.org/tools.html">Distributome Webapps</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/HTML5/BivariateNormal/">Bivariate Normal Distribution Calculator</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/HTML5/charts/SOCR_JS_ViolinChart/">Violin Chart</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/HTML5/SOCR_Resampling_Webapp/">Randomization and Resampling Webapp</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#Tables">Probability Tables</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/htmls/HTML5/">Other SOCR HTML5 Webapps</a></li>',
'      </ul>',
'    </li>',
'    <li class="dropdown"><a id="drop5" role="button" data-toggle="dropdown" href="#" rel="tooltip" title="Additional SOCR Resources" class="dropdown-toggle">More<b class="caret"></b></a>',
'      <ul id="menu3" role="menu" aria-labelledby="drop5" class="dropdown-menu">',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#High-Precision_Distribution_Calculators">High-Precision Calculators</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#Tables">Probability Tables</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#Function_and_Image-Processing_Tools">Function and Image-Processing Applets</a></li>',
'        <li><a tabindex="-1" href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#Other_Interesting_Java_Applets">Other Java Applets</a></li>',
'      </ul>',
'    </li>',
'  </ul>',
'</p>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial2.html', [
'',
'<p>This is the partial for view 2.</p>',
'<p>',
'  Showing of \'interpolate\' filter:',
'  {{ \'Current version is v%VERSION%.\' | interpolate }}',
'</p>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/todo.html', [
'',
'<div ng-app="ng-app">',
'  <h2>Todo</h2>',
'  <div ng-controller="TodoCtrl"><span>{{remaining()}} of {{todos.length}} remaining</span> [<a href="" ng-click="archive()">archive</a>]',
'    <ul class="unstyled">',
'      <li ng-repeat="todo in todos">',
'        <label class="checkbox inline">',
'          <input type="checkbox" ng-model="todo.done"/><span class="done{{todo.done}}">{{todo.text}}</span>',
'        </label>',
'      </li>',
'    </ul>',
'    <form ng-submit="addTodo()" class="form-inline">',
'      <p>',
'        <input type="text" ng-model="todoText" size="30" placeholder="add new todo here"/>',
'        <input type="submit" value="add" class="btn btn-primary"/>',
'      </p>',
'    </form>',
'  </div>',
'</div>',''].join("\n"));
}]);