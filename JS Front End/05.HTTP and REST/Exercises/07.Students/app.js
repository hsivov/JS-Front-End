function attachEvents() {
  const URL = 'http://localhost:3030/jsonstore/collections/students';
  const tbody = document.querySelector('#results > tbody');
  const btnSubmit = document.getElementById('submit');

  btnSubmit.addEventListener('click', submitHandler);

  tbody.innerHTML = '';
  fetch(URL)
      .then((res) => res.json())
      .then((data) => {
          Object.values(data).forEach((student) => {
              const {firstName, lastName, facultyNumber, grade} = student;
              const tableRow = document.createElement('tr');
              tableRow.innerHTML = `
<td>${firstName}</td>
<td>${lastName}</td>
<td>${facultyNumber}</td>
<td>${grade}</td>`;
              tbody.appendChild(tableRow);
          });
      })
      .catch((err) => {
          alert(err);
      });

  async function submitHandler() {
      const inputs = document.querySelectorAll('.inputs input');
      const firstName = inputs[0].value;
      const lastName = inputs[1].value;
      const facultyNumber = inputs[2].value;
      const grade = inputs[3].value;

      const httpHeaders = {
          method: 'POST',
          body: JSON.stringify({firstName, lastName, facultyNumber, grade})
      };

      await fetch(URL, httpHeaders);
      inputs.forEach((input) => input.value = '');
      attachEvents();
  }
}

attachEvents();