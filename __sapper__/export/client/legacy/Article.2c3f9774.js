import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, u as _createClass, S as SvelteComponentDev, e as element, t as text, f as space, g as claim_element, h as children, k as claim_text, j as detach, l as attr, m as add_location, o as insert, p as append, E as set_data, n as noop, F as empty, N as HtmlTag, x as mount_component, A as transition_in, B as transition_out, C as destroy_component, r as binding_callbacks } from './index.b5be72ab.js';
import { S as SEO } from './SEO.0f881c7c.js';
import { f as fecha } from './fecha.148884dc.js';

var file = "src/components/ShareButtons.svelte";

function create_fragment(ctx) {
  var div3, p, t0, t1, div0, a0, img0, a0_href_value, t2, div1, a1, img1, a1_href_value, t3, div2, a2, img2, a2_href_value;
  return {
    c: function create() {
      div3 = element("div");
      p = element("p");
      t0 = text(ctx.srDescription);
      t1 = space();
      div0 = element("div");
      a0 = element("a");
      img0 = element("img");
      t2 = space();
      div1 = element("div");
      a1 = element("a");
      img1 = element("img");
      t3 = space();
      div2 = element("div");
      a2 = element("a");
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      p = claim_element(div3_nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, ctx.srDescription);
      p_nodes.forEach(detach);
      t1 = claim_text(div3_nodes, "\n  ");
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      }, false);
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      }, false);
      var img0_nodes = children(img0);
      img0_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_text(div3_nodes, "\n  ");
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      }, false);
      var a1_nodes = children(a1);
      img1 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      }, false);
      var img1_nodes = children(img1);
      img1_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t3 = claim_text(div3_nodes, "\n  ");
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      a2 = claim_element(div2_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      }, false);
      var a2_nodes = children(a2);
      img2 = claim_element(a2_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      }, false);
      var img2_nodes = children(img2);
      img2_nodes.forEach(detach);
      a2_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(p, "class", "hidden");
      add_location(p, file, 19, 2, 701);
      attr(img0, "src", "twitter.svg");
      attr(img0, "alt", "Share to Twitter");
      attr(img0, "class", "svelte-bi0k3c");
      add_location(img0, file, 27, 6, 952);
      attr(a0, "href", a0_href_value = "https://twitter.com/intent/tweet?text=" + encodeURI(ctx.title) + "&url=" + ctx.url + "&via=thekeycap");
      attr(a0, "target", "_blank");
      attr(a0, "rel", "noopener noreferrer");
      attr(a0, "class", "bg-twitter svelte-bi0k3c");
      add_location(a0, file, 21, 4, 764);
      attr(div0, "class", "mx-1");
      add_location(div0, file, 20, 2, 741);
      attr(img1, "src", "facebook.svg");
      attr(img1, "alt", "Share to Facebook");
      attr(img1, "class", "svelte-bi0k3c");
      add_location(img1, file, 37, 6, 1199);
      attr(a1, "href", a1_href_value = "https://facebook.com/sharer/sharer.php?u=" + ctx.url);
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noopener noreferrer");
      attr(a1, "class", "bg-facebook svelte-bi0k3c");
      add_location(a1, file, 31, 4, 1044);
      attr(div1, "class", "mx-1");
      add_location(div1, file, 30, 2, 1021);
      attr(img2, "src", "email.svg");
      attr(img2, "alt", "Share to Email");
      attr(img2, "class", "svelte-bi0k3c");
      add_location(img2, file, 47, 6, 1468);
      attr(a2, "href", a2_href_value = "mailto:?subject=Keycap: " + ctx.title + "&body=Keycap: " + ctx.title + "%0D%0A%0D%0A" + ctx.url);
      attr(a2, "target", "_blank");
      attr(a2, "rel", "noopener noreferrer");
      attr(a2, "class", "bg-email svelte-bi0k3c");
      add_location(a2, file, 41, 4, 1293);
      attr(div2, "class", "mx-1");
      add_location(div2, file, 40, 2, 1270);
      attr(div3, "class", "flex");
      add_location(div3, file, 18, 0, 680);
    },
    m: function mount(target, anchor) {
      insert(target, div3, anchor);
      append(div3, p);
      append(p, t0);
      append(div3, t1);
      append(div3, div0);
      append(div0, a0);
      append(a0, img0);
      append(div3, t2);
      append(div3, div1);
      append(div1, a1);
      append(a1, img1);
      append(div3, t3);
      append(div3, div2);
      append(div2, a2);
      append(a2, img2);
    },
    p: function update(changed, ctx) {
      if (changed.srDescription) {
        set_data(t0, ctx.srDescription);
      }

      if ((changed.title || changed.url) && a0_href_value !== (a0_href_value = "https://twitter.com/intent/tweet?text=" + encodeURI(ctx.title) + "&url=" + ctx.url + "&via=thekeycap")) {
        attr(a0, "href", a0_href_value);
      }

      if (changed.url && a1_href_value !== (a1_href_value = "https://facebook.com/sharer/sharer.php?u=" + ctx.url)) {
        attr(a1, "href", a1_href_value);
      }

      if ((changed.title || changed.url) && a2_href_value !== (a2_href_value = "mailto:?subject=Keycap: " + ctx.title + "&body=Keycap: " + ctx.title + "%0D%0A%0D%0A" + ctx.url)) {
        attr(a2, "href", a2_href_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach(div3);
      }
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var url = $$props.url,
      title = $$props.title,
      srDescription = $$props.srDescription;
  var writable_props = ['url', 'title', 'srDescription'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<ShareButtons> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('url' in $$props) $$invalidate('url', url = $$props.url);
    if ('title' in $$props) $$invalidate('title', title = $$props.title);
    if ('srDescription' in $$props) $$invalidate('srDescription', srDescription = $$props.srDescription);
  };

  return {
    url: url,
    title: title,
    srDescription: srDescription
  };
}

var ShareButtons =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ShareButtons, _SvelteComponentDev);

  function ShareButtons(options) {
    var _this;

    _classCallCheck(this, ShareButtons);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShareButtons).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["url", "title", "srDescription"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.url === undefined && !('url' in props)) {
      console.warn("<ShareButtons> was created without expected prop 'url'");
    }

    if (ctx.title === undefined && !('title' in props)) {
      console.warn("<ShareButtons> was created without expected prop 'title'");
    }

    if (ctx.srDescription === undefined && !('srDescription' in props)) {
      console.warn("<ShareButtons> was created without expected prop 'srDescription'");
    }

    return _this;
  }

  _createClass(ShareButtons, [{
    key: "url",
    get: function get() {
      throw new Error("<ShareButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ShareButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<ShareButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ShareButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "srDescription",
    get: function get() {
      throw new Error("<ShareButtons>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ShareButtons>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ShareButtons;
}(SvelteComponentDev);

var file$1 = "src/components/Article.svelte"; // (197:4) {#if post.metadata.heroImage}

function create_if_block(ctx) {
  var figure,
      img,
      img_src_value,
      img_alt_value,
      t,
      figcaption,
      raw_value = ctx.post.metadata.heroCredit + "";
  return {
    c: function create() {
      figure = element("figure");
      img = element("img");
      t = space();
      figcaption = element("figcaption");
      this.h();
    },
    l: function claim(nodes) {
      figure = claim_element(nodes, "FIGURE", {
        class: true
      }, false);
      var figure_nodes = children(figure);
      img = claim_element(figure_nodes, "IMG", {
        src: true,
        alt: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach);
      t = claim_text(figure_nodes, "\n        ");
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {}, false);
      var figcaption_nodes = children(figcaption);
      figcaption_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(img, "src", img_src_value = ctx.post.metadata.heroImage);
      attr(img, "alt", img_alt_value = ctx.post.metadata.heroCaption);
      add_location(img, file$1, 198, 8, 8906);
      add_location(figcaption, file$1, 199, 8, 8984);
      attr(figure, "class", "hero");
      add_location(figure, file$1, 197, 6, 8876);
    },
    m: function mount(target, anchor) {
      insert(target, figure, anchor);
      append(figure, img);
      append(figure, t);
      append(figure, figcaption);
      figcaption.innerHTML = raw_value;
    },
    p: function update(changed, ctx) {
      if (changed.post && img_src_value !== (img_src_value = ctx.post.metadata.heroImage)) {
        attr(img, "src", img_src_value);
      }

      if (changed.post && img_alt_value !== (img_alt_value = ctx.post.metadata.heroCaption)) {
        attr(img, "alt", img_alt_value);
      }

      if (changed.post && raw_value !== (raw_value = ctx.post.metadata.heroCredit + "")) {
        figcaption.innerHTML = raw_value;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach(figure);
      }
    }
  };
}

function create_fragment$1(ctx) {
  var html_tag,
      html_anchor,
      t0,
      t1,
      article,
      header,
      t2,
      div0,
      ol,
      li0,
      a0,
      t3,
      t4,
      li1,
      a1,
      t5,
      t6,
      h1,
      t7_value = ctx.post.metadata.title + "",
      t7,
      t8,
      h6,
      t9,
      t10,
      div2,
      aside,
      div1,
      p0,
      t11,
      t12,
      ul,
      li2,
      img,
      t13,
      p1,
      t14,
      t15,
      t16,
      section,
      raw1_value = ctx.post.metadata.description + "",
      t17,
      html_tag_1,
      raw2_value = ctx.post.html + "",
      current;
  var seo = new SEO({
    props: {
      title: ctx.post.metadata.title,
      description: ctx.post.metadata.description,
      image: ctx.post.metadata.heroImage,
      url: "$" + ctx.url + "/" + ctx.post.slug,
      article: true
    },
    $$inline: true
  });
  var if_block = ctx.post.metadata.heroImage && create_if_block(ctx);
  var sharebuttons = new ShareButtons({
    props: {
      url: "https://thekeycap.com/".concat(ctx.url, "/").concat(ctx.post.slug),
      title: ctx.post.metadata.title
    },
    $$inline: true
  });
  return {
    c: function create() {
      html_anchor = empty();
      t0 = space();
      seo.$$.fragment.c();
      t1 = space();
      article = element("article");
      header = element("header");
      if (if_block) if_block.c();
      t2 = space();
      div0 = element("div");
      ol = element("ol");
      li0 = element("li");
      a0 = element("a");
      t3 = text("Keycap");
      t4 = space();
      li1 = element("li");
      a1 = element("a");
      t5 = text(ctx.url);
      t6 = space();
      h1 = element("h1");
      t7 = text(t7_value);
      t8 = space();
      h6 = element("h6");
      t9 = text(ctx.pubdate);
      t10 = space();
      div2 = element("div");
      aside = element("aside");
      div1 = element("div");
      p0 = element("p");
      t11 = text("Your guide");
      t12 = space();
      ul = element("ul");
      li2 = element("li");
      img = element("img");
      t13 = space();
      p1 = element("p");
      t14 = text("Tony Sullivan");
      t15 = space();
      sharebuttons.$$.fragment.c();
      t16 = space();
      section = element("section");
      t17 = space();
      this.h();
    },
    l: function claim(nodes) {
      html_anchor = empty();
      t0 = claim_text(nodes, "\n\n");
      seo.$$.fragment.l(nodes);
      t1 = claim_text(nodes, "\n\n");
      article = claim_element(nodes, "ARTICLE", {
        class: true
      }, false);
      var article_nodes = children(article);
      header = claim_element(article_nodes, "HEADER", {
        class: true
      }, false);
      var header_nodes = children(header);
      if (if_block) if_block.l(header_nodes);
      t2 = claim_text(header_nodes, "\n\n    ");
      div0 = claim_element(header_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      ol = claim_element(div0_nodes, "OL", {
        class: true
      }, false);
      var ol_nodes = children(ol);
      li0 = claim_element(ol_nodes, "LI", {
        class: true
      }, false);
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        href: true
      }, false);
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "Keycap");
      a0_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t4 = claim_text(ol_nodes, "\n        ");
      li1 = claim_element(ol_nodes, "LI", {
        class: true
      }, false);
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        href: true
      }, false);
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, ctx.url);
      a1_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ol_nodes.forEach(detach);
      t6 = claim_text(div0_nodes, "\n\n      ");
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      }, false);
      var h1_nodes = children(h1);
      t7 = claim_text(h1_nodes, t7_value);
      h1_nodes.forEach(detach);
      t8 = claim_text(div0_nodes, "\n\n      ");
      h6 = claim_element(div0_nodes, "H6", {
        class: true
      }, false);
      var h6_nodes = children(h6);
      t9 = claim_text(h6_nodes, ctx.pubdate);
      h6_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t10 = claim_text(article_nodes, "\n\n  ");
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      aside = claim_element(div2_nodes, "ASIDE", {
        class: true
      }, false);
      var aside_nodes = children(aside);
      div1 = claim_element(aside_nodes, "DIV", {}, false);
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {}, false);
      var p0_nodes = children(p0);
      t11 = claim_text(p0_nodes, "Your guide");
      p0_nodes.forEach(detach);
      t12 = claim_text(div1_nodes, "\n        ");
      ul = claim_element(div1_nodes, "UL", {}, false);
      var ul_nodes = children(ul);
      li2 = claim_element(ul_nodes, "LI", {}, false);
      var li2_nodes = children(li2);
      img = claim_element(li2_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach);
      t13 = claim_text(li2_nodes, "\n            ");
      p1 = claim_element(li2_nodes, "P", {
        class: true
      }, false);
      var p1_nodes = children(p1);
      t14 = claim_text(p1_nodes, "Tony Sullivan");
      p1_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t15 = claim_text(aside_nodes, "\n\n      ");
      sharebuttons.$$.fragment.l(aside_nodes);
      aside_nodes.forEach(detach);
      t16 = claim_text(div2_nodes, "\n\n    ");
      section = claim_element(div2_nodes, "SECTION", {
        class: true
      }, false);
      var section_nodes = children(section);
      section_nodes.forEach(detach);
      t17 = claim_text(div2_nodes, "\n\n    ");
      div2_nodes.forEach(detach);
      article_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      html_tag = new HtmlTag(ctx.jsonLD, null);
      attr(a0, "href", ".");
      add_location(a0, file$1, 210, 10, 9258);
      attr(li0, "class", "svelte-n788he");
      add_location(li0, file$1, 209, 8, 9243);
      attr(a1, "href", ctx.url);
      add_location(a1, file$1, 213, 10, 9318);
      attr(li1, "class", "svelte-n788he");
      add_location(li1, file$1, 212, 8, 9303);
      attr(ol, "class", "flex flex-row text-shades-dark");
      add_location(ol, file$1, 208, 6, 9191);
      attr(h1, "class", "font-bold mt-3");
      add_location(h1, file$1, 217, 6, 9375);
      attr(h6, "class", "font-bold text-brand mt-2");
      add_location(h6, file$1, 219, 6, 9436);
      attr(div0, "class", "max-w-xl sm:mx-auto mx-6 pb-4 xs:pb-6 border-b border-accent-light");
      add_location(div0, file$1, 205, 4, 9093);
      attr(header, "class", "svelte-n788he");
      add_location(header, file$1, 195, 2, 8827);
      add_location(p0, file$1, 226, 8, 9682);
      attr(img, "src", "tony-sullivan-50x50.jpg");
      attr(img, "alt", "Tony Sullivan");
      attr(img, "class", "hidden");
      add_location(img, file$1, 229, 12, 9740);
      attr(p1, "class", "font-extrabold");
      add_location(p1, file$1, 234, 12, 9879);
      add_location(li2, file$1, 228, 10, 9723);
      add_location(ul, file$1, 227, 8, 9708);
      add_location(div1, file$1, 225, 6, 9668);
      attr(aside, "class", "text-xs xs:text-sm flex flex-row justify-between");
      add_location(aside, file$1, 224, 4, 9597);
      attr(section, "class", "my-6 xs:my-8 text-lg xs:text-xl font-medium");
      add_location(section, file$1, 245, 4, 10108);
      html_tag_1 = new HtmlTag(raw2_value, null);
      attr(div2, "class", "content max-w-xl sm:mx-auto mx-6 mt-4 mb-12 svelte-n788he");
      add_location(div2, file$1, 223, 2, 9515);
      attr(article, "class", "max-w-4xl");
      add_location(article, file$1, 194, 0, 8797);
    },
    m: function mount(target, anchor) {
      html_tag.m(document.head);
      append(document.head, html_anchor);
      insert(target, t0, anchor);
      mount_component(seo, target, anchor);
      insert(target, t1, anchor);
      insert(target, article, anchor);
      append(article, header);
      if (if_block) if_block.m(header, null);
      append(header, t2);
      append(header, div0);
      append(div0, ol);
      append(ol, li0);
      append(li0, a0);
      append(a0, t3);
      append(ol, t4);
      append(ol, li1);
      append(li1, a1);
      append(a1, t5);
      append(div0, t6);
      append(div0, h1);
      append(h1, t7);
      append(div0, t8);
      append(div0, h6);
      append(h6, t9);
      append(article, t10);
      append(article, div2);
      append(div2, aside);
      append(aside, div1);
      append(div1, p0);
      append(p0, t11);
      append(div1, t12);
      append(div1, ul);
      append(ul, li2);
      append(li2, img);
      append(li2, t13);
      append(li2, p1);
      append(p1, t14);
      append(aside, t15);
      mount_component(sharebuttons, aside, null);
      append(div2, t16);
      append(div2, section);
      section.innerHTML = raw1_value;
      append(div2, t17);
      html_tag_1.m(div2);
      ctx.div2_binding(div2);
      current = true;
    },
    p: function update(changed, ctx) {
      var seo_changes = {};
      if (changed.post) seo_changes.title = ctx.post.metadata.title;
      if (changed.post) seo_changes.description = ctx.post.metadata.description;
      if (changed.post) seo_changes.image = ctx.post.metadata.heroImage;
      if (changed.url || changed.post) seo_changes.url = "$" + ctx.url + "/" + ctx.post.slug;
      seo.$set(seo_changes);

      if (ctx.post.metadata.heroImage) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(header, t2);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || changed.url) {
        set_data(t5, ctx.url);
        attr(a1, "href", ctx.url);
      }

      if ((!current || changed.post) && t7_value !== (t7_value = ctx.post.metadata.title + "")) {
        set_data(t7, t7_value);
      }

      if (!current || changed.pubdate) {
        set_data(t9, ctx.pubdate);
      }

      var sharebuttons_changes = {};
      if (changed.url || changed.post) sharebuttons_changes.url = "https://thekeycap.com/".concat(ctx.url, "/").concat(ctx.post.slug);
      if (changed.post) sharebuttons_changes.title = ctx.post.metadata.title;
      sharebuttons.$set(sharebuttons_changes);

      if ((!current || changed.post) && raw1_value !== (raw1_value = ctx.post.metadata.description + "")) {
        section.innerHTML = raw1_value;
      }

      if ((!current || changed.post) && raw2_value !== (raw2_value = ctx.post.html + "")) {
        html_tag_1.p(raw2_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(seo.$$.fragment, local);
      transition_in(sharebuttons.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(seo.$$.fragment, local);
      transition_out(sharebuttons.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach(html_anchor);

      if (detaching) {
        html_tag.d();
        detach(t0);
      }

      destroy_component(seo, detaching);

      if (detaching) {
        detach(t1);
        detach(article);
      }

      if (if_block) if_block.d();
      destroy_component(sharebuttons);
      ctx.div2_binding(null);
    }
  };
}

function instance$1($$self, $$props, $$invalidate) {
  var post = $$props.post,
      url = $$props.url;
  var pubdate = '';
  /* eslint-disable no-useless-escape */

  var jsonLD = "\n    <script type=\"application/ld+json\">\n      {\n        \"@context\": \"https://schema.org/\",\n        \"@type\": \"article\",\n        \"inLanguage\": \"en_US\",\n        \"url\": \"https://thekeycap.com/".concat(url, "/").concat(post.slug, "\",\n        \"mainEntryOfPage\": https://thekeycap.com/").concat(url, "/").concat(post.slug, "\",\n        \"thumbnailUrl\": \"https://thekeycap.com/").concat(post.metadata.heroImage, "\",\n        \"name\": \"").concat(post.metadata.title, "\",\n        \"headline\": \"").concat(post.metadata.description, "\",\n        \"datePublished\": \"").concat(pubdate, "\",\n        \"dateModified\": \"").concat(pubdate, "\",\n        \"author\": [{\n          \"@type\": \"Person\",\n          \"name\": \"Tony Sullivan\"\n        }],\n        \"publisher\": {\n          \"@type\": \"Organization\",\n          \"name\": \"Keycap\",\n          \"alternateName\": \"Keycap\",\n          \"url\": \"https://thekeycap.com/\",\n          \"logo\": \"https://thekeycap.com/social-share-630x420.png\",\n          \"sameAs\": [\n            \"https://facebook.com/thekeycap\",\n            \"https://twitter.com/thekeycap\"\n          ]\n        }\n      }\n    </script>\n  ");
  var content;
  var writable_props = ['post', 'url'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<Article> was created with unknown prop '".concat(key, "'"));
  });

  function div2_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('content', content = $$value);
    });
  }

  $$self.$set = function ($$props) {
    if ('post' in $$props) $$invalidate('post', post = $$props.post);
    if ('url' in $$props) $$invalidate('url', url = $$props.url);
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      post: 1
    };

    if ($$dirty.post) {
      if (post && post.metadata.pubdate) {
        $$invalidate('pubdate', pubdate = fecha.format(new Date(post.metadata.pubdate), 'D MMMM, YYYY'));
      }
    }
  };

  return {
    post: post,
    url: url,
    pubdate: pubdate,
    jsonLD: jsonLD,
    content: content,
    div2_binding: div2_binding
  };
}

var Article =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Article, _SvelteComponentDev);

  function Article(options) {
    var _this;

    _classCallCheck(this, Article);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Article).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, ["post", "url"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.post === undefined && !('post' in props)) {
      console.warn("<Article> was created without expected prop 'post'");
    }

    if (ctx.url === undefined && !('url' in props)) {
      console.warn("<Article> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(Article, [{
    key: "post",
    get: function get() {
      throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Article;
}(SvelteComponentDev);

export { Article as A };
