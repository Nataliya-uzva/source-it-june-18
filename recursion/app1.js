'use strict';

//[
// "Вася Пупкин",
// "Петя Пупкин",
// "Катя Гранкина",
// "Вера Гранкина",
// "Надежда Гранкина",
// "Любовь Гранкина",
// "Андрей Пупкин",
// "Нафанаил Пупкин",
// "Аркадий Пупкин",
// "Павел Пупкин",
// "Маруся Пупкина"
// ]

var family = {
  name: 'Вася Пупкин',
  age: 75,
  children: [
    {
      name: 'Петя Пупкин',
      age: 55,
      children: [
        {
          name: 'Катя Гранкина',
          age: 30,
          children: [
            {
              name: 'Вера Гранкина',
              age: 5
            },
            {
              name: 'Надежда Гранкина',
              age: 5
            },
            {
              name: 'Любовь Гранкина',
              age: 5
            }
          ]
        },
        {
          name: 'Андрей Пупкин',
          age: 29,
          children: [
            {
              name: 'Нафанаил Пупкин',
              age: 10
            }
          ]
        }
      ]
    },
    {
      name: 'Аркадий Пупкин',
      age: 50,
      children: [
        {
          name: 'Павел Пупкин',
          age: 25,
          children: [
            {
              name: 'Маруся Пупкина',
              age: 5
            }
          ]
        }
      ]
    }
  ]
};

var resultNames = [];

function familyTree(person) {

  resultNames.push(person.name);

  if (person.children) {
    person.children.forEach(function(child) {
      return familyTree(child);
    })
  } else {
    return resultNames;
  }
}

console.log(familyTree(family));








