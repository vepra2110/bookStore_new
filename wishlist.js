//Adding hamberger menu
function hamberger() {
  document.getElementsByClassName('dropdown-menu')[0].style.display = "none";
  if (window.innerWidth <= 770) {
    const bars = document.getElementsByClassName('bars')[0];
    const cross = document.getElementsByClassName('close')[0];
    const link = document.getElementById('link');
    const nav = document.getElementsByClassName('nav');
    if (bars.style.display === "none") {
      cross.style.display = "none";
      bars.style.display = "block";
      link.style.display = "none";
    }
    else {
      bars.style.display = "none";
      cross.style.display = "block";
      link.style.display = "flex";
      link.style.justifyContent = "flex-end";
      link.style.position = "absolute";
      link.style.height = "100vh";
      link.style.background = "rgba(0, 0, 0, 0.8)";
      document.getElementsByClassName('dropdown-menu')[0].style.display = "block";
    }
  }
}

//Adding Animations cascading effect
const nav_item = document.getElementsByClassName('fade-in');
for (let i = 0; i < nav_item.length; i++) {
  const element = nav_item[i];
  element.style.animationDelay = (i < nav_item.length-3) ? `${(i + 1) / 10}s` : '0.3s';
}

//Creating a dropdown in Categories
document.getElementsByClassName('Categories')[0].addEventListener('click', function (e) {
  e.preventDefault();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});


    navbar.style.background = "#23282f";
    
  

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistContainer = document.getElementById('wishlist-container');
  wishlistContainer.innerHTML = '';
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p style="text-align: center; font-size: 18px; color: #555; margin-top: 20px;">Your wishlist is empty.</p>';
  }
  else {
    if(wishlist){
      wishlist.forEach((book, index) => {
        wishlistContainer.innerHTML += `
          <div class="bookCard"  id="${book.id}">
        <img src="${book.image}" alt="">
      
      <div class="overlay">
          <h3>${book.title}</h3>
          <p>-${book.author}</p>
          <p>₹${book.price}</p>
          <div class="buttons">
              <button class="details">Details</button>
              <button>Buy</button>
          </div>
          <button class="remove" onclick="removeFromWishlist('${book.id}')" >Remove</button>
      </div>
      </div>
        `;
      });
    }}

function removeFromWishlist(bookId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(element => element.id !== bookId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  displayWishlist();
}

  const footer = document.querySelector(".footer");
  const adjustFooterPosition = () => {
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    if (bodyHeight < windowHeight) {
      footer.style.position = "absolute";
      footer.style.bottom = "0";
      footer.style.width = "100%";
      footer.style.height = "auto"; // Adjust height to auto
    } else {
      footer.style.position = "static";
    }
  };

  adjustFooterPosition();
  window.addEventListener("resize", adjustFooterPosition);

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
  
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("theme-dark");
    }
  
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-dark");
  
        localStorage.setItem("theme", document.body.classList.contains("theme-dark") ? "dark" : "light");
    });
  });

  
  function add_read_more() {
    const read_more_btn = document.getElementsByClassName('details');
    for (let i = 0; i < read_more_btn.length; i++) {
      const element = read_more_btn[i];
      element.addEventListener('click', () => {
        const m = document.getElementsByClassName('modal')[0];
        if(!m){
        const bookId = element.parentElement.parentElement.parentElement.id;
        const book = wishlist.find(item => item.id === bookId);
        if (book) {
          console.log(book);
          const modal = document.createElement('div');
          modal.className = 'modal';
          modal.innerHTML = `
              <div class="modal-content">
                    <div class="modal-book-image">
                        <img src="${book.image}" alt="">
                    </div>
                    <div class="modal-desc">
                        <h2 class="modal-title">${book.title}</h2>
                        <h4 class="modal-author">${book.author}</h4>
                        <p class="modal-book-desc">${book.about}</p>
                    </div>
                    <div class="close-modal">
                        <span onclick="closeModal()">&times;</span>
                    </div>
                </div>
              `;
    
          document.body.append(modal);
          modal.style.display = 'flex';
        } else {
          console.error("Book not found in wishlist.");
        }
        }
      })
    }
  };

