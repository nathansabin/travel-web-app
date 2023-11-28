const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async (next) => {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 15;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.checkPassword = async (password) => {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;