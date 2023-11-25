var passcodeCount = 0;
var enteredPasscode = '';

$(document).on('click', '.key', function(e){
    e.preventDefault();
    
    var keyNum = $(this).find('.num').text();
    enteredPasscode += keyNum;
    passcodeCount++;
    document.getElementById("dot" + passcodeCount).style.backgroundColor = "#fff";
    
    if (passcodeCount == 4) {
        if (enteredPasscode === Config.passcode) { 
            setTimeout(function(){
				passcodeEntered = true;
				unlockTime = Date.now();
				$(".iphone-pass").css({"display": "none"});
				$(".phone-footer").css({"display": "block"});

                passcodeCount = 0;
                enteredPasscode = '';
                var all = document.getElementsByClassName("dot");
                for (var i = 0; i < all.length; i++) {
                    all[i].style.backgroundColor = "transparent";
                }					
            }, 500);
        } else {
			setTimeout(function(){
				passcodeCount = 0;
				enteredPasscode = '';
				var all = document.getElementsByClassName("dot");
				for (var i = 0; i < all.length; i++) {
					all[i].style.backgroundColor = "transparent";
				}	
				
				$('.dot').addClass('shake');
				
				setTimeout(function() {
					$('.dot').removeClass('shake');
				}, 500);
			}, 500);
        }
    }
});

setInterval(function() {
    if (passcodeEntered && Date.now() >= unlockTime + unlockDuration) {
        passcodeEntered = false;
        $(".iphone-14").css({"display": "block"});
        $(".iphone-pass").css({"display": "none"});
        $(".phone-footer").css({"display": "none"});
    }
}, 1000);