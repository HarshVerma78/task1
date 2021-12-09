
   var json = [
    {
        "pname":"Womens Apparel",
        "price":1.22,
        "imglink":"./img/womenf.webp"
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
        "pname":"women's dress",
        "price":4.43,
        "imglink":"./img/women3.jpeg"
    },
    {
        "pname":"Mens Shirt",
        "price":5.22,
        "imglink":"./img/mensf.jpg"
    },
    {
        "pname":"women's Apparels",
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







var quantity= document.getElementById("qty").value
console.log(quantity)
var plusbutton = document.getElementsByClassName("plus")
var au = 1;
if (quantity >= "0") {
    
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


var prodarray = [];

for (var i=0; i<json.length; i++) {
            
    prodarray += '<div class="col-md-3 c"><div class="card w"><img src='+ json[i].imglink +' alt=""><ul class=" action"><li ><i class="fa fa-heart" aria-hidden="true"></i><span>favourites</span></li><li ><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>cart</span></li><li ><a href="./productView.html?id='+ i +'"><i  class="fa fa-eye" aria-hidden="true"></i></a><span>see</span></li></div><div class="details"><h6>'+ json[i].pname +'</h6><div class="star"></div><p> $'+ json[i].price +'</p></div></div>';
    // you need to write each key name here
  }


$(".pro").html(prodarray)




  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = "<b>" + days + "</b> Day        <b> " + hours + "</b> Hour       <b>"
    + minutes + "</b> Min       <b>" + seconds + "</b> Sec    ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);






$(".cat").hover(function(){
  $(this).css("border-bottom","3px solid red");
},function(){
  $(this).css("border-bottom","0px solid red");
})


var n = 3;
var array = $(".star");
for (let j = 0; j < array.length; j++) {
  
  for (let i = 0; i < n; i++) {
    array[j].innerHTML += `<span class="checked"><img src="./img/star.png"></span> ` ;
  }
}


var width = window.innerWidth

if(width < 776 && width >= 400){
$(".c").addClass("col-md-4");
$(".c").removeClass("col-md-3")
}

if(window.innerWidth > 776){
$(".c").removeClass("col-md-4");
$(".c").addClass("col-md-3")
}



$(document).ready(function() {
			$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		});

if (window.width< 660) {
  $(".categories").removeClass("d-flex")
}

else {
  $(".categories").removeClass("col-cat")
}
        
//  var li = $(".action").children();    
//  console.log(li)   

// $(".card").hover(function(){
//   this.li.css("transform","translateX(0px)")
//   this.li.css("visibility","visible")
// },function(){
//   this.li.css("transform","translateX(25px)")
//   // li.css("visibility","hidden")

// })

