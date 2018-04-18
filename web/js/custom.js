$(document).ready(function () {
    
    function populateTable(){
        //url: "http://localhost:8080/WebApp1/FirstServlet?action=all-achievements",
        $.ajax({
            url: "http://localhost:8084/WebApp1/FirstServlet?action=all-achievements",
            dataType: 'json',
            method : "post",
            cache : false
        }).done(function(response) {
            
            console.log(response);
            
            //var achievements = response.data;
            
            //Сформировали пустой шаблон таблицы
            var template = Hogan.compile(
                '<h4>All achievements:</h4>'
                + '<table class="table">'
                    + '<thead>'
                        + '<tr>'
                            + '<th>ID</th>'
                            + '<th>Title</th>'
                            + '<th>Content</th>'
                        + '</tr>'
                    + '</thead>'
                    + '<tbody>'
                        + '{{#data}}'
                        + '<tr>'
                        + '<th scope="row">{{id}}</th>'
                        + '<td>{{title}}</td>'
                        + '<td>{{content}}</td>'
                        + '</tr>'
                        + '{{/data}}'
                    + '</tbody>'
                + '</table>'
                );
            
            //Заполнили таблицу данными, полученными с сервера
            var table = template.render(response);
            
            //Поместили таблицу в элемент div с идентификатором achievements
            $('div#achievements').html(table);
        });
    }
    
    populateTable();

    /*$('#submit-button').click(function (ev) {

        //Предотвращение отправки формы
        ev.preventDefault();
        //console.log("test");
        
        //Получаем значения из полей ввода
        var login = $('input#login').val();
        var password = $('input#password').val();
        
        //Отправка асинхронного запроса
        $.ajax({
            url: "http://localhost:8080/WebApp1/FirstServlet?action=signin"
                +"login="
                + login
                + "&password="
                + password,
            dataType: 'json',
            method : "post",
            cache : false
        }).done(function(response) {
            
            //v1
            //console.log(response.data);
            
            //$('#login1').text(response.data[0]);
            //$('#password1').text(response.data[1]);
            
            //console.log(response.data[0]);
            //console.log(response.data[1]);
            
            //console.log($('#password1'));
            
            //v2
            
            var toRender = {
                
                login: response.data[0]
                , password: response.data[1]
            }
            
            var template = Hogan.compile(
                "<div>"
                    + "<span>Login: </span><span>{{login}}</span>"
                + "</div>"
                + "<div>"
                    + "<span>Password: </span><span>{{password}}</span>"
                + "</div>"
            );
    
            var output = template.render(toRender);
            
            $('#response-block').html(output);
        });
    });*/
        
    $('#submit-button2').click(function (ev) {

        //Предотвращение отправки формы
        ev.preventDefault();
        //console.log("test");
        
        //Получаем значения из полей ввода
        var title = $('input#title').val();
        var content = $('input#content').val();
        
        //Отправка асинхронного запроса
        //url: "http://localhost:8080/WebApp1/FirstServlet?action=create"
        $.ajax({
            url: "http://localhost:8084/WebApp1/FirstServlet?action=create"
                + "&title="
                + title
                + "&content="
                + content,
            dataType: 'json',
            method : "post",
            cache : false
        }).done(function(response) {
            
            console.log(response);
            populateTable();
            //v2
            
            /*var toRender = {
                
                login: response.data[0]
                , password: response.data[1]
            }
            
            var template = Hogan.compile(
                "<div>"
                    + "<span>Login: </span><span>{{login}}</span>"
                + "</div>"
                + "<div>"
                    + "<span>Password: </span><span>{{password}}</span>"
                + "</div>"
            );
    
            var output = template.render(toRender);
            
            $('#response-block').html(output);*/
        });
    });
});
