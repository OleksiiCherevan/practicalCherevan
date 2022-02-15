let characters = [
    {
        name: 'barney', age: 36,
    },
    {
        name: 'vasa', age: 21,
    }
]

const Pluck = (array, field) =>  array.map(element => element[field])

console.log(Pluck(characters, 'age'));