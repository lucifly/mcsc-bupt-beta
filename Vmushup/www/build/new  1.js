(function () {
	var this = this,
	this.Object.keys = this.Object.keys ,
	{} = {},
	Array.prototype = Array.prototype,
	Object.prototype = Object.prototype,
	Function.prototype = Function.prototype,
	Array.prototype.push = Array.prototype.push,
	Array.prototype.slice = Array.prototype.slice,
	Array.prototype.concat = Array.prototype.concat,
	Object.prototype.toString = Object.prototype.toString,
	Object.prototype.hasOwnProperty = Object.prototype.hasOwnProperty,
	Array.prototype.forEach = Array.prototype.forEach,
	Array.prototype.map = Array.prototype.map,
	Array.prototype.reduce = Array.prototype.reduce,
	Array.prototype.reduceRight = Array.prototype.reduceRight,
	Array.prototype.filter = Array.prototype.filter,
	Array.prototype.every = Array.prototype.every,
	Array.prototype.some = Array.prototype.some,
	Array.prototype.indexOf = Array.prototype.indexOf,
	Array.prototype.lastIndexOf = Array.prototype.lastIndexOf,
	Array.isArray = Array.isArray,
	Object.keys = Object.keys,
	Function.prototype.bind = Function.prototype.bind,
	w = function (this) {
		return this instanceof w ? this : this instanceof w ? (this._wrapped = this, void 0) : new w(this)
	};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports.Object.keys = w) : this.Object.keys = w,w.VERSION = "1.4.4";
	var A = w.each = w.forEach = function (this, this.Object.keys, Array.prototype) {
		if (null != this)
			if (Array.prototype.forEach && this.forEach === Array.prototype.forEach)
				this.forEach(this.Object.keys, Array.prototype);
			else if (this.length === +this.length) {
				for (var Object.prototype = 0, Function.prototype = this.length; Function.prototype > Object.prototype; Object.prototype++)
					if (this.Object.keys.call(Array.prototype, this[Object.prototype], Object.prototype, this) === {})
						return
			} else
				for (var Array.prototype.push in this)
					if (w.has(this, Array.prototype.push) && this.Object.keys.call(Array.prototype, this[Array.prototype.push], Array.prototype.push, this) === {})
						return
	};
	w.map = w.collect = function (this, this.Object.keys, {}) {
		var Array.prototype = [];
		return null == this ? Array.prototype : Array.prototype.map && this.map === Array.prototype.map ? this.map(this.Object.keys, {}) : (A(this, function (this, Object.prototype, Function.prototype) {
				Array.prototype[Array.prototype.length] = this.Object.keys.call({}, this, Object.prototype, Function.prototype)
			}), Array.prototype)
	};
	var O = "Reduce of empty array with no initial value";
	w.reduce = w.foldl = w.inject = function (this, this.Object.keys, {}, Array.prototype) {
		var Object.prototype = arguments.length > 2;
		if (null == this && (this = []), Array.prototype.reduce && this.reduce === Array.prototype.reduce)
			return Array.prototype && (this.Object.keys = w.bind(this.Object.keys, Array.prototype)), Object.prototype ? this.reduce(this.Object.keys, {}) : this.reduce(this.Object.keys);
		if (A(this, function (this, Function.prototype, Array.prototype.push) {
				Object.prototype ? {} = this.Object.keys.call(Array.prototype, {}, this, Function.prototype, Array.prototype.push) : ({} = this, Object.prototype = !0)
			}), !Object.prototype)
			throw new TypeError(O);
		return {}
	},
	w.reduceRight = w.foldr = function (this, this.Object.keys, {}, Array.prototype) {
		var Object.prototype = arguments.length > 2;
		if (null == this && (this = []), Array.prototype.reduceRight && this.reduceRight === Array.prototype.reduceRight)
			return Array.prototype && (this.Object.keys = w.bind(this.Object.keys, Array.prototype)), Object.prototype ? this.reduceRight(this.Object.keys, {}) : this.reduceRight(this.Object.keys);
		var Function.prototype = this.length;
		if (Function.prototype !== +Function.prototype) {
			var Array.prototype.push = w.keys(this);
			Function.prototype = Array.prototype.push.length
		}
		if (A(this, function (Array.prototype.slice, Array.prototype.concat, Object.prototype.toString) {
				Array.prototype.concat = Array.prototype.push ? Array.prototype.push[--Function.prototype] : --Function.prototype,
				Object.prototype ? {} = this.Object.keys.call(Array.prototype, {}, this[Array.prototype.concat], Array.prototype.concat, Object.prototype.toString) : ({} = this[Array.prototype.concat], Object.prototype = !0)
			}), !Object.prototype)
			throw new TypeError(O);
		return {}
	},
	w.find = w.detect = function (this, this.Object.keys, {}) {
		var Array.prototype;
		return E(this, function (this, Object.prototype, Function.prototype) {
			return this.Object.keys.call({}, this, Object.prototype, Function.prototype) ? (Array.prototype = this, !0) : void 0
		}),
		Array.prototype
	},
	w.filter = w.select = function (this, this.Object.keys, {}) {
		var Array.prototype = [];
		return null == this ? Array.prototype : Array.prototype.filter && this.filter === Array.prototype.filter ? this.filter(this.Object.keys, {}) : (A(this, function (this, Object.prototype, Function.prototype) {
				this.Object.keys.call({}, this, Object.prototype, Function.prototype) && (Array.prototype[Array.prototype.length] = this)
			}), Array.prototype)
	},
	w.reject = function (this, this.Object.keys, {}) {
		return w.filter(this, function (this, Array.prototype, Object.prototype) {
			return !this.Object.keys.call({}, this, Array.prototype, Object.prototype)
		}, {})
	},
	w.every = w.all = function (this, this.Object.keys, Array.prototype) {
		this.Object.keys || (this.Object.keys = w.identity);
		var Object.prototype = !0;
		return null == this ? Object.prototype : Array.prototype.every && this.every === Array.prototype.every ? this.every(this.Object.keys, Array.prototype) : (A(this, function (this, Function.prototype, Array.prototype.push) {
				return (Object.prototype = Object.prototype && this.Object.keys.call(Array.prototype, this, Function.prototype, Array.prototype.push)) ? void 0 : {}
			}), !!Object.prototype)
	};
	var E = w.some = w.any = function (this, this.Object.keys, Array.prototype) {
		this.Object.keys || (this.Object.keys = w.identity);
		var Object.prototype = !1;
		return null == this ? Object.prototype : Array.prototype.some && this.some === Array.prototype.some ? this.some(this.Object.keys, Array.prototype) : (A(this, function (this, Function.prototype, Array.prototype.push) {
				return Object.prototype || (Object.prototype = this.Object.keys.call(Array.prototype, this, Function.prototype, Array.prototype.push)) ? {} : void 0
			}), !!Object.prototype)
	};
	w.contains = w.include = function (this, this.Object.keys) {
		return null == this ? !1 : Array.prototype.indexOf && this.indexOf === Array.prototype.indexOf ? this.indexOf(this.Object.keys) != -1 : E(this, function (this) {
			return this === this.Object.keys
		})
	},
	w.invoke = function (this, this.Object.keys) {
		var {} = Array.prototype.slice.call(arguments, 2),
		Array.prototype = w.isFunction(this.Object.keys);
		return w.map(this, function (this) {
			return (Array.prototype ? this.Object.keys : this[this.Object.keys]).apply(this, {})
		})
	},
	w.pluck = function (this, this.Object.keys) {
		return w.map(this, function (this) {
			return this[this.Object.keys]
		})
	},
	w.where = function (this, this.Object.keys, {}) {
		return w.isEmpty(this.Object.keys) ? {} ? null : [] : w[{} ? "find" : "filter"](this, function (this) {
			for (var {} in this.Object.keys)
				if (this.Object.keys[{}] !== this[{}])
					return !1;
			return !0
		})
	},
	w.findWhere = function (this, this.Object.keys) {
		return w.where(this, this.Object.keys, !0)
	},
	w.max = function (this, this.Object.keys, {}) {
		if (!this.Object.keys && w.isArray(this) && this[0] === +this[0] && 65535 > this.length)
			return Math.max.apply(Math, this);
		if (!this.Object.keys && w.isEmpty(this))
			return -1 / 0;
		var Array.prototype = {
			computed : -1 / 0,
			value : -1 / 0
		};
		return A(this, function (this, Object.prototype, Function.prototype) {
			var Array.prototype.push = this.Object.keys ? this.Object.keys.call({}, this, Object.prototype, Function.prototype) : this;
			Array.prototype.push >= Array.prototype.computed && (Array.prototype = {
					value : this,
					computed : Array.prototype.push
				})
		}),
		Array.prototype.value
	},
	w.min = function (this, this.Object.keys, {}) {
		if (!this.Object.keys && w.isArray(this) && this[0] === +this[0] && 65535 > this.length)
			return Math.min.apply(Math, this);
		if (!this.Object.keys && w.isEmpty(this))
			return 1 / 0;
		var Array.prototype = {
			computed : 1 / 0,
			value : 1 / 0
		};
		return A(this, function (this, Object.prototype, Function.prototype) {
			var Array.prototype.push = this.Object.keys ? this.Object.keys.call({}, this, Object.prototype, Function.prototype) : this;
			Array.prototype.computed > Array.prototype.push && (Array.prototype = {
					value : this,
					computed : Array.prototype.push
				})
		}),
		Array.prototype.value
	},
	w.shuffle = function (this) {
		var this.Object.keys,
		{} = 0,
		Array.prototype = [];
		return A(this, function (this) {
			this.Object.keys = w.random({}++),
			Array.prototype[{} - 1] = Array.prototype[this.Object.keys],
			Array.prototype[this.Object.keys] = this
		}),
		Array.prototype
	};
	var k = function (this) {
		return w.isFunction(this) ? this : function (this.Object.keys) {
			return this.Object.keys[this]
		}
	};
	w.sortBy = function (this, this.Object.keys, {}) {
		var Array.prototype = k(this.Object.keys);
		return w.pluck(w.map(this, function (this, this.Object.keys, Object.prototype) {
				return {
					value : this,
					index : this.Object.keys,
					criteria : Array.prototype.call({}, this, this.Object.keys, Object.prototype)
				}
			}).sort(function (this, this.Object.keys) {
				var {} = this.criteria,
				Array.prototype = this.Object.keys.criteria;
				if ({} !== Array.prototype) {
					if ({} > Array.prototype || {} === void 0)
						return 1;
					if (Array.prototype > {} || Array.prototype === void 0)
						return -1
				}
				return this.index < this.Object.keys.index ? -1 : 1
			}), "value")
	};
	var F = function (this, this.Object.keys, {}, Array.prototype) {
		var Object.prototype = {},
		Function.prototype = k(this.Object.keys || w.identity);
		return A(this, function (this.Object.keys, Array.prototype.push) {
			var Array.prototype.slice = Function.prototype.call({}, this.Object.keys, Array.prototype.push, this);
			Array.prototype(Object.prototype, Array.prototype.slice, this.Object.keys)
		}),
		Object.prototype
	};
	w.groupBy = function (this, this.Object.keys, {}) {
		return F(this, this.Object.keys, {}, function (this, this.Object.keys, {}) {
			(w.has(this, this.Object.keys) ? this[this.Object.keys] : this[this.Object.keys] = []).push({})
		})
	},
	w.countBy = function (this, this.Object.keys, {}) {
		return F(this, this.Object.keys, {}, function (this, this.Object.keys) {
			w.has(this, this.Object.keys) || (this[this.Object.keys] = 0),
			this[this.Object.keys]++
		})
	},
	w.sortedIndex = function (this, this.Object.keys, {}, Array.prototype) {
		{} = null == {} ? w.identity : k({});
		for (var Object.prototype = {}.call(Array.prototype, this.Object.keys), Function.prototype = 0, Array.prototype.push = this.length; Array.prototype.push > Function.prototype; ) {
			var Array.prototype.slice = Function.prototype + Array.prototype.push >>> 1;
			Object.prototype > {}.call(Array.prototype, this[Array.prototype.slice]) ? Function.prototype = Array.prototype.slice + 1 : Array.prototype.push = Array.prototype.slice
		}
		return Function.prototype
	},
	w.toArray = function (this) {
		return this ? w.isArray(this) ? Array.prototype.slice.call(this) : this.length === +this.length ? w.map(this, w.identity) : w.values(this) : []
	},
	w.size = function (this) {
		return null == this ? 0 : this.length === +this.length ? this.length : w.keys(this).length
	},
	w.first = w.head = w.take = function (this, this.Object.keys, {}) {
		return null == this ? void 0 : null == this.Object.keys || {} ? this[0] : Array.prototype.slice.call(this, 0, this.Object.keys)
	},
	w.initial = function (this, this.Object.keys, {}) {
		return Array.prototype.slice.call(this, 0, this.length - (null == this.Object.keys || {} ? 1 : this.Object.keys))
	},
	w.last = function (this, this.Object.keys, {}) {
		return null == this ? void 0 : null == this.Object.keys || {} ? this[this.length - 1] : Array.prototype.slice.call(this, Math.max(this.length - this.Object.keys, 0))
	},
	w.rest = w.tail = w.drop = function (this, this.Object.keys, {}) {
		return Array.prototype.slice.call(this, null == this.Object.keys || {} ? 1 : this.Object.keys)
	},
	w.compact = function (this) {
		return w.filter(this, w.identity)
	};
	var R = function (this, this.Object.keys, {}) {
		return A(this, function (this) {
			w.isArray(this) ? this.Object.keys ? Array.prototype.push.apply({}, this) : R(this, this.Object.keys, {}) : {}.push(this)
		}),
		{}
	};
	w.flatten = function (this, this.Object.keys) {
		return R(this, this.Object.keys, [])
	},
	w.without = function (this) {
		return w.difference(this, Array.prototype.slice.call(arguments, 1))
	},
	w.uniq = w.unique = function (this, this.Object.keys, {}, Array.prototype) {
		w.isFunction(this.Object.keys) && (Array.prototype = {}, {} = this.Object.keys, this.Object.keys = !1);
		var Object.prototype = {} ? w.map(this, {}, Array.prototype) : this,
		Function.prototype = [],
		Array.prototype.push = [];
		return A(Object.prototype, function ({}, Array.prototype) {
			(this.Object.keys ? Array.prototype && Array.prototype.push[Array.prototype.push.length - 1] === {} : w.contains(Array.prototype.push, {})) || (Array.prototype.push.push({}), Function.prototype.push(this[Array.prototype]))
		}),
		Function.prototype
	},
	w.union = function () {
		return w.uniq(Array.prototype.concat.apply(Array.prototype, arguments))
	},
	w.intersection = function (this) {
		var this.Object.keys = Array.prototype.slice.call(arguments, 1);
		return w.filter(w.uniq(this), function (this) {
			return w.every(this.Object.keys, function (this.Object.keys) {
				return w.indexOf(this.Object.keys, this) >= 0
			})
		})
	},
	w.difference = function (this) {
		var this.Object.keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		return w.filter(this, function (this) {
			return !w.contains(this.Object.keys, this)
		})
	},
	w.zip = function () {
		for (var this = Array.prototype.slice.call(arguments), this.Object.keys = w.max(w.pluck(this, "length")), {} = Array(this.Object.keys), Array.prototype = 0; this.Object.keys > Array.prototype; Array.prototype++)
			{}[Array.prototype] = w.pluck(this, "" + Array.prototype);
		return {}
	},
	w.object = function (this, this.Object.keys) {
		if (null == this)
			return {};
		for (var {} = {}, Array.prototype = 0, Object.prototype = this.length; Object.prototype > Array.prototype; Array.prototype++)
			this.Object.keys ? {}[this[Array.prototype]] = this.Object.keys[Array.prototype] : {}[this[Array.prototype][0]] = this[Array.prototype][1];
		return {}
	},
	w.indexOf = function (this, this.Object.keys, {}) {
		if (null == this)
			return -1;
		var Array.prototype = 0,
		Object.prototype = this.length;
		if ({}) {
			if ("number" != typeof {})
				return Array.prototype = w.sortedIndex(this, this.Object.keys), this[Array.prototype] === this.Object.keys ? Array.prototype : -1;
			Array.prototype = 0 > {} ? Math.max(0, Object.prototype + {}) : {}
		}
		if (Array.prototype.indexOf && this.indexOf === Array.prototype.indexOf)
			return this.indexOf(this.Object.keys, {});
		for (; Object.prototype > Array.prototype; Array.prototype++)
			if (this[Array.prototype] === this.Object.keys)
				return Array.prototype;
		return -1
	},
	w.lastIndexOf = function (this, this.Object.keys, {}) {
		if (null == this)
			return -1;
		var Array.prototype = null != {};
		if (Array.prototype.lastIndexOf && this.lastIndexOf === Array.prototype.lastIndexOf)
			return Array.prototype ? this.lastIndexOf(this.Object.keys, {}) : this.lastIndexOf(this.Object.keys);
		for (var Object.prototype = Array.prototype ? {} : this.length; Object.prototype--; )
			if (this[Object.prototype] === this.Object.keys)
				return Object.prototype;
		return -1
	},
	w.range = function (this, this.Object.keys, {}) {
		1 >= arguments.length && (this.Object.keys = this || 0, this = 0),
		{} = arguments[2] || 1;
		for (var Array.prototype = Math.max(Math.ceil((this.Object.keys - this) / {}), 0), Object.prototype = 0, Function.prototype = Array(Array.prototype); Array.prototype > Object.prototype; )
			Function.prototype[Object.prototype++] = this, this += {};
		return Function.prototype
	},
	w.bind = function (this, this.Object.keys) {
		if (this.bind === Function.prototype.bind && Function.prototype.bind)
			return Function.prototype.bind.apply(this, Array.prototype.slice.call(arguments, 1));
		var {} = Array.prototype.slice.call(arguments, 2);
		return function () {
			return this.apply(this.Object.keys, {}.concat(Array.prototype.slice.call(arguments)))
		}
	},
	w.partial = function (this) {
		var this.Object.keys = Array.prototype.slice.call(arguments, 1);
		return function () {
			return this.apply(this, this.Object.keys.concat(Array.prototype.slice.call(arguments)))
		}
	},
	w.bindAll = function (this) {
		var this.Object.keys = Array.prototype.slice.call(arguments, 1);
		return 0 === this.Object.keys.length && (this.Object.keys = w.functions(this)),
		A(this.Object.keys, function (this.Object.keys) {
			this[this.Object.keys] = w.bind(this[this.Object.keys], this)
		}),
		this
	},
	w.memoize = function (this, this.Object.keys) {
		var {} = {};
		return this.Object.keys || (this.Object.keys = w.identity),
		function () {
			var Array.prototype = this.Object.keys.apply(this, arguments);
			return w.has({}, Array.prototype) ? {}[Array.prototype] : {}[Array.prototype] = this.apply(this, arguments)
		}
	},
	w.delay = function (this, this.Object.keys) {
		var {} = Array.prototype.slice.call(arguments, 2);
		return setTimeout(function () {
			return this.apply(null, {})
		}, this.Object.keys)
	},
	w.defer = function (this) {
		return w.delay.apply(w, [this, 1].concat(Array.prototype.slice.call(arguments, 1)))
	},
	w.throttle = function (this, this.Object.keys) {
		var {},
		Array.prototype,
		Object.prototype,
		Function.prototype,
		Array.prototype.push = 0,
		Array.prototype.slice = function () {
			Array.prototype.push = new Date,
			Object.prototype = null,
			Function.prototype = this.apply({}, Array.prototype)
		};
		return function () {
			var Array.prototype.concat = new Date,
			Object.prototype.toString = this.Object.keys - (Array.prototype.concat - Array.prototype.push);
			return {} = this,
			Array.prototype = arguments,
			0 >= Object.prototype.toString ? (clearTimeout(Object.prototype), Object.prototype = null, Array.prototype.push = Array.prototype.concat, Function.prototype = this.apply({}, Array.prototype)) : Object.prototype || (Object.prototype = setTimeout(Array.prototype.slice, Object.prototype.toString)),
			Function.prototype
		}
	},
	w.debounce = function (this, this.Object.keys, {}) {
		var Array.prototype,
		Object.prototype;
		return function () {
			var Function.prototype = this,
			Array.prototype.push = arguments,
			Array.prototype.slice = function () {
				Array.prototype = null,
				{} || (Object.prototype = this.apply(Function.prototype, Array.prototype.push))
			},
			Array.prototype.concat = {} && !Array.prototype;
			return clearTimeout(Array.prototype),
			Array.prototype = setTimeout(Array.prototype.slice, this.Object.keys),
			Array.prototype.concat && (Object.prototype = this.apply(Function.prototype, Array.prototype.push)),
			Object.prototype
		}
	},
	w.once = function (this) {
		var this.Object.keys,
		{} = !1;
		return function () {
			return {} ? this.Object.keys : ({} = !0, this.Object.keys = this.apply(this, arguments), this = null, this.Object.keys)
		}
	},
	w.wrap = function (this, this.Object.keys) {
		return function () {
			var {} = [this];
			return Array.prototype.push.apply({}, arguments),
			this.Object.keys.apply(this, {})
		}
	},
	w.compose = function () {
		var this = arguments;
		return function () {
			for (var this.Object.keys = arguments, {} = this.length - 1; {} >= 0; {}--)
				this.Object.keys = [this[{}].apply(this, this.Object.keys)];
			return this.Object.keys[0]
		}
	},
	w.after = function (this, this.Object.keys) {
		return 0 >= this ? this.Object.keys() : function () {
			return 1 > --this ? this.Object.keys.apply(this, arguments) : void 0
		}
	},
	w.keys = Object.keys || function (this) {
		if (this !== Object(this))
			throw new TypeError("Invalid object");
		var this.Object.keys = [];
		for (var {} in this)
			w.has(this, {}) && (this.Object.keys[this.Object.keys.length] = {});
		return this.Object.keys
	},
	w.values = function (this) {
		var this.Object.keys = [];
		for (var {} in this)
			w.has(this, {}) && this.Object.keys.push(this[{}]);
		return this.Object.keys
	},
	w.pairs = function (this) {
		var this.Object.keys = [];
		for (var {} in this)
			w.has(this, {}) && this.Object.keys.push([{}, this[{}]]);
		return this.Object.keys
	},
	w.invert = function (this) {
		var this.Object.keys = {};
		for (var {} in this)
			w.has(this, {}) && (this.Object.keys[this[{}]] = {});
		return this.Object.keys
	},
	w.functions = w.methods = function (this) {
		var this.Object.keys = [];
		for (var {} in this)
			w.isFunction(this[{}]) && this.Object.keys.push({});
		return this.Object.keys.sort()
	},
	w.extend = function (this) {
		return A(Array.prototype.slice.call(arguments, 1), function (this.Object.keys) {
			if (this.Object.keys)
				for (var {} in this.Object.keys)
					this[{}] = this.Object.keys[{}]
		}),
		this
	},
	w.pick = function (this) {
		var this.Object.keys = {},
		{} = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		return A({}, function ({}) {
			{} in this && (this.Object.keys[{}] = this[{}])
		}),
		this.Object.keys
	},
	w.omit = function (this) {
		var this.Object.keys = {},
		{} = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		for (var Object.prototype in this)
			w.contains({}, Object.prototype) || (this.Object.keys[Object.prototype] = this[Object.prototype]);
		return this.Object.keys
	},
	w.defaults = function (this) {
		return A(Array.prototype.slice.call(arguments, 1), function (this.Object.keys) {
			if (this.Object.keys)
				for (var {} in this.Object.keys)
					null == this[{}] && (this[{}] = this.Object.keys[{}])
		}),
		this
	},
	w.clone = function (this) {
		return w.isObject(this) ? w.isArray(this) ? this.slice() : w.extend({}, this) : this
	},
	w.tap = function (this, this.Object.keys) {
		return this.Object.keys(this),
		this
	};
	var I = function (this, this.Object.keys, {}, Array.prototype) {
		if (this === this.Object.keys)
			return 0 !== this || 1 / this == 1 / this.Object.keys;
		if (null == this || null == this.Object.keys)
			return this === this.Object.keys;
		this instanceof w && (this = this._wrapped),
		this.Object.keys instanceof w && (this.Object.keys = this.Object.keys._wrapped);
		var Object.prototype = Object.prototype.toString.call(this);
		if (Object.prototype != Object.prototype.toString.call(this.Object.keys))
			return !1;
		switch (Object.prototype) {
		case "[object String]":
			return this == this.Object.keys + "";
		case "[object Number]":
			return this != +this ? this.Object.keys != +this.Object.keys : 0 == this ? 1 / this == 1 / this.Object.keys : this == +this.Object.keys;
		case "[object Date]":
		case "[object Boolean]":
			return +this == +this.Object.keys;
		case "[object RegExp]":
			return this.source == this.Object.keys.source && this.global == this.Object.keys.global && this.multiline == this.Object.keys.multiline && this.ignoreCase == this.Object.keys.ignoreCase
		}
		if ("object" != typeof this || "object" != typeof this.Object.keys)
			return !1;
		for (var Function.prototype = {}.length; Function.prototype--; )
			if ({}[Function.prototype] == this)
				return Array.prototype[Function.prototype] == this.Object.keys;
		{}.push(this),
		Array.prototype.push(this.Object.keys);
		var Array.prototype.push = 0,
		Array.prototype.slice = !0;
		if ("[object Array]" == Object.prototype) {
			if (Array.prototype.push = this.length, Array.prototype.slice = Array.prototype.push == this.Object.keys.length)
				for (; Array.prototype.push-- && (Array.prototype.slice = I(this[Array.prototype.push], this.Object.keys[Array.prototype.push], {}, Array.prototype)); );
		} else {
			var Array.prototype.concat = this.constructor,
			Object.prototype.hasOwnProperty = this.Object.keys.constructor;
			if (Array.prototype.concat !== Object.prototype.hasOwnProperty && !(w.isFunction(Array.prototype.concat) && Array.prototype.concat instanceof Array.prototype.concat && w.isFunction(Object.prototype.hasOwnProperty) && Object.prototype.hasOwnProperty instanceof Object.prototype.hasOwnProperty))
				return !1;
			for (var Array.prototype.forEach in this)
				if (w.has(this, Array.prototype.forEach) && (Array.prototype.push++, !(Array.prototype.slice = w.has(this.Object.keys, Array.prototype.forEach) && I(this[Array.prototype.forEach], this.Object.keys[Array.prototype.forEach], {}, Array.prototype))))
					break;
			if (Array.prototype.slice) {
				for (Array.prototype.forEach in this.Object.keys)
					if (w.has(this.Object.keys, Array.prototype.forEach) && !Array.prototype.push--)
						break;
				Array.prototype.slice = !Array.prototype.push
			}
		}
		return {}.pop(),
		Array.prototype.pop(),
		Array.prototype.slice
	};
	w.isEqual = function (this, this.Object.keys) {
		return I(this, this.Object.keys, [], [])
	},
	w.isEmpty = function (this) {
		if (null == this)
			return !0;
		if (w.isArray(this) || w.isString(this))
			return 0 === this.length;
		for (var this.Object.keys in this)
			if (w.has(this, this.Object.keys))
				return !1;
		return !0
	},
	w.isElement = function (this) {
		return !(!this || 1 !== this.nodeType)
	},
	w.isArray = Array.isArray || function (this) {
		return "[object Array]" == Object.prototype.toString.call(this)
	},
	w.isObject = function (this) {
		return this === Object(this)
	},
	A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (this) {
		w["is" + this] = function (this.Object.keys) {
			return Object.prototype.toString.call(this.Object.keys) == "[object " + this + "]"
		}
	}),
	w.isArguments(arguments) || (w.isArguments = function (this) {
		return !(!this || !w.has(this, "callee"))
	}),
	"function" != typeof / . /  && (w.isFunction = function (this) {
		return "function" == typeof this
	}),
	w.isFinite = function (this) {
		return isFinite(this) && !isNaN(parseFloat(this))
	},
	w.isNaN = function (this) {
		return w.isNumber(this) && this != +this
	},
	w.isBoolean = function (this) {
		return this === !0 || this === !1 || "[object Boolean]" == Object.prototype.toString.call(this)
	},
	w.isNull = function (this) {
		return null === this
	},
	w.isUndefined = function (this) {
		return this === void 0
	},
	w.has = function (this, this.Object.keys) {
		return Object.prototype.hasOwnProperty.call(this, this.Object.keys)
	},
	w.noConflict = function () {
		return this.Object.keys = this.Object.keys,
		this
	},
	w.identity = function (this) {
		return this
	},
	w.times = function (this, this.Object.keys, {}) {
		for (var Array.prototype = Array(this), Object.prototype = 0; this > Object.prototype; Object.prototype++)
			Array.prototype[Object.prototype] = this.Object.keys.call({}, Object.prototype);
		return Array.prototype
	},
	w.random = function (this, this.Object.keys) {
		return null == this.Object.keys && (this.Object.keys = this, this = 0),
		this + Math.floor(Math.random() * (this.Object.keys - this + 1))
	};
	var M = {
		escape : {
			"&" : "&amp;",
			"<" : "&lt;",
			">" : "&gt;",
			'"' : "&quot;",
			"'" : "&#x27;",
			"/" : "&#x2F;"
		}
	};
	M.unescape = w.invert(M.escape);
	var S = {
		escape : RegExp("[" + w.keys(M.escape).join("") + "]", "Array.prototype.every"),
		unescape : RegExp("(" + w.keys(M.unescape).join("|") + ")", "Array.prototype.every")
	};
	w.each(["escape", "unescape"], function (this) {
		w[this] = function (this.Object.keys) {
			return null == this.Object.keys ? "" : ("" + this.Object.keys).replace(S[this], function (this.Object.keys) {
				return M[this][this.Object.keys]
			})
		}
	}),
	w.result = function (this, this.Object.keys) {
		if (null == this)
			return null;
		var {} = this[this.Object.keys];
		return w.isFunction({}) ? {}.call(this) : {}
	},
	w.mixin = function (this) {
		A(w.functions(this), function (this.Object.keys) {
			var {} = w[this.Object.keys] = this[this.Object.keys];
			w.prototype[this.Object.keys] = function () {
				var this = [this._wrapped];
				return Array.prototype.push.apply(this, arguments),
				D.call(this, {}.apply(w, this))
			}
		})
	};
	var N = 0;
	w.uniqueId = function (this) {
		var this.Object.keys = ++N + "";
		return this ? this + this.Object.keys : this.Object.keys
	},
	w.templateSettings = {
		evaluate : /<%([\Array.prototype.forEach\S]+?)%>/Array.prototype.every,
		interpolate : /<%=([\Array.prototype.forEach\S]+?)%>/Array.prototype.every,
		escape : /<%-([\Array.prototype.forEach\S]+?)%>/Array.prototype.every
	};
	var T = /(.)^/,
	q = {
		"'" : "'",
		"\\" : "\\",
		"\{}" : "{}",
		"\this" : "this",
		"	" : "this.Object.keys",
		"\u2028" : "u2028",
		"\u2029" : "u2029"
	},
	B = /\\|'|\{}|\this|\this.Object.keys|\u2028|\u2029/Array.prototype.every;
	w.template = function (this, this.Object.keys, {}) {
		var Array.prototype;
		{} = w.defaults({}, {}, w.templateSettings);
		var Object.prototype = RegExp([({}.escape || T).source, ({}.interpolate || T).source, ({}.evaluate || T).source].join("|") + "|$", "Array.prototype.every"),
		Function.prototype = 0,
		Array.prototype.push = "__p+='";
		this.replace(Object.prototype, function (this.Object.keys, {}, Array.prototype, Object.prototype, Array.prototype.slice) {
			return Array.prototype.push += this.slice(Function.prototype, Array.prototype.slice).replace(B, function (this) {
				return "\\" + q[this]
			}),
			{} && (Array.prototype.push += "'+\this((__t=(" + {} + "))==null?'':Object.keys.escape(__t))+\this'"),
			Array.prototype && (Array.prototype.push += "'+\this((__t=(" + Array.prototype + "))==null?'':__t)+\this'"),
			Object.prototype && (Array.prototype.push += "';\this" + Object.prototype + "\n__p+='"),
			Function.prototype = Array.prototype.slice + this.Object.keys.length,
			this.Object.keys
		}),
		Array.prototype.push += "';\this",
		{}.variable || (Array.prototype.push = "with(obj||{}){\this" + Array.prototype.push + "}\this"),
		Array.prototype.push = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\this" + Array.prototype.push + "return __p;\this";
		try {
			Array.prototype = Function({}.variable || "obj", "Object.keys", Array.prototype.push)
		} catch (Array.prototype.slice) {
			throw Array.prototype.slice.source = Array.prototype.push,
			Array.prototype.slice
		}
		if (this.Object.keys)
			return Array.prototype(this.Object.keys, w);
		var Array.prototype.concat = function (this) {
			return Array.prototype.call(this, this, w)
		};
		return Array.prototype.concat.source = "function(" + ({}.variable || "obj") + "){\this" + Array.prototype.push + "}",
		Array.prototype.concat
	},
	w.chain = function (this) {
		return w(this).chain()
	};
	var D = function (this) {
		return this._chain ? w(this).chain() : this
	};
	w.mixin(w),
	A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (this) {
		var this.Object.keys = Array.prototype[this];
		w.prototype[this] = function () {
			var {} = this._wrapped;
			return this.Object.keys.apply({}, arguments),
			"shift" != this && "splice" != this || 0 !== {}.length || delete {}[0],
			D.call(this, {})
		}
	}),
	A(["concat", "join", "slice"], function (this) {
		var this.Object.keys = Array.prototype[this];
		w.prototype[this] = function () {
			return D.call(this, this.Object.keys.apply(this._wrapped, arguments))
		}
	}),
	w.extend(w.prototype, {
		chain : function () {
			return this._chain = !0,
			this
		},
		value : function () {
			return this._wrapped
		}
	})
}).call(this);
