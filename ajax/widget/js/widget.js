let employeeList = new XMLHttpRequest();
employeeList.onreadystatechange = function () {
    if (employeeList.readyState === 4) {
        let employees = JSON.parse(employeeList.responseText);
        let employeeStatus = '<ul class="bulleted">';
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].inoffice === true) {
                employeeStatus += '<li class="in">';
            } else {
                employeeStatus += '<li class="out">';
            }
            employeeStatus += employees[i].name;
            employeeStatus += '</li>';
        }
        employeeStatus += '</ul>';
        document.getElementById('employeeList').innerHTML = employeeStatus;
    }
};
employeeList.open('GET', 'data/employees.json');
employeeList.send();

let roomList = new XMLHttpRequest();
roomList.onreadystatechange = function () {
    if (roomList.readyState === 4) {
        let openRooms = JSON.parse(roomList.responseText);
        let roomStatus = '<ul class="rooms">';
        for (let i = 0; i < openRooms.length; i++) {
            if (openRooms[i].available === true) {
                roomStatus += '<li class="empty">';
            } else {
                roomStatus += '<li class="full">';
            }
            roomStatus += openRooms[i].roomNumber;
            roomStatus += '</li>';
        }
        roomStatus += '</ul>';
        document.getElementById('roomList').innerHTML = roomStatus;
    }
};
roomList.open('GET', 'data/rooms.json');
roomList.send();
