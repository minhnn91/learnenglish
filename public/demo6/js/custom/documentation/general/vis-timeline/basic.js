/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/general/vis-timeline/basic.js":
/*!*************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/vis-timeline/basic.js ***!
  \*************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    // DOM element where the Timeline will be attached\n    var container = document.getElementById(\"kt_docs_vistimeline_basic\"); // Create a DataSet (allows two way data-binding)\n\n    var items = new vis.DataSet([{\n      id: 1,\n      content: \"item 1\",\n      start: \"2021-04-20\"\n    }, {\n      id: 2,\n      content: \"item 2\",\n      start: \"2021-04-14\"\n    }, {\n      id: 3,\n      content: \"item 3\",\n      start: \"2021-04-18\"\n    }, {\n      id: 4,\n      content: \"item 4\",\n      start: \"2021-04-16\",\n      end: \"2021-04-19\"\n    }, {\n      id: 5,\n      content: \"item 5\",\n      start: \"2021-04-25\"\n    }, {\n      id: 6,\n      content: \"item 6\",\n      start: \"2021-04-27\",\n      type: \"point\"\n    }]); // Configuration for the Timeline\n\n    var options = {}; // Create a Timeline\n\n    var timeline = new vis.Timeline(container, items, options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvYmFzaWMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBWTtBQUNqQztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVk7QUFDM0I7QUFDQSxRQUFJQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBaEIsQ0FGMkIsQ0FJM0I7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLElBQUlDLEdBQUcsQ0FBQ0MsT0FBUixDQUFnQixDQUN4QjtBQUFFQyxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQUR3QixFQUV4QjtBQUFFRixNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQUZ3QixFQUd4QjtBQUFFRixNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQUh3QixFQUl4QjtBQUFFRixNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLEtBQUssRUFBRSxZQUFuQztBQUFpREMsTUFBQUEsR0FBRyxFQUFFO0FBQXRELEtBSndCLEVBS3hCO0FBQUVILE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBTHdCLEVBTXhCO0FBQUVGLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsS0FBSyxFQUFFLFlBQW5DO0FBQWlERSxNQUFBQSxJQUFJLEVBQUU7QUFBdkQsS0FOd0IsQ0FBaEIsQ0FBWixDQUwyQixDQWMzQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUcsRUFBZCxDQWYyQixDQWlCM0I7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHLElBQUlSLEdBQUcsQ0FBQ1MsUUFBUixDQUFpQmIsU0FBakIsRUFBNEJHLEtBQTVCLEVBQW1DUSxPQUFuQyxDQUFmO0FBQ0gsR0FuQkQ7O0FBcUJBLFNBQU87QUFDSDtBQUNBRyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZGYsTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBN0J3QixFQUF6QixDLENBK0JBOzs7QUFDQWdCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2xCLEVBQUFBLGtCQUFrQixDQUFDZ0IsSUFBbkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL2Jhc2ljLmpzPzQwNzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVFZpc1RpbWVsaW5lQmFzaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBET00gZWxlbWVudCB3aGVyZSB0aGUgVGltZWxpbmUgd2lsbCBiZSBhdHRhY2hlZFxyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2RvY3NfdmlzdGltZWxpbmVfYmFzaWNcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIERhdGFTZXQgKGFsbG93cyB0d28gd2F5IGRhdGEtYmluZGluZylcclxuICAgICAgICB2YXIgaXRlbXMgPSBuZXcgdmlzLkRhdGFTZXQoW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBjb250ZW50OiBcIml0ZW0gMVwiLCBzdGFydDogXCIyMDIxLTA0LTIwXCIgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgY29udGVudDogXCJpdGVtIDJcIiwgc3RhcnQ6IFwiMjAyMS0wNC0xNFwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIGNvbnRlbnQ6IFwiaXRlbSAzXCIsIHN0YXJ0OiBcIjIwMjEtMDQtMThcIiB9LFxyXG4gICAgICAgICAgICB7IGlkOiA0LCBjb250ZW50OiBcIml0ZW0gNFwiLCBzdGFydDogXCIyMDIxLTA0LTE2XCIsIGVuZDogXCIyMDIxLTA0LTE5XCIgfSxcclxuICAgICAgICAgICAgeyBpZDogNSwgY29udGVudDogXCJpdGVtIDVcIiwgc3RhcnQ6IFwiMjAyMS0wNC0yNVwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDYsIGNvbnRlbnQ6IFwiaXRlbSA2XCIsIHN0YXJ0OiBcIjIwMjEtMDQtMjdcIiwgdHlwZTogXCJwb2ludFwiIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBUaW1lbGluZVxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge307XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIFRpbWVsaW5lXHJcbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IHZpcy5UaW1lbGluZShjb250YWluZXIsIGl0ZW1zLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RWaXNUaW1lbGluZUJhc2ljLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVFZpc1RpbWVsaW5lQmFzaWMiLCJleGFtcGxlQmFzaWMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXRlbXMiLCJ2aXMiLCJEYXRhU2V0IiwiaWQiLCJjb250ZW50Iiwic3RhcnQiLCJlbmQiLCJ0eXBlIiwib3B0aW9ucyIsInRpbWVsaW5lIiwiVGltZWxpbmUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/vis-timeline/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/vis-timeline/basic.js"]();
/******/ 	
/******/ })()
;