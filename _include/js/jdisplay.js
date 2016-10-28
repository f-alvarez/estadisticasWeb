function display_Template_Sheets200(){
 display_Template_Sheets("SISTEMAS DISTRIBUIDOS","TOTALES BATCH","Este informe presenta los datos estadisticos correspondientes al procesamiento batch en sistemas distribuidos; ultimos 365 dias.","\\\\sde04cc0001\\d$\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\_DOCU\\BATCH_SIST_DIST_TOTALES.xlsm","\\\\sde04cc0001\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\BATCH_SIST_DIST_TOTALES.htm");
}
function display_Template_Sheets201(){
 display_Template_Sheets("SISTEMAS DISTRIBUIDOS","PLANIFICACIONES ESPECIALES","Este informe presenta los datos estadisticos correspondientes a los totales dde procesos ejecutados en sistemas distribuidos, bajo planificaciones especiales, ultimos 365 dias.","\\\\sde04cc0001\\d$\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\_DOCU\\DISTRIBUIDO_PLANIFICACIONES_ESPECIALES.xlsm","\\\\sde04cc0001\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\DISTRIBUIDO_PLANIFICACIONES_ESPECIALES.htm");
}
function display_Template_Sheets202(){
 display_Template_Sheets("SISTEMAS DISTRIBUIDOS","SERVIDOR DE ALERTAS","Este informe presenta los datos estadisticos correspondientes la evolucion en los ultimos 365 dias del total de alertas registradas por ambiente operacional, para cada mes del periodo.","\\\\sde04cc0001\\d$\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\_DOCU\\SERVIDOR_GLOBALdeALERTAS.xlsm","\\\\sde04cc0001\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\SERVIDOR_GLOBALdeALERTAS.htm");
}
function display_Template_Sheets203(){
 display_Template_Sheets("SISTEMAS DISTRIBUIDOS","ELAPSED POR HOST-ID","Este informe presenta los datos estadisticos correspondientes al ranking de los 10 servidores con mayores registros promedio mensual de elapsed time.","\\\\sde04cc0001\\d$\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\_DOCU\\BATCH_DISTRIBUIDOxHOST-ID.xlsm","\\\\sde04cc0001\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\BATCH_DISTRIBUIDOxHOST-ID.htm");
}
function display_Template_Sheets204(){
 display_Template_Sheets("SISTEMAS DISTRIBUIDOS","PROCESOS CORE","Este informe presenta los datos estadisticos correspondientes a la dimension promedio (mins) de la ventana batch de los aplicativos de mision critica.","\\\\sde04cc0001\\d$\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\_DOCU\\BATCH_DISTRIBUIDO_PROCESOS_CORE.xlsm","\\\\sde04cc0001\\ARCHIVO HISTORICO\\Documentacion\\INFORMES DEL MONITOR GLOBAL\\BATCH_DISTRIBUIDO_PROCESOS_CORE.htm");
}


