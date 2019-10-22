import { s as safe_not_equal, n as noop, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, S as SvelteComponentDev, e as element, f as space, t as text, g as claim_element, h as children, j as detach$1, k as claim_text, l as attr, m as add_location, o as insert, p as append, v as validate_store, q as component_subscribe, r as binding_callbacks, u as _createClass, w as create_slot, x as mount_component, y as get_slot_changes, z as get_slot_context, A as transition_in, B as transition_out, C as destroy_component, D as globals, E as set_data, F as empty, G as assign, H as get_spread_update, I as setContext, J as group_outros, K as check_outros, L as _typeof, M as getContext } from './index.b5be72ab.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator.0aaa4fbd.js';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

var subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var stop;
  var subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        var run_queue = !subscriber_queue.length;

        for (var i = 0; i < subscribers.length; i += 1) {
          var s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
            subscriber_queue[_i][0](subscriber_queue[_i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return function () {
      var index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

var CONTEXT_KEY = {};
var preload = function preload() {
  return {};
};

var file = "src/components/Header.svelte";

function create_fragment(ctx) {
  var header, div1, a0, img, t0, input, t1, nav, ul, li0, a1, t2, t3, li1, a2, t4, t5, li2, a3, t6, t7, li3, a4, t8, t9, label, div0, t10, span, t11;
  return {
    c: function create() {
      header = element("header");
      div1 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      input = element("input");
      t1 = space();
      nav = element("nav");
      ul = element("ul");
      li0 = element("li");
      a1 = element("a");
      t2 = text("Home");
      t3 = space();
      li1 = element("li");
      a2 = element("a");
      t4 = text("Reviews");
      t5 = space();
      li2 = element("li");
      a3 = element("a");
      t6 = text("Learn");
      t7 = space();
      li3 = element("li");
      a4 = element("a");
      t8 = text("About");
      t9 = space();
      label = element("label");
      div0 = element("div");
      t10 = space();
      span = element("span");
      t11 = text("Menu");
      this.h();
    },
    l: function claim(nodes) {
      header = claim_element(nodes, "HEADER", {
        class: true,
        "tab-index": true
      }, false);
      var header_nodes = children(header);
      div1 = claim_element(header_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", {
        href: true,
        "aria-label": true,
        title: true
      }, false);
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach$1);
      a0_nodes.forEach(detach$1);
      t0 = claim_text(div1_nodes, "\n\n    ");
      input = claim_element(div1_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        "aria-hidden": true
      }, false);
      var input_nodes = children(input);
      input_nodes.forEach(detach$1);
      t1 = claim_text(div1_nodes, "\n\n    ");
      nav = claim_element(div1_nodes, "NAV", {
        class: true
      }, false);
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", {
        class: true
      }, false);
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      }, false);
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", {
        href: true,
        alt: true,
        rel: true,
        class: true
      }, false);
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Home");
      a1_nodes.forEach(detach$1);
      li0_nodes.forEach(detach$1);
      t3 = claim_text(ul_nodes, "\n        ");
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      }, false);
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", {
        href: true,
        alt: true,
        rel: true,
        class: true
      }, false);
      var a2_nodes = children(a2);
      t4 = claim_text(a2_nodes, "Reviews");
      a2_nodes.forEach(detach$1);
      li1_nodes.forEach(detach$1);
      t5 = claim_text(ul_nodes, "\n        ");
      li2 = claim_element(ul_nodes, "LI", {
        class: true
      }, false);
      var li2_nodes = children(li2);
      a3 = claim_element(li2_nodes, "A", {
        href: true,
        alt: true,
        rel: true,
        class: true
      }, false);
      var a3_nodes = children(a3);
      t6 = claim_text(a3_nodes, "Learn");
      a3_nodes.forEach(detach$1);
      li2_nodes.forEach(detach$1);
      t7 = claim_text(ul_nodes, "\n        ");
      li3 = claim_element(ul_nodes, "LI", {
        class: true
      }, false);
      var li3_nodes = children(li3);
      a4 = claim_element(li3_nodes, "A", {
        href: true,
        alt: true,
        rel: true,
        class: true
      }, false);
      var a4_nodes = children(a4);
      t8 = claim_text(a4_nodes, "About");
      a4_nodes.forEach(detach$1);
      li3_nodes.forEach(detach$1);
      ul_nodes.forEach(detach$1);
      nav_nodes.forEach(detach$1);
      t9 = claim_text(div1_nodes, "\n\n    ");
      label = claim_element(div1_nodes, "LABEL", {
        class: true,
        for: true
      }, false);
      var label_nodes = children(label);
      div0 = claim_element(label_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach$1);
      t10 = claim_text(label_nodes, "\n      ");
      span = claim_element(label_nodes, "SPAN", {
        class: true,
        "aria-hidden": true
      }, false);
      var span_nodes = children(span);
      t11 = claim_text(span_nodes, "Menu");
      span_nodes.forEach(detach$1);
      label_nodes.forEach(detach$1);
      div1_nodes.forEach(detach$1);
      header_nodes.forEach(detach$1);
      this.h();
    },
    h: function hydrate() {
      attr(img, "class", "h-6 my-1");
      attr(img, "src", "/logo-horizontal.svg");
      attr(img, "alt", "Keycap");
      add_location(img, file, 139, 6, 6533);
      attr(a0, "href", "https://thekeycap.com");
      attr(a0, "aria-label", "Keycap");
      attr(a0, "title", "Keycap");
      add_location(a0, file, 138, 4, 6459);
      attr(input, "type", "checkbox");
      attr(input, "id", "menu-toggle");
      attr(input, "class", "hidden");
      attr(input, "aria-hidden", "true");
      add_location(input, file, 142, 4, 6612);
      attr(a1, "href", "/");
      attr(a1, "alt", "Home");
      attr(a1, "rel", "prefetch");
      attr(a1, "class", "svelte-tu2x05");
      add_location(a1, file, 159, 10, 7013);
      attr(li0, "class", "svelte-tu2x05");
      add_location(li0, file, 158, 8, 6998);
      attr(a2, "href", "/reviews");
      attr(a2, "alt", "Reviews");
      attr(a2, "rel", "prefetch");
      attr(a2, "class", "svelte-tu2x05");
      add_location(a2, file, 162, 10, 7097);
      attr(li1, "class", "svelte-tu2x05");
      add_location(li1, file, 161, 8, 7082);
      attr(a3, "href", "/learn");
      attr(a3, "alt", "Learn");
      attr(a3, "rel", "prefetch");
      attr(a3, "class", "svelte-tu2x05");
      add_location(a3, file, 165, 10, 7194);
      attr(li2, "class", "svelte-tu2x05");
      add_location(li2, file, 164, 8, 7179);
      attr(a4, "href", "/about");
      attr(a4, "alt", "About");
      attr(a4, "rel", "prefetch");
      attr(a4, "class", "svelte-tu2x05");
      add_location(a4, file, 168, 10, 7285);
      attr(li3, "class", "svelte-tu2x05");
      add_location(li3, file, 167, 8, 7270);
      attr(ul, "class", "text-lg text-center capitalize font-light xs:flex xs:items-center\n        xs:ml-2");
      add_location(ul, file, 154, 6, 6880);
      attr(nav, "class", "absolute left-0 right-0 bg-shades-dark z-50 text-shades-light\n      xs:relative xs:bg-transparent svelte-tu2x05");
      add_location(nav, file, 150, 4, 6751);
      attr(div0, "class", "menu-icon svelte-tu2x05");
      add_location(div0, file, 174, 6, 7462);
      attr(span, "class", "hidden");
      attr(span, "aria-hidden", "true");
      add_location(span, file, 175, 6, 7494);
      attr(label, "class", "menu-toggle p-2 cursor-pointer xs:hidden svelte-tu2x05");
      attr(label, "for", "menu-toggle");
      add_location(label, file, 173, 4, 7381);
      attr(div1, "class", "content max-w-2x flex items-center justify-between xs:justify-start");
      add_location(div1, file, 135, 2, 6366);
      attr(header, "class", "bg-brand px-6 py-4 relative");
      attr(header, "tab-index", "0");
      add_location(header, file, 134, 0, 6305);
    },
    m: function mount(target, anchor) {
      insert(target, header, anchor);
      append(header, div1);
      append(div1, a0);
      append(a0, img);
      append(div1, t0);
      append(div1, input);
      ctx.input_binding(input);
      append(div1, t1);
      append(div1, nav);
      append(nav, ul);
      append(ul, li0);
      append(li0, a1);
      append(a1, t2);
      append(ul, t3);
      append(ul, li1);
      append(li1, a2);
      append(a2, t4);
      append(ul, t5);
      append(ul, li2);
      append(li2, a3);
      append(a3, t6);
      append(ul, t7);
      append(ul, li3);
      append(li3, a4);
      append(a4, t8);
      append(div1, t9);
      append(div1, label);
      append(label, div0);
      append(label, t10);
      append(label, span);
      append(span, t11);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach$1(header);
      }

      ctx.input_binding(null);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $page;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, 'page');
  component_subscribe($$self, page, function ($$value) {
    $page = $$value;
    $$invalidate('$page', $page);
  });
  var menuToggle;

  function input_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('menuToggle', menuToggle = $$value);
    });
  }

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      $page: 1,
      menuToggle: 1
    };

    if ($$dirty.$page || $$dirty.menuToggle) {
      if ($page && menuToggle) {
        menuToggle.checked = false;
        $$invalidate('menuToggle', menuToggle), $$invalidate('$page', $page);
      }
    }
  };

  return {
    page: page,
    menuToggle: menuToggle,
    input_binding: input_binding
  };
}

