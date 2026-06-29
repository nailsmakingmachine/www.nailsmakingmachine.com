<?php
// Secure RFQ Processor for NAILS MAKING MACHINE
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Sanitization & Validation
    $name    = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $phone   = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $country = filter_var(trim($_POST["country"]), FILTER_SANITIZE_STRING);
    $machine = filter_var(trim($_POST["requirement"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // 2. Email Configuration
    $to = "your-email@example.com"; // REPLACE WITH YOUR ACTUAL CORPORATE EMAIL
    $subject = "NEW RFQ: $machine - from $name";
    
    $email_content = "Authorized Personnel: $name\n";
    $email_content .= "Direct Telephony: $phone\n";
    $email_content .= "Enterprise Email: $email\n";
    $email_content .= "Logistics Destination: $country\n";
    $email_content .= "Equipment Scope: $machine\n\n";
    $email_content .= "--- Mechanical Parameters & Expectations ---\n$message";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 3. Execution
    if (mail($to, $subject, $email_content, $headers)) {
        // Success redirect
        header("Location: thank-you.html");
        exit;
    } else {
        echo "Transmission failed. Please contact support via WhatsApp.";
    }
} else {
    header("Location: contact.html");
    exit;
}
?>
