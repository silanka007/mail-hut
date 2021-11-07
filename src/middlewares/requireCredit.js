module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(401).json({ message: "not enough credit!" });
  }
  next();
};
