use("mydatabase")

// db.createCollection("todos")

// db.todos.insertMany([
//     {
//     title: "Pizza",
//     description: "Very Tasty",
//     importance: 90
// },

// {
//     title: "Vadapav",
//     description: "Very Spicy",
//     importance: 91
// },

// {
//     title: "Burger",
//     description: "Tasty",
//     importance: 92
// },

// {
//     title: "Rolls",
//     description: "Very Tasty",
//     importance: 94
// },

// {
//     title: "Samosa",
//     description: "Very Tasty",
//     importance: 98
// },

// ]
// )

db.todos.updateOne(
    { importance: 90 },
    {
        $set: { importance: 95 },
        //   $currentDate: { lastModified: true }
    }
);


db.todos.updateMany(
    { importance: 90 },
    {
        $set: { importance: 95 },
    }
);

db.todos.updateOne(
    { importance: 91 },
    {
        $set: { importance: 98 },
    }
);


db.todos.deleteOne({ importance: 92 })

const b = db.todos.find(
    {
        importance: 95
    },

     
    
)
console.log(b)

