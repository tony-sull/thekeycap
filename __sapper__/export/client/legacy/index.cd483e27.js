import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, u as _createClass, S as SvelteComponentDev, f as space, k as claim_text, x as mount_component, o as insert, A as transition_in, B as transition_out, C as destroy_component, j as detach } from './index.b5be72ab.js';
import { S as SEO } from './SEO.0f881c7c.js';
import './fecha.148884dc.js';
import { A as ArticleList } from './ArticleList.ad1023eb.js';

function create_fragment(ctx) {
  var t, current;
  var seo = new SEO({
    props: {
      title: "Best Mechanical Keyboards and Accessories: Reviews by Keycap",
      description: "We've researched and tested the best mechanical keyboards and\n  accessories for your specific needs.",
      url: "reviews",
      article: true
    },
    $$inline: true
  });
  var articlelist = new ArticleList({
    props: {
      posts: ctx.posts,
      title: "Recent Reviews",
      url: "reviews"
    },
    $$inline: true
  });
  return {
    c: function create() {
      seo.$$.fragment.c();
      t = space();
      articlelist.$$.fragment.c();
    },
    l: function claim(nodes) {
      seo.$$.fragment.l(nodes);
      t = claim_text(nodes, "\n\n");
      articlelist.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(seo, target, anchor);
      insert(target, t, anchor);
      mount_component(articlelist, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var articlelist_changes = {};
      if (changed.posts) articlelist_changes.posts = ctx.posts;
      articlelist.$set(articlelist_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(seo.$$.fragment, local);
      transition_in(articlelist.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(seo.$$.fragment, local);
      transition_out(articlelist.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(seo, detaching);

      if (detaching) {
        detach(t);
      }

      destroy_component(articlelist, detaching);
    }
  };
}

function preload() {
  return this.fetch('reviews.json').then(function (r) {
    return r.json();
  }).then(function (posts) {
    return {
      posts: posts
    };
  });
}

function instance($$self, $$props, $$invalidate) {
  var posts = $$props.posts;
  var writable_props = ['posts'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<Index> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
  };

  return {
    posts: posts
  };
}

var Index =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Index, _SvelteComponentDev);

  function Index(options) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["posts"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.posts === undefined && !('posts' in props)) {
      console.warn("<Index> was created without expected prop 'posts'");
    }

    return _this;
  }

  _createClass(Index, [{
    key: "posts",
    get: function get() {
      throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Index;
}(SvelteComponentDev);

export default Index;
export { preload };