var Header =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Header, _SvelteComponentDev);

  function Header(options) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    return _this;
  }

  return Header;
}(SvelteComponentDev);

var file$1 = "src/components/Footer.svelte";

function create_fragment$1(ctx) {
  var footer, div2, ul0, li0, a0, t0, t1, li1, a1, t2, t3, ul1, li2, a2, t4, t5, li3, a3, t6, t7, li4, a4, t8, t9, li5, a5, t10, t11, div1, strong, t12, t13, ul2, li6, a6, img0, t14, li7, a7, img1, t15, div0, t16, a8, t17, t18, t19, div3, t20;
  return {
    c: function create() {
      footer = element("footer");
      div2 = element("div");
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t0 = text("About Keycap");
      t1 = space();
      li1 = element("li");
      a1 = element("a");
      t2 = text("Contact Us");
      t3 = space();
      ul1 = element("ul");
      li2 = element("li");
      a2 = element("a");
      t4 = text("Privacy Policy");
      t5 = space();
      li3 = element("li");
      a3 = element("a");
      t6 = text("Terms of Use");
      t7 = space();
      li4 = element("li");
      a4 = element("a");
      t8 = text("Partnerships and Advertising");
      t9 = space();
      li5 = element("li");
      a5 = element("a");
      t10 = text("RSS Feed");
      t11 = space();
      div1 = element("div");
      strong = element("strong");
      t12 = text("Lets be friends!");
      t13 = space();
      ul2 = element("ul");
      li6 = element("li");
      a6 = element("a");
      img0 = element("img");
      t14 = space();
      li7 = element("li");
      a7 = element("a");
      img1 = element("img");
      t15 = space();
      div0 = element("div");
      t16 = text("You can\n        ");
      a8 = element("a");
      t17 = text("send us a note");
      t18 = text("\n        too.");
      t19 = space();
      div3 = element("div");
      t20 = text("© 2019 Keycap. All Rights Reserved.");
      this.h();
    },
    l: function claim(nodes) {
      footer = claim_element(nodes, "FOOTER", {
        class: true,
        role: true
      }, false);
      var footer_nodes = children(footer);
      div2 = claim_element(footer_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      ul0 = claim_element(div2_nodes, "UL", {
        class: true
      }, false);
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {}, false);
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        href: true,
        alt: true,
        class: true
      }, false);
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "About Keycap");
      a0_nodes.forEach(detach$1);
      li0_nodes.forEach(detach$1);
      t1 = claim_text(ul0_nodes, "\n      ");
      li1 = claim_element(ul0_nodes, "LI", {}, false);
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        href: true,
        alt: true,
        class: true
      }, false);
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Contact Us");
      a1_nodes.forEach(detach$1);
      li1_nodes.forEach(detach$1);
      ul0_nodes.forEach(detach$1);
      t3 = claim_text(div2_nodes, "\n\n    ");
      ul1 = claim_element(div2_nodes, "UL", {
        class: true
      }, false);
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", {}, false);
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", {
        href: true,
        alt: true,
        class: true
      }, false);
      var a2_nodes = children(a2);
      t4 = claim_text(a2_nodes, "Privacy Policy");
      a2_nodes.forEach(detach$1);
      li2_nodes.forEach(detach$1);
      t5 = claim_text(ul1_nodes, "\n      ");
      li3 = claim_element(ul1_nodes, "LI", {}, false);
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        href: true,
        alt: true,
        class: true
      }, false);
      var a3_nodes = children(a3);
      t6 = claim_text(a3_nodes, "Terms of Use");
      a3_nodes.forEach(detach$1);
      li3_nodes.forEach(detach$1);
      t7 = claim_text(ul1_nodes, "\n      ");
      li4 = claim_element(ul1_nodes, "LI", {}, false);
      var li4_nodes = children(li4);
      a4 = claim_element(li4_nodes, "A", {
        href: true,
        alt: true,
        class: true
      }, false);
      var a4_nodes = children(a4);
      t8 = claim_text(a4_nodes, "Partnerships and Advertising");
      a4_nodes.forEach(detach$1);
      li4_nodes.forEach(detach$1);
      t9 = claim_text(ul1_nodes, "\n      ");
      li5 = claim_element(ul1_nodes, "LI", {}, false);
      var li5_nodes = children(li5);
      a5 = claim_element(li5_nodes, "A", {
        href: true,
        title: true,
        target: true,
        class: true
      }, false);
      var a5_nodes = children(a5);
      t10 = claim_text(a5_nodes, "RSS Feed");
      a5_nodes.forEach(detach$1);
      li5_nodes.forEach(detach$1);
      ul1_nodes.forEach(detach$1);
      t11 = claim_text(div2_nodes, "\n\n    ");
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      strong = claim_element(div1_nodes, "STRONG", {}, false);
      var strong_nodes = children(strong);
      t12 = claim_text(strong_nodes, "Lets be friends!");
      strong_nodes.forEach(detach$1);
      t13 = claim_text(div1_nodes, "\n\n      ");
      ul2 = claim_element(div1_nodes, "UL", {
        id: true,
        class: true
      }, false);
      var ul2_nodes = children(ul2);
      li6 = claim_element(ul2_nodes, "LI", {
        class: true
      }, false);
      var li6_nodes = children(li6);
      a6 = claim_element(li6_nodes, "A", {
        id: true,
        href: true,
        title: true,
        class: true
      }, false);
      var a6_nodes = children(a6);
      img0 = claim_element(a6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      }, false);
      var img0_nodes = children(img0);
      img0_nodes.forEach(detach$1);
      a6_nodes.forEach(detach$1);
      li6_nodes.forEach(detach$1);
      t14 = claim_text(ul2_nodes, "\n        ");
      li7 = claim_element(ul2_nodes, "LI", {
        class: true
      }, false);
      var li7_nodes = children(li7);
      a7 = claim_element(li7_nodes, "A", {
        id: true,
        href: true,
        title: true,
        class: true
      }, false);
      var a7_nodes = children(a7);
      img1 = claim_element(a7_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      }, false);
      var img1_nodes = children(img1);
      img1_nodes.forEach(detach$1);
      a7_nodes.forEach(detach$1);
      li7_nodes.forEach(detach$1);
      ul2_nodes.forEach(detach$1);
      t15 = claim_text(div1_nodes, "\n\n      ");
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      t16 = claim_text(div0_nodes, "You can\n        ");
      a8 = claim_element(div0_nodes, "A", {
        class: true,
        href: true
      }, false);
      var a8_nodes = children(a8);
      t17 = claim_text(a8_nodes, "send us a note");
      a8_nodes.forEach(detach$1);
      t18 = claim_text(div0_nodes, "\n        too.");
      div0_nodes.forEach(detach$1);
      div1_nodes.forEach(detach$1);
      div2_nodes.forEach(detach$1);
      t19 = claim_text(footer_nodes, "\n\n  ");
      div3 = claim_element(footer_nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      t20 = claim_text(div3_nodes, "© 2019 Keycap. All Rights Reserved.");
      div3_nodes.forEach(detach$1);
      footer_nodes.forEach(detach$1);
      this.h();
    },
    h: function hydrate() {
      attr(a0, "href", "/about");
      attr(a0, "alt", "About");
      attr(a0, "class", "svelte-17dqaf1");
      add_location(a0, file$1, 43, 8, 2005);
      add_location(li0, file$1, 42, 6, 1992);
      attr(a1, "href", "/contact-us");
      attr(a1, "alt", "Contact Us");
      attr(a1, "class", "svelte-17dqaf1");
      add_location(a1, file$1, 46, 8, 2082);
      add_location(li1, file$1, 45, 6, 2069);
      attr(ul0, "class", "font-semibold text-shades-light w-full");
      add_location(ul0, file$1, 41, 4, 1934);
      attr(a2, "href", "/privacy-policy");
      attr(a2, "alt", "Privacy Policy");
      attr(a2, "class", "svelte-17dqaf1");
      add_location(a2, file$1, 52, 8, 2231);
      add_location(li2, file$1, 51, 6, 2218);
      attr(a3, "href", "/terms-of-use");
      attr(a3, "alt", "Terms of Use");
      attr(a3, "class", "svelte-17dqaf1");
      add_location(a3, file$1, 55, 8, 2328);
      add_location(li3, file$1, 54, 6, 2315);
      attr(a4, "href", "/partners");
      attr(a4, "alt", "Partnerships and Advertising");
      attr(a4, "class", "svelte-17dqaf1");
      add_location(a4, file$1, 58, 8, 2419);
      add_location(li4, file$1, 57, 6, 2406);
      attr(a5, "href", "/rss.xml");
      attr(a5, "title", "RSS Feed");
      attr(a5, "target", "_blank");
      attr(a5, "class", "svelte-17dqaf1");
      add_location(a5, file$1, 63, 8, 2558);
      add_location(li5, file$1, 62, 6, 2545);
      attr(ul1, "class", "text-shades-light font-light w-full");
      add_location(ul1, file$1, 50, 4, 2163);
      add_location(strong, file$1, 68, 6, 2677);
      attr(img0, "class", "logo svelte-17dqaf1");
      attr(img0, "src", "/facebook-circle.svg");
      attr(img0, "alt", "Keycap's Facebook");
      add_location(img0, file$1, 77, 12, 2930);
      attr(a6, "id", "facebook");
      attr(a6, "href", "https://www.facebook.com/thekeycap");
      attr(a6, "title", "Keycap's Facebook");
      attr(a6, "class", "svelte-17dqaf1");
      add_location(a6, file$1, 72, 10, 2785);
      attr(li6, "class", "svelte-17dqaf1");
      add_location(li6, file$1, 71, 8, 2770);
      attr(img1, "class", "logo svelte-17dqaf1");
      attr(img1, "src", "/twitter-circle.svg");
      attr(img1, "alt", "Keycap's Twitter");
      add_location(img1, file$1, 90, 12, 3250);
      attr(a7, "id", "twitter");
      attr(a7, "href", "https://www.twitter.com/thekeycap");
      attr(a7, "title", "Keycap's Twitter");
      attr(a7, "class", "svelte-17dqaf1");
      add_location(a7, file$1, 85, 10, 3108);
      attr(li7, "class", "svelte-17dqaf1");
      add_location(li7, file$1, 84, 8, 3093);
      attr(ul2, "id", "social");
      attr(ul2, "class", "flex flex-row my-3 svelte-17dqaf1");
      add_location(ul2, file$1, 70, 6, 2718);
      attr(a8, "class", "underline inline svelte-17dqaf1");
      attr(a8, "href", "/contact-us");
      add_location(a8, file$1, 101, 8, 3470);
      attr(div0, "class", "font-thin");
      add_location(div0, file$1, 99, 6, 3422);
      attr(div1, "class", "w-full");
      add_location(div1, file$1, 67, 4, 2650);
      attr(div2, "class", "content max-w-4xl mx-auto p-2 xs:p-6 md:p-8 svelte-17dqaf1");
      add_location(div2, file$1, 40, 2, 1872);
      attr(div3, "class", "text-xs text-center mt-2 xs:mt-6 md:mt-8");
      add_location(div3, file$1, 107, 2, 3585);
      attr(footer, "class", "px-4 py-3 bg-shades-dark text-shades-light items-center text-sm svelte-17dqaf1");
      attr(footer, "role", "contentinfo");
      add_location(footer, file$1, 36, 0, 1765);
    },
    m: function mount(target, anchor) {
      insert(target, footer, anchor);
      append(footer, div2);
      append(div2, ul0);
      append(ul0, li0);
      append(li0, a0);
      append(a0, t0);
      append(ul0, t1);
      append(ul0, li1);
      append(li1, a1);
      append(a1, t2);
      append(div2, t3);
      append(div2, ul1);
      append(ul1, li2);
      append(li2, a2);
      append(a2, t4);
      append(ul1, t5);
      append(ul1, li3);
      append(li3, a3);
      append(a3, t6);
      append(ul1, t7);
      append(ul1, li4);
      append(li4, a4);
      append(a4, t8);
      append(ul1, t9);
      append(ul1, li5);
      append(li5, a5);
      append(a5, t10);
      append(div2, t11);
      append(div2, div1);
      append(div1, strong);
      append(strong, t12);
      append(div1, t13);
      append(div1, ul2);
      append(ul2, li6);
      append(li6, a6);
      append(a6, img0);
      append(ul2, t14);
      append(ul2, li7);
      append(li7, a7);
      append(a7, img1);
      append(div1, t15);
      append(div1, div0);
      append(div0, t16);
      append(div0, a8);
      append(a8, t17);
      append(div0, t18);
      append(footer, t19);
      append(footer, div3);
      append(div3, t20);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach$1(footer);
      }
    }
  };
}

