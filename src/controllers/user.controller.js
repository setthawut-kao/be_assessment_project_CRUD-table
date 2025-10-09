import { User } from "../models/user.model.js";

// createUser
export const createUser = async (req, res, next) => {
  const { firstName, lastName, position } = req.body;

  if (!firstName || !lastName || !position) {
    const error = new Error("firstName, lastName, and position are required!");
    error.status = 400;
    return next(error);
  }

  try {
    const user = await User.create({ firstName, lastName, position });
    res.status(201).json({
      succes: true,
      data: user,
      message: "User created successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// getUsers
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
      message: "All users retrieved successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// editUser
export const editUser = async (req, res, next) => {
  const userId = req.params.id;

  const { firstName, lastName, position } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.status = 404;
      return next(error);
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (position) user.position = position;

    await user.save();

    res.status(200).json({
      success: true,
      data: user,
      message: "User updated successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// deleteMember
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (err) {
    next(err);
  }
};
