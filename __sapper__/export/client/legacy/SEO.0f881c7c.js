import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, u as _createClass, S as SvelteComponentDev, e as element, g as claim_element, h as children, j as detach, l as attr, m as add_location, p as append, n as noop } from './index.b5be72ab.js';

var file = "src/components/SEO.svelte";

function create_fragment(ctx) {
  var meta0, meta1, meta2, meta3, meta4, meta5, meta5_content_value, meta6, meta7, meta8, meta9, meta10, meta11, title_value, meta12, link;
  document.title = title_value = ctx.title;
  return {
    c: function create() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      meta5 = element("meta");
      meta6 = element("meta");
      meta7 = element("meta");
      meta8 = element("meta");
      meta9 = element("meta");
      meta10 = element("meta");
      meta11 = element("meta");
      meta12 = element("meta");
      link = element("link");
      this.h();
    },
    l: function claim(nodes) {
      meta0 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta0_nodes = children(meta0);
      meta0_nodes.forEach(detach);
      meta1 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta1_nodes = children(meta1);
      meta1_nodes.forEach(detach);
      meta2 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta2_nodes = children(meta2);
      meta2_nodes.forEach(detach);
      meta3 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta3_nodes = children(meta3);
      meta3_nodes.forEach(detach);
      meta4 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta4_nodes = children(meta4);
      meta4_nodes.forEach(detach);
      meta5 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta5_nodes = children(meta5);
      meta5_nodes.forEach(detach);
      meta6 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta6_nodes = children(meta6);
      meta6_nodes.forEach(detach);
      meta7 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta7_nodes = children(meta7);
      meta7_nodes.forEach(detach);
      meta8 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta8_nodes = children(meta8);
      meta8_nodes.forEach(detach);
      meta9 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta9_nodes = children(meta9);
      meta9_nodes.forEach(detach);
      meta10 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta10_nodes = children(meta10);
      meta10_nodes.forEach(detach);
      meta11 = claim_element(nodes, "META", {
        property: true,
        content: true
      }, false);
      var meta11_nodes = children(meta11);
      meta11_nodes.forEach(detach);
      meta12 = claim_element(nodes, "META", {
        name: true,
        content: true
      }, false);
      var meta12_nodes = children(meta12);
      meta12_nodes.forEach(detach);
      link = claim_element(nodes, "LINK", {
        rel: true,
        href: true
      }, false);
      var link_nodes = children(link);
      link_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(meta0, "property", "twitter:card");
      attr(meta0, "content", "summary_large_image");
      add_location(meta0, file, 15, 2, 539);
      attr(meta1, "property", "twitter:site");
      attr(meta1, "content", "@thekeycap");
      add_location(meta1, file, 16, 2, 604);
      attr(meta2, "property", "twitter:title");
      attr(meta2, "content", ctx.title);
      add_location(meta2, file, 17, 2, 660);
      attr(meta3, "property", "twitter:description");
      attr(meta3, "content", ctx.description);
      add_location(meta3, file, 18, 2, 712);
      attr(meta4, "property", "twitter:image");
      attr(meta4, "content", ctx.image);
      add_location(meta4, file, 19, 2, 776);
      attr(meta5, "property", "og:type");
      attr(meta5, "content", meta5_content_value = ctx.article ? 'article' : 'website');
      add_location(meta5, file, 20, 2, 828);
      attr(meta6, "property", "og:site_name");
      attr(meta6, "content", "Keycap: Everything Mechanical Keyboards");
      add_location(meta6, file, 21, 2, 900);
      attr(meta7, "property", "og:title");
      attr(meta7, "content", ctx.title);
      add_location(meta7, file, 25, 2, 995);
      attr(meta8, "property", "og:description");
      attr(meta8, "content", ctx.description);
      add_location(meta8, file, 26, 2, 1042);
      attr(meta9, "property", "og:image");
      attr(meta9, "content", ctx.image);
      add_location(meta9, file, 27, 2, 1101);
      attr(meta10, "property", "og:url");
      attr(meta10, "content", ctx.fullUrl);
      add_location(meta10, file, 28, 2, 1148);
      attr(meta11, "property", "fb:app_id");
      attr(meta11, "content", "abc123");
      add_location(meta11, file, 29, 2, 1195);
      attr(meta12, "name", "description");
      attr(meta12, "content", ctx.description);
      add_location(meta12, file, 31, 2, 1269);
      attr(link, "rel", "canonical");
      attr(link, "href", ctx.fullUrl);
      add_location(link, file, 32, 2, 1321);
    },
    m: function mount(target, anchor) {
      append(document.head, meta0);
      append(document.head, meta1);
      append(document.head, meta2);
      append(document.head, meta3);
      append(document.head, meta4);
      append(document.head, meta5);
      append(document.head, meta6);
      append(document.head, meta7);
      append(document.head, meta8);
      append(document.head, meta9);
      append(document.head, meta10);
      append(document.head, meta11);
      append(document.head, meta12);
      append(document.head, link);
    },
    p: function update(changed, ctx) {
      if (changed.title) {
        attr(meta2, "content", ctx.title);
      }

      if (changed.description) {
        attr(meta3, "content", ctx.description);
      }

      if (changed.image) {
        attr(meta4, "content", ctx.image);
      }

      if (changed.article && meta5_content_value !== (meta5_content_value = ctx.article ? 'article' : 'website')) {
        attr(meta5, "content", meta5_content_value);
      }

      if (changed.title) {
        attr(meta7, "content", ctx.title);
      }

      if (changed.description) {
        attr(meta8, "content", ctx.description);
      }

      if (changed.image) {
        attr(meta9, "content", ctx.image);
      }

      if (changed.fullUrl) {
        attr(meta10, "content", ctx.fullUrl);
      }

      if (changed.title && title_value !== (title_value = ctx.title)) {
        document.title = title_value;
      }

      if (changed.description) {
        attr(meta12, "content", ctx.description);
      }

      if (changed.fullUrl) {
        attr(link, "href", ctx.fullUrl);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      detach(meta0);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      detach(meta4);
      detach(meta5);
      detach(meta6);
      detach(meta7);
      detach(meta8);
      detach(meta9);
      detach(meta10);
      detach(meta11);
      detach(meta12);
      detach(link);
    }
  };
}

