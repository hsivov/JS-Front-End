function loadingBar(num) {
    let bar = '.'.repeat(10 - (num / 10));
    let substring = '%'.repeat(num / 10);

    bar = substring + bar;

    if (num === 100) {
        console.log(`${num}% Complete!\n[${bar}]`);
    } else {

        console.log(`${num}% [${bar}]\nStill loading...`);
    }

}

loadingBar(30);