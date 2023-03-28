function solution() {
    const LIST_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const ARTICLE_URL = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const main = document.getElementById('main');

    fetch(LIST_URL)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((obj) => {
                const {_id} = obj;
                fetch(ARTICLE_URL + _id)
                    .then((res) => res.json())
                    .then((data) => {
                        const {title, content} = data;

                        const accordion = document.createElement('div');
                        accordion.classList.add('accordion');
                        const head = document.createElement('div');
                        head.classList.add('head');
                        const span = document.createElement('span');
                        span.textContent = title;
                        const button = document.createElement('button');
                        button.textContent = 'More';
                        button.classList.add('button');
                        button.addEventListener('click', clickHandler);
                        button.id = _id;
                        const extraInfo = document.createElement('div');
                        extraInfo.classList.add('extra');
                        const paragraph = document.createElement('p');
                        paragraph.textContent = content;

                        extraInfo.appendChild(paragraph);
                        head.append(span, button);
                        accordion.append(head, extraInfo);

                        main.appendChild(accordion);
                    })
                    .catch((err) => {
                        alert(err);
                    });
            });
        })
        .catch((err) => {
            alert(err);
        });

    function clickHandler() {
        if (this.textContent === 'More') {
            this.parentElement.parentElement.children[1].style.display = 'block';
            this.textContent = 'Less';
        } else {
            this.parentElement.parentElement.children[1].style.display = 'none';
            this.textContent = 'More';
        }
    }
}

solution();