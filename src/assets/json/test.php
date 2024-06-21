<?php
// نام فایل JSON
$jsonFile = 'people.json';

// خواندن محتوای فایل JSON
$jsonData = file_get_contents($jsonFile);

// تبدیل محتوای JSON به آرایه (یا شیء)
$data = json_decode($jsonData, true);

// تنظیم هدر به عنوان JSON
header('Content-Type: application/json');

// ارسال داده‌های JSON به عنوان پاسخ
echo json_encode($data);
?>
