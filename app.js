var isSidenavClosed = true;


function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "#e4d9ff";
  // document.getElementById("container").style.display = "none";
}

function closePage() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
}

function openSidenav() {
  document.getElementById("mysidenav").style.width = "250px";
  document.getElementById("canvas").style.backgroundColor = "#e4d9ff";
  var buttons = document.getElementsByClassName("utilityButtons");
  for (var i = 0; i < buttons.length; i++) {
    //buttons[i].style.backgroundColor = "#e4d9ff";
    buttons[i].style.display = "none";
  }
  document.getElementById("body").style.backgroundColor = "#e4d9ff";
  document.getElementById("drawingCanvas").style.display = "none";

  document.getElementById("canvas").style.borderLeftStyle = "none";
  document.getElementById("canvas").style.borderRightStyle = "none";
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function closeSidenav() {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementById("canvas").style.backgroundColor = "#fafaff";
  document.getElementById("body").style.backgroundColor = "#fafaff";
  document.getElementById("drawingCanvas").style.display = "block";
  document.getElementById("canvas").style.borderLeftStyle = "solid";
  document.getElementById("canvas").style.borderRightStyle = "solid";
  var timeoutID = window.setTimeout(function () {
    var buttons = document.getElementsByClassName("utilityButtons");
    for (var i = 0; i < buttons.length; i++) {

      buttons[i].style.display = "block";
    }
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "#fafaff";
    }
  }, 300);
}

function transformSidenav() {

  if (isSidenavClosed == true) {
    openSidenav();
    isSidenavClosed = false;
  }
  else {
    closePage();
    closeSidenav();
    isSidenavClosed = true;
  }
}

window.onload = function () {
}