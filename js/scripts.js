$(document).ready(function() {
    var height = parseInt(prompt("How tall are you? (in inches)"));
  

  if (height < 40){
    $('#intro').text(`You are too short for any rides, sorry.`)
  } else if (height < 46) {
      $('#not-tall-enough').addClass("backgroundColor");
    } else if (height > 46 && height < 58) {
      $('#not-tall-enough').addClass("backgroundColor");
      $('#mid-height').addClass("backgroundColor");
    } else if (height > 58) {
      $('#not-tall-enough').addClass("backgroundColor");
      $('#mid-height').addClass("backgroundColor");
      $('#tall').addClass("backgroundColor");
    }
   
  });