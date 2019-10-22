import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponentDev, f as space, e as element, t as text, k as claim_text, g as claim_element, h as children, j as detach, l as attr, m as add_location, x as mount_component, o as insert, p as append, n as noop, A as transition_in, B as transition_out, C as destroy_component } from './index.b5be72ab.js';
import { S as SEO } from './SEO.0f881c7c.js';

var file = "src/routes/partners.svelte";

function create_fragment(ctx) {
  var t0, h1, t1, t2, p0, t3, t4, h40, t5, t6, p1, t7, a0, t8, t9, h41, t10, t11, p2, t12, a1, t13, t14, t15, h42, t16, t17, p3, t18, a2, t19, t20, t21, h43, t22, t23, p4, t24, a3, t25, t26, t27, p5, t28, current;
  var seo = new SEO({
    $$inline: true
  });
  return {
    c: function create() {
      seo.$$.fragment.c();
      t0 = space();
      h1 = element("h1");
      t1 = text("Partners and Business Opportunities");
      t2 = space();
      p0 = element("p");
      t3 = text("Our goal is to help people effortlessly choose and buy what they need in order\n  to live a better life. Keycap's extensive independent research has found\n  audiences beyond our site with partners who use our work to serve their own\n  audiences.");
      t4 = space();
      h40 = element("h4");
      t5 = text("Affilate Partnerships");
      t6 = space();
      p1 = element("p");
      t7 = text("Readers visit Keycap when they are ready to make a purchase decision. Our\n  exhaustive process and hours of extensive testing have built trust with\n  readers and have made us a destination for product recommendations. If you\n  carry a Keycap-recommended product or service and are interested in\n  establishing an affiliate partnership, please email us at\n  ");
      a0 = element("a");
      t8 = text("bizdev@thekeycap.com.");
      t9 = space();
      h41 = element("h4");
      t10 = text("Licensing and Awards");
      t11 = space();
      p2 = element("p");
      t12 = text("Every pick on our site is an award winner, and being named best in class by\n  our team of experts is news worth sharing. If you’re a manufacturer of a\n  product that our editors named as the best, you can license our logo or\n  editorial text to show potential customers how great your gear is. Please\n  email\n  ");
      a1 = element("a");
      t13 = text("bizdev@thekeycap");
      t14 = text("\n  if you’re interested.");
      t15 = space();
      h42 = element("h4");
      t16 = text("Advertising");
      t17 = space();
      p3 = element("p");
      t18 = text("In addition to our reviews and buying guides, we can connect merchants and\n  manufacturers with our readers through our display units. Please email us at\n  ");
      a2 = element("a");
      t19 = text("bizdev@thekeycap");
      t20 = text("\n  for details.");
      t21 = space();
      h43 = element("h4");
      t22 = text("Other Business Opportunities");
      t23 = space();
      p4 = element("p");
      t24 = text("Please email us at\n  ");
      a3 = element("a");
      t25 = text("bizdev@thekeycap");
      t26 = text("\n  if you have ideas on how we could work together that don’t quite fit into the\n  categories above. We’d love to hear from you.");
      t27 = space();
      p5 = element("p");
      t28 = text("Please note that we pride ourselves on following rigorous journalistic\n  standards and ethics when doing our reviews and making recommendations. As\n  such, our writers and editors maintain full editorial independence from our\n  business operations, and we do not consider any product review, guest post, or\n  sponsored content inquiries.");
      this.h();
    },
    l: function claim(nodes) {
      seo.$$.fragment.l(nodes);
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {
        class: true
      }, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Partners and Business Opportunities");
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      p0 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Our goal is to help people effortlessly choose and buy what they need in order\n  to live a better life. Keycap's extensive independent research has found\n  audiences beyond our site with partners who use our work to serve their own\n  audiences.");
      p0_nodes.forEach(detach);
      t4 = claim_text(nodes, "\n\n");
      h40 = claim_element(nodes, "H4", {
        class: true
      }, false);
      var h40_nodes = children(h40);
      t5 = claim_text(h40_nodes, "Affilate Partnerships");
      h40_nodes.forEach(detach);
      t6 = claim_text(nodes, "\n\n");
      p1 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "Readers visit Keycap when they are ready to make a purchase decision. Our\n  exhaustive process and hours of extensive testing have built trust with\n  readers and have made us a destination for product recommendations. If you\n  carry a Keycap-recommended product or service and are interested in\n  establishing an affiliate partnership, please email us at\n  ");
      a0 = claim_element(p1_nodes, "A", {
        href: true,
        target: true,
        class: true
      }, false);
      var a0_nodes = children(a0);
      t8 = claim_text(a0_nodes, "bizdev@thekeycap.com.");
      a0_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      t9 = claim_text(nodes, "\n\n");
      h41 = claim_element(nodes, "H4", {
        class: true
      }, false);
      var h41_nodes = children(h41);
      t10 = claim_text(h41_nodes, "Licensing and Awards");
      h41_nodes.forEach(detach);
      t11 = claim_text(nodes, "\n\n");
      p2 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p2_nodes = children(p2);
      t12 = claim_text(p2_nodes, "Every pick on our site is an award winner, and being named best in class by\n  our team of experts is news worth sharing. If you’re a manufacturer of a\n  product that our editors named as the best, you can license our logo or\n  editorial text to show potential customers how great your gear is. Please\n  email\n  ");
      a1 = claim_element(p2_nodes, "A", {
        href: true,
        target: true,
        class: true
      }, false);
      var a1_nodes = children(a1);
      t13 = claim_text(a1_nodes, "bizdev@thekeycap");
      a1_nodes.forEach(detach);
      t14 = claim_text(p2_nodes, "\n  if you’re interested.");
      p2_nodes.forEach(detach);
      t15 = claim_text(nodes, "\n\n");
      h42 = claim_element(nodes, "H4", {
        class: true
      }, false);
      var h42_nodes = children(h42);
      t16 = claim_text(h42_nodes, "Advertising");
      h42_nodes.forEach(detach);
      t17 = claim_text(nodes, "\n\n");
      p3 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p3_nodes = children(p3);
      t18 = claim_text(p3_nodes, "In addition to our reviews and buying guides, we can connect merchants and\n  manufacturers with our readers through our display units. Please email us at\n  ");
      a2 = claim_element(p3_nodes, "A", {
        href: true,
        target: true,
        class: true
      }, false);
      var a2_nodes = children(a2);
      t19 = claim_text(a2_nodes, "bizdev@thekeycap");
      a2_nodes.forEach(detach);
      t20 = claim_text(p3_nodes, "\n  for details.");
      p3_nodes.forEach(detach);
      t21 = claim_text(nodes, "\n\n");
      h43 = claim_element(nodes, "H4", {
        class: true
      }, false);
      var h43_nodes = children(h43);
      t22 = claim_text(h43_nodes, "Other Business Opportunities");
      h43_nodes.forEach(detach);
      t23 = claim_text(nodes, "\n\n");
      p4 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p4_nodes = children(p4);
      t24 = claim_text(p4_nodes, "Please email us at\n  ");
      a3 = claim_element(p4_nodes, "A", {
        href: true,
        target: true,
        class: true
      }, false);
      var a3_nodes = children(a3);
      t25 = claim_text(a3_nodes, "bizdev@thekeycap");
      a3_nodes.forEach(detach);
      t26 = claim_text(p4_nodes, "\n  if you have ideas on how we could work together that don’t quite fit into the\n  categories above. We’d love to hear from you.");
      p4_nodes.forEach(detach);
      t27 = claim_text(nodes, "\n\n");
      p5 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p5_nodes = children(p5);
      t28 = claim_text(p5_nodes, "Please note that we pride ourselves on following rigorous journalistic\n  standards and ethics when doing our reviews and making recommendations. As\n  such, our writers and editors maintain full editorial independence from our\n  business operations, and we do not consider any product review, guest post, or\n  sponsored content inquiries.");
      p5_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(h1, "class", "svelte-1rnkayt");
      add_location(h1, file, 25, 0, 804);
      attr(p0, "class", "svelte-1rnkayt");
      add_location(p0, file, 27, 0, 850);
      attr(h40, "class", "svelte-1rnkayt");
      add_location(h40, file, 34, 0, 1107);
      attr(a0, "href", "mailto:bizdev@thekeycap.com");
      attr(a0, "target", "_blank");
      attr(a0, "class", "svelte-1rnkayt");
      add_location(a0, file, 42, 2, 1502);
      attr(p1, "class", "svelte-1rnkayt");
      add_location(p1, file, 36, 0, 1139);
      attr(h41, "class", "svelte-1rnkayt");
      add_location(h41, file, 47, 0, 1596);
      attr(a1, "href", "mailto:bizdev@thekeycap.com");
      attr(a1, "target", "_blank");
      attr(a1, "class", "svelte-1rnkayt");
      add_location(a1, file, 55, 2, 1944);
      attr(p2, "class", "svelte-1rnkayt");
      add_location(p2, file, 49, 0, 1627);
      attr(h42, "class", "svelte-1rnkayt");
      add_location(h42, file, 59, 0, 2049);
      attr(a2, "href", "mailto:bizdev@thekeycap.com");
      attr(a2, "target", "_blank");
      attr(a2, "class", "svelte-1rnkayt");
      add_location(a2, file, 64, 2, 2233);
      attr(p3, "class", "svelte-1rnkayt");
      add_location(p3, file, 61, 0, 2071);
      attr(h43, "class", "svelte-1rnkayt");
      add_location(h43, file, 68, 0, 2329);
      attr(a3, "href", "mailto:bizdev@thekeycap.com");
      attr(a3, "target", "_blank");
      attr(a3, "class", "svelte-1rnkayt");
      add_location(a3, file, 72, 2, 2395);
      attr(p4, "class", "svelte-1rnkayt");
      add_location(p4, file, 70, 0, 2368);
      attr(p5, "class", "svelte-1rnkayt");
      add_location(p5, file, 77, 0, 2604);
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
      insert(target, h40, anchor);
      append(h40, t5);
      insert(target, t6, anchor);
      insert(target, p1, anchor);
      append(p1, t7);
      append(p1, a0);
      append(a0, t8);
      insert(target, t9, anchor);
      insert(target, h41, anchor);
      append(h41, t10);
      insert(target, t11, anchor);
      insert(target, p2, anchor);
      append(p2, t12);
      append(p2, a1);
      append(a1, t13);
      append(p2, t14);
      insert(target, t15, anchor);
      insert(target, h42, anchor);
      append(h42, t16);
      insert(target, t17, anchor);
      insert(target, p3, anchor);
      append(p3, t18);
      append(p3, a2);
      append(a2, t19);
      append(p3, t20);
      insert(target, t21, anchor);
      insert(target, h43, anchor);
      append(h43, t22);
      insert(target, t23, anchor);
      insert(target, p4, anchor);
      append(p4, t24);
      append(p4, a3);
      append(a3, t25);
      append(p4, t26);
      insert(target, t27, anchor);
      insert(target, p5, anchor);
      append(p5, t28);
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
        detach(h40);
        detach(t6);
        detach(p1);
        detach(t9);
        detach(h41);
        detach(t11);
        detach(p2);
        detach(t15);
        detach(h42);
        detach(t17);
        detach(p3);
        detach(t21);
        detach(h43);
        detach(t23);
        detach(p4);
        detach(t27);
        detach(p5);
      }
    }
  };
}

var Partners =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Partners, _SvelteComponentDev);

  function Partners(options) {
    var _this;

    _classCallCheck(this, Partners);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Partners).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    return _this;
  }

  return Partners;
}(SvelteComponentDev);

export default Partners;
