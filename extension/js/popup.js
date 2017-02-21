/**
 * Заполняет блок .b-result переданным содержимым
 *
 * @param _text
 */
function displayResults(_text) {
    $('.b-result').html(_text);
}

/**
 * Отправляет ajax запрос на сервер
 * Передаёт текст и через displayResults() отрисовывает полученный ответ
 * Если ответ не получен - отрисовывает уведомление об этом
 *
 * @param _text
 * @return string
 */
function handleSelectedText(_text) {

    var request = $.ajax({
        // В url указываем полный путь к файлу-обработчику
        url: "https://seo-wiki.pro/handler.php",
        type: "POST",
        data: {text : _text},
        dataType: "html"
    });

    request.done(function(msg) {
        displayResults(msg);
    });

    request.fail(function() {
        displayResults('Не удаётся получить результаты анализа выделенного текста.');
    });
}

/**
 * Ожидаем выделение текста пользователем
 * Затем обрабатываем его
 */
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(_selection) {
    handleSelectedText(_selection[0]);
});