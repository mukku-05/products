let http = new XMLHttpRequest();

http.open('get','products.json',true);

http.send();


http.onload = function(){

  if(this.readyState == 4 && this.status == 200){
    let products = JSON.parse(this.responseText);

    let output = "";

    for(let item of products){
      output += `
      <div class="products">
      <img src = "${item.image}" alt = "${item.image}">
      <p class = "title">${item.title}</p>
      <p class = "description">${item.description}</p>
      <p class = "rating">${item.rating}</p>
      <p class = "category">${item.category}</p>
      <p class = "id">${item.id}</p>

      <p class = "price">
      <span>${item.price}</span>
      <span>&euro;</span>
      </p>
      <p class = "cart">Add to cart <i class ="bx bx-cart-alt"></i></p>
      </div>
      
      `;
    }
    document.querySelector(".products").innerHTML = output;
  }
}