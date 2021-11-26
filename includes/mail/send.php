<?php

// DEBUG ONLY, remove after
ini_set('display_errors', 1);

//TODO: take care of the form submission

// 4*. It returns proper info in JSON
// a. What is AJAX?
// b. What is JSON?
// c. How to build JSON in PHP?


header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

$results = [];
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';

// 1. Check the sunmission out -> Validate the data
if (isset($_POST['firstname'])) {
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['lastname'])) {
    $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['mail'])) {
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
}

if (isset($_POST['message'])) {
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
}

$results['name'] = $visitor_name;
$results['message'] = $visitor_message;

// 2. Prepare the email
$email_subject = 'Inquiry from Portfolio Site';
$email_recipient = 'schlichting.eduardo@gmail.com'; // Your email, or AKA "To" email
$email_message = sprintf('Name: %s, Email: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message);
$email_headers = array(
    // best practice, but it may need you to have a mail set up in noreply@yourdomain.ca
    'From'=>'schlichting.eduardo@gmail.com',
    'Reply-To'=>$visitor_email

    // OR use this, if hosting doesnt support it
    // 'From'=>$visitor_email
);

// 3. Send out the email
// make sure you run the code in PHP 7.4 +

$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);
if($email_result){
    $results['message'] = sprintf('Thank you for contacting me, %s. I will get back to you as soon as I can :D', $visitor_name);
} else {
    $results['message'] = sprintf('I am sorry, but your email could not be sent.');
}

echo json_encode($results);