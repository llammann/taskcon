let username_inp = document.querySelector(".username");
let password_inp = document.querySelector(".password");
let users_url = "http://localhost:3000/users";
console.log(username_inp.value);

let myform = document.querySelector(".myform");
myform.addEventListener("submit", function (event) {
  event.preventDefault();
  let username_inp = document.querySelector(".username");
  let password_inp = document.querySelector(".password");
  let index_body = document.querySelector(".index_body");

  //   console.log(username_inp.value);
  axios(users_url).then((res) => {
    let users = res.data;
    users.forEach((user) => {
      if (user.name === username_inp.value) {
        index_body.innerHTML += `
            <div class="container">
            <!-- NAV start -->
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="all navbar-brand" href="#">All Product</a>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="nav_list navbar-nav">
    
                            <li class="men nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Men's clothing</a>
                            </li>
    
                            <li class="women nav-item">
                                <a class="nav-link" href="#">Women's clothing</a>
                            </li>
    
                            <li class="jewelery nav-item">
                                <a class="nav-link" href="#">Jewelry</a>
                            </li>
    
                            <li class="electronics nav-item">
                                <a class="nav-link" href="#">Electronics</a>
                            </li>
    
                            <li class="filter nav-item dropdown">
                                <select class="se_op form-select" aria-label="Default select example">
                                    <option class="filter" value="0">Filter</option>
                                    <option class="price_low" value="1">Price low</option>
                                    <option class="price_high" value="2">Price high</option>
                                    <option class="rating_low" value="3">Rating low</option>
                                    <option class="rating_high" value="4">Rating high</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- NAV end -->
    
            <!-- MAIN start -->
            <main>
                <!-- BASKET -->
                <button class="to_basket btn btn-outline-success"><a href="./basket.html">Go to BASKET</a></button>
                <!-- PRODUCTS -->
                <div class="products mt-3">
                    <div class="container">
                        <div class="cards row row-cols-1 row-cols-2 row-cols-3 row-cols-md-4 g-4">
                            <!-- <div class="card col-3 p-3">
                                <div class="img_wrapper mb-2">
                                    <img src="https://picsum.photos/200" class="card-img-top" alt="...">
                                </div>
    
                                <div class="articles">
                                    <p class="title">
                                        Name:
                                    </p>
                                    <p class="price">
                                        Price:
                                    </p>
                                    <p class="category">
                                        Category:
                                    </p>
                                    <ul class="rating">
                                        Rate:
                                        <li class="rate">Rate</li>
                                        <li class="count">Count</li>
                                    </ul>
    
                                </div>
                                <div class="buttons">
                                    <button class="basket_icon">
                                        <i class="fa-solid fa-basket-shopping fa-2x"></i>
                                    </button>
                                    <button class="fav_icon"><i class="fa-regular fa-heart fa-2x"></i></button>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </main>
            <!-- MAIN end -->
        </div>
    
            `;
      }
    });
  });
});
