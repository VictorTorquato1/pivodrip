const CART_KEY = 'pivodripCart';
const cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 1800);
}

function addToCart(itemData) {
  const existing = cart.find((item) => item.id === itemData.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...itemData, quantity: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast(`Adicionado: ${itemData.name}`);
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCart();
}

function clearCart() {
  cart.length = 0;
  saveCart();
  updateCartBadge();
  renderCart();
}

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderCart() {
  const cartContent = document.getElementById('cartContent');
  if (!cartContent) return;

  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty rounded-4 shadow-sm animate-fade">
        <i class="bi bi-cart-x"></i>
        <h2 class="mt-4">Seu carrinho está vazio</h2>
        <p class="text-muted mb-4">Volte ao estoque para adicionar peças e seguir com seu projeto de irrigação.</p>
        <a href="estoque.html" class="btn btn-primary">Ver estoque</a>
      </div>
    `;
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartContent.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="cart-table overflow-hidden rounded-4">
          <table class="table mb-0">
            <thead class="table-light">
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${cart.map((item, index) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${formatCurrency(item.price)}</td>
                  <td>${item.quantity}</td>
                  <td>${formatCurrency(item.price * item.quantity)}</td>
                  <td><button class="btn btn-sm btn-outline-danger" data-remove-index="${index}"><i class="bi bi-trash"></i></button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="cart-summary rounded-4 shadow-sm animate-fade">
          <h3>Resumo do pedido</h3>
          <p class="text-muted">Itens no carrinho: <strong>${cart.reduce((sum, item) => sum + item.quantity, 0)}</strong></p>
          <p class="fs-4 fw-semibold">Total: ${formatCurrency(total)}</p>
          <button id="clearCartButton" class="btn btn-outline-danger w-100 mb-3">Limpar carrinho</button>
          <button class="btn btn-primary w-100">Finalizar compra</button>
        </div>
      </div>
    </div>
  `;

  const removeButtons = cartContent.querySelectorAll('[data-remove-index]');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      removeItem(Number(button.dataset.removeIndex));
    });
  });

  const clearButton = document.getElementById('clearCartButton');
  if (clearButton) {
    clearButton.addEventListener('click', clearCart);
  }
}

function initCartPage() {
  if (document.body.dataset.cartPage === 'true') {
    renderCart();
  }
}

function initAddToCartButtons() {
  document.querySelectorAll('[data-cart-add]').forEach((button) => {
    button.addEventListener('click', () => {
      addToCart({
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price)
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initAddToCartButtons();
  initCartPage();
});
