module.exports = (err, req, res, next) => {
  if (err) {
    res.status(500).json({
      message: "There\'s an error while processing your request"
    });
  } else {
    next();
  }
};