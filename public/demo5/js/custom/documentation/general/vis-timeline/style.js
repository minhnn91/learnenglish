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

/***/ "./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js":
/*!*************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js ***!
  \*************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineStyle = function () {\n  // Private functions\n  var exampleStyle = function exampleStyle() {\n    var container = document.getElementById(\"kt_docs_vistimeline_style\"); // Generate HTML content\n\n    var getContent = function getContent(title, img) {\n      var _name$classList, _symbol$classList;\n\n      var item = document.createElement('div');\n      var name = document.createElement('div');\n      var nameClasses = ['fw-bolder', 'mb-2'];\n\n      (_name$classList = name.classList).add.apply(_name$classList, nameClasses);\n\n      name.innerHTML = title;\n      var image = document.createElement('img');\n      image.setAttribute('src', img);\n      var symbol = document.createElement('div');\n      var symbolClasses = ['symbol', 'symbol-circle', 'symbol-30'];\n\n      (_symbol$classList = symbol.classList).add.apply(_symbol$classList, symbolClasses);\n\n      symbol.appendChild(image);\n      item.appendChild(name);\n      item.appendChild(symbol);\n      return item;\n    }; // note that months are zero-based in the JavaScript Date object\n\n\n    var items = new vis.DataSet([{\n      start: new Date(2010, 7, 23),\n      content: getContent('Conversation', hostUrl + '/media/avatars/150-1.jpg')\n    }, {\n      start: new Date(2010, 7, 23, 23, 0, 0),\n      content: getContent('Mail from boss', hostUrl + '/media/avatars/150-2.jpg')\n    }, {\n      start: new Date(2010, 7, 24, 16, 0, 0),\n      content: \"Report\"\n    }, {\n      start: new Date(2010, 7, 26),\n      end: new Date(2010, 8, 2),\n      content: \"Traject A\"\n    }, {\n      start: new Date(2010, 7, 28),\n      content: getContent('Memo', hostUrl + '/media/avatars/150-3.jpg')\n    }, {\n      start: new Date(2010, 7, 29),\n      content: getContent('Phone call', hostUrl + '/media/avatars/150-4.jpg')\n    }, {\n      start: new Date(2010, 7, 31),\n      end: new Date(2010, 8, 3),\n      content: \"Traject B\"\n    }, {\n      start: new Date(2010, 8, 4, 12, 0, 0),\n      content: getContent('Report', hostUrl + '/media/avatars/150-5.jpg')\n    }]);\n    var options = {\n      editable: true,\n      margin: {\n        item: 20,\n        axis: 40\n      }\n    };\n    var timeline = new vis.Timeline(container, items, options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleStyle();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineStyle.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6IkNBR0E7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBWTtBQUNqQztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVk7QUFDM0IsUUFBSUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWhCLENBRDJCLENBRzNCOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBOztBQUMvQixVQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsVUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFVBQU1FLFdBQVcsR0FBRyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQXBCOztBQUNBLHlCQUFBRCxJQUFJLENBQUNFLFNBQUwsRUFBZUMsR0FBZix3QkFBc0JGLFdBQXRCOztBQUNBRCxNQUFBQSxJQUFJLENBQUNJLFNBQUwsR0FBaUJSLEtBQWpCO0FBRUEsVUFBTVMsS0FBSyxHQUFHWixRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBTSxNQUFBQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJULEdBQTFCO0FBRUEsVUFBTVUsTUFBTSxHQUFHZCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBLFVBQU1TLGFBQWEsR0FBRyxDQUFDLFFBQUQsRUFBVyxlQUFYLEVBQTRCLFdBQTVCLENBQXRCOztBQUNBLDJCQUFBRCxNQUFNLENBQUNMLFNBQVAsRUFBaUJDLEdBQWpCLDBCQUF3QkssYUFBeEI7O0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0UsV0FBUCxDQUFtQkosS0FB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QUFFLGdCQUFZO0FBQ2RqQyxNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0EvRXdCLEVBQXpCLEMsQ0FpRkE7OztBQUNBa0MsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDcEMsRUFBQUEsa0JBQWtCLENBQUNrQyxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvc3R5bGUuanM/NDMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVFZpc1RpbWVsaW5lU3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVTdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9kb2NzX3Zpc3RpbWVsaW5lX3N0eWxlXCIpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBIVE1MIGNvbnRlbnRcclxuICAgICAgICBjb25zdCBnZXRDb250ZW50ID0gKHRpdGxlLCBpbWcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDbGFzc2VzID0gWydmdy1ib2xkZXInLCAnbWItMiddO1xyXG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoLi4ubmFtZUNsYXNzZXMpO1xyXG4gICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IHRpdGxlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbENsYXNzZXMgPSBbJ3N5bWJvbCcsICdzeW1ib2wtY2lyY2xlJywgJ3N5bWJvbC0zMCddO1xyXG4gICAgICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZCguLi5zeW1ib2xDbGFzc2VzKTtcclxuICAgICAgICAgICAgc3ltYm9sLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoc3ltYm9sKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm90ZSB0aGF0IG1vbnRocyBhcmUgemVyby1iYXNlZCBpbiB0aGUgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxyXG4gICAgICAgIHZhciBpdGVtcyA9IG5ldyB2aXMuRGF0YVNldChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyMyksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCdDb252ZXJzYXRpb24nLCBob3N0VXJsICsgJy9tZWRpYS9hdmF0YXJzLzE1MC0xLmpwZycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyMywgMjMsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnTWFpbCBmcm9tIGJvc3MnLCBob3N0VXJsICsgJy9tZWRpYS9hdmF0YXJzLzE1MC0yLmpwZycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDI0LCAxNiwgMCwgMCksIGNvbnRlbnQ6IFwiUmVwb3J0XCIgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDI2KSxcclxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxMCwgOCwgMiksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlRyYWplY3QgQVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNywgMjgpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnTWVtbycsIGhvc3RVcmwgKyAnL21lZGlhL2F2YXRhcnMvMTUwLTMuanBnJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDI5KSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoJ1Bob25lIGNhbGwnLCBob3N0VXJsICsgJy9tZWRpYS9hdmF0YXJzLzE1MC00LmpwZycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAzMSksXHJcbiAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMTAsIDgsIDMpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJUcmFqZWN0IEJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDgsIDQsIDEyLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoJ1JlcG9ydCcsIGhvc3RVcmwgKyAnL21lZGlhL2F2YXRhcnMvMTUwLTUuanBnJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IDIwLFxyXG4gICAgICAgICAgICAgICAgYXhpczogNDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IHZpcy5UaW1lbGluZShjb250YWluZXIsIGl0ZW1zLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RWaXNUaW1lbGluZVN0eWxlLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVFZpc1RpbWVsaW5lU3R5bGUiLCJleGFtcGxlU3R5bGUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGVudCIsInRpdGxlIiwiaW1nIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lIiwibmFtZUNsYXNzZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpbWFnZSIsInNldEF0dHJpYnV0ZSIsInN5bWJvbCIsInN5bWJvbENsYXNzZXMiLCJhcHBlbmRDaGlsZCIsIml0ZW1zIiwidmlzIiwiRGF0YVNldCIsInN0YXJ0IiwiRGF0ZSIsImNvbnRlbnQiLCJob3N0VXJsIiwiZW5kIiwib3B0aW9ucyIsImVkaXRhYmxlIiwibWFyZ2luIiwiYXhpcyIsInRpbWVsaW5lIiwiVGltZWxpbmUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/vis-timeline/style.js"]();
/******/ 	
/******/ })()
;