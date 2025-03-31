const book_search = document.querySelector(".search");
let bookContainer = document.querySelector(".bookS");
const addBookSection = document.querySelector(".addBookSection");
const sort = document.querySelector(".sort");
const welcome = document.querySelector(".welcome");

book_search.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let bookName = book_search.value.trim().toLowerCase();
    welcome.style.display = "none";
    // welcome.innerHTML = "";
    // welcome.outerHTML = "";
    bookContainer.innerHTML = "";
    addBookSection.innerHTML = "";
    addBookSection.classList.remove("addBookSection");
    console.log(bookName);

    function SearchBook() {
      let found = false;
      books.forEach((book) => {
        if (book.title.toLowerCase().includes(bookName) || book.author.toLowerCase().includes(bookName)) {
          found = true;
          
          window.addEventListener("scroll", function () {
            let navbar = document.querySelector("#navbar");
            const search_btn = document.querySelector('.search-box');
          
            if (window.scrollY < 50){
              navbar.style.background = "#23282f";
              search_btn.style.background = '#23282f';
            }
            
            
          });
          



          bookContainer.style.display = "flex";
          bookContainer.style.marginTop = "70px"
          bookContainer.style.marginBottom = "30px"
          bookContainer.style.justifyContent = "center";
          bookContainer.style.alignItems = "center";
          bookContainer.style.background = "#f8f9fa"
          bookContainer.innerHTML += `
                    
                    <div class="Searchedbook" id="search-book">
                    
                        <img src="${book.image}" alt="" class="bookimage">
                        <div class="details">
                        
                            <h3 class="searchtitle">${book.title}</h3>
                            <p class ="author">-${book.author}</p>
                            <p class ="author">₹${book.price}</p>
                            
                            
                       
                        
                        <p class ="detail">${book.about}</p>
                        
              <div class="buy">
              <button class="buybutton">Buy</button>
              </div>
        
                        </div> 
                        
                        
    <a class="wishlist"><svg xmlns="http://www.w3.org/2000/svg" height="18px"
                          viewBox="0 -960 960 960" width="24px" fill="black">
                          <path
                              d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                      </svg></a>
  </p>

 
                      
                        
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
        bookContainer.innerHTML = "<p class=\"notfound\">No book found.</p>";

      }
    }

    SearchBook();
  }
});

let fictionArray = []
let nonfictionArray = []
let scienceArray = []
let horrorArray = []
let fantasyArray = []

function createArray(name, category) {
  for (let i = 0; i < category.length; i++) {
    name.push(category[i]);
  }
  return name
}

  createArray(fictionArray,fiction).sort(function (a, b) { return a.price - b.price });
  createArray(nonfictionArray,nonfiction).sort(function (a, b) { return a.price - b.price });
  createArray(scienceArray,science).sort(function (a, b) { return a.price - b.price });
  createArray(horrorArray,horror).sort(function (a, b) { return a.price - b.price });
  createArray(fantasyArray,fantasy).sort(function (a, b) { return a.price - b.price });


  let categoryMap = {
    'Fiction': fictionArray,
    'Non-Fiction': nonfictionArray,
    'Science': scienceArray,
    'Horror': horrorArray,
    'Fantasy': fantasyArray,
  };



  function addSortedbooks(bookArray, container) {
    container.innerHTML = "";
    bookArray.forEach((book_catag) => {
      container.innerHTML += `
           <div class="bookCard"  id="${book_catag.id}">
          <img src="${book_catag.image}" alt="">
        
        <div class="overlay">
          <a href="" class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" height="18px"
                            viewBox="0 -960 960 960" width="24px" fill="#fff">
                            <path
                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                        </svg></a>
            <h3>${book_catag.title}</h3>
            <p>-${book_catag.author}</p>
            <p>₹${book_catag.price}</p>
            <div class="buttons">
                <button class="details">Details</button>
                <button>Buy</button>
            </div>
            <button class="remove">Remove</button>
        </div>
        </div>
  
      `;
    });
  }

function sorting(e,id) {
  let catagory = e.previousElementSibling.innerText;
  console.log(catagory);
  addSortedbooks(categoryMap[catagory], document.querySelector(id));
  add_read_more();
  RemoveBooks();
}