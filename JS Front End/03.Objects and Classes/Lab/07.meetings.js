function meetings(input) {

    let schedule = {};
    for (const inputElement of input) {
        let [day, name] = inputElement.split(' ');
        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const scheduleKey in schedule) {
        console.log(`${scheduleKey} -> ${schedule[scheduleKey]}`)
    }
}

meetings(
    ['Friday Bob',
        'Saturday Ted',
        'Monday Bill',
        'Monday John',
        'Wednesday George']
);
