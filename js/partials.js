angular.module('partials', [])
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
'    <li><a href="#/projects"><span class="label label-important">Projects</span></a></li>',
'    <li><a href="#/demo"><span class="label">Demo</span></a></li>',
'  </ul>',
'</p>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/demo.html', [
'',
'<div ng-controller="demoCtrl"></div>',
'<h1>',
'  <Using>d3 service to create simple objects inside AngularJS framework.</Using>',
'</h1>',
'<p>',
'  Inside AngularJS framework, everything is a module or is inside a module. A module can contain constant values,',
'  services, factory methods.',
'  In this example, in the backend we have created a d3 service. And we are using it to create a simple visualization',
'</p>',
'<div id="viz"></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial1.html', [
'',
'<p>This is the partial for view 1.</p>',''].join("\n"));
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
  return $templateCache.put('/partials/projects.html', [
'',
'<div class="hero-unit">',
'  <h1>SOCR Test Projects</h1>',
'  <p>',
'    This seed project is to help you get to speed on how development process goes on at SOCR. By',
'    working on these projects, you will gets a hands on experience of<a href="http://coffeescript.org/"><code>coffeescript</code>,</a><a href="http://brunch.io"><code>brunch.io</code> ,</a><a href="http://www.html5rocks.com/en/"><code>HTML5</code>,</a><a href="http://angularjs.org"><code>AngularJS</code>,</a><a href="https://github.com/"><code>GitHub</code>,</a><a href="https://d3js.org"><code>D3</code>.</a>',
'  </p>',
'  <p>',
'    Feel free to choose one of the experiments from the list given below and start working on it. Please keep',
'    updating your progress to github. If you are new to github, please refer<a href="http://git-scm.com/book/en/">&nbsp; book &nbsp;</a>for more info.',
'    Git probably the best versioning tool ever created!',
'  </p>',
'</div>',
'<div class="hero-unit">',
'  <h1>How do I get Started?</h1>',
'  <p>',
'    You have already completed your first task i.e. pulling the git repository. Now you have all the tools, packages,',
'    technologies that you will be needing for developing the test projects.',
'    Firstly, you need to read the brunch.io documentation once. We are using brunch.io to expedite the',
'    development process.',
'  </p>',
'  <p>If you are not familiar with any language or technology, please refer their documentations or online examples.<strong>Or &nbsp;</strong>send us an email at<strong>&nbsp; selvam1991 at gmail dot com</strong></p>',
'</div>',
'<div class="row-fluid">',
'  <div class="span6">',
'    <h2>JSON HTML5 Grid</h2>',
'    <p><span class="label label-important">Goal:</span>Build an interactive HTML5 grid from JSON/csv/xls formatted data.</p>',
'    <p><span class="label label-info">Tools/languages :</span>AngularJS,ngGrid,Twitter Bootstrap</p>',
'  </div>',
'  <div class="span6">',
'    <h2>AngularJS Service for table parsing</h2>',
'    <p><span class="label label-important">Goal:</span>To build an angular service which converts tables in an URL to JSON files</p>',
'    <p><span class="label label-info">Tools/languages :</span>AngularJS,Twitter Bootstrap</p>',
'  </div>',
'</div><!--/row-->',
'<div class="row-fluid">',
'  <div class="span6">',
'    <h2>AngularJS Service for table parsing</h2>',
'    <p><span class="label label-important">Goal:</span>Propose and implement a new infrastructure modernizing current SOCR Wiki resources.',
'      The new architecture should consume the meta-data from the current SOCR MediaWiki DB and',
'      the interface should be mobile ready. There are existing scripts to convert markdown MediaWiki',
'      syntax to HTML. Use these scripts and bootstrap to modernize the SOCR Wiki interface.',
'      The new frameworks should also allow easy editing (with limited access only to trusted SOCR personnel).',
'    </p>',
'    <p><span class="label label-info">Tools/languages :</span>AngularJS,Twitter Bootstrap</p>',
'  </div>',
'  <div class="span6">',
'    <h2> Example of converting a SOCR Simulation to AngularJS/New SOCR Interface</h2>',
'    <p><span class="label label-important">Goal:</span>Wrap up the Beta-Binomial Distribution Simulation into angularJS framework.',
'      Create angular Js modules for nvd3,js first and use it to plot the graphs.',
'    </p>',
'    <p><span class="label label-info">Tools/languages :</span>AngularJS,Twitter Bootstrap,nvd3, Distributome</p>',
'  </div>',
'</div><!--/row-->',
'<!---->',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/sidebar.html', [
'',
'<div class="well sidebar-nav">',
'  <ul class="nav nav-list">',
'    <li class="nav-header">Get Started</li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_Videos">Videos</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_Help_Pages">Help Pages</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_EduMaterials">Activities</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_Courses">Courses</a></li>',
'    <li class="nav-header">Webapps and Resources</li>',
'    <li><a href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#Tables" title="Probaiblity Distribution Tables">Tables</a></li>',
'    <li><a href="http://socr.ucla.edu/htmls/HTML5/" title="Modern browser embedded web-applications">New Webapps</a></li>',
'    <li><a href="http://socr.ucla.edu/Applets.dir/OnlineResources.html#High-Precision_Distribution_Calculators" title="High-Precision Distribution Calculators">Precision Calculators</a></li>',
'    <li class="nav-header">Java Applets</li>',
'    <li><a href="http://socr.ucla.edu/htmls/dist/" title="Probability Distribution Calculators">Distributions</a></li>',
'    <li><a href="http://socr.ucla.edu/htmls/exp" title="Virtual Computer Experiments and Simulations">Experiments</a></li>',
'    <li><a href="http://socr.ucla.edu/htmls/ana/">Analyses</a></li>',
'    <li><a href="http://socr.ucla.edu/htmls/SOCR_Modeler.html">Data Modeler</a></li>',
'    <li><a href="http://socr.ucla.edu/htmls/SOCR_Charts.html">Charts and Graphs</a></li>',
'    <li><a href="http://socr.ucla.edu/htmls/SOCR_Games.html">Games</a></li>',
'    <li class="nav-header">Learning Materials</li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/EBook">EBook</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_Data">Datasets</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_EduMaterials" title="Learning Modules and Hands-on Activities">Activities</a></li>',
'    <li class="nav-header">Contribute to SOCR</li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/Socr:Site_support" title="Consider making donations of any size to support SOCR student stipends and instructors training">Donations</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/Available_SOCR_Development_Projects">SOCR Projects</a></li>',
'    <li><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_News">Events</a></li>',
'    <li><a href="http://forums.stat.ucla.edu/socr">Forum</a></li>',
'    <li><a href="http://www.socr.ucla.edu/htmls/SOCR_Feedback.html">Survey</a></li>',
'  </ul>',
'</div>',
'<div class="span10"><a href="img/SOCR_QRcode.png"><img title="SOCR QR Code" src="img/SOCR_QRcode.png" alt="SOCR QR Code" style="width: 100px; height: 100px;" align="left" hspace="1" vspace="5"/></a></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/socr.html', [
'',
'<div class="hero-unit">',
'  <h1>SOCR</h1>',
'  <p>',
'    The Statistics Online Computational Resource designs, validates and freely disseminates knowledge,',
'    scientific discoveries and learning materials. Specifically, SOCR',
'    provides portable online aids for probability and statistics education,',
'    technology based instruction and statistical computing.',
'  </p>',
'  <table style="width: 100%; text-align: left;" border="0" cellpadding="2" cellspacing="2">',
'    <tbody>',
'      <tr>',
'        <td style="vertical-align: top;"><a target="_blank" href="html/SOCR_About.html" class="btn btn-primary btn-large">Learn more »</a></td>',
'        <td style="vertical-align: top; text-align: right;"><i>It\'s online, therefore it exists!</i></td>',
'      </tr>',
'    </tbody>',
'  </table>',
'</div><!--',
'<Carousel></Carousel>-->',
'<div id="myCarousel" class="carousel slide">',
'  <div class="carousel-inner">',
'    <div class="item active"><img src="img/SOCR_Analyses_Carousel.png" alt="SOCR Analyses"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/htmls/SOCR_Analyses.html">SOCR Statistical Analyses</a></h4>',
'        <p>Interactive web-based tools for Exploratory Data Analysis and data plotting.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_DataModeler_Carousel.png" alt="SOCR Data Modeler"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/htmls/SOCR_Modeler.html">SOCR Data Modeler</a></h4>',
'        <p>Interactive SOCR tools for parametric data modeling.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_EBook_Carousel.png" alt="SOCR EBook"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://wiki.stat.ucla.edu/socr/index.php/EBook">SOCR Electronic Wiki Book (EBook)</a></h4>',
'        <p>Internet-based, technology-enhanced probability and statistics EBook.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_Experiments_Carousel.png" alt="SOCR Experiments"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/htmls/exp">SOCR Virtual Experiments</a></h4>',
'        <p>Interactive simulations of scientific concepts and natural phenomena.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_Activities_Carousel.png" alt="SOCR Learning Activities"/>',
'      <div class="carousel-caption">',
'        <h4><a href="hhttp://wiki.stat.ucla.edu/socr/index.php/SOCR_EduMaterials">SOCR Learning Activities</a></h4>',
'        <p>Hands-on learning modules, data and instructional resources.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_APStats_Carousel.png" alt="Advanced Placement Stats"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/APStats/">SOCR Advanced Placement Resources</a></h4>',
'        <p>AP Statistics materials.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_Charts_Carousel.png" alt="SOCR Charts"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/htmls/chart">SOCR Charts</a></h4>',
'        <p>Tools for exploratory data analysis.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_Data_Carousel.png" alt="SOCR Data"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_Data">SOCR Data</a></h4>',
'        <p>A large collection of free and heterogeneous datasets.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_Distributions_Carousel.png" alt="SOCR Distributions"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/htmls/dist">SOCR Distributions</a></h4>',
'        <p>Interactive probability distribution calculators.</p>',
'      </div>',
'    </div>',
'    <div class="item"><img src="img/SOCR_HTViewer_Carousel.png" alt="SOCR HT Viewer"/>',
'      <div class="carousel-caption">',
'        <h4><a href="http://socr.ucla.edu/SOCR_HT_ResourceViewer.html">SOCR Hyperbolic Resource Navigator</a></h4>',
'        <p>Hyperbolic viewer for exploring the web of SOCR resources.</p>',
'      </div>',
'    </div>',
'  </div><a href="#myCarousel" data-slide="prev" class="left carousel-control">‹</a><a href="#myCarousel" data-slide="next" class="right carousel-control">›</a>',
'</div>',
'<div class="row-fluid">',
'  <div class="span4">',
'    <h2>About SOCR</h2>',
'    <p>',
'      Learn about SOCR, find details about the SOCR projects, team, publications,',
'      licenses and organization,  and discover the broad spectrum of SOCR materials.',
'    </p>',
'    <p><a href="html/SOCR_About.html" class="btn">View details »</a></p>',
'  </div>',
'  <div class="span4">',
'    <h2>Java Applets</h2>',
'    <p>',
'      A collection of Java applets demonstrating probability, statistics,',
'      mathematics and engineering concepts. These  include probability calculators,',
'      statistics analysis tools, data modeling and visualization,',
'      virtual games, simulations and experiments.',
'    </p>',
'    <p><a href="http://socr.ucla.edu/htmls/dist/" class="btn">View details »</a></p>',
'  </div>',
'  <div class="span4">',
'    <h2>EBook</h2>',
'    <p>',
'      An Internet-based probability and statistics EBook including materials, tools',
'      and data-driven demonstrations. The EBook is community-built, open-access,',
'      multilingual, and blends information technology, scientific techniques',
'      and modern pedagogical concepts.',
'    </p>',
'    <p><a href="http://wiki.stat.ucla.edu/socr/index.php/EBook" class="btn">View details »</a></p>',
'  </div>',
'</div><!--/row-->',
'<div class="row-fluid">',
'  <div class="span4">',
'    <h2> Navigators</h2>',
'    <p>',
'      Graphical, keyword and hyperbolic navigators for traversing, discovery and exploration',
'      of the variety of SOCR resources.',
'    </p>',
'    <p><a href="html/Navigators.html" class="btn">View details »</a></p>',
'  </div>',
'  <div class="span4">',
'    <h2>News</h2>',
'    <p>SOCR news, events, and announcements.</p>',
'    <p><a href="http://wiki.stat.ucla.edu/socr/index.php/SOCR_News" class="btn">View details »</a></p>',
'  </div>',
'  <div class="span4">',
'    <h2>Webapps</h2>',
'    <p>A collection of portable modern Webapps.</p>',
'    <p><a href="http://socr.ucla.edu/htmls/HTML5/" class="btn">View details »</a></p>',
'  </div>',
'  <!---->',
'</div>/row',''].join("\n"));
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