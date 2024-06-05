document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada');
});

function fue_enviado_() {
    alert("Tu mensaje fué enviado correctamente");
    return true;
}

function fue_enviado() {
    entrega_x = true;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    //

    //alert(phone);

    if(fname==''){
        var span = document.getElementById("alerta_nombre");
        span.textContent = " Los nombres son obligatorios!!";
        document.getElementById("alerta_nombre").style.color = "red";
        entrega_x = false;
    }

    if(lname==''){
        var span = document.getElementById("alerta_apellido");
        span.textContent = " Los apellidos son obligatorios!!";
        document.getElementById("alerta_apellido").style.color = "red";
        entrega_x = false;
    }
    
    if(email==''){
        var span = document.getElementById("alerta_correo");
        //var x = document.getElementById("email").value
        if(span!='') {
            //var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var expr = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
            span.textContent = " El correo es obligatorio!!";
            document.getElementById("alerta_correo").style.color = "red";
            entrega_x = false;
        }
    }

    if(phone==''){
        var span = document.getElementById("alerta_phone");
        span.textContent = " Teléfono es obligatorio!!";
        document.getElementById("alerta_phone").style.color = "red";
        entrega_x = false;
    }

    if(message==''){
        var span = document.getElementById("alerta_message");
        span.textContent = " El mensaje es obligatorio!!";
        document.getElementById("alerta_message").style.color = "red";
        entrega_x = false;
    }


    if(entrega_x == true){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu mensaje fué enviado correctamente",
        showConfirmButton: false,
        timer: 3000
      });
    }  
}	

function onfocus_campos(id_del_span) {
	document.getElementById(id_del_span).textContent = '';	
}