export const getMe = async (req, res) => {
  const user = req.user; // attached by auth middleware
  res.json({ id: user._id, name: user.name, email: user.email, role: user.role });
};
