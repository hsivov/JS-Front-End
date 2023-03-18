function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach((button) => {
        button.addEventListener('click', toggleInfo);
    });

    function toggleInfo() {
        const currentProfile = this.parentElement;
        const unlockRadioBtn = currentProfile.children[4];
        const currentInfoDiv = currentProfile.children[9];

        if (unlockRadioBtn.checked) {
            if (this.textContent === "Show more") {
                currentInfoDiv.style.display = 'block';
                this.textContent = 'Hide it'
            } else {
                currentInfoDiv.style.display = 'none';
                this.textContent = 'Show more';
            }
        }
    }
}
