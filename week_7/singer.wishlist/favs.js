sin_url = "http://localhost:3000/singers";
let cards = document.querySelector(".cards");
axios(sin_url).then((res) => {
  let datas = res.data;
  datas.forEach((singer) => {
    cards.innerHTML += `
    <div class="col-4">
    <div class="my_card card" style="width: 18rem;">
    <div class="img_wrapper"><img src="${singer.image}" class="my_card_img card-img-top" alt="..."></div>
    <div class="my_card_body card-body">
        <h5 class="my_card_name card-title">${singer.name}</h5>
        <p class="my_card_text card-text"><span class="name">${singer.name}</span> is <span
                class="nationality">${singer.nationality}</span></p>
        <button class="trash_btn p-3 btn btn-secondary"><i class="fa-solid fa-trash fa-2x"
                style="color: #c92626;"></i></button>
        <button name="${singer.id}" class="fav_btn  p-3 btn btn-secondary"><i class="fa-solid fa-heart fa-2x"
                style="color: #b82828;"></i></button>

    </div>
</div>
</div>
`;
    let fav_btns = document.querySelectorAll(".fav_btn");
    fav_btns.forEach((fav_btn) => {
      fav_btn.addEventListener("click", function () {
        console.log("test");
        let card = this.closest(".col-4");
        console.log("hi b");
        console.log(card);
        let id = this.name;
        console.log(id);

        // let arr = [];

        // let localFavArr = JSON.parse(localStorage.getItem("fav"));

        // if (localFavArr) {
        //   arr = [...localFavArr];
        // }

        // console.log(arr);
        // console.log(arr[0]);
        // console.log(favIcons[0]);
      });
    });
  });
});
