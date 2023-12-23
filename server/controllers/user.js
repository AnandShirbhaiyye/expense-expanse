import User from "../models/User.js";

const postApiSignup = async (req, res) => {
  const { name, email, password, mobile, address, gender } = req.body;

  const signupObj = new User({
    name,
    email,
    password,
    mobile,
    address,
    gender,
  });
  const savedUser = await signupObj.save();

  res.json({
    success: true,
    data: savedUser,
    message: "user saved successfully...",
  });
};

const postApiLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({
        success: false,
        message: "please enter valid email or password...!",
      });
    }

    const findUser = await User.findOne({
      email: email,
      password: password,
    }).select("name email mobile address gender");
    if (!findUser) {
      res.json({
        success: false,
        message: "user not found",
      });
    }
    res.json({
      success: true,
      data: findUser,
      message: "user login successfully...",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

export { postApiSignup, postApiLogin};
