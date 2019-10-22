import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponentDev, f as space, e as element, t as text, k as claim_text, g as claim_element, h as children, j as detach, m as add_location, l as attr, x as mount_component, o as insert, p as append, n as noop, A as transition_in, B as transition_out, C as destroy_component } from './index.b5be72ab.js';
import { S as SEO } from './SEO.0f881c7c.js';

var file = "src/routes/affiliate-disclaimer.svelte";

function create_fragment(ctx) {
  var t0, h1, t1, t2, p0, t3, t4, p1, t5, t6, p2, t7, t8, p3, t9, current;
  var seo = new SEO({
    $$inline: true
  });
  return {
    c: function create() {
      seo.$$.fragment.c();
      t0 = space();
      h1 = element("h1");
      t1 = text("Affiliate Disclaimer");
      t2 = space();
      p0 = element("p");
      t3 = text("Links on TheKeycap.com may redirect you to Amazon.com.");
      t4 = space();
      p1 = element("p");
      t5 = text("Amazon is one of the biggest reliable online shops. TheKeycap.com is a\n  participant in the Amazon Services LLC Associates Program, an affiliate\n  advertising program designed to provide a means for sites to earn advertising\n  fees by advertising and linking to amazon.com. We or our advertising partners\n  may use cookies to monitor clicks or for informational basis only.");
      t6 = space();
      p2 = element("p");
      t7 = text("Prices may have changed and we have no control over it. We may earn money from\n  referring you to Amazon.");
      t8 = space();
      p3 = element("p");
      t9 = text("Clicking any of the links on this website (TheKeycap.com) does not increase\n  the cost or affect the price for any item you purchase from Amazon. Our main\n  purpose is for informational purpose and not for earning.");
      this.h();
    },
    l: function claim(nodes) {
      seo.$$.fragment.l(nodes);
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {}, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Affiliate Disclaimer");
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      p0 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Links on TheKeycap.com may redirect you to Amazon.com.");
      p0_nodes.forEach(detach);
      t4 = claim_text(nodes, "\n\n");
      p1 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "Amazon is one of the biggest reliable online shops. TheKeycap.com is a\n  participant in the Amazon Services LLC Associates Program, an affiliate\n  advertising program designed to provide a means for sites to earn advertising\n  fees by advertising and linking to amazon.com. We or our advertising partners\n  may use cookies to monitor clicks or for informational basis only.");
      p1_nodes.forEach(detach);
      t6 = claim_text(nodes, "\n\n");
      p2 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "Prices may have changed and we have no control over it. We may earn money from\n  referring you to Amazon.");
      p2_nodes.forEach(detach);
      t8 = claim_text(nodes, "\n\n");
      p3 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p3_nodes = children(p3);
      t9 = claim_text(p3_nodes, "Clicking any of the links on this website (TheKeycap.com) does not increase\n  the cost or affect the price for any item you purchase from Amazon. Our main\n  purpose is for informational purpose and not for earning.");
      p3_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      add_location(h1, file, 13, 0, 524);
      attr(p0, "class", "svelte-sl3rzj");
      add_location(p0, file, 15, 0, 555);
      attr(p1, "class", "svelte-sl3rzj");
      add_location(p1, file, 17, 0, 618);
      attr(p2, "class", "svelte-sl3rzj");
      add_location(p2, file, 25, 0, 1004);
      attr(p3, "class", "svelte-sl3rzj");
      add_location(p3, file, 30, 0, 1122);
    },
    m: function mount(target, anchor) {
      mount_component(seo, target, anchor);
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, p0, anchor);
      append(p0, t3);
      insert(target, t4, anchor);
      insert(target, p1, anchor);
      append(p1, t5);
      insert(target, t6, anchor);
      insert(target, p2, anchor);
      append(p2, t7);
      insert(target, t8, anchor);
      insert(target, p3, anchor);
      append(p3, t9);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(seo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(seo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(seo, detaching);

      if (detaching) {
        detach(t0);
        detach(h1);
        detach(t2);
        detach(p0);
        detach(t4);
        detach(p1);
        detach(t6);
        detach(p2);
        detach(t8);
        detach(p3);
      }
    }
  };
}

var Affiliate_disclaimer =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Affiliate_disclaimer, _SvelteComponentDev);

  function Affiliate_disclaimer(options) {
    var _this;

    _classCallCheck(this, Affiliate_disclaimer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Affiliate_disclaimer).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    return _this;
  }

  return Affiliate_disclaimer;
}(SvelteComponentDev);

export default Affiliate_disclaimer;
