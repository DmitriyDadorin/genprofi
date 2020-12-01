<?php
	$jsonst = json_decode( file_get_contents('php://input'));
	$name_field = 'name';
	$tel_field = 'tel';
	$email_field = 'email';
	$equipment_field = 'equipment';
	$message_field = 'message';


	$name = $jsonst->$name_field;	
	$tel = $jsonst->$tel_field;
	$email = $jsonst->$email_field;
	$equipment = $jsonst->$equipment_field;
	$message_text = $jsonst->$message_field;
	$subject = 'Новое письмо для Genpofi';

	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html;charset=utf-8 \r\n";

	$message = "<p>Новое сообщение</p>
	<p><strong>Название организации или ФИО частного лица:</strong>$name</p>
	<p><strong>Телефон:</strong>$tel</p>
	<p><strong>Почта:</strong>$email</p>
	<p><strong>Оборудование:</strong>$equipment</p>
	<p><strong>Сообщение:</strong> $message_text</p>
	";

	$to      = 'podgorniy.sergei@yandex.ru'. ",";
	$to 		.= 'dadorindmitriy@gmail.com';
	$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'Content-type: text/html;charset=utf-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	echo $message;
?>