document.addEventListener('DOMContentLoaded', function() {
    
    [].forEach.call( document.querySelectorAll('.button'), function(el) {
       el.addEventListener('mouseover', function() {
         //console.log(el.getAttribute("class"));
         document.body.setAttribute("class", el.getAttribute("class") );
      }, false);
     
    });
   
});
