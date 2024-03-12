import { Schema, model, Document } from 'mongoose';

enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}
interface User extends Document {
    name?: string;
    email?: string;
    image?: string;
    password?: string;
    role: UserRole;
}
const userSchema = new Schema<User>({
    name: String,
    email: { type: String, unique: true },
    image: String,
    password: String,
    role: { type: String, default: UserRole.USER },
});
const UserModel = model<User>('User', userSchema);

export {
    UserModel,
};
