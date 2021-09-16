setTimeout(() => {
    let person = prompt("Please enter your name", "isim")
    if (person != null) { document.getElementById("myName").innerHTML = person; }
}, 300);


//<div id="myClock" class="clock" onload="showTime()"
setInterval(showTime, 1000)
function showTime() {
    var d = new Date();
    var t = d.toLocaleDateString("tr-TR", {
        hour: 'numeric', minute: 'numeric', second: 'numeric', weekday: 'long'
    });
    document.getElementById("myClock").innerHTML = t;

    /*     var d = new Date();
        var t = d.toLocaleTimeString('tr-TR', { hour12 : false});
        const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
        var n = weekday[d.getDay()];
        document.getElementById("myClock").innerHTML = t + "  " + n; */
}

