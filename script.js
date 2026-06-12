const items = [
 {name:"Laptop", price:50000},
 {name:"Phone", price:20000},
 {name:"Headphones", price:3000},
 {name:"Keyboard", price:1500}
];

function showProducts(data){

 const container =
 document.getElementById("products");

 container.innerHTML = "";

 data.forEach(product=>{

  container.innerHTML += `
   <div class="card">
     <h3>${product.name}</h3>
     <p>₹${product.price}</p>
   </div>
  `;
 });
}

showProducts(items);

document
.getElementById("search")
.addEventListener("input",e=>{

 const text =
 e.target.value.toLowerCase();

 const filtered =
 items.filter(item=>
 item.name.toLowerCase()
 .includes(text)
 );

 showProducts(filtered);
});
