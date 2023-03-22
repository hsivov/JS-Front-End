function loadRepos() {
    const input = document.getElementById('username');
    const BASE_URL = 'https://api.github.com/users/';
    const repoList = document.getElementById('repos');

    repoList.innerHTML = '';

    fetch(`${BASE_URL}${input.value}/repos`)
        .then((res) => res.json())
        .then((repos) => {
            repos
                .forEach((repo) => {
                    const {full_name, html_url} = repo;
                    const li = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.setAttribute('href', html_url);
                    anchor.textContent = full_name;
                    li.appendChild(anchor);
                    repoList.appendChild(li);
                });
        })
        .catch((error) =>{
            alert(error);
        });
}
