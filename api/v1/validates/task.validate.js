module.exports.create = async (req, res, next) => {
  if (!req.body.title) {
    res.json({
      code: 400,
      message: "Tiêu đề không được để trống"
    })
    return;
  }

  if (req.body.title.length < 5) {
    res.json({
      code: 400,
      message: "Tiêu đề không được ít hơn 5 kí tự"
    })
    return;
  }

  next();
}