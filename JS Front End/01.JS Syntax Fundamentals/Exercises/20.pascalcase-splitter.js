function splitter(text) {

    let output = text.split(/(?=[A-Z])/g);

    // let output = [];
    // for (const aChar of charArray) {
    //     let aCharAscii = aChar.charCodeAt(0);
    //     if (aCharAscii >= 65 && aCharAscii <= 90) {
    //         if (!!output.length) {
    //             output += ', ';
    //         }
    //     }
    //     output += aChar;
    // }
    console.log(output.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');