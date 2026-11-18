 db.students.insertMany([
    {
        name : 'Ankit',
        age:19,
        gender:'male',
        course:'BTech',
        cgpa:10
    },
    {
        name : 'Rahul',
        age:20,
        gender:'male',
        course:'BCA',
        cgpa:7
    },
    {
        name : 'Rajesh',
        age:23,
        gender:'male',
        course:'BTech',
        cgpa:9
    },
    {
        name : 'Payal',
        age:19,
        gender:'female',
        course:'MCA',
        cgpa:7.9
    },
    {
        name : 'Swati',
        age:29,
        gender:'female',
        course:'BCA',
        cgpa:8.7
    },
])


db.students.aggregate([
    {
        $match : {
            gender : 'female'
        }
    }
])

db.students.aggregate([{
    $project : {
        name : 1,
        age : 1
    }
}])

db.students.aggregate([
    {
        $group : {
            _id : '$gender',
            total : { $sum : 1}
        }
    }
])

db.students.aggregate([
    {
        $sort : {
            age: -1
        }
    }
])


db.students.aggregate([
    {
        $limit : 3
    }
])


db.students.createIndex({
    name : 1
})

db.students.getIndexes()