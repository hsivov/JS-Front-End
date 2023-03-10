function solve(input) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        };
    }

    for (const element of input) {
        let [name, age] = element.split(' ');
        cats.push(new Cat(name, age));
    }

    cats.forEach((cat) => console.log(cat.meow()));
}

solve(
    ['Mellow 2', 'Tom 5']
);
