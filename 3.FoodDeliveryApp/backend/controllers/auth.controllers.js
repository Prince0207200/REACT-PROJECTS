import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/token.js";
import { sendOtpMail } from "../utils/mail.js";

export const signUp = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exist." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password length must be atleast 6 character" });
    }
    if (mobile.length < 10) {
      return res
        .status(400)
        .json({ message: "mobile no length must be atleast 10 digit" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      mobile,
      role,
    });
    const token = await genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "sign up error from server" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not Exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = await genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `sign in error from server` });
  }
};

export const signOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: `sign out error from server}` });
  }
};

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not Exist." });
    }
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    user.resetOtp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    user.isOtpVarified = false;
    await user.save();
    await sendOtpMail({ to: email, otp });
    return res.status(200).json({ message: "otp sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error while sending otp ${error}` });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    let { email, otp } = req.body;
    let user = await User.findOne({ email });
    if (!user || user.resetOtp != otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired otp" });
    }
    user.isOtpVarified = true;
    user.resetOtp = undefined;
    user.otpExpires = undefined;
    await user.save();
    return res.status(200).json({ message: "otp verify successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error while varifying otp ${error}` });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    let user = await User.findOne({ email });
    if (!user || !user.isOtpVarified) {
      return res
        .status(400)
        .json({ message: "Otp varification required to reset" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.isOtpVarified = false;
    await user.save();
    return res.status(200).json({ message: "otp reset successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error while reset password ${error}` });
  }
};

export const googleAuth = async (req, res) => {
  try {
    const { fullName, email, mobile, role } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      // If required fields for signup are missing, return 404
      if (!fullName || !mobile || !role) {
        return res.status(404).json({ message: "User not found" });
      }
      // Create new user (sign-up)
      user = await User.create({
        fullName,
        email,
        mobile,
        role
      });
    }

    const token = await genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: `googleAuth error ${error}` });
  }
};
