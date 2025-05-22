// Gets villa data from the backend
// Displays a clickable list
// Sends user to villa.html?id=1, etc.




async function loadVillas() {
    const res = await fetch('https://villa-backend.onrender.com/api/villas', {
      credentials: 'include'
    });
  
    if (!res.ok) {
      alert('Not authorized or server error');
      return;
    };
  
    const villas = await res.json();
    const list = document.getElementById('villa-list');
    list.innerHTML = '';
  
    villas.forEach(villa => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="villa.html?id=${villa.id}">${villa.name} (${villa.type})</a>`;
      list.appendChild(li);
    });

  };



  // First declare the function then call it.
  loadVillas();


  
  