const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@cluster0.1bdbppv.mongodb.net/project",{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() =>
console.log("Connect Is Successfully")
).catch((err) =>
console.log("Something Went wrong",err)
 );