function sprintReview(input) {

    const n = input.shift();
    let sprintBoard = {};

    const commandParser = {
        'Add New': addNew,
        'Change Status': changeStatus,
        'Remove Task': removeTask
    }

    let pointByStatus = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0
    }

    for (let i = 0; i < n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(':');

        if (sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee].push({ taskId, title, status, estimatedPoints });
        } else {
            sprintBoard[assignee] = [{ taskId, title, status, estimatedPoints }];
        }
    }

    for (const line of input) {
        const [command, ...arguments] = line.split(':');

        commandParser[command](arguments);
    }

    function addNew(arguments) {
        const [assignee, taskId, title, status, estimatedPoints] = arguments;

        if (sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee].push({ taskId, title, status, estimatedPoints });
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeStatus(arguments) {
        const [assignee, taskId, newStatus] = arguments;

        if (sprintBoard.hasOwnProperty(assignee)) {
            for (const task of sprintBoard[assignee]) {
                if (task.taskId === taskId) {
                    task.status = newStatus;
                } else {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
                }
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeTask(arguments) {
        const [assignee, index] = arguments;

        if (sprintBoard.hasOwnProperty(assignee)) {
            if (index < 0 || index >= sprintBoard[assignee].length) {
                console.log('Index is out of range!');
            } else {
                sprintBoard[assignee].splice(index, 1);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    Object.values(sprintBoard).forEach((tasks) => {
        tasks.forEach((task) => {
            let taskPoints = Number(task.estimatedPoints);

            if (task.status === 'ToDo') {
                pointByStatus['ToDo'] += taskPoints;
            }

            if (task.status === 'In Progress') {
                pointByStatus['In Progress'] += taskPoints;
            }

            if (task.status === 'Code Review') {
                pointByStatus['Code Review'] += taskPoints;
            }

            if (task.status === 'Done') {
                pointByStatus['Done'] += taskPoints;
            }
        });
    });

    console.log(`ToDo: ${pointByStatus['ToDo']}pts`);
    console.log(`In Progress: ${pointByStatus['In Progress']}pts`);
    console.log(`Code Review: ${pointByStatus['Code Review']}pts`);
    console.log(`Done Points: ${pointByStatus['Done']}pts`);

    if (pointByStatus['Done'] >= pointByStatus['Code Review'] + pointByStatus['In Progress'] + pointByStatus['ToDo']) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}

sprintReview(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)