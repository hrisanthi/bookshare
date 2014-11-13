var htmlBuilder;

$(document).ready(function(){
    
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
    data.name=$("#name").val();
    data.title=$("#title").val();
    data.department=$("#department").val();
    data.classNumber=$("#classNumber").val();
    data.classTitle=$("#className").val();
    data.price=$("#price").val();
    
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
});


function getList(UNCBookShare){
    console.log("getList" + UNCBookShare);
    var query = new Parse.Query(UNCBookShare);
    query.find({
        success: function(results) {
            console.log(results);
            $.each(results, function( index, value ) {
            console.log(results[index].attributes.cost);
            htmlBuilder += + '<td>'+'<img src=".//img/bookx.jpg"/>' +'</td>'+
            '<td>'+ '<h5>'+ results[index].attributes.name + '</h5>' + '</td>' +
            '<td>'+ '<p>'+ results[index].attributes.title +'</p>' + '</td>'+
            '<td>'+ '<p>'+ results[index].attributes.department +'</p>' +'</td>'+
            '<td>'+ '<p>'+ results[index].attributes.classNumber +'</p>'+'</td>'+
            '<td>'+ '<p>'+ results[index].attributes.classTitle+'</p>'+'</td>'+
            '<td>'+ '<p>'+ results[index].attributes.price + '</p>'+'</td>';
});
            $("#books").html(htmlBuilder);
        },
        
        error: function(error) {
        }
        
    });
    
    
}




