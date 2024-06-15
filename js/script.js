var elements = document.getElementsByClassName("book-link");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    window.location.href = 'book.html';
  });
}

var el = document.getElementById("home-link");
el.addEventListener('click', function() {
  window.location.href = 'index.html';
});