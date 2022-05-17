import bcrypt from 'bcryptjs';

const users = [
    {
        name: "John Doe",
        email: "john@example.com",
        password: bcrypt.hashSync('123456', 10),
        img: '/images/default-user.jpg'
    }
]

export default users;