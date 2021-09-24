<template>
 <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{article.title}}</h1>

      <author-info :article="article" />

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body"></div>
    </div>

    <hr />

    <div class="article-actions">
      <author-info :article="article" />
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">

        <comments :article="article" />
        
      </div>

    </div>

  </div>

</div> 
</template>

<script>
import { getArticle } from '@/api/article.js';
import MarkdownIt from 'markdown-it';
import AuthorInfo from './components/authorInfo.vue';
import Comments from './components/comments.vue';

export default {
    name: 'articleIndex',
    components: {
      AuthorInfo,
      Comments,
    },
    async asyncData ({ params }) {
      // 需要 SEO 的，将数据放置在这里
      const { data } = await getArticle(params.slug);
      const { article } = data;
      article.body = new MarkdownIt().render(article.body);

      return {
        article
      };
    },
    head () {
      // 设置用于 SEO 的 meta 标签信息
      return {
        title: `${this.article.title} - ljk`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    }
}
</script>

<style>

</style>