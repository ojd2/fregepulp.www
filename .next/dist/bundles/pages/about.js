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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Details.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/homefolder/fregepulp.www/components/Details.js";

var Details = function Details() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ "class": "page-details", __source: {
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
				{ "grid-row": "", "class": "scroll-transition-fade below-viewport", "grid-pad": "2", "grid-gutter": "4", "grid-responsive": "", __source: {
						fileName: _jsxFileName,
						lineNumber: 4
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "5", "grid-pad": "2", __source: {
							fileName: _jsxFileName,
							lineNumber: 5
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { "class": "details-img responsive scroll-transition-fade below-viewport", src: "/static/frege_pulp_frege.jpg", __source: {
							fileName: _jsxFileName,
							lineNumber: 6
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "7", "grid-pad": "2", "class": "", __source: {
							fileName: _jsxFileName,
							lineNumber: 8
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"h1",
						{ style: { textAlign: 'center', fontSize: '3rem' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 9
							}
						},
						"Rigorous logical sense"
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"p",
						{ "class": "details-p", style: { textAlign: 'center', fontSize: '1.4rem', lineHeight: '2rem', fontFamily: 'Times New Roman' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 10
							}
						},
						"With the preceding discussion, we may appreciate the intellectual context of our proposal which is, the generalization of Heyting's conception of semantics to functional calculi specifically the A-Calculus. The proposal carries a serious import: semantics, and specifically formal semantics, is salient to any language and only to language; the A-Calculus is a formal language and has already, a Tarskian (or denotational) semantics formulated principally by D. S. Scott."
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ "grid-row": "", "class": "scroll-transition-fade below-viewport", "grid-pad": "2", "grid-gutter": "4", "grid-responsive": "", __source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-col": "12", "grid-pad": "2", "class": "", __source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"h1",
						{ "class": "details-spread", style: { textAlign: 'center', fontSize: '3rem' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 21
							}
						},
						"The inclusion of infinite terms"
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ "grid-row": "", "grid-pad": "3", "grid-gutter": "6", "grid-responsive": "", __source: {
							fileName: _jsxFileName,
							lineNumber: 23
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ "grid-col": "x10", "grid-pad": "3", "class": "", __source: {
								fileName: _jsxFileName,
								lineNumber: 24
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/frege_pulp_frege_type_thumb_1.png", style: { margin: '0 auto', padding: '0 auto', display: 'block' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 25
							}
						}),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"p",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 26
								}
							},
							"Although time will no doubt be reborn, it must first die. It cannot transport its being from one instant to another in order to forge a duration. The instant is already solitude\u2026 through a sort of creative violence, time limited to the instant isolates us not only from others but even from ourselves, since it breaks with our most cherished past."
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"div",
							{ "class": "find-out", __source: {
									fileName: _jsxFileName,
									lineNumber: 30
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"a",
								{ href: "#", __source: {
										fileName: _jsxFileName,
										lineNumber: 31
									}
								},
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fa fa-long-arrow-right", __source: {
										fileName: _jsxFileName,
										lineNumber: 31
									}
								})
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						{ "grid-col": "x10", "grid-pad": "3", "class": "", __source: {
								fileName: _jsxFileName,
								lineNumber: 34
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/frege_pulp_frege_type_thumb_2.png", style: { margin: '0 auto', padding: '0 auto', display: 'block' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 35
							}
						}),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"p",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 36
								}
							},
							"Meditation on the instant thus convinces us that oblivion is most brutal the more recent the past it destroys, just as uncertainty is most poignant when placed along the axis of a thought to come, of a still fervent yet already broken dream, yet without ever losing that dominant characteristic of being novelty."
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
						{ "grid-col": "x10", "grid-pad": "3", "class": "", __source: {
								fileName: _jsxFileName,
								lineNumber: 43
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/frege_pulp_frege_type_thumb_3.png", style: { margin: '0 auto', padding: '0 auto', display: 'block' }, __source: {
								fileName: _jsxFileName,
								lineNumber: 44
							}
						}),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"p",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 45
								}
							},
							"Although time will no doubt be reborn, it must first die. It cannot transport its being from one instant to another in order to forge a duration. The instant is already solitude\u2026 through a sort of creative violence, time limited to the instant isolates us not only from others but even from ourselves, since it breaks with our most cherished past."
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"div",
							{ "class": "find-out", __source: {
									fileName: _jsxFileName,
									lineNumber: 49
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"a",
								{ href: "#", __source: {
										fileName: _jsxFileName,
										lineNumber: 50
									}
								},
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fa fa-long-arrow-right", __source: {
										fileName: _jsxFileName,
										lineNumber: 50
									}
								})
							)
						)
					)
				)
			)
		)
	);
};
/* harmony default export */ __webpack_exports__["a"] = (Details);

/***/ }),

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

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Details__ = __webpack_require__("./components/Details.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = '/Users/homefolder/fregepulp.www/pages/about.js';




var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { 'class': 'about', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Details__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


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
//# sourceMappingURL=about.js.map