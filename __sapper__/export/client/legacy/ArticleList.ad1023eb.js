import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, u as _createClass, S as SvelteComponentDev, e as element, t as text, g as claim_element, h as children, k as claim_text, j as detach, m as add_location, l as attr, o as insert, p as append, E as set_data, f as space, N as HtmlTag, O as toggle_class, F as empty, n as noop, P as destroy_each } from './index.b5be72ab.js';
import { f as fecha } from './fecha.148884dc.js';

var file = "src/components/ArticleList.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.post = list[i];
  child_ctx.i = i;
  return child_ctx;
} // (48:0) {#if title}


function create_if_block(ctx) {
  var header, h2, t;
  return {
    c: function create() {
      header = element("header");
      h2 = element("h2");
      t = text(ctx.title);
      this.h();
    },
    l: function claim(nodes) {
      header = claim_element(nodes, "HEADER", {
        class: true
      }, false);
      var header_nodes = children(header);
      h2 = claim_element(header_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t = claim_text(h2_nodes, ctx.title);
      h2_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      add_location(h2, file, 49, 4, 1686);
      attr(header, "class", "mb-4 py-2 px-2 md:px-0 border-t-2 border-accent-light");
      add_location(header, file, 48, 2, 1611);
    },
    m: function mount(target, anchor) {
      insert(target, header, anchor);
      append(header, h2);
      append(h2, t);
    },
    p: function update(changed, ctx) {
      if (changed.title) {
        set_data(t, ctx.title);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach(header);
      }
    }
  };
} // (55:2) {#each posts as post, i}


function create_each_block(ctx) {
  var li,
      article,
      a0,
      figure,
      img,
      img_alt_value,
      img_src_value,
      img_srcset_value,
      a0_href_value,
      a0_alt_value,
      a0_aria_label_value,
      t0,
      div,
      h3,
      a1,
      t1_value = ctx.post.metadata.title + "",
      t1,
      a1_href_value,
      a1_alt_value,
      t2,
      p0,
      t3,
      t4_value = ctx.formatPubdate(ctx.post) + "",
      t4,
      t5,
      p1,
      t6,
      t7_value = ctx.post.metadata.author + "",
      t7,
      t8,
      html_tag,
      raw_value = ctx.post.metadata.description + "",
      t9;
  return {
    c: function create() {
      li = element("li");
      article = element("article");
      a0 = element("a");
      figure = element("figure");
      img = element("img");
      t0 = space();
      div = element("div");
      h3 = element("h3");
      a1 = element("a");
      t1 = text(t1_value);
      t2 = space();
      p0 = element("p");
      t3 = text("Published ");
      t4 = text(t4_value);
      t5 = space();
      p1 = element("p");
      t6 = text("by ");
      t7 = text(t7_value);
      t8 = space();
      t9 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      }, false);
      var li_nodes = children(li);
      article = claim_element(li_nodes, "ARTICLE", {}, false);
      var article_nodes = children(article);
      a0 = claim_element(article_nodes, "A", {
        rel: true,
        href: true,
        alt: true,
        "aria-label": true
      }, false);
      var a0_nodes = children(a0);
      figure = claim_element(a0_nodes, "FIGURE", {
        class: true
      }, false);
      var figure_nodes = children(figure);
      img = claim_element(figure_nodes, "IMG", {
        alt: true,
        role: true,
        src: true,
        srcset: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t0 = claim_text(article_nodes, "\n\n        ");
      div = claim_element(article_nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      h3 = claim_element(div_nodes, "H3", {
        class: true
      }, false);
      var h3_nodes = children(h3);
      a1 = claim_element(h3_nodes, "A", {
        rel: true,
        href: true,
        alt: true
      }, false);
      var a1_nodes = children(a1);
      t1 = claim_text(a1_nodes, t1_value);
      a1_nodes.forEach(detach);
      h3_nodes.forEach(detach);
      t2 = claim_text(div_nodes, "\n\n          ");
      p0 = claim_element(div_nodes, "P", {
        class: true
      }, false);
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Published ");
      t4 = claim_text(p0_nodes, t4_value);
      p0_nodes.forEach(detach);
      t5 = claim_text(div_nodes, "\n\n          ");
      p1 = claim_element(div_nodes, "P", {
        class: true
      }, false);
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "by ");
      t7 = claim_text(p1_nodes, t7_value);
      p1_nodes.forEach(detach);
      t8 = claim_text(div_nodes, "\n          ");
      div_nodes.forEach(detach);
      article_nodes.forEach(detach);
      t9 = claim_text(li_nodes, "\n    ");
      li_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(img, "alt", img_alt_value = ctx.post.metadata.title);
      attr(img, "role", "presentation");
      attr(img, "src", img_src_value = ctx.post.metadata.heroImage);
      attr(img, "srcset", img_srcset_value = ctx.post.metadata.heroImageSrcset);
      add_location(img, file, 68, 12, 2285);
      attr(figure, "class", "mb-3");
      add_location(figure, file, 67, 10, 2251);
      attr(a0, "rel", "prefetch");
      attr(a0, "href", a0_href_value = "" + ctx.url + "/" + ctx.post.slug);
      attr(a0, "alt", a0_alt_value = ctx.post.metadata.title);
      attr(a0, "aria-label", a0_aria_label_value = ctx.post.metadata.title);
      add_location(a0, file, 61, 8, 2089);
      attr(a1, "rel", "prefetch");
      attr(a1, "href", a1_href_value = "" + ctx.url + "/" + ctx.post.slug);
      attr(a1, "alt", a1_alt_value = ctx.post.metadata.title);
      add_location(a1, file, 79, 12, 2598);
      attr(h3, "class", "text-xl font-bold");
      add_location(h3, file, 78, 10, 2555);
      attr(p0, "class", "text-sm font-bold text-brand mt-2 mb-4");
      add_location(p0, file, 88, 10, 2803);
      attr(p1, "class", "text-xs font-bold m-0 p-0");
      add_location(p1, file, 92, 10, 2924);
      html_tag = new HtmlTag(raw_value, null);
      attr(div, "class", "px-2 md:px-0");
      add_location(div, file, 77, 8, 2518);
      add_location(article, file, 60, 6, 2071);
      attr(li, "class", "svelte-bhrhmp");
      toggle_class(li, "wide", ctx.posts.length % 2 === 1 && ctx.i === 0);
      add_location(li, file, 59, 4, 2013);
    },
    m: function mount(target, anchor) {
      insert(target, li, anchor);
      append(li, article);
      append(article, a0);
      append(a0, figure);
      append(figure, img);
      append(article, t0);
      append(article, div);
      append(div, h3);
      append(h3, a1);
      append(a1, t1);
      append(div, t2);
      append(div, p0);
      append(p0, t3);
      append(p0, t4);
      append(div, t5);
      append(div, p1);
      append(p1, t6);
      append(p1, t7);
      append(div, t8);
      html_tag.m(div);
      append(li, t9);
    },
    p: function update(changed, ctx) {
      if (changed.posts && img_alt_value !== (img_alt_value = ctx.post.metadata.title)) {
        attr(img, "alt", img_alt_value);
      }

      if (changed.posts && img_src_value !== (img_src_value = ctx.post.metadata.heroImage)) {
        attr(img, "src", img_src_value);
      }

      if (changed.posts && img_srcset_value !== (img_srcset_value = ctx.post.metadata.heroImageSrcset)) {
        attr(img, "srcset", img_srcset_value);
      }

      if ((changed.url || changed.posts) && a0_href_value !== (a0_href_value = "" + ctx.url + "/" + ctx.post.slug)) {
        attr(a0, "href", a0_href_value);
      }

      if (changed.posts && a0_alt_value !== (a0_alt_value = ctx.post.metadata.title)) {
        attr(a0, "alt", a0_alt_value);
      }

      if (changed.posts && a0_aria_label_value !== (a0_aria_label_value = ctx.post.metadata.title)) {
        attr(a0, "aria-label", a0_aria_label_value);
      }

      if (changed.posts && t1_value !== (t1_value = ctx.post.metadata.title + "")) {
        set_data(t1, t1_value);
      }

      if ((changed.url || changed.posts) && a1_href_value !== (a1_href_value = "" + ctx.url + "/" + ctx.post.slug)) {
        attr(a1, "href", a1_href_value);
      }

      if (changed.posts && a1_alt_value !== (a1_alt_value = ctx.post.metadata.title)) {
        attr(a1, "alt", a1_alt_value);
      }

      if (changed.posts && t4_value !== (t4_value = ctx.formatPubdate(ctx.post) + "")) {
        set_data(t4, t4_value);
      }

      if (changed.posts && t7_value !== (t7_value = ctx.post.metadata.author + "")) {
        set_data(t7, t7_value);
      }

      if (changed.posts && raw_value !== (raw_value = ctx.post.metadata.description + "")) {
        html_tag.p(raw_value);
      }

      if (changed.posts) {
        toggle_class(li, "wide", ctx.posts.length % 2 === 1 && ctx.i === 0);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach(li);
      }
    }
  };
}

function create_fragment(ctx) {
  var html_tag, html_anchor, t0, t1, ul;
  var if_block = ctx.title && create_if_block(ctx);
  var each_value = ctx.posts;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function create() {
      html_anchor = empty();
      t0 = space();
      if (if_block) if_block.c();
      t1 = space();
      ul = element("ul");

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      html_anchor = empty();
      t0 = claim_text(nodes, "\n\n");
      if (if_block) if_block.l(nodes);
      t1 = claim_text(nodes, "\n\n");
      ul = claim_element(nodes, "UL", {
        class: true
      }, false);
      var ul_nodes = children(ul);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }

      ul_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      html_tag = new HtmlTag(ctx.jsonLD, null);
      attr(ul, "class", "mb-4 list-inside svelte-bhrhmp");
      add_location(ul, file, 53, 0, 1722);
    },
    m: function mount(target, anchor) {
      html_tag.m(document.head);
      append(document.head, html_anchor);
      insert(target, t0, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, t1, anchor);
      insert(target, ul, anchor);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p: function update(changed, ctx) {
      if (ctx.title) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(t1.parentNode, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (changed.posts || changed.formatPubdate || changed.url) {
        each_value = ctx.posts;

        for (var i = 0; i < each_value.length; i += 1) {
          var child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      detach(html_anchor);

      if (detaching) {
        html_tag.d();
        detach(t0);
      }

      if (if_block) if_block.d(detaching);

      if (detaching) {
        detach(t1);
        detach(ul);
      }

      destroy_each(each_blocks, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var posts = $$props.posts,
      title = $$props.title,
      url = $$props.url;

  var formatPubdate = function formatPubdate(post) {
    return fecha.format(new Date(post.metadata.pubdate), 'D MMMM, YYYY');
  };
  /* eslint-disable no-useless-escape */


  var jsonLD = "\n    <script type=\"application/ld+json\">\n      {\n        \"@context\": \"https://schema.org/\",\n        \"@type\": \"ItemList\",\n        \"numberOfItems\": ".concat(posts.length, ",\n        \"itemListElement\": [").concat(posts.map(function (post, i) {
    return "{\n            \"@type\": \"ListItem\",\n            \"position\": ".concat(i + 1, ",\n            \"url\": \"https://thekeycap.com/").concat(url, "/").concat(post.slug, "\"\n          }");
  }), "]\n      }\n    </script>\n  ");
  var writable_props = ['posts', 'title', 'url'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<ArticleList> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
    if ('title' in $$props) $$invalidate('title', title = $$props.title);
    if ('url' in $$props) $$invalidate('url', url = $$props.url);
  };

  return {
    posts: posts,
    title: title,
    url: url,
    formatPubdate: formatPubdate,
    jsonLD: jsonLD
  };
}

var ArticleList =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ArticleList, _SvelteComponentDev);

  function ArticleList(options) {
    var _this;

    _classCallCheck(this, ArticleList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArticleList).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["posts", "title", "url"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.posts === undefined && !('posts' in props)) {
      console.warn("<ArticleList> was created without expected prop 'posts'");
    }

    if (ctx.title === undefined && !('title' in props)) {
      console.warn("<ArticleList> was created without expected prop 'title'");
    }

    if (ctx.url === undefined && !('url' in props)) {
      console.warn("<ArticleList> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(ArticleList, [{
    key: "posts",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<ArticleList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ArticleList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ArticleList;
}(SvelteComponentDev);

export { ArticleList as A };
