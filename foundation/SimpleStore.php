<?php
//include 'signature.php';
//Enter your IDs
define("Access_Key_ID", "AKIAI4AK2SS2P3HS2PRA");
define("Associate_tag", "AnkFKxZmYv7EelwbR9pSEaXPLiENr+bzvMWcgJYD");

//Set up the operation in the request
function ItemSearch($SearchIndex, $Keywords){
//Set the values for some of the parameters
$Keywords = 'baseball';
$SearchIndex= 'books';
$Operation = "ItemSearch";
$Version = "2013-08-01";
$ResponseGroup = "ItemAttributes,Offers";
$Timestamp = gmdate("Y-m-d\TH:i:s\Z");

//User interface provides values
//for $SearchIndex and $Keywords


//Define the request
$request=
     "http://free.apisigning.com/onca/xml"
   . "?Service=AWSECommerceService"
   . "&AssociateTag=" . "unbo092-20"
   . "&AWSAccessKeyId=" . "AKIAI4AK2SS2P3HS2PRA"
   . "&Operation=" . $Operation
   . "&Version=" . $Version
   . "&SearchIndex=" . $SearchIndex
   . "&Keywords=" . $Keywords
   . "&ResponseGroup=" . $ResponseGroup;  

//Catch the response in the $response object
echo "------<br/>";

$response = file_get_contents($request);
$parsed_xml = simplexml_load_string($response);
printSearchResults($parsed_xml, $SearchIndex);

echo"<br/>hello";
echo $parsed_xml;
echo "------";
echo $SearchIndex;
}

ItemSearch($SearchIndex, $Keywords);
?>

