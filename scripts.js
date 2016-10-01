$(document).ready(function() {
  $.getJSON("https://github.com/GETHIP-Classroom/2017-hw2-ogong500/blob/master/owen.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.nickNames, function(key, value){
      $("#nicknames").append("<li>" + value.nick + "</li>");
    $.each(data.mixTape, function(key, value){
      $("#mixtape").append("<li>" + value.mix + "</li>");
    });
  });
});
