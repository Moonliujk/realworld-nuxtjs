<template>
  <div>
      <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img :src="user.image" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        
        <div class="card" v-for="comment in comments" :key="comment.id">
          <div class="card-block">
            <p class="card-text">{{comment.body}}</p>
          </div>
          <div class="card-footer">
            <nuxt-link :to="{
              name: 'profile',
              params: {
                username: comment.author.username
              }
            }"><img :src="comment.author.image" /></nuxt-link>
            &nbsp;
            <a href="" class="comment-author">Jacob Schmidt</a>
            <nuxt-link
                class="comment-author"
                :to="{
                name: 'profile',
                params: {
                    username: comment.author.username
                }
            }">{{comment.author.username}}</nuxt-link>
            <span class="date-posted">{{comment.createdAt}}</span>
          </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import { getComments } from '@/api/article.js';

export default {
    name: 'comments',
    props: ['article'],
    data () {
        return {
            comments: []
        };
    },
    computed: {
        ...mapState(['user'])
    },
    created () {
        getComments(this.article.slug).then(({data}) => {
            this.comments = data.comments;
        });
    }
}
</script>

<style>

</style>