var URL_ROOT = 'https://thekeycap.com/';

function instance($$self, $$props, $$invalidate) {
  var _$$props$title = $$props.title,
      title = _$$props$title === void 0 ? 'Mechanical Keyboard Reviews and Buying Advice | Keycap' : _$$props$title,
      _$$props$description = $$props.description,
      description = _$$props$description === void 0 ? 'Keycap is a list of the best mechanical keyboards, accessories, and upgrades for your needs. Reviews are based on research and hands-on testing by career programmers, gamers, and tech aficionados.' : _$$props$description,
      _$$props$image = $$props.image,
      image = _$$props$image === void 0 ? '/social-share-630x420.png' : _$$props$image,
      _$$props$url = $$props.url,
      url = _$$props$url === void 0 ? '' : _$$props$url,
      _$$props$article = $$props.article,
      article = _$$props$article === void 0 ? false : _$$props$article;
  var fullUrl;
  var writable_props = ['title', 'description', 'image', 'url', 'article'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<SEO> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('title' in $$props) $$invalidate('title', title = $$props.title);
    if ('description' in $$props) $$invalidate('description', description = $$props.description);
    if ('image' in $$props) $$invalidate('image', image = $$props.image);
    if ('url' in $$props) $$invalidate('url', url = $$props.url);
    if ('article' in $$props) $$invalidate('article', article = $$props.article);
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      url: 1
    };

    if ($$dirty.url) {
      $$invalidate('fullUrl', fullUrl = "".concat(URL_ROOT).concat(url));
    }
  };

  return {
    title: title,
    description: description,
    image: image,
    url: url,
    article: article,
    fullUrl: fullUrl
  };
}

var SEO =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(SEO, _SvelteComponentDev);

  function SEO(options) {
    var _this;

    _classCallCheck(this, SEO);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SEO).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["title", "description", "image", "url", "article"]);
    return _this;
  }

  _createClass(SEO, [{
    key: "title",
    get: function get() {
      throw new Error("<SEO>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SEO>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "description",
    get: function get() {
      throw new Error("<SEO>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SEO>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "image",
    get: function get() {
      throw new Error("<SEO>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SEO>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<SEO>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SEO>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "article",
    get: function get() {
      throw new Error("<SEO>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SEO>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return SEO;
}(SvelteComponentDev);

export { SEO as S };
