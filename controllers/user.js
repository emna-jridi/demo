const User = require('../model/user');

const getAllUsers = async (req, res) => {
    const allUsers = await User.find({});
    res.json(allUsers);
}

const getUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    const foundUser = await User.findOne({ _id: userId });    
    if (!foundUser) {
        return res.status(404).json({ msg: 'Utilisateur introuvable !' });
    }
    res.json(foundUser);
}
const createUser = async (req, res) => {
    try {
        const { username, email, age } = req.body;
        const newUser = new User({ username, email, age });
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        
        res.status(500).json({ msg: 'Erreur lors de la création de l\'utilisateur' });
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedUser = await User.findOneAndUpdate({ _id: userId }, req.body, {});
    if (!updatedUser) {
        return res.status(404).json({ msg: 'Utilisateur introuvable !' });
    }
    res.json({ message: 'Utilisateur mis à jour.' });
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await User.findOneAndDelete({ _id: userId });
    if (!deletedUser) {
        return res.status(404).json({ msg: 'Utilisateur introuvable !' });
    }
    res.json({ message: 'Utilisateur supprimé.' });
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser, createUser 
};
