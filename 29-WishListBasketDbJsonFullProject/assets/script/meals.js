meal_url = "http://localhost:3000/meals";
let meals_cards = document.querySelector(".meals_cards");
axios(meal_url).then((res) => {
  let meals = res.data;
  meals.forEach((meal) => {
    meals_cards.innerHTML += `
    <div class="col-3 mb-4">
    <div class="my_card card" style="width: 16rem;">
    <div class="img_wrapper"><img src="${meal.imageLink}" class="my_card_img card-img-top" alt="..."></div>
    <div class="my_card_body card-body">
        <h5 class="my_card_name card-title">${meal.name}</h5>
        <p class="my_card_text card-text"><span class="name">${meal.price}</p>
        <div class="buttons d-flex w-100% m-0">
      
        <a href="./detail.html?id=${meal.id}"><button class="detail_btn btn btn-outline-primary">Detail</button></a>


        <button name="${meal.id}" class="btn btn-light basket_btn"><i name="${meal.id}" class="basIcon fa-regular fa-cart-shopping fa-2x"></i></button>
        </div>
        </div>
    </div>
</div>
</div>
`;
  });

  // ADD TO BASKET

  let basIcons = document.querySelectorAll(".basIcon");

  let bas_arr = [];

  let localBasArr = JSON.parse(localStorage.getItem("shop"));



  if (localBasArr) {
    bas_arr = [...localBasArr];
  }


  let basket = document.querySelector(".basket a sup");
  let basCount = (JSON.parse(localStorage.getItem("shop"))).length;
  basket.textContent = basCount;

  for (let icon of  basIcons) {
    //     console.log(icon.getAttribute("name"));
    for (let elem of bas_arr) {
      //       console.log(elem);
      if (icon.getAttribute("name") == elem.id) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      }
    }
  
    icon.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
            // console.log(this.getAttribute("name"));

      console.log(this.classList);
      // this.classList.add("fa-solid");

      if (this.classList.contains("fa-solid")) {
        this.classList.add("fa-regular");
        this.classList.remove("fa-solid");
        arr = arr.filter((elem) => elem.id != this.getAttribute("name"));
        localStorage.setItem("shop", JSON.stringify(bas_arr));
        console.log(bas_arr);
        // count --
        let basket = document.querySelector(".basket a sup");
        let basCount = (JSON.parse(localStorage.getItem("shop"))).length;
        basket.textContent = basCount--;
      } else {
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
        bas_arr.push(datas[+this.getAttribute("name") - 1]);
        localStorage.setItem("shop", JSON.stringify(bas_arr));
        // count ++

        let basket = document.querySelector(".basket a sup");
        let basCount = (JSON.parse(localStorage.getItem("shop"))).length;
        wishlist.textContent = favCount++;
      }

    });
  }
});

