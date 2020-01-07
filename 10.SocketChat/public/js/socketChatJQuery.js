
var searchParams = new URLSearchParams(window.location.search);
var user = searchParams.get('name');
var room = searchParams.get('room');

// Referencia JQuery
var divUsers = $('#divUsers');
var formSend = $('#formSend');
var txtMessage = $('#txtMessage');
var divChatbox = $('#divChatbox');

function renderUsers(people){
    // console.log('Render Users', people);
    var html = '';
    html += '<li>';
    html += '    <a href="javascript:void(0)" class="active"> Room <span> ' + searchParams.get('room') + '</span></a>';
    html += '</li>';

    for(var i = 0; i < people.length; i++){
        html += '<li>'
        html += '    <a data-id="' + people[i].id + '"href="javascript:void(0)"><img src="assets/images/users/1.jpg" alt="user-img" class="img-circle"> <span>' + people[i].name + '<small class="text-success">online</small></span></a>'
        html += '</li>'
    }
    divUsers.html(html);
}


function renderMessage(message, me){
    //console.log('renderMessage', message);
    var html = '';
    var date = new Date(message.date);
    var time = date.getHours() + ':' + date.getMinutes();
    var adminMessage = 'info';

    if(message.name === 'Admin'){ // si es un mensaje del administrador lo pone en rojo
        adminMessage= 'danger';
    }
    if (me){
        html += '<li class="reverse">';
        html += '    <div class="chat-content">';
        html += '        <h5>' + message.name + '</h5>'
        html += '        <div class="box bg-light-inverse">' + message.message + '</div>';
        html += '    </div>'
        html += '    <div class="chat-img"><img src="assets/images/users/5.jpg" alt="user" /></div>';
        html += '    <div class="chat-time">' + time + '</div>';
        html += '</li>'
    } else {
        html += '<li class="animated fadeIn">';
        if (message.name !== 'Admin'){ // Si es un mensaje de admin no pone imagen
            html += '<div class="chat-img"><img src="assets/images/users/1.jpg" alt="user" /></div>';
        }
        html += '   <div class="chat-content">';
        html += '       <h5>' + message.name + '</h5>';
        html += '       <div class="box bg-light-' + adminMessage + '">' + message.message + '</div>';
        html += '   </div>';
        html += '   <div class="chat-time">' + time + '</div>';
        html += '</li>';
    }

    divChatbox.append(html);
}

divUsers.on('click', 'a', function () {
    var id = $(this).data('id'); // Hace referencia al anchor = a . valor del <a data-id
    if(id){
        console.log(id);
    }
});

formSend.on('submit', function(e){
    console.log('Submit');
    e.preventDefault();
    if (txtMessage.val().trim().length === 0){
        return ;
    };
    socket.emit('sendMessage', {
        name: user,
        message: txtMessage.val()
    }, function (res) {
            txtMessage.val('').focus();
            renderMessage(res, true);
            scrollBottom();
    });
});


function scrollBottom() {
    // selectors
    var newMessage = divChatbox.children('li:last-child');

    // heights
    var clientHeight = divChatbox.prop('clientHeight');
    var scrollTop = divChatbox.prop('scrollTop');
    var scrollHeight = divChatbox.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight() || 0;

    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        divChatbox.scrollTop(scrollHeight);
    }
}