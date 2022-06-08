import bcrypt from 'bcryptjs';

const users = [
    {
        name: "John Doe",
        email: "john@example.com",
        password: bcrypt.hashSync('123456', 10),
        img: '/images/default-user.jpg',
        description: 'I am designer and front-end developer. Use my knowledge for creating good interfaces thus providing a good user experience.'
    }
]

export default users;