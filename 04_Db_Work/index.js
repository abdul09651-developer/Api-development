const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/apidev-demo")
.then(()=>{
    console.log("Connection Established");
})
.catch((err)=>{
    console.log(err);
})

const empSchema = mongoose.Schema({
    ename:{
        type:String,
        required:true
    },
    eid:{
        type:String,
        required:true,
        minLength:[4,"eid should be of 4 to 6 length"],
        maxLength:[6,"eid should be of 4 to 6 length"]
    },
    age:{
        type:Number,
        min:[20,"Minimum age is 20"]
    },
    role:{
        type:String,
        enum:["Developer","Tester","Manager","Admin"]
    },
    city:{
        type:String
    }

},{timestamps:true})


const empModel = mongoose.model("employee",empSchema)


let emp = {
  ename: "Mahesh",
  eid: "724614",
  age: 27,
  role: "Tester",
  city: "Mumbai"
}

// empModel.create(emp)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// empModel.find({role:"Manager"}).sort({age:1})
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// empModel.updateOne({ename:"Raj"},{city:"Noida"})
// .then((info)=>{
//     console.log(info)
// })
// .catch((err)=>{
//     console.log(err)
// })

// empModel.deleteMany({role:"Tester"})
// .then((info)=>{
//     console.log(info)
// })
// .catch((err)=>{
//     console.log(err)
// })
