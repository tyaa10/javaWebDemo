$(document).ready(function () {

    $('#submit-button').click(function (ev) {

        //Предотвращение отправки формы
        ev.preventDefault();
        //console.log("test");
        
        //Получаем значения из полей ввода
        var login = $('input#login').val();
        var password = $('input#password').val();
        
        //Отправка асинхронного запроса
        $.ajax({
            url: "http://localhost:8080/WebApp1/FirstServlet?login="
                + login
                + "&password="
                + password,
            dataType: 'json',
            method : "post",
            cache : false
        }).done(function(data) {
            
            console.log(data.data);
        });
    });
});