var Footer =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment$1, safe_not_equal, []);
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

var file$2 = "src/routes/_layout.svelte";

function create_fragment$2(ctx) {
  var t0, main, div, t1, a, t2, t3, t4, current;
  var header = new Header({
    $$inline: true
  });
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var footer = new Footer({
    $$inline: true
  });
  return {
    c: function create() {
      header.$$.fragment.c();
      t0 = space();
      main = element("main");
      div = element("div");
      t1 = text("Keycap is reader-supported. When you buy through links on our site, we may\n    earn affiliate commission.\n    ");
      a = element("a");
      t2 = text("Learn more");
      t3 = space();
      if (default_slot) default_slot.c();
      t4 = space();
      footer.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      header.$$.fragment.l(nodes);
      t0 = claim_text(nodes, "\n\n");
      main = claim_element(nodes, "MAIN", {
        id: true,
        class: true
      }, false);
      var main_nodes = children(main);
      div = claim_element(main_nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      t1 = claim_text(div_nodes, "Keycap is reader-supported. When you buy through links on our site, we may\n    earn affiliate commission.\n    ");
      a = claim_element(div_nodes, "A", {
        alt: true,
        href: true,
        class: true,
        "aria-label": true
      }, false);
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "Learn more");
      a_nodes.forEach(detach$1);
      div_nodes.forEach(detach$1);
      t3 = claim_text(main_nodes, "\n\n  ");
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach$1);
      t4 = claim_text(nodes, "\n\n");
      footer.$$.fragment.l(nodes);
      this.h();
    },
    h: function hydrate() {
      attr(a, "alt", "Learn more about our Affiliate Disclaimer");
      attr(a, "href", "/affiliate-disclaimer");
      attr(a, "class", "font-bold underline");
      attr(a, "aria-label", "Learn more about our Affiliate Disclaimer");
      add_location(a, file$2, 77, 4, 2852);
      attr(div, "class", "text-center text-brand text-xs p-6 mx-auto");
      add_location(div, file$2, 74, 2, 2681);
      attr(main, "id", "content");
      attr(main, "class", "relative max-w-3xl mx-auto min-h-screen pb-8 xs:pb-12 md:pb-16");
      add_location(main, file$2, 70, 0, 2583);
    },
    m: function mount(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      insert(target, main, anchor);
      append(main, div);
      append(div, t1);
      append(div, a);
      append(a, t2);
      append(main, t3);

      if (default_slot) {
        default_slot.m(main, null);
      }

      insert(target, t4, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(header, detaching);

      if (detaching) {
        detach$1(t0);
        detach$1(main);
      }

      if (default_slot) default_slot.d(detaching);

      if (detaching) {
        detach$1(t4);
      }

      destroy_component(footer, detaching);
    }
  };
}

