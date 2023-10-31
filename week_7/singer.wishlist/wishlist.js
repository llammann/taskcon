sin_url = "http://localhost:3000/singers";
let cards = document.querySelector(".favs_cards");
axios(sin_url).then((res) => {
  let datas = res.data;
  datas.forEach((singer) => {
    let fav_btns = document.querySelectorAll(".fav_btn");
    fav_btns.forEach((fav_btn) => {
      fav_btn.addEventListener("click", function () {
        favs_cards.innerHTML += `
    <div class="favs_cards row">
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
      });
    });
  });
});
