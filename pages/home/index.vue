<template>
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li v-if="user" class="nav-item">
              <nuxt-link
                class="nav-link"
                :class="{
                  'active': tab === 'your_feed'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  }
                }"
              >Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :class="{
                  'active': tab === 'global_feed'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tab: 'global_feed',
                  }
                }"
              >Global Feed</nuxt-link>
            </li>
            <li v-if="tag" class="nav-item">
              <nuxt-link
                class="nav-link disabled"
                :class="{
                  'active': tab === 'tag'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                  }
                }"
              >#{{ tag }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }"><img :src="article.author.image" /></nuxt-link>
            <div class="info">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }" class="author">{{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt}}</span>
            </div>
            <button
              class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{'active': article.favorited}"
              @click="changeFavorite(article)"
            >
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link
            class="preview-link"
            :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }"
          >
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

        <ul class="pagination">
          <li
            v-for="item in pages"
            :key="item"
            :class="{
              'active': item === page
            }"
            class="page-item"
          >
            <nuxt-link class="page-link" :to="{
              name: 'home',
              query: {
                page: item,
                tag: $route.query.tag,
                tab
              }
            }">{{item}}</nuxt-link>
          </li>
        </ul>

      </div>

      

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list" v-for="tag in tags" :key="tag">
            <nuxt-link
              :to="{
                name: 'home',
                query: {
                  tag,
                  tab: 'tag'
                }
              }"
              class="tag-pill tag-default"
            >{{tag}}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import { getArticles, getFeedArticles, updateFavorite } from '@/api/article.js';
import { getTags } from '@/api/tags.js';
import { mapState } from 'vuex';

export default {
    name: 'home',
    // 如果监听query变化而刷新页面，需要将监听的query值放置在这里
    watchQuery: ['page', 'tag', 'tab'],
    async asyncData ({ query }) {
      // 需要 SEO 的，将数据放置在这里
      let {page = 1, tab = 'global_feed', tag} = query;
      page = Number.parseInt(page || 1);
      const limit = 20;
      const getArticleList = tab === 'your_feed' ? getFeedArticles : getArticles;

      const [articlesData = {}, tagData = {}] = await Promise.all([
        getArticleList({
          limit,
          offset: (page - 1) * limit,
          tag
        }),
        getTags()
      ]);
      return {
        ...articlesData.data,
        ...tagData.data,
        page,
        limit,
        pages: Math.max(1, articlesData.data.articlesCount / limit),
        tab,
        tag
      };
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      async changeFavorite (article) {
        const newStatus = !article.favorited;
        await updateFavorite(article.slug, newStatus);
        article.favorited = newStatus;
        newStatus ? article.favoritesCount++ : article.favoritesCount--;
      }
    }
}
</script>

<style>

</style>