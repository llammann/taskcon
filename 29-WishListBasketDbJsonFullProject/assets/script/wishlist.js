let datas = [];
let arrLocalFav = JSON.parse(localStorage.getItem("fav"));

let wish_cards = document.querySelector(".wish_cards");

let favIcons = document.querySelectorAll(".favIcon");

if (arrLocalFav) {
  datas = arrLocalFav;
}
datas.forEach((data) => {
  wish_cards.innerHTML += `
      <div class="col-3 mb-4">
      <div class="my_card card" style="width: 16rem;">
      <div class="img_wrapper"><img src="${data.imagelink}" class="my_card_img card-img-top" alt="..."></div>
      <div class="my_card_body card-body">
          <h5 class="my_card_name card-title">${data.name}</h5>
          <p class="my_card_text card-text"><span class="name">${data.name}</span> is <span
                  class="nationality">${data.nationality}</span></p>
          <div class="buttons d-flex">
  
          <a href="./detail.html?id=${data.id}"><button class="detail_btn btn btn-outline-primary">Detail</button></a>
  
          <div class="right">
          <button name="${data.id}" class="fav_btn btn btn-outline-danger"><i name="${data.id}"class="favIcon fa-solid fa-heart fa-2x"
                  style="color: #b82828;"></i></button></div>
          </div>
  
      </div>
  </div>
  </div>
  `;

  let localFavArr = JSON.parse(localStorage.getItem("fav"));

  if (localFavArr) {
    arr = [...localFavArr];
  }
  for (let icon of favIcons) {
    icon.addEventListener("click", function () {
      arr = arr.filter((elem) => elem.id != this.getAttribute("name"));
      localStorage.setItem("fav", JSON.stringify(arr));
    });
  }
});

let nav_wishlist = document.querySelector(".nav_wishlist a sup");
if (JSON.parse(localStorage.getItem("fav"))) {
  let favCount = JSON.parse(localStorage.getItem("fav")).length;
  nav_wishlist.textContent = favCount;
}

// let nav_wishlist_sup = document.querySelector(".nav_wishlist a sup");
// nav_wishlist_sup.innerHTML = `${arr.length}`;
// console.log("hi");
