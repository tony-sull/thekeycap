import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, S as SvelteComponentDev, f as space, e as element, t as text, k as claim_text, g as claim_element, h as children, j as detach, l as attr, m as add_location, x as mount_component, o as insert, p as append, n as noop, A as transition_in, B as transition_out, C as destroy_component } from './index.b5be72ab.js';
import { S as SEO } from './SEO.0f881c7c.js';

var file = "src/routes/about.svelte";

function create_fragment(ctx) {
  var t0, h1, t1, t2, p0, t3, t4, p1, t5, t6, p2, t7, t8, p3, strong1, t9, strong0, t10, p4, t11, t12, p5, t13, em0, t14, t15, t16, p6, t17, a, t18, t19, em1, t20, t21, em2, t22, t23, em3, t24, t25, p7, strong2, t26, t27, p8, t28, current;
  var seo = new SEO({
    props: {
      title: "What We Do at Keycap: Reviews by Keycap"
    },
    $$inline: true
  });
  return {
    c: function create() {
      seo.$$.fragment.c();
      t0 = space();
      h1 = element("h1");
      t1 = text("About Us");
      t2 = space();
      p0 = element("p");
      t3 = text("Keycap is a list of the best mechanical keyboards and related gear for people\n  who want to save the time and stress of figuring out what to buy.");
      t4 = space();
      p1 = element("p");
      t5 = text("We do our best to thoroughly research every product we review and recommend.\n  With every category we cover we try to not only recommend our favorite overall\n  pick, but to consider the needs of more specific needs. An occasional user\n  looking for a mechanical keyboard will have very different needs from a\n  professional gamer, no one product is likely to cover everyone's specific\n  needs.");
      t6 = space();
      p2 = element("p");
      t7 = text("We pride ourselves on following rigorous journalistic standards and ethics,\n  and we maintain editorial independence from our business operations. All\n  reviews are made independent of any business partnerships, and we never sell a\n  recommendation to the highest bidder.");
      t8 = space();
      p3 = element("p");
      strong1 = element("strong");
      t9 = text("But don't the affiliate commissions make you biased?\n    ");
      strong0 = element("strong");
      t10 = space();
      p4 = element("p");
      t11 = text("Our only goal is to create engaging content that our readers enjoy. Affiliate\n  commissions are the main source of revenue that keeps this site up and\n  running, and we chose the affiliate model with our readers in mind.");
      t12 = space();
      p5 = element("p");
      t13 = text("There are many ways a publisher can make money by providing value to their\n  customers. When deciding on a revenue model, we immediately ruled out the\n  advertising based models that are driven by tracking personal information and\n  selling it to the highest bidder. Instead of making you the product, we aim to\n  recommend products that you are interesting in buying and we get a commission\n  from the\n  ");
      em0 = element("em");
      t14 = text("retailer");
      t15 = text("\n  . If you return the product for any reason, we don't earn a commission. And\n  don't worry, the fact that you were referred by us does not impact the item's\n  price in any way.");
      t16 = space();
      p6 = element("p");
      t17 = text("Check out our\n  ");
      a = element("a");
      t18 = text("Privacy Policy");
      t19 = text("\n  for more details, but the\n  ");
      em1 = element("em");
      t20 = text("tl;dr;");
      t21 = text("\n  is that we only collect a very limited set of information. We may collect\n  information related to how you found us (\n  ");
      em2 = element("em");
      t22 = text("eg:");
      t23 = text("\n  from a Google search, or a link on social media), what browser you are using,\n  or a generalized location (\n  ");
      em3 = element("em");
      t24 = text("i.e. we collect city/state/country info, but never track IP address or\n    geocoordinates).");
      t25 = space();
      p7 = element("p");
      strong2 = element("strong");
      t26 = text("What if the item I want wasn't on your site?");
      t27 = space();
      p8 = element("p");
      t28 = text("Email or tweet at us to let us know if you need help figuring out a particular\n  buying problem. Our staff of curious people love to research and test products\n  and may be able to help.");
      this.h();
    },
    l: function claim(nodes) {
      seo.$$.fragment.l(nodes);
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {
        class: true
      }, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About Us");
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      p0 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Keycap is a list of the best mechanical keyboards and related gear for people\n  who want to save the time and stress of figuring out what to buy.");
      p0_nodes.forEach(detach);
      t4 = claim_text(nodes, "\n\n");
      p1 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "We do our best to thoroughly research every product we review and recommend.\n  With every category we cover we try to not only recommend our favorite overall\n  pick, but to consider the needs of more specific needs. An occasional user\n  looking for a mechanical keyboard will have very different needs from a\n  professional gamer, no one product is likely to cover everyone's specific\n  needs.");
      p1_nodes.forEach(detach);
      t6 = claim_text(nodes, "\n\n");
      p2 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "We pride ourselves on following rigorous journalistic standards and ethics,\n  and we maintain editorial independence from our business operations. All\n  reviews are made independent of any business partnerships, and we never sell a\n  recommendation to the highest bidder.");
      p2_nodes.forEach(detach);
      t8 = claim_text(nodes, "\n\n");
      p3 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p3_nodes = children(p3);
      strong1 = claim_element(p3_nodes, "STRONG", {}, false);
      var strong1_nodes = children(strong1);
      t9 = claim_text(strong1_nodes, "But don't the affiliate commissions make you biased?\n    ");
      strong0 = claim_element(strong1_nodes, "STRONG", {}, false);
      var strong0_nodes = children(strong0);
      strong0_nodes.forEach(detach);
      strong1_nodes.forEach(detach);
      p3_nodes.forEach(detach);
      t10 = claim_text(nodes, "\n\n");
      p4 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p4_nodes = children(p4);
      t11 = claim_text(p4_nodes, "Our only goal is to create engaging content that our readers enjoy. Affiliate\n  commissions are the main source of revenue that keeps this site up and\n  running, and we chose the affiliate model with our readers in mind.");
      p4_nodes.forEach(detach);
      t12 = claim_text(nodes, "\n\n");
      p5 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p5_nodes = children(p5);
      t13 = claim_text(p5_nodes, "There are many ways a publisher can make money by providing value to their\n  customers. When deciding on a revenue model, we immediately ruled out the\n  advertising based models that are driven by tracking personal information and\n  selling it to the highest bidder. Instead of making you the product, we aim to\n  recommend products that you are interesting in buying and we get a commission\n  from the\n  ");
      em0 = claim_element(p5_nodes, "EM", {}, false);
      var em0_nodes = children(em0);
      t14 = claim_text(em0_nodes, "retailer");
      em0_nodes.forEach(detach);
      t15 = claim_text(p5_nodes, "\n  . If you return the product for any reason, we don't earn a commission. And\n  don't worry, the fact that you were referred by us does not impact the item's\n  price in any way.");
      p5_nodes.forEach(detach);
      t16 = claim_text(nodes, "\n\n");
      p6 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p6_nodes = children(p6);
      t17 = claim_text(p6_nodes, "Check out our\n  ");
      a = claim_element(p6_nodes, "A", {
        class: true,
        href: true
      }, false);
      var a_nodes = children(a);
      t18 = claim_text(a_nodes, "Privacy Policy");
      a_nodes.forEach(detach);
      t19 = claim_text(p6_nodes, "\n  for more details, but the\n  ");
      em1 = claim_element(p6_nodes, "EM", {}, false);
      var em1_nodes = children(em1);
      t20 = claim_text(em1_nodes, "tl;dr;");
      em1_nodes.forEach(detach);
      t21 = claim_text(p6_nodes, "\n  is that we only collect a very limited set of information. We may collect\n  information related to how you found us (\n  ");
      em2 = claim_element(p6_nodes, "EM", {}, false);
      var em2_nodes = children(em2);
      t22 = claim_text(em2_nodes, "eg:");
      em2_nodes.forEach(detach);
      t23 = claim_text(p6_nodes, "\n  from a Google search, or a link on social media), what browser you are using,\n  or a generalized location (\n  ");
      em3 = claim_element(p6_nodes, "EM", {}, false);
      var em3_nodes = children(em3);
      t24 = claim_text(em3_nodes, "i.e. we collect city/state/country info, but never track IP address or\n    geocoordinates).");
      em3_nodes.forEach(detach);
      p6_nodes.forEach(detach);
      t25 = claim_text(nodes, "\n\n");
      p7 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p7_nodes = children(p7);
      strong2 = claim_element(p7_nodes, "STRONG", {}, false);
      var strong2_nodes = children(strong2);
      t26 = claim_text(strong2_nodes, "What if the item I want wasn't on your site?");
      strong2_nodes.forEach(detach);
      p7_nodes.forEach(detach);
      t27 = claim_text(nodes, "\n\n");
      p8 = claim_element(nodes, "P", {
        class: true
      }, false);
      var p8_nodes = children(p8);
      t28 = claim_text(p8_nodes, "Email or tweet at us to let us know if you need help figuring out a particular\n  buying problem. Our staff of curious people love to research and test products\n  and may be able to help.");
      p8_nodes.forEach(detach);
      this.h();
    },
    h: function hydrate() {
      attr(h1, "class", "text-3xl font-bold");
      add_location(h1, file, 12, 0, 494);
      attr(p0, "class", "svelte-klzbod");
      add_location(p0, file, 14, 0, 540);
      attr(p1, "class", "svelte-klzbod");
      add_location(p1, file, 19, 0, 698);
      attr(p2, "class", "svelte-klzbod");
      add_location(p2, file, 28, 0, 1104);
      add_location(strong0, file, 38, 4, 1464);
      add_location(strong1, file, 36, 2, 1394);
      attr(p3, "class", "svelte-klzbod");
      add_location(p3, file, 35, 0, 1388);
      attr(p4, "class", "svelte-klzbod");
      add_location(p4, file, 42, 0, 1493);
      add_location(em0, file, 55, 2, 2137);
      attr(p5, "class", "svelte-klzbod");
      add_location(p5, file, 48, 0, 1726);
      attr(a, "class", "underline");
      attr(a, "href", "/privacy-policy");
      add_location(a, file, 63, 2, 2361);
      add_location(em1, file, 65, 2, 2454);
      add_location(em2, file, 68, 2, 2592);
      add_location(em3, file, 71, 2, 2717);
      attr(p6, "class", "svelte-klzbod");
      add_location(p6, file, 61, 0, 2339);
      add_location(strong2, file, 78, 2, 2838);
      attr(p7, "class", "svelte-klzbod");
      add_location(p7, file, 77, 0, 2832);
      attr(p8, "class", "svelte-klzbod");
      add_location(p8, file, 81, 0, 2906);
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
      append(p3, strong1);
      append(strong1, t9);
      append(strong1, strong0);
      insert(target, t10, anchor);
      insert(target, p4, anchor);
      append(p4, t11);
      insert(target, t12, anchor);
      insert(target, p5, anchor);
      append(p5, t13);
      append(p5, em0);
      append(em0, t14);
      append(p5, t15);
      insert(target, t16, anchor);
      insert(target, p6, anchor);
      append(p6, t17);
      append(p6, a);
      append(a, t18);
      append(p6, t19);
      append(p6, em1);
      append(em1, t20);
      append(p6, t21);
      append(p6, em2);
      append(em2, t22);
      append(p6, t23);
      append(p6, em3);
      append(em3, t24);
      insert(target, t25, anchor);
      insert(target, p7, anchor);
      append(p7, strong2);
      append(strong2, t26);
      insert(target, t27, anchor);
      insert(target, p8, anchor);
      append(p8, t28);
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
        detach(t10);
        detach(p4);
        detach(t12);
        detach(p5);
        detach(t16);
        detach(p6);
        detach(t25);
        detach(p7);
        detach(t27);
        detach(p8);
      }
    }
  };
}

var About =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
