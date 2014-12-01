document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    setUp();
};

$(document).ready(function(){
    setUp();
    search();
    
});

var htmlBuilder;

function setUp() {
    
    
    var parseAPPID="zK8NuhYO40bSVrNzFs8yEJjyvu10JqISWX4ExHQg";
    var parseJSID="8PIiPYg1TWQASIr4Onnz1ofBRqJ5rPFURdPO5aEI"
    
    Parse.initialize(parseAPPID, parseJSID);
    
    var UNCBookShare = Parse.Object.extend("UNCBookShare");
    var htmlBuilder = [];
    
    getList(UNCBookShare);
    $("#addBook").on("submit", function(e){
    e.preventDefault();
    
    console.log("Submit");
    
    var data={};
    data.email=$("#email").val();
    data.classTitle=$("#title").val();
    data.name=$("#name").val();
    data.title=$("#classNumber").val();
    data.department=$("#classTitle").val();
    data.classNumber=$("#departmant").val();

    
    var book = new UNCBookShare();
    console.log(data);
    book.save(data,{
        success:function(data){
            console.log("Success")
            alert("Thanks");
        },
        error:function(e){
            console.dir(e);
        }
    });


    
});
    
}

var query = new Parse.Query(UNCBookShare);
	
 
	query.find({
		success:function(results) {
			$.mobile.loading("hide");
			var s = "";
			for(var i=0; i<results.length; i++) {
				//Lame - should be using a template
				
				var pic = results[i].get("picture");
				if(pic) {
					s += "<br/><img src='" + pic.url() + "'>";
				}
				s += "</p>";
			}
			$(".books div[data-role=content]").html(s);
		},error:function(e) {
			$.mobile.loading("hide");
 
		}
	});


function search() {

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


function emailStuff(){
 
    window.plugin.email.isServiceAvailable(
    function (isAvailable) {
        // alert('Service is not available') unless isAvailable;
        window.plugin.email.open({
        to:      ["#email"],
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
            htmlBuilder +='<tr>'+'<td>'+'<img src=".//img/bookx.jpg"/>' +
            '<h5>'+ results[index].attributes.name + '</h5>' + 
            '<p>'+ results[index].attributes.title +'</p>' + 
            '<p>'+ results[index].attributes.classTitle +'</p>' +
            '<p>'+ results[index].attributes.classNumber +'</p>'+
            '<p>'+ results[index].attributes.department+'</p>'
            '<p>'+results[index].attributes.email + '</p>'+'</td>'+'</tr>'
            });
            
            $("#books").html(htmlBuilder);
        },
        
        error: function(error) {
        }
        
    });
    
    
}





