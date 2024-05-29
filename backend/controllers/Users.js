import Users from "../models/UserModels.js";
import argon2 from "argon2";

export const getUser = async(req, res) => {
    try {
        const response = await Users.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) => {
    const {name, email, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password not the same"});
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Completed"});

    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}