//----------------------------------------------------------------------
function display_Template_Sheets(variableH1, variableH2, descripcion, vinculo, info){

var doc = document.open("text/html","replace");

doc.writeln('<!DOCTYPE html>');
doc.writeln('<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->');
doc.writeln('<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]-->');
doc.writeln('<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9" lang="en"><![endif]-->');
doc.writeln('<!--[if (IE 9)]><html class="no-js ie9" lang="en"><![endif]-->');
doc.writeln('<!--[if gt IE 8]><!--> <html lang="en-US"> <!--<![endif]-->');
doc.writeln('<head>');
doc.writeln('<!-- Meta Tags -->');
doc.writeln('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
doc.writeln('<title>Tecnologia y Procesamiento | Estadisticas</title>');
doc.writeln('<meta name="description" content="Insert Your Site Description" />');
doc.writeln('<!-- Mobile Specifics -->');
doc.writeln('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
doc.writeln('<meta name="HandheldFriendly" content="true"/>');
doc.writeln('<meta name="MobileOptimized" content="320"/>');
doc.writeln('<!-- Mobile Internet Explorer ClearType Technology -->');
doc.writeln('<!--[if IEMobile]>  <meta http-equiv="cleartype" content="on">  <![endif]-->');
doc.writeln('<!-- Bootstrap -->');
doc.writeln('<link href="_include/css/bootstrap.min.css" rel="stylesheet">');
doc.writeln('<!-- Main Style -->');
doc.writeln('<link href="_include/css/main.css" rel="stylesheet">');
doc.writeln('<!-- Supersized -->');
doc.writeln('<link href="_include/css/supersized.css" rel="stylesheet">');
doc.writeln('<link href="_include/css/supersized.shutter.css" rel="stylesheet">');
doc.writeln('<!-- FancyBox -->');
doc.writeln('<link href="_include/css/fancybox/jquery.fancybox.css" rel="stylesheet">');
doc.writeln('<!-- Font Icons -->');
doc.writeln('<link href="_include/css/fonts.css" rel="stylesheet">');
doc.writeln('<!-- Shortcodes -->');
doc.writeln('<link href="_include/css/shortcodes.css" rel="stylesheet">');
doc.writeln('<!-- Responsive -->');
doc.writeln('<link href="_include/css/bootstrap-responsive.min.css" rel="stylesheet">');
doc.writeln('<link href="_include/css/responsive.css" rel="stylesheet">');
doc.writeln('<!-- Google Font -->');
doc.writeln('<link href="http://fonts.googleapis.com/css?family=Titillium+Web:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900" rel="stylesheet" type="text/css">');
doc.writeln('<!-- Fav Icon -->');
doc.writeln('<link rel="shortcut icon" href="#">');
doc.writeln('<link rel="apple-touch-icon" href="#">');
doc.writeln('<link rel="apple-touch-icon" sizes="114x114" href="#">');
doc.writeln('<link rel="apple-touch-icon" sizes="72x72" href="#">');
doc.writeln('<link rel="apple-touch-icon" sizes="144x144" href="#">');
doc.writeln('<link rel="shortcut icon" type="image/x-icon" href="_include/favicon.ico">');
doc.writeln('<!-- Modernizr -->');
doc.writeln('<script src="_include/js/modernizr.js"></script>');
doc.writeln('<!-- Analytics -->');
doc.writeln('<script type="text/javascript">');
doc.writeln('var _gaq = _gaq || [];');
doc.writeln('_gaq.push(["_setAccount", "Insert Your Code"]);');
doc.writeln('_gaq.push(["_trackPageview"]);');
doc.writeln('(function() {');
doc.writeln('var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;');
doc.writeln('ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";');
doc.writeln('var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);');
doc.writeln('})();');
doc.writeln('</script>');
doc.writeln('<!-- End Analytics -->');
doc.writeln('</head>');
doc.writeln('<body>');
doc.writeln('<!-- This section is for Splash Screen -->');
doc.writeln('<section id="jSplash">');
doc.writeln('	<div id="circle"></div>');
doc.writeln('</section>');
doc.writeln('<!-- End of Splash Screen -->');
doc.writeln('<!-- Header -->');
doc.writeln('<header>');
doc.writeln('<div class="sticky-nav">');
doc.writeln('	<a id="mobile-nav" class="menu-nav" href="#menu-nav"></a>');
doc.writeln('<div id="logo">');
doc.writeln('	<a  onclick="location.reload() title=Estadisticas | Banco Nacion">Estadisticas | Banco Nacion</a>');
doc.writeln('</div>');
doc.writeln('<nav id="menu">');
doc.writeln('<ul id="menu-nav">');
doc.writeln('	<li><a href="#informesec">Informe</a></li>');
doc.writeln('   <li><a  onclick="location.reload()">Volver a Informes Estadisticos</a></li>');
doc.writeln('</ul>');
doc.writeln('</nav>');
doc.writeln('</div>');
doc.writeln('</header>');
doc.writeln('<!-- End Header -->');
doc.writeln('<!-- Our Shortcodes Section -->');
doc.writeln('<div id="shortcodes" class="page">');
doc.writeln('	<div class="container">');
doc.writeln('	<!-- Title Page -->');
doc.writeln('<div class="row">');
doc.writeln('<div class="span12">');
doc.writeln('<div class="title-page">');
doc.writeln('<h2 class="title">Monitor Global</h2>');
doc.writeln('<h3 class="title-description">Informes Estadisticos.</h3>');
doc.writeln('</div>');
doc.writeln('</div>');
doc.writeln('</div>');
doc.writeln('<!-- End Title Page -->');
doc.writeln('<!-- Information Block -->');
doc.writeln('<div class="row">');
doc.writeln('	<div class="span12">');
doc.writeln('	<h3 class="spec">Descripcion del informe</h3>');
doc.writeln('<div class="info-block">');
doc.writeln('	<div class="info-text">');
doc.writeln('		<h3><span class="color-text">'+variableH1+': </span>'+variableH2+'</h3>');
doc.writeln('<p>'+descripcion+'</p>');
doc.writeln('<a class="button" target="_blank" href="'+vinculo+'">Descargar Informe</a>');
doc.writeln('	</div>');
doc.writeln('</div>');
doc.writeln('</div>	');
doc.writeln('</div>');
doc.writeln('<!-- End Information Block -->');
doc.writeln('<div class="row">');
doc.writeln('	<div class="span12">');
doc.writeln('	<hr>');
doc.writeln('</div>	');
doc.writeln('</div>');
doc.writeln('							<div id="informesec" class="content">');
doc.writeln('								<section>');
doc.writeln('	                            	<iframe name="frSheet" width="100%" height="800" src="'+info+'" scrolling="yes" frameborder="no" ></iframe>');
doc.writeln('								</section>');
doc.writeln('							</div>');
doc.writeln('</div>');
doc.writeln('</div>');
doc.writeln('<!-- End Shortcodes Section -->');
doc.writeln('<!-- Footer -->');
doc.writeln('<footer>');
doc.writeln('	<p class="credits">&copy;2015 Tecnologia y Procesamiento | Estadisticas. <a href="http://www.bna.com.ar" title="Banco Nacion">Banco Nacion</a>.');
doc.writeln('</footer>');
doc.writeln('<!-- End Footer -->');
doc.writeln('<!-- Back To Top -->');
doc.writeln('<a id="back-to-top" href="#">');
doc.writeln('	<i class="font-icon-arrow-simple-up"></i>');
doc.writeln('</a>');
doc.writeln('<!-- End Back to Top -->');
doc.writeln('<!-- Js -->');
doc.writeln('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> <!-- jQuery Core -->');
doc.writeln('<script src="_include/js/bootstrap.min.js"></script> <!-- Bootstrap -->');
doc.writeln('<script src="_include/js/supersized.3.2.7.min.js"></script> <!-- Slider -->');
doc.writeln('<script src="_include/js/waypoints.js"></script> <!-- WayPoints -->');
doc.writeln('<script src="_include/js/waypoints-sticky.js"></script> <!-- Waypoints for Header -->');
doc.writeln('<script src="_include/js/jquery.isotope.js"></script> <!-- Isotope Filter -->');
doc.writeln('<script src="_include/js/jquery.fancybox.pack.js"></script> <!-- Fancybox -->');
doc.writeln('<script src="_include/js/jquery.fancybox-media.js"></script> <!-- Fancybox for Media -->');
doc.writeln('<script src="_include/js/jquery.tweet.js"></script> <!-- Tweet -->');
doc.writeln('<script src="_include/js/plugins.js"></script> <!-- Contains: jPreloader, jQuery Easing, jQuery ScrollTo, jQuery One Page Navi -->');
doc.writeln('<script src="_include/js/main.js"></script> <!-- Default JS -->');
doc.writeln('<!-- End Js -->');
doc.writeln('</body>');
doc.writeln('</html>');


doc.close();

scroll(0,0);

}