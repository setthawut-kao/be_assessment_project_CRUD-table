import { Member } from "../models/member.model.js";

// createMember
export const createMember = async (req, res, next) => {
  const { firstName, lastName, position } = req.body;

  if (!firstName || !lastName || !position) {
    const error = new Error("firstName, lastName, and position are required!");
    error.status = 400;
    return next(error);
  }

  try {
    const member = await Member.create({ firstName, lastName, position });
    res.status(201).json({
      succes: true,
      data: member,
      message: "Member created successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// getMembers
export const getMembers = async (req, res, next) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json({
      succes: true,
      count: members.length,
      data: members,
      message: "All members retrieved successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// editNote
export const editMember = async (req, res, next) => {
  const memberId = req.params.id;

  const { firstName, lastName, position } = req.body;

  try {
    const member = await Member.findById(memberId);

    if (!member) {
      const error = new Error("Member not found!");
      error.status = 404;
      return next(error);
    }

    if (firstName) member.firstName = firstName;
    if (lastName) member.lastName = lastName;
    if (position) member.position = position;

    await member.save();

    res.status(200).json({
      success: true,
      data: member,
      message: "Member updated successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// deleteMember
export const deleteMember = async (req, res, next) => {
  const memberId = req.params.id;

  try {
    const member = await Member.findByIdAndDelete(memberId);

    if (!member) {
      const error = new Error("Member not found!");
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: "Member deleted successfully!",
    });
  } catch (err) {
    next(err);
  }
};
