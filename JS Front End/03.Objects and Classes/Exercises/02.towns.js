function printTowns(input) {

    let towns = [];

    for (const element of input) { 
        
        let [town, latitude, longitude] = element.split(' | ');

        let townObj = {
            town, 
            latitude: Number(latitude).toFixed(2), 
            longitude: Number(longitude).toFixed(2)
        };
        
        towns.push(townObj);
    }

    for (const town of towns) {
       console.log(town);
    }
}

printTowns(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']    
);
