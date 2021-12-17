console.log('Ajax is starting..')

// $("#demo").click(function(){
// 	// Here Ajax ....
// 	$.ajax({
// 		// Url 
// 		url:'http://api.open-notify.org/iss-now.json',
// 		// SET TYPE
// 		type:'GET',
// 		// SET DATATYPE
// 		dataType: 'json',
// 		// WAITING TIME
// 		timeout:2500,
// 		success: function(result){
// 			console.log("Complete without sucess",result);
// 		},
// 		error: function(result){
// 			console.log("Complete with error")
// 		},
// 		complete:function(){
// 			console.log("Complete")
// 		}



// 	})

// })

//
// $("#fetch").click(function(){
	
// 	// GET Method
// 	// $.get('http://api.open-notify.org/iss-now.json',{},function(response){
// 	// 	console.log("Request complete")
// 	// },'json'

// 	// GET JSON METHOD
// 	$.getJSON('http://api.open-notify.org/iss-now.json',{},function(){
// 	console.log("GetJSON using")
// });

// })

$(document).ready(function(){
  $("button").click(function(){
    $(".container").load("demo.txt");
  });
});

