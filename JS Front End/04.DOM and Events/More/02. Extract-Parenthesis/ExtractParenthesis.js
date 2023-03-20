function extract(content) {

    const element = document.getElementById(content);
    let text = element.textContent;

    let matchWords = text.match(/(?<=\()[^()]*(?=\))/g);


    let result = matchWords.join('; ');
    console.log(result);
    return result;
}
