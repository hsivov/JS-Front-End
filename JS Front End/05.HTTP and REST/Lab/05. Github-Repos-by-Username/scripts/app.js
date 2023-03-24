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
                    const li = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.setAttribute('href', repo.html_url);
                    anchor.textContent = repo.full_name;
                    li.appendChild(anchor);
                    repoList.appendChild(li);
                });
        })
        .catch((error) =>{
            alert(error);
        });
}
