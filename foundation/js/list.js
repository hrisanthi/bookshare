$(document).ready(function(){
    initialize();
    choosePhoto();
    okay();
    
     
    
   
});


var htmlBuilder;
var emailAddress;

function initialize() {


    var parseAPPID="zK8NuhYO40bSVrNzFs8yEJjyvu10JqISWX4ExHQg";
    var parseJSID="8PIiPYg1TWQASIr4Onnz1ofBRqJ5rPFURdPO5aEI"
    
    Parse.initialize(parseAPPID, parseJSID);
    
    var UNCBookShare = Parse.Object.extend("UNCBookShare");
    var htmlBuilder = [];
    getList(UNCBookShare);
} 

    function search() {
            console.log("search")
    var index={};
    index.classId=$("#classId").val();
    index.bookId=$("#bookId").val();

    var UNCBookShare = Parse.Object.extend("UNCBookShare");
    console.log(UNCBookShare);
    var query = new Parse.Query(UNCBookShare);
        query.get(index, {
          success: function(UNCBookShare) {
    // The object was retrieved successfully.
  },
          error: function(object, error) {
          // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
  }
});
        
}

function emailStuff(emailAddress){
 console.log("email")

 console.log(emailAddress);
    window.plugin.email.isServiceAvailable(
    function (isAvailable) {
        // alert('Service is not available') unless isAvailable;
        window.plugin.email.open({
        to:      [emailAddress],
        cc:      Array,
        subject: String,
        body:    String,
});
    }
);
}


function getList(UNCBookShare){
    console.log("getList" + UNCBookShare);
    var query = new Parse.Query(UNCBookShare);
    query.find({
        success: function(results) {
            console.log(results);
            $.each(results, function( index, value ) {
            console.log(results[index].attributes);
            var x = results[index].attributes.email;
            var imageObject;
            imageObject= results[index].attributes.pic;
            //console.log(imageObject);
            
            if (imageObject != undefined) {
                console.log("Image Object length: " + imageObject);
                var imageURL = imageObject._url;
                imageURL = "<br/><img src='" + imageURL + "'></p>";
            
	    }
	
                                
            htmlBuilder +='<tr>'+'<td>'+ imageURL +
            '<h5>'+ results[index].attributes.name + '</h5>' + 
            '<p>'+ results[index].attributes.bookTitle +'</p>' + 
            '<p>'+ results[index].attributes.classTitle +'</p>' +
            '<p>'+ results[index].attributes.classNumber +'</p>'+
            '<p>'+ results[index].attributes.department+'</p>'+
            
            '<button value="Email" onclick="emailStuff(\''+ x + '\');">Email</button>' +
           
            '</td>'+'</tr>'
               
                                
                                
			
            
             });
            
            $("#books").html(htmlBuilder);
        },
        
        error: function(error) {
             //$.mobile.loading("hide");
        }
        
    });
    
    function choosePhoto(){
        //alert("capture button working");
    navigator.camera.getPicture(gotPic,failHandler,{sourceType:0, destinationType:0, quality:10});
}  
 
	
	function gotPic(data) {
		console.log('got here');
		imagedata = data;
		cameraPic.src = "data:image/jpeg;base64," + data;
		//$("#takePicBtn").text("Picture Taken!").button("refresh");
	}
	
	function failHandler(e) {
		alert("ErrorFromC");
		alert(e);
		console.log(e.toString());
	}
 
	function cleanUp() {
		imagedata = "";
		//$("#submitBtn").removeAttr("disabled").button("refresh");
		$("#caption").val("");
		//$("#takePicBtn").text("Add Pic").button("refresh");
	}
 
//});

 


function okay(message) {
}
}

