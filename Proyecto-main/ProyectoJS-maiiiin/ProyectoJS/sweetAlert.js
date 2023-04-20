//Swal.fire('Gracias por su compra!' , 'Su pedido esta siendo procesado!' , 'succes' , 'comprar');


  
const comprarBtn = document.getElementById('comprar-btn');

comprarBtn.addEventListener('click', function() {
  Swal.fire({
    title: 'Compra realizada!',
    text: 'Su compra está siendo procesada.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
});

