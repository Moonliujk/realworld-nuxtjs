import {request} from '@/plugins/request.js';

// 获取全部标签
const getTags = params => request({
    method: 'GET',
    url: '/api/tags',
    params
});

export {
    getTags
};