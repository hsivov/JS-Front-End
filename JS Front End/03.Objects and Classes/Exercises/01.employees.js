function employeesParser(input) {

    

    Object.entries(
        input.reduce((objEmployee, arrEmployee) => {
        objEmployee[arrEmployee] = arrEmployee.length;
        return objEmployee;
    }, {}))
    .forEach(([key, value]) => console.log(`Name: ${key} -- Personal Number: ${value}`));
}

employeesParser(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);
