var cookie=document.querySelector("#cookie");
function remove() {
    cookie.remove();
}

function alertC() {
alert("Loading weather report...");
}
var highTemperatures = document.querySelectorAll(".high");
var lowTemperatures = document.querySelectorAll(".low");

function convDeg() {
 

        highTemperatures.forEach(function(element) {
            var temp = parseInt(element.innerHTML);
            temp = parseInt(Math.round(temp * 9 / 5) + 32);
            element.innerHTML = temp + "°F";
        });

        lowTemperatures.forEach(function(element) {
            var temp1 = parseInt(element.innerHTML);
            temp1 =parseInt(Math.round(temp1 * 9 / 5) + 32);
            element.innerHTML = temp1 + "°F";
        });
    }