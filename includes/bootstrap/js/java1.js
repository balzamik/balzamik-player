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

	/* slide menu top */
	toggleSlideTop.addEventListener( "click", function(){
		classie.add( body, "smt-open" );
		document.body.appendChild(mask);
		activeNav = "smt-open";
	} );
	

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});
	
	/* DRUGI OVERLAY */	
	var body = document.body,
		mask = document.createElement("div"),
		toggleSlideTop = document.querySelector( ".toggle-slide-top2" ),
		slideMenuTop = document.querySelector( ".slide-menu-top2" ),
		activeNav
	;
	mask.className = "mask2";

	/* slide menu top */
	toggleSlideTop.addEventListener( "click", function(){
		classie.add( body, "smt-open2" );
		document.body.appendChild(mask);
		activeNav = "smt-open2";
	} );
	

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu2")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});


})( window );