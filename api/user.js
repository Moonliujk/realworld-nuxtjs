import {request} from '@/plugins/request.js';

// 用户登录
const login = data => request({
    method: 'POST',
    url: '/api/users/login',
    data
});

// 用户注册
const register = data => request({
    method: 'POST',
    url: '/api/users',
    data
});

export {
    login,
    register
};