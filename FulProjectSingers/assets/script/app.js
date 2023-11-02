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
        <div class="buttons d-flex">
        
        <a href="./detail.html?id=${singer.id}"><button class="detail_btn btn btn-outline-primary">Detail</button></a>
        
        <div class="right">
        <button name="${singer.id}" class="fav_btn"><i name="${singer.id}" class="favIcon fa-regular fa-heart fa-2x"
                style="color: #b82828;"></i></button></div>
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
      //       console.log(this.getAttribute("name"));

      console.log(this.classList);
      // this.classList.add("fa-solid");

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
      let wishlist = document.querySelector(".wishlist a sup");
      let favCount = JSON.parse(localStorage.getItem("fav")).length;
      wishlist.textContent = favCount;
    });
  }
});

//  // ADD TO WISHLIST

//  let lokaldaki_fav_olunanlarin_idleri = JSON.parse(
//         localStorage.getItem("fav_olunanlarin_idleri")
//       );
//       let faved_icon_ids_array = [];
//       if (lokaldaki_fav_olunanlarin_idleri) {
//         faved_icon_ids_array = [...lokaldaki_fav_olunanlarin_idleri];
//       }

//       let fav_btns = document.querySelectorAll(".fav_btn");
//       for (let fav_btn of fav_btns) {
//         let icon = fav_btn.querySelector("i");
//         //       console.log(fav_btn.name);
//         for (let faved_icon_id of faved_icon_ids_array) {
//           if (faved_icon_id === fav_btn.name) {
//             icon.classList.remove("fa-regular");
//             icon.classList.add("fa-solid");
//           }

//           // console.log(icon);
//           fav_btn.addEventListener("click", function () {
//             if (icon.classList.contains("fa-regular")) {
//               icon.classList.remove("fa-regular");
//               icon.classList.add("fa-solid");
//               faved_icon_ids_array.push(datas[+this.getAttribute("name") - 1]);
//               localStorage.setItem("fav", JSON.stringify(arr));
//               //   JSON.
//             } else {
//               icon.classList.remove("fa-solid");
//               icon.classList.add("fa-regular");
//             }
//           });
//           fav_btn.addEventListener("click");
//         }
//       }