function instance$1($$self, $$props, $$invalidate) {
  var segment = $$props.segment;
  var writable_props = ['segment'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
    if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
  };

  return {
    segment: segment,
    $$slots: $$slots,
    $$scope: $$scope
  };
}

var Layout =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$2, safe_not_equal, ["segment"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.segment === undefined && !('segment' in props)) {
      console.warn("<Layout> was created without expected prop 'segment'");
    }

    return _this;
  }

  _createClass(Layout, [{
    key: "segment",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Layout;
}(SvelteComponentDev);

var Error_1 = globals.Error;
var file$3 = "src/routes/_error.svelte"; // (16:0) {#if dev && error.stack}

function create_if_block(ctx) {
  var pre,
      t_value = ctx.error.stack + "",
      t;
  return {
    c: function create() {
      pre = element("pre");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      pre = claim_element(nodes, "PRE", {}, false);
      var pre_nodes = children(pre);
      t = claim_text(pre_nodes, t_value);
      pre_nodes.forEach(detach$1);
      this.h();
    },
    h: function hydrate() {
      add_location(pre, file$3, 16, 2, 289);
    },
    m: function mount(target, anchor) {
      insert(target, pre, anchor);
      append(pre, t);
    },
    p: function update(changed, ctx) {
      if (changed.error && t_value !== (t_value = ctx.error.stack + "")) {
        set_data(t, t_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach$1(pre);
      }
    }
  };
}

function create_fragment$3(ctx) {
  var title_value,
      t0,
      h1,
      t1,
      t2,
      p,
      t3_value = ctx.error.message + "",
      t3,
      t4,
      if_block_anchor;
  document.title = title_value = ctx.status;
  var if_block = ctx.dev && ctx.error.stack && create_if_block(ctx);
  return {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text(ctx.status);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {
        class: true
      }, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, ctx.status);
      h1_nodes.forEach(detach$1);
      t2 = claim_text(nodes, "\n\n");
      p = claim_element(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach$1);
      t4 = claim_text(nodes, "\n\n");
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr(h1, "class", "mb-8 font-bold text-5xl xs:text-6xl");
      add_location(h1, file$3, 11, 0, 162);
      attr(p, "class", "my-4");
      add_location(p, file$3, 13, 0, 225);
    },
    m: function mount(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, p, anchor);
      append(p, t3);
      insert(target, t4, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p: function update(changed, ctx) {
      if (changed.status && title_value !== (title_value = ctx.status)) {
        document.title = title_value;
      }

      if (changed.status) {
        set_data(t1, ctx.status);
      }

      if (changed.error && t3_value !== (t3_value = ctx.error.message + "")) {
        set_data(t3, t3_value);
      }

      if (ctx.dev && ctx.error.stack) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach$1(t0);
        detach$1(h1);
        detach$1(t2);
        detach$1(p);
        detach$1(t4);
      }

      if (if_block) if_block.d(detaching);

      if (detaching) {
        detach$1(if_block_anchor);
      }
    }
  };
}

function instance$2($$self, $$props, $$invalidate) {
  var status = $$props.status,
      error = $$props.error;
  var dev = "development" === 'development';
  var writable_props = ['status', 'error'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<Error> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('status' in $$props) $$invalidate('status', status = $$props.status);
    if ('error' in $$props) $$invalidate('error', error = $$props.error);
  };

  return {
    status: status,
    error: error,
    dev: dev
  };
}

var Error$1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Error, _SvelteComponentDev);

  function Error(options) {
    var _this;

    _classCallCheck(this, Error);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Error).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$3, safe_not_equal, ["status", "error"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.status === undefined && !('status' in props)) {
      console.warn("<Error> was created without expected prop 'status'");
    }

    if (ctx.error === undefined && !('error' in props)) {
      console.warn("<Error> was created without expected prop 'error'");
    }

    return _this;
  }

  _createClass(Error, [{
    key: "status",
    get: function get() {
      throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Error;
}(SvelteComponentDev);

var Error_1$1 = globals.Error;

function create_else_block(ctx) {
  var switch_instance_anchor, current;
  var switch_instance_spread_levels = [ctx.level1.props];
  var switch_value = ctx.level1.component;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props());
  }

  return {
    c: function create() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) switch_instance.$$.fragment.l(nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var switch_instance_changes = changed.level1 ? get_spread_update(switch_instance_spread_levels, [ctx.level1.props]) : {};

      if (switch_value !== (switch_value = ctx.level1.component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          switch_instance.$$.fragment.c();
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach$1(switch_instance_anchor);
      }

      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
} // (19:1) {#if error}


function create_if_block$1(ctx) {
  var current;
  var error_1 = new Error$1({
    props: {
      error: ctx.error,
      status: ctx.status
    },
    $$inline: true
  });
  return {
    c: function create() {
      error_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      error_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var error_1_changes = {};
      if (changed.error) error_1_changes.error = ctx.error;
      if (changed.status) error_1_changes.status = ctx.status;
      error_1.$set(error_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(error_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(error_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(error_1, detaching);
    }
  };
} // (18:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot(ctx) {
  var current_block_type_index, if_block, if_block_anchor, current;
  var if_block_creators = [create_if_block$1, create_else_block];
  var if_blocks = [];

  function select_block_type(changed, ctx) {
    if (ctx.error) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(null, ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(changed, ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(changed, ctx);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);

      if (detaching) {
        detach$1(if_block_anchor);
      }
    }
  };
}

function create_fragment$4(ctx) {
  var current;
  var layout_spread_levels = [{
    segment: ctx.segments[0]
  }, ctx.level0.props];
  var layout_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  var layout = new Layout({
    props: layout_props,
    $$inline: true
  });
  return {
    c: function create() {
      layout.$$.fragment.c();
    },
    l: function claim(nodes) {
      layout.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var layout_changes = changed.segments || changed.level0 ? get_spread_update(layout_spread_levels, [changed.segments && {
        segment: ctx.segments[0]
      }, changed.level0 && ctx.level0.props]) : {};
      if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      layout.$set(layout_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(layout, detaching);
    }
  };
}

function instance$3($$self, $$props, $$invalidate) {
  var stores = $$props.stores,
      error = $$props.error,
      status = $$props.status,
      segments = $$props.segments,
      level0 = $$props.level0,
      _$$props$level = $$props.level1,
      level1 = _$$props$level === void 0 ? null : _$$props$level;
  setContext(CONTEXT_KEY, stores);
  var writable_props = ['stores', 'error', 'status', 'segments', 'level0', 'level1'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
    if ('error' in $$props) $$invalidate('error', error = $$props.error);
    if ('status' in $$props) $$invalidate('status', status = $$props.status);
    if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
    if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
    if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
  };

  return {
    stores: stores,
    error: error,
    status: status,
    segments: segments,
    level0: level0,
    level1: level1
  };
}

var App =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(App, _SvelteComponentDev);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$4, safe_not_equal, ["stores", "error", "status", "segments", "level0", "level1"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.stores === undefined && !('stores' in props)) {
      console.warn("<App> was created without expected prop 'stores'");
    }

    if (ctx.error === undefined && !('error' in props)) {
      console.warn("<App> was created without expected prop 'error'");
    }

    if (ctx.status === undefined && !('status' in props)) {
      console.warn("<App> was created without expected prop 'status'");
    }

    if (ctx.segments === undefined && !('segments' in props)) {
      console.warn("<App> was created without expected prop 'segments'");
    }

    if (ctx.level0 === undefined && !('level0' in props)) {
      console.warn("<App> was created without expected prop 'level0'");
    }

    return _this;
  }

  _createClass(App, [{
    key: "stores",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "status",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "segments",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level0",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level1",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return App;
}(SvelteComponentDev);

// This file is generated by Sapper — do not edit it!
var ignore = [/^\/recent.json$/, /^\/reviews.json$/, /^\/reviews\/([^\/]+?).json$/, /^\/rss.xml$/, /^\/learn.json$/, /^\/learn\/([^\/]+?).json$/];
var components = [{
  js: function js() {
    return import('./index.d7c040ef.js');
  },
  css: ["legacy/index.d7c040ef.css","legacy/ArticleList.ad1023eb.css"]
}, {
  js: function js() {
    return import('./affiliate-disclaimer.81ee2c66.js');
  },
  css: ["legacy/affiliate-disclaimer.81ee2c66.css"]
}, {
  js: function js() {
    return import('./privacy-policy.358e9d66.js');
  },
  css: ["legacy/privacy-policy.358e9d66.css"]
}, {
  js: function js() {
    return import('./data-requests.38eeb1f6.js');
  },
  css: []
}, {
  js: function js() {
    return import('./terms-of-use.97de883b.js');
  },
  css: ["legacy/terms-of-use.97de883b.css"]
}, {
  js: function js() {
    return import('./contact-us.199cd28d.js');
  },
  css: []
}, {
  js: function js() {
    return import('./partners.5d30f049.js');
  },
  css: ["legacy/partners.5d30f049.css"]
}, {
  js: function js() {
    return import('./index.cd483e27.js');
  },
  css: ["legacy/ArticleList.ad1023eb.css"]
}, {
  js: function js() {
    return import('./[slug].fccfb364.js');
  },
  css: ["legacy/Article.59677227.css"]
}, {
  js: function js() {
    return import('./about.24fbf68e.js');
  },
  css: ["legacy/about.24fbf68e.css"]
}, {
  js: function js() {
    return import('./index.6f0c04fd.js');
  },
  css: ["legacy/ArticleList.ad1023eb.css"]
}, {
  js: function js() {
    return import('./[slug].eba9d563.js');
  },
  css: ["legacy/Article.59677227.css"]
}];
var routes = function (d) {
  return [{
    // index.svelte
    pattern: /^\/$/,
    parts: [{
      i: 0
    }]
  }, {
    // affiliate-disclaimer.svelte
    pattern: /^\/affiliate-disclaimer\/?$/,
    parts: [{
      i: 1
    }]
  }, {
    // privacy-policy.svelte
    pattern: /^\/privacy-policy\/?$/,
    parts: [{
      i: 2
    }]
  }, {
    // data-requests.svelte
    pattern: /^\/data-requests\/?$/,
    parts: [{
      i: 3
    }]
  }, {
    // terms-of-use.svelte
    pattern: /^\/terms-of-use\/?$/,
    parts: [{
      i: 4
    }]
  }, {
    // contact-us.svelte
    pattern: /^\/contact-us\/?$/,
    parts: [{
      i: 5
    }]
  }, {
    // partners.svelte
    pattern: /^\/partners\/?$/,
    parts: [{
      i: 6
    }]
  }, {
    // reviews/index.svelte
    pattern: /^\/reviews\/?$/,
    parts: [{
      i: 7
    }]
  }, {
    // reviews/[slug].svelte
    pattern: /^\/reviews\/([^\/]+?)\/?$/,
    parts: [null, {
      i: 8,
      params: function params(match) {
        return {
          slug: d(match[1])
        };
      }
    }]
  }, {
    // about.svelte
    pattern: /^\/about\/?$/,
    parts: [{
      i: 9
    }]
  }, {
    // learn/index.svelte
    pattern: /^\/learn\/?$/,
    parts: [{
      i: 10
    }]
  }, {
    // learn/[slug].svelte
    pattern: /^\/learn\/([^\/]+?)\/?$/,
    parts: [null, {
      i: 11,
      params: function params(match) {
        return {
          slug: d(match[1])
        };
      }
    }]
  }];
}(decodeURIComponent);

function goto(href) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    replaceState: false
  };
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null).then(function () {});
  }

  location.href = href;
  return new Promise(function (f) {}); // never resolves
}

var initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
var ready = false;
var root_component;
var current_token;
var root_preloaded;
var current_branch = [];
var current_query = '{}';
var stores = {
  page: writable({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
var $session;
var session_dirty;
stores.session.subscribe(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(value) {
    var target, token, _ref2, redirect, props, branch;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $session = value;

            if (ready) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            session_dirty = true;
            target = select_target(new URL(location.href));
            token = current_token = {};
            _context.next = 8;
            return hydrate_target(target);

          case 8:
            _ref2 = _context.sent;
            redirect = _ref2.redirect;
            props = _ref2.props;
            branch = _ref2.branch;

            if (!(token !== current_token)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return");

          case 14:
            _context.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var prefetching = null;

function set_prefetching(href, promise) {
  prefetching = {
    href: href,
    promise: promise
  };
}

var target;

function set_target(element) {
  target = element;
}

var uid = 1;

function set_uid(n) {
  uid = n;
}

var cid;

function set_cid(n) {
  cid = n;
}

var _history = typeof history !== 'undefined' ? history : {
  pushState: function pushState(state, title, href) {},
  replaceState: function replaceState(state, title, href) {},
  scrollRestoration: ''
};

var scroll_history = {};

function extract_query(search) {
  var query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(function (searchParam) {
      var _$exec = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' '))),
          _$exec2 = _slicedToArray(_$exec, 3),
          key = _$exec2[1],
          _$exec2$ = _$exec2[2],
          value = _$exec2$ === void 0 ? '' : _$exec2$;

      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (_typeof(query[key]) === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(initial_data.baseUrl)) return null;
  var path = url.pathname.slice(initial_data.baseUrl.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(function (pattern) {
    return pattern.test(path);
  })) return;

  for (var i = 0; i < routes.length; i += 1) {
    var route = routes[i];
    var match = route.pattern.exec(path);

    if (match) {
      var query = extract_query(url.search);
      var part = route.parts[route.parts.length - 1];
      var params = part.params ? part.params(match) : {};
      var page = {
        host: location.host,
        path: path,
        query: query,
        params: params
      };
      return {
        href: url.href,
        route: route,
        match: match,
        page: page
      };
    }
  }
}

function handle_error(url) {
  var _location = location,
      host = _location.host,
      pathname = _location.pathname,
      search = _location.search;
  var session = initial_data.session,
      preloaded = initial_data.preloaded,
      status = initial_data.status,
      error = initial_data.error;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  var props = {
    error: error,
    status: status,
    session: session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status: status,
        error: error
      },
      component: Error$1
    },
    segments: preloaded
  };
  var query = extract_query(search);
  render(null, [], props, {
    host: host,
    path: pathname,
    query: query,
    params: {}
  });
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function navigate(_x2, _x3, _x4, _x5) {
  return _navigate.apply(this, arguments);
}

function _navigate() {
  _navigate = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2(target, id, noscroll, hash) {
    var current_scroll, loaded, token, _ref3, redirect, props, branch, scroll, deep_linked;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id) {
              // popstate or initial navigation
              cid = id;
            } else {
              current_scroll = scroll_state(); // clicked on a link. preserve scroll state

              scroll_history[cid] = current_scroll;
              id = cid = ++uid;
              scroll_history[cid] = noscroll ? current_scroll : {
                x: 0,
                y: 0
              };
            }

            cid = id;
            if (root_component) stores.preloading.set(true);
            loaded = prefetching && prefetching.href === target.href ? prefetching.promise : hydrate_target(target);
            prefetching = null;
            token = current_token = {};
            _context2.next = 8;
            return loaded;

          case 8:
            _ref3 = _context2.sent;
            redirect = _ref3.redirect;
            props = _ref3.props;
            branch = _ref3.branch;

            if (!(token !== current_token)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return");

          case 14:
            _context2.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
            if (document.activeElement) document.activeElement.blur();

            if (!noscroll) {
              scroll = scroll_history[id];

              if (hash) {
                // scroll is an element id (from a hash), we need to compute y.
                deep_linked = document.getElementById(hash.slice(1));

                if (deep_linked) {
                  scroll = {
                    x: 0,
                    y: deep_linked.getBoundingClientRect().top
                  };
                }
              }

              scroll_history[cid] = scroll;
              if (scroll) scrollTo(scroll.x, scroll.y);
            }

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _navigate.apply(this, arguments);
}

function render(_x6, _x7, _x8, _x9) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3(redirect, branch, props, page) {
    var _start, end;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!redirect) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", goto(redirect.location, {
              replaceState: true
            }));

          case 2:
            stores.page.set(page);
            stores.preloading.set(false);

            if (!root_component) {
              _context3.next = 8;
              break;
            }

            root_component.$set(props);
            _context3.next = 17;
            break;

          case 8:
            props.stores = {
              page: {
                subscribe: stores.page.subscribe
              },
              preloading: {
                subscribe: stores.preloading.subscribe
              },
              session: stores.session
            };
            _context3.next = 11;
            return root_preloaded;

          case 11:
            _context3.t0 = _context3.sent;
            props.level0 = {
              props: _context3.t0
            };
            // first load — remove SSR'd <head> contents
            _start = document.querySelector('#sapper-head-start');
            end = document.querySelector('#sapper-head-end');

            if (_start && end) {
              while (_start.nextSibling !== end) {
                detach(_start.nextSibling);
              }

              detach(_start);
              detach(end);
            }

            root_component = new App({
              target: target,
              props: props,
              hydrate: true
            });

          case 17:
            current_branch = branch;
            current_query = JSON.stringify(page.query);
            ready = true;
            session_dirty = false;

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _render.apply(this, arguments);
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  var previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(_x10) {
  return _hydrate_target.apply(this, arguments);
}

function _hydrate_target() {
  _hydrate_target = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee5(target) {
    var route, page, segments, _redirect, props, preload_context, branch, l, stringified_query, match, segment_dirty;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            route = target.route, page = target.page;
            segments = page.path.split('/').filter(Boolean);
            _redirect = null;
            props = {
              error: null,
              status: 200,
              segments: [segments[0]]
            };
            preload_context = {
              fetch: function (_fetch) {
                function fetch(_x11, _x12) {
                  return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                  return _fetch.toString();
                };

                return fetch;
              }(function (url, opts) {
                return fetch(url, opts);
              }),
              redirect: function redirect(statusCode, location) {
                if (_redirect && (_redirect.statusCode !== statusCode || _redirect.location !== location)) {
                  throw new Error("Conflicting redirects");
                }

                _redirect = {
                  statusCode: statusCode,
                  location: location
                };
              },
              error: function error(status, _error) {
                props.error = typeof _error === 'string' ? new Error(_error) : _error;
                props.status = status;
              }
            };

            if (!root_preloaded) {
              root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
                host: page.host,
                path: page.path,
                query: page.query,
                params: {}
              }, $session);
            }

            l = 1;
            _context5.prev = 7;
            stringified_query = JSON.stringify(page.query);
            match = route.pattern.exec(page.path);
            segment_dirty = false;
            _context5.next = 13;
            return Promise.all(route.parts.map(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee4(part, i) {
                var segment, j, _ref5, component, preload, preloaded;

                return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        segment = segments[i];
                        if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
                        props.segments[l] = segments[i + 1]; // TODO make this less confusing

                        if (part) {
                          _context4.next = 5;
                          break;
                        }

                        return _context4.abrupt("return", {
                          segment: segment
                        });

                      case 5:
                        j = l++;

                        if (!(!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i)) {
                          _context4.next = 8;
                          break;
                        }

                        return _context4.abrupt("return", current_branch[i]);

                      case 8:
                        segment_dirty = false;
                        _context4.next = 11;
                        return load_component(components[part.i]);

                      case 11:
                        _ref5 = _context4.sent;
                        component = _ref5.default;
                        preload = _ref5.preload;

                        if (!(ready || !initial_data.preloaded[i + 1])) {
                          _context4.next = 25;
                          break;
                        }

                        if (!preload) {
                          _context4.next = 21;
                          break;
                        }

                        _context4.next = 18;
                        return preload.call(preload_context, {
                          host: page.host,
                          path: page.path,
                          query: page.query,
                          params: part.params ? part.params(target.match) : {}
                        }, $session);

                      case 18:
                        _context4.t0 = _context4.sent;
                        _context4.next = 22;
                        break;

                      case 21:
                        _context4.t0 = {};

                      case 22:
                        preloaded = _context4.t0;
                        _context4.next = 26;
                        break;

                      case 25:
                        preloaded = initial_data.preloaded[i + 1];

                      case 26:
                        return _context4.abrupt("return", props["level".concat(j)] = {
                          component: component,
                          props: preloaded,
                          segment: segment,
                          match: match,
                          part: part.i
                        });

                      case 27:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x13, _x14) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 13:
            branch = _context5.sent;
            _context5.next = 21;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](7);
            props.error = _context5.t0;
            props.status = 500;
            branch = [];

          case 21:
            return _context5.abrupt("return", {
              redirect: _redirect,
              props: props,
              branch: branch
            });

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 16]]);
  }));
  return _hydrate_target.apply(this, arguments);
}

