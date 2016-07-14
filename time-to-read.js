$("window").ready(function timetoread(){
     var alltext = $("body").text();

    var array = alltext.split(" ")
    var length = array.length;
    var wpm = 230;
    var ttr = $('<p> '+length/wpm+' minutes to read </p>');
    $("body").append(ttr);


});
