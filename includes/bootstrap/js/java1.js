/**
 * The nav stuff
 */
(function( window ){

	var body = document.body,
		mask = document.createElement("div"),
		toggleSlideTop = document.querySelector( ".toggle-slide-top" ),
		slideMenuTop = document.querySelector( ".slide-menu-top" ),
		activeNav
	;
	mask.className = "mask";
	
	var body = document.body,
		mask2 = document.createElement("div2"),
		toggleSlideTop2 = document.querySelector( ".toggle-slide-top2" ),
		slideMenuTop2 = document.querySelector( ".slide-menu-top2" ),
		activeNav2
	;
	mask2.className = "mask2";

	var body = document.body,
		mask3 = document.createElement("div3"),
		toggleSlideTop3 = document.querySelector( ".toggle-slide-top3" ),
		slideMenuTop3 = document.querySelector( ".slide-menu-top3" ),
		activeNav3
	;
	mask3.className = "mask3";
	
	var body = document.body,
		mask4 = document.createElement("div4"),
		toggleSlideTop4 = document.querySelector( ".toggle-slide-top4" ),
		slideMenuTop4 = document.querySelector( ".slide-menu-top4" ),
		activeNav4
	;
	mask4.className = "mask4";

	/* slide menu top */
	toggleSlideTop.addEventListener( "click", function(){
		classie.add( body, "smt-open" );
		document.body.appendChild(mask);
		activeNav = "smt-open";
	} );
	toggleSlideTop2.addEventListener( "click", function(){
		classie.add( body, "smt-open2" );
		document.body.appendChild(mask2);
		activeNav2 = "smt-open2";
		
	} );
	toggleSlideTop3.addEventListener( "click", function(){
		classie.add( body, "smt-open3" );
		document.body.appendChild(mask3);
		activeNav3 = "smt-open3";
		
	} );
	toggleSlideTop4.addEventListener( "click", function(){
		classie.add( body, "smt-open4" );
		document.body.appendChild(mask4);
		activeNav4 = "smt-open4";
		
	} );

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );
	mask2.addEventListener( "click", function(){
		classie.remove( body, activeNav2 );
		activeNav = "";
		document.body.removeChild(mask2);
	} );
	mask3.addEventListener( "click", function(){
		classie.remove( body, activeNav3 );
		activeNav = "";
		document.body.removeChild(mask3);
	} );
	mask4.addEventListener( "click", function(){
		classie.remove( body, activeNav4 );
		activeNav = "";
		document.body.removeChild(mask4);
	} );
	
	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});
	[].slice.call(document.querySelectorAll(".close-menu2")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav2 );
			activeNav2 = "";
			document.body.removeChild(mask2);
		} );
	});
	[].slice.call(document.querySelectorAll(".close-menu3")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav3 );
			activeNav3 = "";
			document.body.removeChild(mask3);
		} );
	});
	[].slice.call(document.querySelectorAll(".close-menu4")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav4 );
			activeNav4 = "";
			document.body.removeChild(mask4);
		} );
	});
	


})( window );