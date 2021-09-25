exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getComments; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取文章列表

const getArticles = params => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/articles',
  params
}); // 获取关注文章列表


const getFeedArticles = params => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: '/api/articles/feed',
  params
}); // 更新文章点赞状态


const updateFavorite = (slug, favorite = true) => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: favorite ? 'POST' : 'DELETE',
  url: `/api/articles/${slug}/favorite`
}); // 获取文章详情


const getArticle = slug => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: `/api/articles/${slug}`
}); // 获取文章评论


const getComments = slug => Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'GET',
  url: `/api/articles/${slug}/comments`
});



/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=faadda58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('author-info',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('author-info',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=faadda58&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(25);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(24);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/authorInfo.vue?vue&type=template&id=0cde3a47&
var authorInfovue_type_template_id_0cde3a47_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
      username: _vm.article.author.username
      }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile',
          params: {
              username: _vm.article.author.username
          }
          }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.article.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
          'active': _vm.article.following
      }))+"><i class=\"ion-plus-round\"></i>\n       \n      Follow Eric Simons <span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
          'active': _vm.article.favorited
      }))+"><i class=\"ion-heart\"></i>\n       \n      Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var authorInfovue_type_template_id_0cde3a47_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/authorInfo.vue?vue&type=template&id=0cde3a47&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/authorInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var authorInfovue_type_script_lang_js_ = ({
  name: 'authorInfo',
  props: ['article']
});
// CONCATENATED MODULE: ./pages/article/components/authorInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_authorInfovue_type_script_lang_js_ = (authorInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/authorInfo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_authorInfovue_type_script_lang_js_,
  authorInfovue_type_template_id_0cde3a47_render,
  authorInfovue_type_template_id_0cde3a47_staticRenderFns,
  false,
  injectStyles,
  null,
  "94dd4b36"
  
)

/* harmony default export */ var authorInfo = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/comments.vue?vue&type=template&id=08485422&
var commentsvue_type_template_id_08485422_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n           Post Comment\n          </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{attrs:{"to":{
            name: 'profile',
            params: {
              username: comment.author.username
            }
          }}},[_c('img',{attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n           \n          <a href class=\"comment-author\">Jacob Schmidt</a> "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
              name: 'profile',
              params: {
                  username: comment.author.username
              }
          }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(comment.createdAt))+"</span>")],2)],2)})],2)}
var commentsvue_type_template_id_08485422_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/comments.vue?vue&type=template&id=08485422&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var commentsvue_type_script_lang_js_ = ({
  name: 'comments',
  props: ['article'],

  data() {
    return {
      comments: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  created() {
    Object(api_article["c" /* getComments */])(this.article.slug).then(({
      data
    }) => {
      this.comments = data.comments;
    });
  }

});
// CONCATENATED MODULE: ./pages/article/components/comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commentsvue_type_script_lang_js_ = (commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/comments.vue



function comments_injectStyles (context) {
  
  
}

/* normalize component */

var comments_component = Object(componentNormalizer["a" /* default */])(
  components_commentsvue_type_script_lang_js_,
  commentsvue_type_template_id_08485422_render,
  commentsvue_type_template_id_08485422_staticRenderFns,
  false,
  comments_injectStyles,
  null,
  "20304300"
  
)

/* harmony default export */ var comments = (comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'articleIndex',
  components: {
    AuthorInfo: authorInfo,
    Comments: comments
  },

  async asyncData({
    params
  }) {
    // 需要 SEO 的，将数据放置在这里
    const {
      data
    } = await Object(api_article["a" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    article.body = new external_markdown_it_default.a().render(article.body);
    return {
      article
    };
  },

  head() {
    // 设置用于 SEO 的 meta 标签信息
    return {
      title: `${this.article.title} - ljk`,
      meta: [// hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "9051f076"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map