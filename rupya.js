
function addToWishlist(i) {
  let book = books.find(presentbook => presentbook.id === i);
  if (!book) return;
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.find(b => b.id === book.id)) {
     wishlist = wishlist.filter(b => b.id !== book.id);
     localStorage.setItem('wishlist', JSON.stringify(wishlist));
      return;
    }

  wishlist.push(book);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

}





function toggleWishlist(button) {
  let svg = button.querySelector("svg");
  if (svg.getAttribute("fill") === "white") {  
      svg.setAttribute("fill", "red");
  } else {
      svg.setAttribute("fill", "white");  
  }
}

