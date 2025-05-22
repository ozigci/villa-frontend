async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('https://villa-backend.onrender.com/api/villas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // for session cookies
      body: JSON.stringify({ username, password })
    });
  

    if (res.ok) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Login failed');
    };

};

  