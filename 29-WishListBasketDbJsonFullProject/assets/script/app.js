sin_url = "http://localhost:3000/singers";
let cards = document.querySelector(".cards");
axios(sin_url).then((res) => {
  let datas = res.data;
  datas.forEach((singer) => {
    cards.innerHTML += `
    <div class="col-3 mb-4">
    <div class="my_card card" style="width: 16rem;">
    <div class="img_wrapper"><img src="${singer.imagelink}" class="my_card_img card-img-top" alt="..."></div>
    <div class="my_card_body card-body">
        <h5 class="my_card_name card-title">${singer.name}</h5>
        <p class="my_card_text card-text"><span class="name">${singer.name}</span> is <span
                class="nationality">${singer.nationality}</span></p>
        <div class="buttons d-flex m-0">
        
        <a href="./detail.html?id=${singer.id}"><button class="detail_btn btn btn-outline-primary">Detail</button></a>
        
        <div class="right">
        <button name="${singer.id}" class="fav_btn"><i name="${singer.id}" class="favIcon fa-regular fa-heart fa-2x" style="color: #b82828;"></i></button></div>
        </div>

    </div>
</div>
</div>
`;
  });

  // ADD TO WISHLIST

  let favIcons = document.querySelectorAll(".favIcon");

  let arr = [];

  let localFavArr = JSON.parse(localStorage.getItem("fav"));

  let wishlist = document.querySelector(".wishlist a sup");

  if (JSON.parse(localStorage.getItem("fav"))) {
    let favCount = JSON.parse(localStorage.getItem("fav")).length;
    wishlist.textContent = favCount;
  }

  if (localFavArr) {
    arr = [...localFavArr];
  }

  for (let icon of favIcons) {
    //     console.log(icon.getAttribute("name"));
    for (let elem of arr) {
      //       console.log(elem);
      if (icon.getAttribute("name") == elem.id) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      }
    }

    icon.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();

      console.log(this.classList);

      if (this.classList.contains("fa-solid")) {
        this.classList.add("fa-regular");
        this.classList.remove("fa-solid");
        arr = arr.filter((elem) => elem.id != this.getAttribute("name"));
        localStorage.setItem("fav", JSON.stringify(arr));
        console.log(arr);
        // count --
        let wishlist = document.querySelector(".wishlist a sup");
        let favCount = JSON.parse(localStorage.getItem("fav")).length;
        wishlist.textContent = favCount--;
      } else {
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
        arr.push(datas[+this.getAttribute("name") - 1]);
        localStorage.setItem("fav", JSON.stringify(arr));
        // count ++

        let wishlist = document.querySelector(".wishlist a sup");
        let favCount = JSON.parse(localStorage.getItem("fav")).length;
        wishlist.textContent = favCount++;
      }
    });
  }
});
