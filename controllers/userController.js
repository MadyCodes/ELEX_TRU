// controllers/userController.js
const users = []; // In-memory user storage for demonstration purposes

// Get user profile
exports.getProfile = (req, res) => {
    const userId = req.user.id; // Assuming user ID is set in req.user by the protect middleware
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Update user profile
exports.updateProfile = (req, res) => {
    const userId = req.user.id;
    const { name, email } = req.body;

    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], name, email };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Delete user profile
exports.deleteProfile = (req, res) => {
    const userId = req.user.id;
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Get all users (admin only)
exports.getAllUsers = (req, res) => {
    res.json(users);
};
