const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(StatusCodes.OK).json({ users, count: users.length });
};
const getUser = async (req, res) => {
    const {
       params:{ id:  userId },
    } = req;

    const user = await User.findOne({
        _id: userId,
    });
    if (!user) {
        throw new NotFoundError(`No user with id ${userId}`);
    }
    res.status(StatusCodes.OK).json({ user });
};

const deleteUser = async (req, res) => {
    const {
        params:{ id:  userId },
    } = req;


    const user = await User.findOneAndRemove({
        _id: userId,
    });
    if (!user) {
        throw new NotFoundError(`No user with id ${userId}`);
    }
    res.status(StatusCodes.OK).json({ user });
};


const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
};
const updateUser = async (req, res) => {
    const {
        body: { first_name, last_name, email },
        params: { id:userId },
    } = req;

    const user = await User.findByIdAndUpdate(
        { _id: userId },
        req.body,
        { new: true, runValidators: true }
    );
    if (!user) {
        throw new NotFoundError(`No user with id ${userId}`);
    }
    res.status(StatusCodes.OK).json({ user });
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
