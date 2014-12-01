document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    setUp();
};




//var htmlBuilder;
//var emailAddress;

function setUp() {
    
    console.log("setUp")
    var parseAPPID="zK8NuhYO40bSVrNzFs8yEJjyvu10JqISWX4ExHQg";
    var parseJSID="8PIiPYg1TWQASIr4Onnz1ofBRqJ5rPFURdPO5aEI"
    
    Parse.initialize(parseAPPID, parseJSID);
    
    var UNCBookShare = Parse.Object.extend("UNCBookShare");
    var htmlBuilder = [];
    
    //getList(UNCBookShare);
    $("#addBook").on("submit", function(e){
    e.preventDefault();
    
    console.log("Submit");
    
    var data={};
    data.email=$("#email").val();
    data.name=$("#name").val();
    data.bookTitle=$("#bookTitle").val();
    data.classTitle=$("#classTitle").val();
    data.classNumber=parseInt($("#classNumber").val());
    data.department=$("#department").val();

    
    var book = new UNCBookShare();
    console.log(data);
    book.save(data,{
        success:function(data){
            console.log("Success")
            //alert("Thanks");
        },
        error:function(e){
            console.dir(e);
        }
    });


    
});
    
}



/*function search() {
console.log("search")
    var index={};
    index.classId=$("#classId").val();
    index.bookId=$("#bookId").val();
    
    
    
    var UNCBookShare = Parse.Object.extend("UNCBookShare");
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
            console.log(x);
            
			//$.mobile.loading("hide");
			var pic = "";
			for(var i=0; i<results.length; i++) {
				//Lame - should be using a template
				
				var pic = results[i].get("picture");
				if(pic) {
					s += "<br/><img src='" + pic.url() + "'>";
				}
				pic += "</p>";
                                
            htmlBuilder +='<tr>'+'<td>'+ pic +
            '<h5>'+ results[index].attributes.name + '</h5>' + 
            '<p>'+ results[index].attributes.bookTitle +'</p>' + 
            '<p>'+ results[index].attributes.classTitle +'</p>' +
            '<p>'+ results[index].attributes.classNumber +'</p>'+
            '<p>'+ results[index].attributes.department+'</p>'+
            
            '<button value="Email" onclick="emailStuff(\''+ x + '\');">Email</button>' +
           
            '</td>'+'</tr>'
               
                                
                                
			}
            
             });
            
            $("#books").html(htmlBuilder);
        },
        
        error: function(error) {
             //$.mobile.loading("hide");
        }
        
    });
    
    
}*/





