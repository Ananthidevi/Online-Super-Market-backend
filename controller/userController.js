const User = require("../model/userModel");

//post api
const createUser = async (req,res) => {
    const{username, email, password, mobilenumber, role} = req.body;
    try{
        const newUser = new User({username, email, password, mobilenumber, role});
        await newUser.save();
        res.status(201).json({message: "user account created", newUser});

    }catch(err){
        res.status(500).json({message: "user account creation failed"});
    }
};

const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: "user account creation failed"});
    }
};

const updateUser =async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200).json({message:"user details updated", updateUser});
    }
    catch(err){
        res.status(500).json({message: "user account creation failed"});
    }

};
const deleteUser =async (req, res) => {
    try{
        const deleteUser = await User.findByIdAnddelete(req.params.id);
    res.status(204).json({message:"user details deleted", deleteUser});
    }
    catch(err){
        res.status(500).json({message: "user account creation failed"});
    }

};
module.exports = {createUser, getUsers,updateUser, deleteUser};