let container = document.getElementById("products");
let productid = document.getElementById("getid");
let delid = document.getElementById("deleteid");
let title=document.getElementById("title");
let src=document.getElementById("img");
let price=document.getElementById("price");


function addProduct() {
  
  const product = { title:title.value, price: price.value ,image: src.value };
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) =>
    {

        container.innerHTML = `
            <div>
                <h4>Product is Added</h4>
                <h2>${data.title}</h2>
                <img src="${data.image}" width="150">
                <h2>$${data.price}</h2>
            </div>
        `;

    }
    
    );
}

function getProduct() {
  let user = productid.value;
  if (user === "") {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((product) => {
          container.innerHTML += `
            <div>
                <h2>${product.title}</h2>
                <img src="${product.image}" width="150">
                <h2>$${data.price}</h2>
            </div>
        `;
        });
      });
  } else {
    fetch(`https://fakestoreapi.com/products/${user}`)
      .then((res) => res.json())

      .then((data) => {
        container.style.color = "black";
        container.innerHTML = `
            <div>
                <h4>Product ${user} is displayed</h4>
                <h2>${data.title}</h2>
                <img src="${data.image}" width="150">
                <h2>$${data.price}</h2>
            </div>
        `;
      })
      .catch((error) => {
        console.log(error);
        return showError("Enter the correct id " + error);
      });
  }
}

function deleteProduct() {
  fetch(`https://fakestoreapi.com/products/${delid.value}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = `
            <div>
                <h5>Product Deleted</h5>
                <h2>${data.title}</h2>
                <img src="${data.image}" width="150">
            </div>
        `;
    })
    .catch((error) => {
      console.log(error);
      return showError("Enter the correct id " + error);
    });
}

function reset() {
  container.innerHTML = "";
  productid.value = "";
  delid.value = "";
  title.value="";
  src.value="";
  price.value="";
}

function showError(errormsg) {
  container.style.color = "red";
  container.innerHTML = `${errormsg}`;
}
