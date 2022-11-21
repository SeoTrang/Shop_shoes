<<<<<<< HEAD
const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/shop_shoes');
        console.log('ket noi thanh cong');
    }
    catch(error){
        console.log('ket noi that bai');
    }
}

module.exports = {connect};

// shop_shoes
=======
const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/shop_shoes');
        console.log('ket noi thanh cong');
    }
    catch(error){
        console.log('ket noi that bai');
    }
}

module.exports = {connect};

// shop_shoes
>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
