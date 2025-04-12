(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
		let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`; /* background */
        let _depth2 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`; /* cloud */
        let _depth3 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`; /* pillars */
        let _depth4 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`; /* dust */
		let _depth5 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`; /* HBD banner */
		let _depth6 = `${50 - (_mouseX - _w) * 0.009}% ${50 - (_mouseY - _h) * 0.009}%`; /* balloon */
		let _depth7 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`; /* finana */
		let _depth8 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`; /* table */
		let _depth9 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`; /* cake */
		let _depth10 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`; /* finapape */
		let _depth11 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`; /* present */
		let _depth12 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`; /* confetti */
		let _depth13 = `${50 - (_mouseX - _w) * 0.003}% ${50 - (_mouseY - _h) * 0.003}%`; /* sparkle */
        let x = `${_depth13}, ${_depth12}, ${_depth11}, ${_depth10}, ${_depth9}, ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})();

// show content when clicked
/*var audio = new Audio('Audio/LazuLight_MoonHalo.mp3');*/
var audio1;
/*audio.volume = 0.3;*/
	
audio.oncanplay = function() {
	if (document.getElementById("checkbox-toggle").checked) this.play()
}
function myfunction(el) {    
	if (el.checked) {
		/*audio.load();*/
		audio1 = new Audio('Audio/bubblepop.MP3');
		audio1.volume = 0.15;
		
		//$(".main").removeClass('main');
		// $('#main').css('background-image','');
		$('#parallax').css('background-image','url("Image/BG/Night/IMG_2020.png"), url("Image/BG/Night/IMG_2021.png"), url("Image/BG/Night/IMG_2028.png"), url("Image/BG/Night/IMG_2022.png"), url("Image/BG/Night/IMG_2071.png"), url("Image/BG/Night/IMG_2029.png"), url("Image/BG/Night/IMG_2030.png"), url("Image/BG/Night/IMG_2031.png"), url("Image/BG/Night/IMG_2032_1.png"), url("Image/BG/Night/IMG_2034.png"), url("Image/BG/Night/IMG_2033.png"), url("Image/BG/Night/IMG_2069.png"), url("Image/BG/Night/IMG_2035.png")');
		
		$('#ryu-img1').attr('style','filter: drop-shadow(0 0 20px rgba(207, 220, 250,0.5));');
		$('#ryu-img2').attr('style','filter: drop-shadow(0 0 20px rgba(207, 220, 250,0.5));');
		$('#ryu-img3').attr('style','filter: drop-shadow(0 0 20px rgba(207, 220, 250,0.5));');
		$('#ryu-img4').attr('style','filter: drop-shadow(0 0 20px rgba(207, 220, 250,0.5));');
		$('#ryu-img5').attr('style','filter: drop-shadow(0 0 20px rgba(207, 220, 250,0.5));');
		
	} else {
		/*audio.pause(); //pause audio */
		audio1 = new Audio();
		$('#ryu-img1').attr('style','filter: drop-shadow(0 0 20px rgba(1, 37, 120,0.7));');
		$('#ryu-img2').attr('style','filter: drop-shadow(0 0 20px rgba(1, 37, 120,0.7));');
		$('#ryu-img3').attr('style','filter: drop-shadow(0 0 20px rgba(1, 37, 120,0.7));');
		$('#ryu-img4').attr('style','filter: drop-shadow(0 0 20px rgba(1, 37, 120,0.7));');
		$('#ryu-img5').attr('style','filter: drop-shadow(0 0 20px rgba(1, 37, 120,0.7));');
		
		$('#parallax').css('background-image','url("Image/BG/Day/IMG_2002.png"), url("Image/BG/Day/IMG_2003.png"), url("Image/BG/Day/IMG_2008.png"), url("Image/BG/Day/IMG_2009.png"), url("Image/BG/Day/IMG_2070.png"), url("Image/BG/Day/IMG_2011.png"), url("Image/BG/Day/IMG_2012.png"), url("Image/BG/Day/IMG_2013.png"), url("Image/BG/Day/IMG_2014_1.png"), url("Image/BG/Day/IMG_2015.png"), url("Image/BG/Day/IMG_2016.png"), url("Image/BG/Day/IMG_2017.png"), url("Image/BG/Day/IMG_2018.png")');
	}
}
audio.addEventListener('ended', function() {
	this.currentTime = 0;
	this.play();
}, false);

// show content when clicked
$(document).ready(function(){
	$(".ryufeesh").click(function(){
		audio1.play();
	});
});

// stop audio when video is play
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'nVqAtKybW9N8hsFO',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      // code to stop the audio player should probably go here
	  audio.pause(); //pause audio
    }
  }
