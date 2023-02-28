function solve(base, increment) {

    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let height = 0;

    while (base - 2 > 0) {
        height++;
        if (height % 5 === 0) {
            lazuli += (base * 4 - 4) * increment;
        } else {
            marble += (base * 4 - 4) * increment;
        }
        stone += Math.pow(base - 2, 2) * increment;
        base -= 2;
    }
    height++;
    gold += (base * base) * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

solve(23, 0.5);