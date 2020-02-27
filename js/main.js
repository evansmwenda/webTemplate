filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("columne");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//Add active class to the current button (highlight it)
// Get the container element
var btnContainer = document.getElementById("myBtnContainer");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn1");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

$(document).ready(function () {

  
  $('a').on("click",function(e){
    
    
    $($(this).data('target')).scrollTo();
    
  });
});

/*
* ScrollToElement 1.0
* Copyright (c) 2009 Lauri Huovila, Neovica Oy
*  lauri.huovila@neovica.fi
*  http://www.neovica.fi
*  
* Dual licensed under the MIT and GPL licenses.
*/

(function($) {
    $.scrollToElement = function($element, speed) {

        speed = speed || 750;

        $("html, body").animate({
            scrollTop: $element.offset().top,
            scrollLeft: $element.offset().left
        }, speed);
        return $element;
    };

    $.fn.scrollTo = function(speed) {
        speed = speed || "normal";
        return $.scrollToElement(this, speed);
    };
})(jQuery);


