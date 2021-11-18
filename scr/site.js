$("#menu-toggle").click(function(e) {
  	e.preventDefault();
 	$("#wrapper").toggleClass("toggled");
});

function openNav() {
  	document.getElementById("mySidenav").style.width = "250px";
  	document.getElementById("side-bar-1").style.opacity = "100";
}

function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
  	document.getElementById("side-bar-1").style.opacity = "0";
}


function tabList(evt, listName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(listName).style.display = "block";
  evt.currentTarget.className += " active";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function contextScroll(itemName){
 var target = document.getElementById(itemName);
 var headerHeight = 120;        
        $('html,body').animate({
          scrollTop: $(target).offset().top - headerHeight
        }, 500);
}

function faqClose() {
  $('.show').removeClass("show");
  $('.accord-link').addClass("collapsed");
}



$(".meter > span").each(function () {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate(
      {
        width: $(this).data("origWidth")
      },
      1200
    );
});

