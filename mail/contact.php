<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Xử lý dữ liệu từ form POST
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Phần gửi email
  $to = 'lekimtanloc2002@gmail.com';
  $subject = "Tin nhắn từ $name";
  $body = "Bạn nhận được tin nhắn từ: $name\nSố điện thoại: $phone\nEmail: $email\nNội dung: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
      echo "Email đã được gửi thành công!";
  } else {
      echo "Gửi email thất bại.";
  }
} else {
  // Trả về lỗi nếu phương thức không phải POST
  http_response_code(405);
  echo "Method Not Allowed";
}



    // Lấy và làm sạch dữ liệu từ form
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email = strip_tags(htmlspecialchars($_POST['email']));
    $phone = strip_tags(htmlspecialchars($_POST['phone']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    // Kiểm tra email hợp lệ
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Trả mã lỗi 400 nếu email không hợp lệ
        echo "Địa chỉ email không hợp lệ.";
        exit();
    }

    // Địa chỉ email nhận thông tin
    $to = "lekimtanloc2002@gmail.com"; // Thay đổi email này thành email của bạn

    // Tiêu đề và nội dung email
    $email_subject = "$subject: $name";
    $email_body = "You have received a new message from your website contact form.\n\n"
                . "Here are the details:\n\n"
                . "Name: $name\n"
                . "Email: $email\n"
                . "Phone: $phone\n"
                . "Subject: $subject\n"
                . "Message:\n$message";

    // Headers của email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Gửi email
    if (mail($to, $email_subject, $email_body, $headers)) {
        http_response_code(200); // Email được gửi thành công
        echo "Tin nhắn của bạn đã được gửi thành công.";
    } else {
        http_response_code(500); // Có lỗi khi gửi email
        echo "Rất tiếc, có lỗi xảy ra khi gửi tin nhắn của bạn. Vui lòng thử lại sau.";
    }
} else {
    http_response_code(403); // Chỉ chấp nhận yêu cầu POST
    echo "Yêu cầu không hợp lệ.";
}
?>
