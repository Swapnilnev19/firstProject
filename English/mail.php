<?php 
$errors = '';
$myemail = 'swapnilnev19@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])||
   empty($_POST['email']) ||
   empty($_POST['phone']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone']; 
$message = $_POST['message']; 



if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission From Your Website : $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n First Name: $name \n Email: $email_address \n Phone: $phone \n  Message \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location:thankyou.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>