<?php

/**
 * Обработчик исключительно тестовый
 * Служит только для демонстрации работоспособности расширения
 */

if(isset($_POST['text'])){
    echo 'Символов в полученном тексте: ' . '<b>' . iconv_strlen($_POST['text']) . '</b>';
} else {
    echo 'Текст не передан в запросе.';
}

echo '<hr>' .'Выделенный текст:' . '<br>';
echo $_POST['text'];

echo '<hr><time id="msg"></time>';

// Нужен полный путь к js фалу
echo '<script src="https://seo-wiki.pro/script.js">';


?>