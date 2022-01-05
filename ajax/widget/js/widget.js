let employeeList = new XMLHttpRequest();

employeeList.onreadystatechange = () => {
    if (employeeList.readyState !== 4) {
        return;
    }
    let employees = JSON.parse(employeeList.responseText);
    let employeeStatus = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i++) {
        let employeeStatusClass = "out";
        if (employees[i].inoffice === true) {
            employeeStatusClass = 'in';
        }
        employeeStatus += `<li class="${employeeStatusClass}">${employees[i].name}</li>`;
    }
    employeeStatus += '</ul>';
    document.getElementById('employeeList').innerHTML = employeeStatus;
};

employeeList.open('GET', 'data/employees.json');
employeeList.send();

let roomList = new XMLHttpRequest();
roomList.onreadystatechange = () => {
    if (roomList.readyState !== 4) {
        return;
    }
    let openRooms = JSON.parse(roomList.responseText);
    let roomStatus = '<ul class="rooms">';
    for (let i = 0; i < openRooms.length; i++) {
        let roomStatusClass = 'full';
        if (openRooms[i].available === true) {
            roomStatusClass = "empty";
        }
        roomStatus += `<li class='${roomStatusClass}'>${openRooms[i].roomNumber}</li>`;
    }
    roomStatus += '</ul>';
    document.getElementById('roomList').innerHTML = roomStatus;
};

roomList.open('GET', 'data/rooms.json');
roomList.send();
