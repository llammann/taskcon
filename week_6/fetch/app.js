// company.name
// contact.name
// phone
// country

let row = document.querySelector(".row");

let url = "https://northwind.vercel.app/api/suppliers";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((user, index) => {
      //   console.log(user.id);
      row.innerHTML += `<div class="col-3">
    <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="company_name card-title">companyName:    ${user.companyName}</h5>
            <p class="contact_name card-text">countryName:    ${user.address?.country}</p>
            <p class="contact_name card-text">contactName:    ${user.contactName}</p>
            <p class="contact_name card-text">phone:    ${user.address?.phone}</p>
    
        </div>
        <div class="buttons">
        <button class="delete btn btn-danger" name=${user.id}>Delete</button>
        <button class="info btn btn-primary" name=${index}>Info</button>
    </div>
    </div>
    </div>`;
    });

    // DELETE
    let deleteBtns = document.querySelectorAll(".delete");
    for (let btn of deleteBtns) {
      //   console.log(btn);
      btn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.remove();
        console.log(this.parentElement.parentElement.parentElement);

        console.log(this.name);
        //elementi apiden silmek
        fetch(url + this.name, {
          method: "Delete",
        });
      });
      // end elementleri ekrandan sildik
    }

    // INFO

    let infoBtns = document.querySelectorAll(".info");
    for (let btn of infoBtns) {
      console.log(btn);
      btn.addEventListener("click", function () {
        Swal.fire({
          title: `${data[btn.name].companyName}`,
          text: `${data[btn.name].address?.city}`,
          text: `${data[btn.name].address?.phone}`,
          footer: `${data[btn.name].address?.country}`,
        });

        console.log(this.name);
        //elementi apiden silmek
        fetch(url + this.name, {
          method: "Delete",
        });
      });
      // end elementleri ekrandan sildik
    }
  });
