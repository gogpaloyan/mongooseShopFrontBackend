import mongoose from "mongoose";


const Schema = mongoose.Schema

const UsersShema = new Schema({
    name: String,
    comments: String
})


export let Users = mongoose.model('users', UsersShema)
