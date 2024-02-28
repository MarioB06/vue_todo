// userData.js

export const saveUserData = (userData) => {
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    existingData.push(userData);
    localStorage.setItem('userData', JSON.stringify(existingData));
};

export const checkUserExists = (email) => {
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    return existingData.some(user => user.email === email);
};

export const loginUser = (userData) => {
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = existingData.find(u => u.email === userData.email && u.password === userData.password);
    return user;
};
