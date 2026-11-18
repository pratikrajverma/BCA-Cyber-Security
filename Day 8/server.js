// show dbs

// use database

db

// show collections

// db.createCollection('students')


// db.teacher.drop()


// db.dropDatabase()


// db.students.insertOne({
//     name:"ankit",
//     age:23,
//     _id:1
// })



// db.createCollection('teachers')


// db.students.find()


// db.students.insertOne({
//     name:"ankit",
//     age:23
// })

// db.students.insertMany([
//     {
//         name : 'Ankit',
//         age:19,
//         gender:'male',
//         course:'BTech',
//         cgpa:10
//     },
//     {
//         name : 'Rahul',
//         age:20,
//         gender:'male',
//         course:'BCA',
//         cgpa:7
//     },
//     {
//         name : 'Rajesh',
//         age:23,
//         gender:'male',
//         course:'BTech',
//         cgpa:9
//     },
//     {
//         name : 'Payal',
//         age:19,
//         gender:'female',
//         course:'MCA',
//         cgpa:7.9
//     },
//     {
//         name : 'Swati',
//         age:29,
//         gender:'female',
//         course:'BCA',
//         cgpa:8.7
//     },
// ])

// db.students.deleteOne({ _id: 1})

// db.students.deleteMany({age: 23})

// db.students.insertOne({ name: 'Rajesh',
//     age: 23,
//     gender: 'male',
//     course: 'BTech',
//     cgpa: 9
// })


// db.students.findOne()

// db.students.updateOne(
//     { name: 'Rajesh' },
//     {
//         $set: { name: 'Rajesh Singh' }
//     }
// )


// db.students.updateMany(
//     {course : 'BTech'},
//     { 
//         $set: {course : 'BCA'}
//     }
// )

// db.students.updateOne(
//     {name:'Rajesh Singh'},
//     {
//         $set : {course: 'BTech'}
//     }
// )

db.students.find(
    { age : { $eq : 19}}
)


db.students.find(
    {age : {$ne : 19}}
)

db.students.find({
    cgpa : {$gt : 8}
})


db.students.find(
    {cgpa : {$lt : 8}}
)



db.students.find({
    $and : [ {cgpa : {$gte : 8}}  , {gender : {$eq: 'female'} }]
})

db.students.find({

$or : [  {course : 'BCA'} , {gender : 'female'} ]

})

