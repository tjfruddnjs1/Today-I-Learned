const animal = [
    {
        id : 0,
        diverse : 'cat',
        isIt : true
    },
    {
        id : 2,
        diverse : 'carrot',
        isIt : false
    },
    {
        id : 2,
        diverse : 'dog',
        isIt : true
    }
]

const aniArr1 = animal.find(animals => (animals.id === 2));

// animal.find(function animals(){
//     return animals.id === 2;
// })   arrow function 없을 시절 이렇게 썼다.

console.log(aniArr1);		//{id: 2, diverse: "carrot", isIt: false}