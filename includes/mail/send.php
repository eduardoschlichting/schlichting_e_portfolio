<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');
$results = [];
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';
$name_error = '';
$email_error = '';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['firstname'])) {
        $name_error = "First Name is Required!";
    } else {
        $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['lastname'])) {
        $name_error = "Last Name is Required!";
    } else {
        $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['email'])) {
        $email_error = "Email is Required!";
    } else {
        $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }

    if (isset($_POST['message'])) {
        $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
    }
}



$results['name'] = $visitor_name;
$results['email'] = $visitor_email;
$results['message'] = $visitor_message;
$results['name_error'] = $name_error;
$results['email_error'] = $email_error;



// prepare the email
$email_subject = 'Inquiry from Portfolio Site';
$email_recipient = 'duischlichting@eduardoschlichting.com';
$email_message = sprintf('Name: %s, Email: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message);
$email_headers = array(

    'From' =>$visitor_email
);



//send out the email
$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);
if ($email_result) {
    $results['message'] = sprintf('Thank you for contacting me, %s. I will reply within 24 hours.', $visitor_name);
} else {
    $result['message'] = sprintf('Sorry! This email did not go through. Please try again.');
}

echo json_encode($results);

// $email_result = mail($to, $email_title, $email_subject, $body, $email_headers);
//     if($email_result){
//         $results['message'] = sprintf('Thank you for contacting me, %s. I will get back to you as soon as I can!', $user_name);
//     } else {
//         $results['message'] = sprintf('I am sorry, but the email did not go through.');
//         echo "email failed";
//     }


// echo $email_recipient;

// // switch emails
// $subject = $_POST['subject'];
// if ($subject == 'Design') { //if career was selected
//     $to = $email_recipient;
// } else { //other options
//     $to = 'shirinhk11@gmail.com';
// }

//reCAPTCHA

// if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['recaptcha_response'])) {
//     // Build POST request:
//     $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
//     $recaptcha_secret = '6Ldc2lQdAAAAAELmW67qcyMxZcXhwR_IfexDrLI9';
//     $recaptcha_response = $_POST['recaptcha_response'];

//     // Make and decode POST request:
//     $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
//     $recaptcha = json_decode($recaptcha);

//     // Take action based on the score returned:
//     if ($recaptcha->score >= 0.5) {
//         // Verified - send email
//     } else {
//         // Not verified - show form error
//     }
// }