function load_css(chunk) {
  var href = "client/".concat(chunk);
  if (document.querySelector("link[href=\"".concat(href, "\"]"))) return;
  return new Promise(function (fulfil, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    link.onload = function () {
      return fulfil();
    };

    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function load_component(component) {
  // TODO this is temporary — once placeholders are
  // always rewritten, scratch the ternary
  var promises = typeof component.css === 'string' ? [] : component.css.map(load_css);
  promises.unshift(component.js());
  return Promise.all(promises).then(function (values) {
    return values[0];
  });
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function prefetch(href) {
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      set_prefetching(href, hydrate_target(target));
    }

    return prefetching.promise;
  }
}

function start(opts) {
  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  }

  set_target(opts.target);
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate); // prefetch

  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
  return Promise.resolve().then(function () {
    var _location2 = location,
        hash = _location2.hash,
        href = _location2.href;

    _history.replaceState({
      id: uid
    }, '', href);

    var url = new URL(location.href);
    if (initial_data.error) return handle_error();
    var target = select_target(url);
    if (target) return navigate(target, uid, true, hash);
  });
}

var mousemove_timeout;

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(function () {
    trigger_prefetch(event);
  }, 20);
}

function trigger_prefetch(event) {
  var a = find_anchor(event.target);
  if (!a || a.rel !== 'prefetch') return;
  prefetch(a.href);
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  var a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  var svg = _typeof(a.href) === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  var href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  var url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  var target = select_target(url);

  if (target) {
    var noscroll = a.hasAttribute('sapper-noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') {
    node = node.parentNode;
  } // SVG <a> elements have a lowercase name


  return node;
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    var url = new URL(location.href);

    var _target = select_target(url);

    if (_target) {
      navigate(_target, event.state.id);
    } else {
      location.href = location.href;
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

var stores$1 = function stores$1() {
  return getContext(CONTEXT_KEY);
};

start({
  target: document.querySelector('#sapper')
});
