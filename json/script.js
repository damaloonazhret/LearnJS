'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

alert(user);

let user1 = JSON.stringify(user);

alert(user1);

let user2 = JSON.parse(user1);

alert(user2);
