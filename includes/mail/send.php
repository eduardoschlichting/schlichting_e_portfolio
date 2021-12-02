<?php

// DEBUG ONLY, remove after
error_reporting(E_ERROR | E_PARSE);
ini_set('display_errors', '1');
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

// variables to be filled
$results = [];
$visitor_name = '';
$visitor_email = '';

$visitor_message = '';
$empty_name = '';
$email_error = '';
$message_error = '';

// $canMail = TRUE;


// REQUIRED FIELDS
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['firstname'])) {
        $empty_name = "Please enter your First Name.";
        // $canMail = FALSE;
    } else {
        $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['lastname'])) {
        $empty_name = "Please enter your Last Name.";
    } else {
        $visitor_name .= ' ' . filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['email'])) {
        $email_error = "Please enter your e-mail.";
    } else {
        $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }

    if (empty($_POST['message'])) {
        $message_error = "Please tell me a bit about your project.";
    } else {
        $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
    }
}

$results['name'] = $visitor_name;
$results['email'] = $visitor_email;
$results['message'] = $visitor_message;
$results['empty_name'] = $empty_name;
$results['email_error'] = $email_error;
$results['message_error'] = $message_error;

// 2. Prepare the email [Print ot the label and put on the pachage / Prepare the package in certain format]
$email_subject = 'Inquiry from Portfolio Site';
$email_recipient = 'schlichting.eduardo@gmail.com'; //your email, or AKA, 'To' email
$email_title = 'Inquiry from Portfolio Site';
$to = 'schlichting.eduardo@gmail.com';

$body = "";
$body .= "From: ".$visitor_name. "\r\n";
$body .= "Email: ".$visitor_email. "\r\n";
$body .= "Message: ".$visitor_message. "\r\n";

$email_headers = array(

    'From'=>$visitor_email
);

// 3. Send out the email
// if the fields are not empty and the form was requested:
if($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {
    $email_result = mail($to, $email_title, $email_subject, $body, $email_headers);
    if($email_result){
        $results['message'] = sprintf('Thank you for contacting me, %s. I will get back to you as soon as I can!', $user_name);
        
    } else {
        $results['message'] = sprintf('I am sorry, but the email did not go through.');
    }
}


echo json_encode($results);

// recaptcha stuff

// if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['recaptcha_response'])) {
//     // Build POST request:
//     $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
//     $recaptcha_secret = '6LfbtGsdAAAAABkbR0RLpWVv5SYmSQNv0kX2HJr3';
//     $recaptcha_response = $_POST['recaptcha_response'];

//     // Make and decode POST request:
//     $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
//     $recaptcha = json_decode($recaptcha);

//     // // Take action based on the score returned:
//     // if ($recaptcha->score >= 0.5) {
//     //     // Verified - send email
//     // } else {
//     //     // Not verified - show form error
//     // }
// }