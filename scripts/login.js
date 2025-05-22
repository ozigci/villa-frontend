async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('http://localhost:3000/api/auth/login', {
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

  