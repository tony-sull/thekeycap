import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, u as _createClass, S as SvelteComponentDev, x as mount_component, A as transition_in, B as transition_out, C as destroy_component } from './index.b5be72ab.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator.0aaa4fbd.js';
import './SEO.0f881c7c.js';
import './fecha.148884dc.js';
import { A as Article } from './Article.59677227.js';

function create_fragment(ctx) {
  var current;
  var article = new Article({
    props: {
      post: ctx.post,
      url: "learn"
    },
    $$inline: true
  });
  return {
    c: function create() {
      article.$$.fragment.c();
    },
    l: function claim(nodes) {
      article.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(article, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var article_changes = {};
      if (changed.post) article_changes.post = ctx.post;
      article.$set(article_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(article.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(article.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(article, detaching);
    }
  };
} // eslint-disable-next-line consistent-return


function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref) {
    var params, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref.params;
            _context.next = 3;
            return this.fetch("learn/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 9:
            this.error(res.status, data.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var writable_props = ['post'];
  Object.keys($$props).forEach(function (key) {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn("<Slug> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ('post' in $$props) $$invalidate('post', post = $$props.post);
  };

  return {
    post: post
  };
}

var Slug =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Slug, _SvelteComponentDev);

  function Slug(options) {
    var _this;

    _classCallCheck(this, Slug);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slug).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["post"]);
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.post === undefined && !('post' in props)) {
      console.warn("<Slug> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(Slug, [{
    key: "post",
    get: function get() {
      throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Slug;
}(SvelteComponentDev);

export default Slug;
export { preload };
