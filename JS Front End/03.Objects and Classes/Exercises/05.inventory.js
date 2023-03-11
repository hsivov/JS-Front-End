function inventory(input) {

    let heroes = [];

    for (const inputElement of input) {
        let [name, level, items] = inputElement.split(' / ');
        heroes.push({name, level: Number(level), items: items.split(', ')});
    }

    heroes.sort((heroA, heroB) => heroA.level - heroB.level)
        .forEach((hero) => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`));
}

inventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);
