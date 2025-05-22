const villaId = new URLSearchParams(window.location.search).get('id');

async function loadItems() {
  const res = await fetch(`http://localhost:3000/api/villas/${villaId}/items`, {
    credentials: 'include'
  });

  const items = await res.json();
  const form = document.getElementById('item-form');
  form.innerHTML = '';

  items.forEach(item => {
    form.innerHTML += `
      <label>${item.item_name}</label>
      <input type="number" name="quantity" value="${item.quantity}" data-id="${item.id}">
      <br>
    `;
  });
}

async function save() {
  const inputs = document.querySelectorAll('input[name="quantity"]');
  const items = Array.from(inputs).map(input => ({
    id: input.dataset.id,
    quantity: input.value
  }));

  await fetch(`http://localhost:3000/api/villas/${villaId}/items`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ items })
  });

  alert('Changes saved!');
}

loadItems();
