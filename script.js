// NATURE'S TAKEOVER MODELS + TEXT

let sky = document.querySelector( "#sky" );

let m1 = document.querySelector( "#room1" );
let m2 = document.querySelector( "#room2" );

let s1 = document.querySelector( "#song1" );
let s2 = document.querySelector( "#song2" );
let s3 = document.querySelector( "#screams" );

let ct = document.querySelector( "#changeText" );

let overtaken = false;

sky.addEventListener( "mouseenter", function () {

	if ( !overtaken ) {

		overtaken = true;

        gt3.style.display = "none";

		s3.components.sound.playSound();

		setTimeout( function () {

			m1.object3D.visible = false;
			m2.object3D.visible = true;

			s1.components.sound.stopSound();
			s2.components.sound.playSound();

		}, 1000 );

		setTimeout( changeText, 2500 );

	}

} );

function changeText() {

	ct.style.display = "block";

	setTimeout( function () {

		ct.style.display = "none";

	}, 5000 ); 

}

// GUIDING TEXTS

const allAssets = document.querySelector("#allAssets");
let gt1 = document.querySelector("#gt1");
let gt2 = document.querySelector("#gt2");
let gt3 = document.querySelector("#gt3");

setTimeout( firstText, 35000 );

function firstText() {

	gt1.style.display = "block";

	setTimeout( function () {

		gt1.style.display = "none";

		setTimeout( secondText, 2500 );

	}, 5000 );

}

function secondText() {

	gt2.style.display = "block";

	setTimeout( function () {

		gt2.style.display = "none";

		setTimeout( thirdText, 10000 );

	}, 5000 );

}

function thirdText() {

	if( !overtaken ) {

		gt3.style.display = "block";

		setTimeout( function () {

			gt3.style.display = "none";

		}, 5000 );

	}
    
}