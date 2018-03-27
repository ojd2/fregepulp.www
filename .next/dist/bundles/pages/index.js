module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/homefolder/fregepulp.www/components/Footer.js";

var Footer = function Footer() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ "class": "footer-row", __source: {
				fileName: _jsxFileName,
				lineNumber: 2
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"footer",
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 3
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ "class": "container", __source: {
						fileName: _jsxFileName,
						lineNumber: 4
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"p",
					{ style: { textAlign: 'center' }, __source: {
							fileName: _jsxFileName,
							lineNumber: 5
						}
					},
					"Built by ",
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"a",
						{ href: "//oledean.co", __source: {
								fileName: _jsxFileName,
								lineNumber: 5
							}
						},
						"Oliver Dean"
					),
					" "
				)
			)
		)
	);
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Logo__ = __webpack_require__("./components/Logo.js");
var _jsxFileName = '/Users/homefolder/fregepulp.www/components/Header.js';






var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { 'class': 'header', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        'Frege Pulp'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', key: 'viewport', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.2, width=device-width', key: 'viewport', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/style.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/global.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,500', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { 'class': 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Logo__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Nav__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Introduction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/homefolder/fregepulp.www/components/Introduction.js";

var Introduction = function Introduction() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ "class": "page-introduction", __source: {
				fileName: _jsxFileName,
				lineNumber: 2
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ "class": "container", __source: {
					fileName: _jsxFileName,
					lineNumber: 3
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ "grid-row": "", "grid-pad": "2", "grid-gutter": "4", "grid-responsive": "", __source: {
						fileName: _jsxFileName,
						lineNumber: 4
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "5", "grid-pad": "2", "class": "", __source: {
							fileName: _jsxFileName,
							lineNumber: 6
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ "class": "introduction-text", __source: {
								fileName: _jsxFileName,
								lineNumber: 7
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"h1",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 8
								}
							},
							"Frege & the concept of Sense"
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"h2",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 10
								}
							},
							"It may justifiably be said of Frege that his most radical contribution to philosophy was the definition of its foundational question to be the theory of meaning (or logic in his terminology) and not epistemology as posited by Descartes."
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"p",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 16
								}
							},
							"This was his basic intellectual project and it was articulated through his philosophical commitment to free Kant's conception of a priori knowledge from every trace of the pure intuition that had been conceived as its ground. This articulation was itself achieved through a subtle shift in focus: in Kants conception, analytic a priori knowledge was rather trivial it was the synthetic a priori which was really a profound matter, and which required the ground of pure intuition. "
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ "class": "find-out", __source: {
								fileName: _jsxFileName,
								lineNumber: 24
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"a",
							{ href: "#", __source: {
									fileName: _jsxFileName,
									lineNumber: 25
								}
							},
							"More ",
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fa fa-long-arrow-right", __source: {
									fileName: _jsxFileName,
									lineNumber: 25
								}
							})
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "7", "grid-pad": "2", "class": "introduction-image", __source: {
							fileName: _jsxFileName,
							lineNumber: 28
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { "class": "scroll-transition-fade below-viewport", src: "/static/frege_pulp_sense.png",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 29
						}
					})
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ "grid-row": "", "grid-pad": "2", "grid-gutter": "4", "grid-responsive": "", __source: {
						fileName: _jsxFileName,
						lineNumber: 34
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "6", "grid-pad": "2", "class": "introduction-text-main", __source: {
							fileName: _jsxFileName,
							lineNumber: 35
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { "class": "scroll-transition-fade below-viewport responsive",
						src: "/static/frege_pulp_truth_thumb.png", __source: {
							fileName: _jsxFileName,
							lineNumber: 36
						}
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"h3",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 38
							}
						},
						"Tarski & the concept of Truth"
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ "class": "find-out", __source: {
								fileName: _jsxFileName,
								lineNumber: 39
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"a",
							{ href: "#", __source: {
									fileName: _jsxFileName,
									lineNumber: 40
								}
							},
							"More ",
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fa fa-long-arrow-right", __source: {
									fileName: _jsxFileName,
									lineNumber: 40
								}
							})
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "6", "grid-pad": "2", "class": "", __source: {
							fileName: _jsxFileName,
							lineNumber: 44
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { "class": "scroll-transition-fade below-viewport responsive",
						src: "/static/frege_pulp_proof_thumb.png", __source: {
							fileName: _jsxFileName,
							lineNumber: 45
						}
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"h3",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 47
							}
						},
						"Heyting & the concept of Proof"
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ "class": "find-out", __source: {
								fileName: _jsxFileName,
								lineNumber: 48
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"a",
							{ href: "#", __source: {
									fileName: _jsxFileName,
									lineNumber: 49
								}
							},
							"More ",
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fa fa-long-arrow-right", __source: {
									fileName: _jsxFileName,
									lineNumber: 49
								}
							})
						)
					)
				)
			)
		)
	);
};
/* harmony default export */ __webpack_exports__["a"] = (Introduction);

/***/ }),

/***/ "./components/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/homefolder/fregepulp.www/components/Logo.js";

var Logo = function Logo() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { "class": "logo", __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/logo.jpg", alt: "lambda logo", width: "150", __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        })
    );
};
/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/homefolder/fregepulp.www/components/Nav.js";


var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { "class": "nav-container", __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 6
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { prefetch: true, href: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8
                }
              },
              "Home"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { prefetch: true, href: "/about", __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              "About"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { prefetch: true, href: "/context", __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              "Context"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { prefetch: true, href: "/contact", __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              "Contact"
            )
          )
        )
      )
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Introduction__ = __webpack_require__("./components/Introduction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
var _jsxFileName = '/Users/homefolder/fregepulp.www/pages/index.js';







var linkStyle = {
  marginRight: 15,
  color: '#000'
};

var pStyle = {
  marginRight: 15,
  color: '#cccccc'
};

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Introduction__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map