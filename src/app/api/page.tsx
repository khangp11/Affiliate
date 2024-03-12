import dbConnect from '../../lib/dbConnect';
import { UserModel } from '@/models/userSchema';

export default async function handler(req: any, res: any) {
    try {
        await dbConnect();

        const newUser = new UserModel({
            name: 'user2',
            email: 'user2@gmail.com',
            password: '123',
            role: 'USER',
        });
        await newUser.save();

        console.log('Dữ liệu đã được thêm vào MongoDB thành công.');

    } catch (error) {

    }
}
