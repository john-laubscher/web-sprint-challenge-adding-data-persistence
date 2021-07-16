const checkName = (req, res, next) => {
  const { resource_name } = req.body;
  if (!resource_name || !resource_name.trim()) {
    next({ status: 400, message: "invalid resource_name" });
  } else {
    next();
  }
};

module.exports = {
  checkName,
};
