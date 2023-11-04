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


        <button name="${meal.id}" class="basket_btn btn"><i class="fa-solid fa-cart-shopping fa-2x"></i></button>
        </div>
        </div>
    </div>
</div>
</div>
`;
  });
  // add basket

  let basket_btns = document.querySelectorAll(".basket_btn");
  let meals_at_basket = [];
  let isEmpty;
  if (JSON.parse(localStorage.getItem("basketed_meals"))) {
    meals_at_basket = [...basketed_meals];
    isEmpty = false;
  } else {
    isEmpty = true;
  }

  if (isEmpty) {
    console.log("hi");
    for (let basket_btn of basket_btns) {
      basket_btn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(this.name);
        let new_meal = {
          id: this.id,
          count: 1,
        };
        meals_at_basket.push(new_meal);

        console.log("test", meals_at_basket);
        localStorage.setItem("basketed_meals", JSON.stringify(meals_at_basket));
      });
    }
  } else {
    for (let basket_btn of basket_btns) {
      basket_btn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(this.name);
        for (let meal of meals_at_basket) {
          if (meal.id === this.name) {
            meal.count++;
          } else {
            let new_meal = {
              id: this.id,
              count: 1,
            };
            meals_at_basket.push(new_meal);
          }
          console.log("test", meals_at_basket);
          localStorage.setItem(
            "basketed_meals",
            JSON.stringify(meals_at_basket)
          );
        }
      });
    }
  }
});
