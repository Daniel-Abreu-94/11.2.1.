document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const birthDate = document.getElementById('fechaNacimiento').value;

    const data = {
      name: name,
      lastName: lastName,
      birthDate: birthDate
  };

  fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Respuesta del servidor:', data);
      
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
