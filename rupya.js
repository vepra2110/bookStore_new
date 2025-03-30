
function addToWishlist(i) {
  let book = books.find(boo => boo.id === i);
  if (!book) return;
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.find(b => b.id === book.id)) {
     wishlist = wishlist.filter(b => b.id !== book.id);
     localStorage.setItem('wishlist', JSON.stringify(wishlist));
      return;
    }

  wishlist.push(book);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  // Addingbooksinwishlist(book.category, document.getElementById('wishlist-container'));

  alert(`${book.title} has been added to your wishlist!`);
}

// let bookmark = document.getElementsByClassName('bookmark');
// bookmark.forEach(element => {
//   element.addEventListener('click', () => {
//     i=element.parentElement.parentElement.id;
//     console.log(i)
//     addToWishlist(i);
//   })  
// });
