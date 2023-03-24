function loadRepos() {
   const URL = 'https://api.github.com/users/testnakov/repos';
   const result = document.getElementById('res');

   fetch(URL)
       .then((res) => res.text())
       .then((text) => {
          result.textContent = text;
       })
       .catch((err) => {
          alert(err);
       });
}
