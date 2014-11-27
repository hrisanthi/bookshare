document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    setUp();
};

$(document).ready(function(){
    setUp();
    emailStuff();
    
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
            '<p>'+ results[index].attributes.department +'</p>' +
            '<p>'+ results[index].attributes.classNumber +'</p>'+
            '<p>'+ results[index].attributes.classTitle+'</p>'
            '<p>'+results[index].attributes.email + '</p>'+'</td>'+'</tr>'
            });
            
            $("#books").html(htmlBuilder);
        },
        
        error: function(error) {
        }
        
    });
    
    
}

/*$(document).on("pageshow", "#home", function(e, ui) {
  $.mobile.loading("show");
 
	var query = new Parse.Query(NoteOb);
	query.limit(10);
	query.descending("createdAt");
 
	query.find({
		success:function(results) {
			$.mobile.loading("hide");
			var s = "";
			for(var i=0; i<results.length; i++) {
				//Lame - should be using a template
				s += "<p>";
				s += "<h3>Note " + results[i].createdAt + "</h3>";
				s += results[i].get("text");
				var pic = results[i].get("picture");
				if(pic) {
					s += "<br/><img src='" + pic.url() + "'>";
				}
				s += "</p>";
			}
			$("#home div[data-role=content]").html(s);
		},error:function(e) {
			$.mobile.loading("hide");
 
		}
	});
});
 
$(document).on("pageshow", "#addNote", function(e, ui) {
 
	var imagedata = "";
 
	$("#saveNoteBtn").on("touchend", function(e) {
		e.preventDefault();
		$(this).attr("disabled","disabled").button("refresh");
 
		var noteText = $("#noteText").val();
		if(noteText == '') return;
 
		/*
		A bit complex - we have to handle an optional pic save
		*/
		/*if(imagedata != "") {
			var parseFile = new Parse.File("mypic.jpg", {base64:imagedata});
			console.log(parseFile);
				parseFile.save().then(function() {
					var note = new NoteOb();
					note.set("text",noteText);
					note.set("picture",parseFile);
					note.save(null, {
						success:function(ob) {
							$.mobile.changePage("#home");
						}, error:function(e) {
							console.log("Oh crap", e);
						}
					});
					cleanUp();
				}, function(error) {
					console.log("Error");
					console.log(error);
				});
 
		} else {
			var note = new NoteOb();
			note.set("text",noteText);
			note.save(null, {
				success:function(ob) {
					$.mobile.changePage("#home");
				}, error:function(e) {
					console.log("Oh crap", e);
				}
			});
			cleanUp();
 
		}
	});
 
	$("#takePicBtn").on("click", function(e) {
		e.preventDefault();
		navigator.camera.getPicture(gotPic, failHandler, 
			{quality:50, destinationType:navigator.camera.DestinationType.DATA_URL,
			 sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
	});
	
	function gotPic(data) {
		console.log('got here');
		imagedata = data;
		$("#takePicBtn").text("Picture Taken!").button("refresh");
	}
	
	function failHandler(e) {
		alert("ErrorFromC");
		alert(e);
		console.log(e.toString());
	}
 
	function cleanUp() {
		imagedata = "";
		$("#saveNoteBtn").removeAttr("disabled").button("refresh");
		$("#noteText").val("");
		$("#takePicBtn").text("Add Pic").button("refresh");
	}
 
});
*/



