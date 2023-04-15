function sprintReview(input) {
    const n = input.shift();

    const commandParser = {
        'Add New': addNew,
        'Change Status': changeStatus,
        'Remove Task': removeTask
    }

    let statusPoints = {
        ToDo: 0,
        "In Progress": 0,
        "Code Review": 0,
        Done: 0,
    };
    let sprintBoard = {};

    for (let i = 0; i < n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(':');
        if (sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee].push({taskId, title, status, estimatedPoints});
        } else {
            sprintBoard[assignee] = [{taskId, title, status, estimatedPoints}];
        }
    }

    for (const inputLine of input) {
        const commandToken = inputLine.split(':');
        const command = commandToken[0];

        commandParser[command](...commandToken.slice(1));
    }

    function addNew(assignee, taskId, title, status, estimatedPoints) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee].push({taskId, title, status, estimatedPoints});
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeStatus(assignee, taskId, newStatus) {

        let isExist = false;
        if (sprintBoard.hasOwnProperty(assignee)) {
            for (const assignment of sprintBoard[assignee]) {
                if (assignment.taskId === taskId) {
                    assignment.status = newStatus;
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeTask(assignee, index) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            if (index < 0 || index >= sprintBoard[assignee].length) {
                console.log('Index is out of range!')
            } else {
                sprintBoard[assignee].splice(index, 1);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    for (const assignee in sprintBoard) {
        for (const task of sprintBoard[assignee]) {
            let taskPoints = Number(task.estimatedPoints);

            if (task.status === 'ToDo') {
                statusPoints.ToDo += taskPoints;
            }
            if (task.status === 'In Progress') {
                statusPoints["In Progress"] += taskPoints;
            }
            if (task.status === 'Code Review') {
                statusPoints["Code Review"] += taskPoints;
            }
            if (task.status === 'Done') {
                statusPoints.Done += taskPoints;
            }
        }
    }

    console.log(`ToDo: ${statusPoints["ToDo"]}pts`);
    console.log(`In Progress: ${statusPoints["In Progress"]}pts`);
    console.log(`Code Review: ${statusPoints["Code Review"]}pts`);
    console.log(`Done Points: ${statusPoints["Done"]}pts`);

    let pendingStatus = statusPoints["In Progress"] + statusPoints["Code Review"] + statusPoints["ToDo"];

    if (statusPoints["Done"] >= pendingStatus) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
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
);
