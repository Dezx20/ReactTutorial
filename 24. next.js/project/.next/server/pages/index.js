(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\2009a\\Documents\\web_development\\ReactTutorial\\24. next.js\\project\\components\\meetups\\MeetupItem.js";





function MeetupItem(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\2009a\\Documents\\web_development\\ReactTutorial\\24. next.js\\project\\components\\meetups\\MeetupList.js";




function MeetupList(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
    className: (_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),
    children: props.meetups.map(meetup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MeetupItem__WEBPACK_IMPORTED_MODULE_0__.default, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupList);

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\2009a\\Documents\\web_development\\ReactTutorial\\24. next.js\\project\\components\\ui\\Card.js";



function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\2009a\\Documents\\web_development\\ReactTutorial\\24. next.js\\project\\pages\\index.js";



const DUMMY_MEETUPS = [{
  id: "m1",
  title: "first meetup",
  image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555275019/shape/mentalfloss/istock-510692123.jpg",
  address: "Some address 3, 434 ciity",
  discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto sed fuga odio blanditiis voluptate labore in nam totam quasi?"
}, {
  id: "m2",
  title: "second meetup",
  image: "https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20210603193845/mlera-aerial-view-50763560.jpg",
  address: "Some address 12, 2 city",
  discription: "labore in nam totam quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto sed fuga odio blanditiis voluptate ?"
}];

const HomePage = props => {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     // send a http request & fetch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__.default, {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

const getStaticProps = async () => {
  // fetch data from an API
  return {
    //@ always returns a object
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 3
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBb0JBLE1BQU1DLFFBQVEsR0FBSXZCLEtBQUQsSUFBVztBQUMxQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBQ0UsOERBQUMsMkNBQUQ7QUFBQSwyQkFFRSw4REFBQyxtRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDYTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FkRDs7QUFlTyxNQUFNVyxjQUFjLEdBQUcsWUFBWTtBQUN4QztBQUNBLFNBQU87QUFDTDtBQUNBeEIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xhLE1BQUFBLE9BQU8sRUFBRVE7QUFESixLQUZGO0FBS0xJLElBQUFBLFVBQVUsRUFBRTtBQUxQLEdBQVA7QUFPRCxDQVRNO0FBVVAsaUVBQWVGLFFBQWY7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBJdGVtLmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy91aS9DYXJkLmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwSXRlbS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1lZXR1cEl0ZW0ocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNob3dEZXRhaWxzSGFuZGxlciA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9cIiArIHByb3BzLmlkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEl0ZW07XG4iLCJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXG4gICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cbiAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XG4gICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBMaXN0O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJmaXJzdCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzMi5taW51dGVtZWRpYWNkbi5jb20vaW1hZ2UvdXBsb2FkL2NfZmlsbCxnX2F1dG8saF8xMjQ4LHdfMjIyMC9mX2F1dG8scV9hdXRvLHdfMTEwMC92MTU1NTI3NTAxOS9zaGFwZS9tZW50YWxmbG9zcy9pc3RvY2stNTEwNjkyMTIzLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMywgNDM0IGNpaXR5XCIsXHJcbiAgICBkaXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFb3MgaXVzdG8gc2VkIGZ1Z2Egb2RpbyBibGFuZGl0aWlzIHZvbHVwdGF0ZSBsYWJvcmUgaW4gbmFtIHRvdGFtIHF1YXNpP1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcInNlY29uZCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vZDNkNWJwYWkxMnRpOC5jbG91ZGZyb250Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMTA2MDMxOTM4NDUvbWxlcmEtYWVyaWFsLXZpZXctNTA3NjM1NjAuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMiwgMiBjaXR5XCIsXHJcbiAgICBkaXNjcmlwdGlvbjpcclxuICAgICAgXCJsYWJvcmUgaW4gbmFtIHRvdGFtIHF1YXNpIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVvcyBpdXN0byBzZWQgZnVnYSBvZGlvIGJsYW5kaXRpaXMgdm9sdXB0YXRlID9cIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIC8vIHNlbmQgYSBodHRwIHJlcXVlc3QgJiBmZXRjaCBkYXRhXHJcbiAgLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgLy8gICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPiAqL31cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICByZXR1cm4ge1xyXG4gICAgLy9AIGFsd2F5cyByZXR1cm5zIGEgb2JqZWN0XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDMsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJNZWV0dXBJdGVtX2l0ZW1fXzNzaU1VXCIsXG5cdFwiaW1hZ2VcIjogXCJNZWV0dXBJdGVtX2ltYWdlX18xM3JBUFwiLFxuXHRcImNvbnRlbnRcIjogXCJNZWV0dXBJdGVtX2NvbnRlbnRfXzN1RWtUXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk1lZXR1cEl0ZW1fYWN0aW9uc19fTHZUOUJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJNZWV0dXBMaXN0X2xpc3RfXzFpYWZuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDYXJkIiwiY2xhc3NlcyIsIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsIml0ZW0iLCJpbWFnZSIsInRpdGxlIiwiY29udGVudCIsImFkZHJlc3MiLCJhY3Rpb25zIiwiTWVldHVwTGlzdCIsImxpc3QiLCJtZWV0dXBzIiwibWFwIiwibWVldHVwIiwiY2FyZCIsImNoaWxkcmVuIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRVTU1ZX01FRVRVUFMiLCJkaXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==