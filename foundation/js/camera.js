	function capturePhoto(){
        //alert("capture button working");
    navigator.camera.getPicture(gotPic,failHandler,{quality:10, destinationType:0 });
}   

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