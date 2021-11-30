<?php

// DEBUG ONLY, remove after
error_reporting(E_ALL);
ini_set('display_errors', '1');
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

// variables to be filled
$results = {};
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';
$visitor_subject= '';
$name_required = '';
$email_required = '';
$email_recipient = 'schlichting.eduardo@gmail.com';


// 1. Check if the field is empty, if not, set the variable and validate the field, otherwise throw an error required message
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (empty($_POST['firstname'])) {
        $name_required = "Your first name is required!";
    } else {
        $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['lastname'])) {
        $name_required = "Your last name is required!";
    } else {
        $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['email'])) {
        $email_required = "Your e-mail is required!";
    } else {
        $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST('subject'))) {
        $visitor_subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['message'])) {
        $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
    }
}

// switch emails
if ($subject == 'Development') { // if the development option was selected
    $to = $email_recipient;
} else { // if the other options were selected
    $to = 'dui_design@gmail.com';
}

// Set variables for email submission/error handling
$results['name'] = $visitor_name;
$results['email'] = $visitor_email;
$results['message'] = $visitor_message;
$results['subject'] = $visitor_subject;
$results['name_required'] = $name_required;
$results['email_required'] = $email_required;

// recaptcha stuff

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['recaptcha_response'])) {
    // Build POST request:
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LfbtGsdAAAAABkbR0RLpWVv5SYmSQNv0kX2HJr3';
    $recaptcha_response = $_POST['recaptcha_response'];

    // Make and decode POST request:
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    // Take action based on the score returned:
    if ($recaptcha->score >= 0.5) {
        // Verified - send email
    } else {
        // Not verified - show form error
    }
}

// 2. Prepare the email
$email_title = 'Inquiry from Portfolio Site';
$email_subject = $visitor_subject;
$email_message = sprintf('Name: %s, Email: %s, Subject: %s, Message: %s', $visitor_name, $visitor_email, $email_subject, $visitor_message);

$email_headers = array(

    'From'=>$visitor_email
);

// 3. Send out the email
// if the fields are not empty and the form was requested:
if($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {
    $email_result = mail($to, $email_title, $email_subject, $email_message, $email_headers);
    if($email_result){
        $results['message'] = sprintf('Thank you for contacting us, %s. You will get a reply within 24 hours.', $visitor_name);
        
    } else {
        $results['message'] = sprintf('We are sorry, but the email did not go through.');
    }
}


echo json_encode($results);