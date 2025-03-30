const addBookTitle = document.getElementById('addTitle'),
addAuthorName = document.getElementById('addName'),
addPrice = document.getElementById('addPrice'),
addImg = document.getElementById('addImgURL'),
addCategory = document.getElementById('addCategory'),
updateBookButton = document.getElementById('updateBookButton');
categoriesArr = {
    'fiction' : fictionContainer,
    'non-fiction' : nonfictionContainer,
    'science' : scienceContainer,
    'horror' : horrorContainer,
    'fantasy' : fantasyContainer
}

let j = 62;

console.log(document.getElementsByClassName('remove'));

updateBookButton.addEventListener("click", () => {
    added_updateContainerInnerHtml(categoriesArr[addCategory.value.trim().toLowerCase()], j);
    console.log(document.getElementsByClassName('remove'));

    alert("New Book Added");
    
    categoriesArr[addCategory.value.trim().toLowerCase()].scrollIntoView({block: "center"});
    
    addBookTitle.value = '';
    addAuthorName.value = '';
    addPrice.value = '';
    addImg.value = '';
    addCategory.value = '';
    
    i++;
});

function added_updateContainerInnerHtml(Container, i) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("bookCard");

  bookDiv.innerHTML = `
        <img src=${addImg.value} alt="">
        
        <div class="overlay">
          <a href="" class="bookmark"><svg xmlns="http://www.w3.org/2000/svg" height="18px"
                          viewBox="0 -960 960 960" width="24px" fill="#fff">
                          <path
                              d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                      </svg></a>
            <h3>${addBookTitle.value}</h3>
            <p>-${addAuthorName.value}</p>
            <p>₹${addPrice.value}</p>
            <div class="buttons">
                <button class="details">Details</button>
                <button>Buy</button>
            </div>
            <button class="remove">Remove</button>
        </div>`;

    Container.prepend(bookDiv);
    RemoveBooks();
  }