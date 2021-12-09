
   var json = [
    {
        "pname":"Womens Apparel",
        "price":1.22,
        "imglink":"./img/womenf.webp",
        "brand":"Brand : SKMEIMore Men Watches from SKMEI",
        "desc":"Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        "pname":"Men's Apparels",
        "price":2.43,
        "imglink":"./img/menf2.jpg"
    },
    {
        "pname":"Kids Apparel",
        "price":8.22,
        "imglink":"./img/kidsf.jpeg"
    },
    {
        "pname":"omen's dress",
        "price":4.43,
        "imglink":"./img/women3.jpeg"
    },
    {
        "pname":"Mens Shirt",
        "price":5.22,
        "imglink":"./img/mensf.jpg"
    },
    {
        "pname":"Women's Apparels",
        "price":2.43,
        "imglink":"./img/womenf2.jpg"
    },
    {
        "pname":"men's Apparel",
        "price":1.22,
        "imglink":"./img/men3.jpg"
    },
    {
        "pname":"Women's Apparels",
        "price":2.43,
        "imglink":"./img/womenf.webp"
    },
]




const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')


document.getElementById("pname").innerHTML = json[id].pname
$("#pimg").attr("src",json[id].imglink) 
document.getElementById("brand").innerHTML = json[id].brand
document.getElementById("price").innerHTML = "$ "+ json[id].price
document.getElementById("desc").innerHTML =  json[id].desc



var n = 3;

  for (let i = 0; i < n; i++) {
    document.getElementById("star").innerHTML += `<span class="checked"><img src="star.png"></span> ` ;
  }



  
  var quantity= $("#qty").value
  console.log(quantity)
  var plusbutton = document.getElementsById("plus")
  var au = 0;
  if (quantity >= "1") {
      
      $(".plus").click(function(){
        console.log("plus clicked")
          au += 1
          $("#qty").attr("value",au)
      })
      
      $(".minus").click(function(){
        console.log("plus clicked")
          if (au > 0) {
              
              au -= 1
              $("#qty").attr("value",au)
          }
      })
  }
  
  else{
      console.log("qty cant be negative")
  }
  