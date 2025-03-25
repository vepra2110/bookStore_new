const book_search = document.querySelector(".search");
let bookContainer = document.querySelector(".bookS");



book_search.addEventListener("keydown", function (event) {
  let bookName = book_search.value.trim().toLowerCase();
  if (event.key === "Enter" && bookName) {
    
    bookContainer.innerHTML = "";
    console.log(bookName);

    function SearchBook() {
      let found = false;
      books.forEach((book) => {
        if (book.title.toLowerCase().includes(bookName) || book.author.toLowerCase().includes(bookName)) {
          found = true;
          
          

          bookContainer.style.display = "flex";
          bookContainer.style.marginTop = "630px"
          bookContainer.style.marginBottom = "30px"
          bookContainer.style.justifyContent = "center";
          bookContainer.style.alignItems = "center";
          bookContainer.style.background ="#f8f9fa"
          bookContainer.innerHTML += `
                    
                    <div class="Searchedbook" id="search-book">
                    
                        <img src="${book.image}" alt="" class="bookimage">
                        <div class="details">
                        
                            <h3 class="searchtitle">${book.title}</h3>
                            <p class ="author">-${book.author}</p>
                            
                            
                       
                        
                        <p class ="detail">${book.about}</p>
                        
              <div class="buy">
              <button class="buybutton">Buy</button>
              </div>
        
                        </div> 
                        <button class="wishlistbutton" onclick="wishlistturn()">
                           <p id="btn" onclick="wishlistturn()">
    &#10084;
  </p>

 
                      </button>
                        
                    </div>
                    `;
//                     let clicked = false;
// function wishlistturn(){
//   clicked=!clicked
//   let wishlist = document.querySelector("#btn");
//   if(clicked){
//     wishlist.style.color = "red";
  
// }
// else{
// wishlist.style.color = "red";
// }
// }           error wishlistturn is not defined
        }
     
    });

      if (!found) {
        bookContainer.innerHTML = "<p>No book found.</p>";
      }
    }

    SearchBook();
  }
});



