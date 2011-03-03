$(document).ready(function() {
  window.setInterval(function() {
    d = new Date();
    $("#lolipic").attr("src","webcam.jpg?"+d.getTime());
    }, 5000);
});