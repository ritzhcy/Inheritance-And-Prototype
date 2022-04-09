// 1. Create 2 objects - parent and child. Attach methods to parent and 
// use those methods in child object using parents prototype
let parents={
    mother:'Yes',
    father:'yes',
    Brother:'yes',
    children:function()
    {
        console.log("I am parent")
    }
}
let child={
    playing:'yes',
    eating:'milk',
}
child.__proto__=parents
console.log('child',child)//child {playing: 'yes', eating: 'milk'}
console.log(child.father)//yes
child.children()//i am parent



// 2. Write code to explain prototype chaining
let mother={
    care:"Yes",
    Strict:function()
    {
        console.log("Yes")
    }
}
let girl={
    food:"junk food",
    walks:"true",
}
let boy={
    food:"only food",
    walks:"true",

}
girl.__proto__=mother
boy.__proto__=girl
girl.Strict()// yes
boy.Strict()//yes



// 3. Add a method to calculate sum of all elements in Array in array's 
// protype, use that method to calculate sum for multiple arrays
let salaries=[2,3,4,8,8,45,14]
let output=salaries.reduce((acc,cur)=>{
   acc= acc+cur
   return acc
},0)
console.log(output)



// 4. Write a JavaScript function to retrieve all the names of object's 
// own and inherited properties.
let animals={
    eats:'true',
    moves:'true',
}
let cat={
    jumps:'true',
}
let dog={
    hasTail:'true'
}
cat.__proto__=animals;
dog.__proto__=animals;
console.log(cat.hasOwnProperty("jumps"))
console.log(dog.hasOwnProperty('hasTail'))