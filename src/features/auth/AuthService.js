const users = JSON.parse(localStorage.getItem('users')) || [];

export const register = (newUser) => {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
};

export const authenticate = ({ email, password }) => {
    return users.find(u => u.email === email && u.password === password);
};