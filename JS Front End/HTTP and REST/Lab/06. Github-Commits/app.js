async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const BASE_URL = 'https://api.github.com/repos/';
    const commits = document.getElementById('commits');

    const response = await fetch(`${BASE_URL}${username}/${repo}/commits`);
    const data = await response.json();

    try {
        data.forEach(({commit}) => {
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            commits.appendChild(li);
        });
    } catch (err) {
        alert(err);
    }
}
