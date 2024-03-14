module.exports.register = async (req, res, next) => {
  if(!req.body.fullName) {
    res.json({
      code:400,
      message:"Tên không được để trống!"
    })
    return;
  }

  if(!req.body.email) {
    res.json({
      code:400,
      message:"Email không được để trống!"
    })
    return;
  }

  if(!req.body.password) {
    res.json({
      code:400,
      message:"Mật khẩu không được để trống!"
    })
    return;
  }

  if(req.body.password.length < 6) {
    res.json({
      code:400,
      message:"Mật khẩu không được ít hơn 6 ký tự!"
    })
    return;
  }

  next()
}