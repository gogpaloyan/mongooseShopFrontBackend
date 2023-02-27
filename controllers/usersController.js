import { Users } from "../models/Users.js";





export function getUsers(req, res){
   return  Users
    .find()
    .sort({name: 1})
    .then((users) => res.json(users))
    .catch((err) => console.log(err))
}

export function findUserName(req, res){
    Users
    .findOne({name: req.params.id})
    .then((user) => res.json(user))
}

export function onDeleteUser(req, res){
    Users.findByIdAndDelete(req.params.id)
    .then((user) => res.json(user))
}

export function onPostUser(req, res){
    const user = new Users(req.body)
    user
    .save()
    .then((data) => res.send(data))
}