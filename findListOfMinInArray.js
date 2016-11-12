var _ = require('underscore');

var users = [
    {'user': 'hoan', 'age': 2},
    {'user': 'tung', 'age': 1},
    {'user': 'barney', 'age': 36},
    {'user': 'fred', 'age': 40},
    {'user': 'pebbles', 'age': 1},
    {'user': 'Bush', 'age': 0},
    {'user': 'John', 'age': 2},
    {'user': 'Win', 'age': 0}
    
];

var index =[0];

var min = parseInt(users[0].age);

for( var i=1;i< users.length;i++){

    if(users[i].age<min){

        min = users[i].age;
    
        while(!index.length==0){
            index.pop();
        }

        index.push(i);

    }else if(users[i].age==min){

        index.push(i);
    }
}

console.log(index);
index.forEach(function(i){
    console.log(users[i]);
})

