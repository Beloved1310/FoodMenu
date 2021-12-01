/* eslint consistent-return: "off" */

module.exports = (req, res, next) => {
  if (req.user && req.user.isVendor) {
    next();
  } else {
    res.status(403).send({ message: 'Invalid Vendor Token' });
  }
};
