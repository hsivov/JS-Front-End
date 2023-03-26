function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');
    let posts = [];

    loadPostsBtn.addEventListener('click', loadPostsHandler);
    viewPostBtn.addEventListener('click', viewPostHandler);
    selectElement.addEventListener('change', selectOptionHandler);

    async function loadPostsHandler() {
        const URL = 'http://localhost:3030/jsonstore/blog/posts';

        const response = await fetch(URL);
        const responseData = await response.json();

        Object.values(responseData).forEach((value) => {
            const {id, title} = value;
            const option = document.createElement('option');
            option.value = id.toString();
            option.textContent = title.toString();
            selectElement.appendChild(option);
            posts.push(value);
        });
        viewPostBtn.id = selectElement.value;
    }

    function viewPostHandler() {
        const URL = 'http://localhost:3030/jsonstore/blog/comments';
        const topicId = this.id;

        const post = posts.find((post) => post.id === topicId);
        const {title, body} = post;
        postTitle.textContent = title;
        postBody.textContent = body;


        fetch(URL)
            .then((commentsRes) => commentsRes.json())
            .then((commentsResData) => {
                commentsList.innerHTML = '';

                Object.values(commentsResData)
                    .filter((value) => value.postId === topicId)
                    .forEach((value) => {
                        const {text} = value;
                        const comment = document.createElement('li');
                        comment.textContent = text.toString();
                        commentsList.appendChild(comment);
                    });
            })
            .catch((err) => {
                alert(err);
            })
    }

    function selectOptionHandler() {
        viewPostBtn.id = selectElement.value;
    }
}

attachEvents();