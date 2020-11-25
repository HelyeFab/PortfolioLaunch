<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);
$alert = '';

if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'emmanuelfabiani23@gmail.com';
    $mail->Password = 'Blubird2306!';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';

    $mail->setFrom('emmanuelfabiani23@gmail.com');
    $mail->addAddress('emmanuelfabiani23@gmail.com'); //Email address where emails will be received

    $mail->isHTML(true);
    $mail->Subject= 'Message from CodeLeviosa Portfolio';
    $mail->Body = "<h3>Name: $name <br>Email: $email <br> Message: $message</h3>";

      $mail->send();
      $alert = '<div class="sentMessage active">
                <i class="far fa-times-circle"></i>
                <p>Thank you! Your message was successfully sent.</p>
                </div>';
      // header('Location: index.php/#contact');
} catch (Exception $e){
   $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
                </div>';
}
}

?>
