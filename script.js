document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada');
});

function fue_enviado_() {
    alert("Tu mensaje fué enviado correctamente");
    return true;
}

function fue_enviado() {
    //alert("Tu mensaje fué enviado correctamente");
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu mensaje fué enviado correctamente",
        showConfirmButton: false,
        timer: 3000
      });
}	
