import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://images.ctfassets.net/hrltx12pl8hq/33OHYwkr7a1prXiTMsDpbe/a49615388a95bf985579c19d11065b8d/11_abstract_lines.webp"
    },
}, 
{timestamps: true}); // one is time of creation of user and another is time of update of the user.


const User = mongoose.model('User', userSchema);

export default User;