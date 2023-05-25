// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

const orderForm = document.getElementById('order-form');
const menu = document.getElementById('menu');
const quantity = document.getElementById('quantity');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const totalOrder = Array.from(menu.selectedOptions)
    .reduce((total, option) => total + Number(option.dataset.price) * quantity.value, 0);

  alert(`Terima kasih atas pesanan Anda!\n\nDetail Pesanan:\nMenu: ${Array.from(menu.selectedOptions).map(option => option.value).join(', ')}\nJumlah: ${quantity.value}\nTotal: IDR ${totalOrder}\n\nSilakan tunggu konfirmasi dari kami.`);

  orderForm.reset();

  const totalOrderElement = document.getElementById('total-order');
  totalOrderElement.textContent = `Total: IDR ${totalOrder}`;
});

menu.addEventListener('change', () => {
  const totalOrder = Array.from(menu.selectedOptions)
    .reduce((total, option) => total + Number(option.dataset.price) * quantity.value, 0);

  const totalOrderElement = document.getElementById('total-order');
  totalOrderElement.textContent = `Total: IDR ${totalOrder}`;
});


  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Terima kasih telah memesan, silakan tunggu konfirmasi dari kami.');
  });
