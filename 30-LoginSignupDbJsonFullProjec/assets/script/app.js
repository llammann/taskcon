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
})
