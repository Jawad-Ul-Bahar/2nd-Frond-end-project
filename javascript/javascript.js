
// setTimeout(function() {
//   var elements = document.querySelectorAll('.smallheading');
//   for (var i = 0; i < elements.length; i++) {
//       elements[i].classList.add('show');
//   }
// }, 0);


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
  );
}

var elements = document.querySelectorAll('.slowshow1');

window.addEventListener('scroll', function() {
  for (var i = 0; i < elements.length; i++) {
      if (isElementInViewport(elements[i])) {
          elements[i].classList.add('show');
      }
  }
});


 


