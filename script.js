let container = document.getElementById("products");
let productid = document.getElementById("getid");
let delid = document.getElementById("deleteid");
let title = document.getElementById("title");
let src = document.getElementById("img");
let price = document.getElementById("price");
let category = document.getElementById("category");
let getProductbyid = document.getElementById("getProducts");
let geterror = document.getElementById("errormsg");
let deleteerror = document.getElementById("errormsgdel");

let allproducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },

  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },

  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },

  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on-screen and actual product.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },

  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  },

  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
  },

  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  },

  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  },

  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfer.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  },

  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up and shutdown.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
  },

  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash delivers high transfer speeds.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
  },

  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
  },

  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21.5 inches Full HD widescreen IPS display.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  },

  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    description: "49 inch super ultrawide curved gaming monitor.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  },

  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Winter jacket suitable for different climates.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  },

  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% polyurethane shell and polyester lining.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
  },

  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight rain jacket perfect for trips or casual wear.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
  },

  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description: "95% Rayon and 5% Spandex.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
  },

  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester short sleeve shirt.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
  },

  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95% Cotton, 5% Spandex casual short sleeve shirt.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
  },
];

function displayAllProducts() {
  container.innerHTML = `
        <table border="1" cellpadding="5px" style="border-collapse: collapse;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody>
                ${allproducts
                  .map(
                    (product) => `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.title}</td>
                        <td>$${product.price}</td>
                        <td>${product.category}</td>
                        <td>
                        <img src="${product.image}" width="80"> </td>
                    </tr>
                `,
                  )
                  .join("")}
            </tbody>
        </table>
    `;
}

function addProduct() {
  if (
    title.value.trim() === "" ||
    price.value.trim() === "" ||
    src.value.trim() === "" ||
    category.value.trim() === "" ||
    description.value.trim() === ""
  ) {
    return;
  } else {
    let productData = {
      title: title.value,
      price: Number(price.value),
      image: src.value,
      category: category.value,
    };

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        data.id = allproducts.length + 1;

        allproducts.push(data);

        displayAllProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function getProduct() {
  let user = productid.value;
  if (user === "") {
    geterror.style.color = "red";
    geterror.textContent = "Enter the id";
  } else if (user > 0 && user <= 20) {
    fetch(`https://fakestoreapi.com/products/${user}`)
      .then((res) => res.json())

      .then((data) => {
        getProductbyid.style.color = "maroon";
        getProductbyid.innerHTML = `
            <div>
                <h4>Product ${user} is displayed</h4>
                <h2>id:${data.id}</h2>
                <h2>title:${data.title}</h2>
                <img src="${data.image}" width="150">
                <h2>price:${data.price}</h2>
            </div>
        `;

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        return showError("Enter the correct id " + error);
      });
  } else {
    getProductbyid.style.color = "maroon";

    getProductbyid.innerHTML = `
        <div>
            <h4>Product ${user} is displayed</h4>
            <h2>id: ${allproducts[user - 1].id}</h2>
            <h2>title: ${allproducts[user - 1].title}</h2>
            <img src="${allproducts[user - 1].image}" width="150">
            <h2>price: ${allproducts[user - 1].price}</h2>
        </div>
    `;
  }
}

function deleteProduct() {
  if (delid.value === "") {
    deleteerror.style.color = "red";
    deleteerror.textContent = "Enter the id";
  } else {
    fetch(`https://fakestoreapi.com/products/${delid.value}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => 
      {
      console.log(data);
      allproducts.splice(data.id - 1, 1);
      deleteerror.style.color="red"
      deleteerror.textContent=`${data.id} Product Data Deleted`
      displayAllProducts();
      }
    );
    
  }
}

function reset() {
  productid.value = "";
  delid.value = "";
  title.value = "";
  src.value = "";
  price.value = "";
  geterror.textContent = "";
  deleteerror.textContent = "";
  container.innerHTML = displayAllProducts();
  getProductbyid.innerHTML = "";
}


displayAllProducts();
