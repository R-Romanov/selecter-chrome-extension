#Selecter - расширение для Chrome анализирующее выделенный текст

Само расширение находится в /extensions/. Принцип работы:

1. Получаем текст, который выделил пользователь.
2. Отправляем текст на сервер при помощи ajax и забираем результат его обработки в виде html кода.
3. Отображаем резкльтат отработки во всплывающем окне расширения.

Тестовый обработчик расположен в /serverSide/ и служит только для демонстрации работоспособности. 
Получает текст, возвращает ответ в html содержащий кол-во символов в тексте и сам текст.

---

Порядок установки расширения в Google Chrome:

1.  Открываем [chrome://extensions/](chrome://extensions/)
2.  Устанавливаем галочку "Режим разработчик"
3.  Нажимаем "Загрузить распакованное расширение"
4.  Выбираем каталог, где лежит наше расширение