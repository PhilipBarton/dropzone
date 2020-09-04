<?php
if($_POST["message"]) {
    mail("philipbarton815@gmail.com", "Form to email message", $_POST["message"], "From: philipbartom@gmail.com");
}
?>