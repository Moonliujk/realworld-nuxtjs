import {request} from '@/plugins/request.js';

// 获取文章列表
const getArticles = params => request({
    method: 'GET',
    url: '/api/articles',
    params
});

// 获取关注文章列表
const getFeedArticles = params => request({
    method: 'GET',
    url: '/api/articles/feed',
    params
});

// 更新文章点赞状态
const updateFavorite = (slug, favorite = true) => request({
    method: favorite ? 'POST' : 'DELETE',
    url: `/api/articles/${slug}/favorite`,
});

// 获取文章详情
const getArticle = (slug) => request({
    method: 'GET',
    url: `/api/articles/${slug}`,
});

// 获取文章评论
const getComments = (slug) => request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`,
});

export {
    getArticles,
    getFeedArticles,
    updateFavorite,
    getArticle,
    getComments
};