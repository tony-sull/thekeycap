import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, u as _createClass, S as SvelteComponentDev, e as element, f as space, g as claim_element, h as children, k as claim_text, j as detach, l as attr, m as add_location, o as insert, x as mount_component, p as append, A as transition_in, B as transition_out, C as destroy_component, t as text, F as empty, K as check_outros, P as destroy_each, J as group_outros } from './index.b5be72ab.js';
import { S as SEO } from './SEO.0f881c7c.js';
import './fecha.148884dc.js';
import { A as ArticleList } from './ArticleList.ad1023eb.js';

var file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.category = list[i];
  return child_ctx;
} // (60:0) {#each categories as category}


function create_each_block(ctx) {
  var section, t, current;
  var articlelist = new ArticleList({
    props: {
      title: ctx.category.title,
      posts: ctx.category.posts,
      url: ctx.category.url
    },
    $$inline: true
  });
  return {
    c: function create() {
      section = element("section");
      articlelist.$$.fragment.c();
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      }, false);
      var section_nodes = children(section);
      articlelist.$$.fragment.l(section_nodes);
      t = claim_text(section_nodes, "\n  ");
      section_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(section, "class", "svelte-c6nmlq");
      add_location(section, file, 60, 2, 1665);
    },
    m: function mount(target, anchor) {
      insert(target, section, anchor);
      mount_component(articlelist, section, null);
      append(section, t);
      current = true;
    },
    p: function update(changed, ctx) {
      var articlelist_changes = {};
      if (changed.categories) articlelist_changes.title = ctx.category.title;
      if (changed.categories) articlelist_changes.posts = ctx.category.posts;
      if (changed.categories) articlelist_changes.url = ctx.category.url;
      articlelist.$set(articlelist_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(articlelist.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(articlelist.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach(section);
      }

      destroy_component(articlelist);
    }
  };
}

function create_fragment(ctx) {
  var script0, t0, script1, t1, t2, t3, each_1_anchor, current;
  var seo = new SEO({
    $$inline: true
  });
  var each_value = ctx.categories;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function create() {
      script0 = element("script");
      t0 = text("{\n    }\n  ");
      script1 = element("script");
      t1 = text("{\n    }");
      t2 = space();
      seo.$$.fragment.c();
      t3 = space();

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      script0 = claim_element(nodes, "SCRIPT", {
        type: true
      }, false);
      var script0_nodes = children(script0);
      t0 = claim_text(script0_nodes, "{\n    }\n  ");
      script0_nodes.forEach(detach);
      script1 = claim_element(nodes, "SCRIPT", {
        type: true
      }, false);
      var script1_nodes = children(script1);
      t1 = claim_text(script1_nodes, "{\n    }");
      script1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      seo.$$.fragment.l(nodes);
      t3 = claim_text(nodes, "\n\n\n\n");

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }

      each_1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr(script0, "type", "application/ld+json");
      add_location(script0, file, 34, 2, 1041);
      attr(script1, "type", "application/ld+json");
      add_location(script1, file, 38, 2, 1103);
    },
    m: function mount(target, anchor) {
      append(document.head, script0);
      append(script0, t0);
      append(document.head, script1);
      append(script1, t1);
      insert(target, t2, anchor);
      mount_component(seo, target, anchor);
      insert(target, t3, anchor);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.categories) {
        each_value = ctx.categories;

        for (var i = 0; i < each_value.length; i += 1) {
          var child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(seo.$$.fragment, local);

      for (var i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(seo.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        transition_out(each_blocks[_i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      detach(script0);
      detach(script1);

      if (detaching) {
        detach(t2);
      }

      destroy_component(seo, detaching);

      if (detaching) {
        detach(t3);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach(each_1_anchor);
      }
    }
  };
}

function preload() {
  return this.fetch('/recent.json').then(function (r) {
    return r.json();
  }).then(function (_ref) {
    var learn = _ref.learn,
        reviews = _ref.reviews;
    return [{
      posts: reviews,
      url: 'reviews'
    }, {
      title: 'Recent Articles',
      posts: learn,
      url: 'learn'
    }];
  }).then(function (categories) {
    return {
      categories: categories
    };
  });
}

function instance($$self, $$props, $$invalidate) {
  var categories = $$props.categories;
  var writable_props = ['categories'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<Index> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('categories' in $$props) $$invalidate('categories', categories = $$props.categories);
  };

  return {
    categories: categories
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
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["categories"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.categories === undefined && !('categories' in props)) {
      console.warn("<Index> was created without expected prop 'categories'");
    }

    return _this;
  }

  _createClass(Index, [{
    key: "categories",
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
