$(document).ready(function() {
  console.log("ready!");
  const uploadBtn = document.querySelector("#upload-btn");

  uploadBtn.addEventListener("click", function(e) {
    //
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      console.log(reader.result)
     //preview.src = reader.result;
    };
    
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position.coords.latitude,position.coords.longitude)       
      
    }, function(){
      console.log("error")
    });

    console.log("cl", file.result);
  });
});

/*

*/
