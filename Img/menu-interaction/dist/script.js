/*----------------------------------------------   
 --Stupid SImple Offcanvas Nav
 -----------------------------------------------  */ 
 $(".js-menu-toggle").click(function (e) {
   $("body").toggleClass("js-menu--is-open");
   e.preventDefault();
  });
  

/*----------------------------------------------   
--Web font loader
-----------------------------------------------  */
WebFontConfig={

    google:{families: ['Noto+Serif:400', 'Montserrat:400,700:latin', 'Playfair+Display:600,700']}
  }; 
  
  (function(){
    var wf = document.createElement("script");
    wf.src = ("https:" == document.location.protocol ? "https":"http") + 
             "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type="text/javascript";
    wf.async="true";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(wf, t)
})();