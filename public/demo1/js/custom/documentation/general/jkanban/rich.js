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

/***/ "./resources/assets/core/js/custom/documentation/general/jkanban/rich.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/jkanban/rich.js ***!
  \*******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTJKanbanDemoRich = function () {\n  // Private functions\n  var exampleRich = function exampleRich() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_rich',\n      gutter: '0',\n      click: function click(el) {\n        alert(el.innerHTML);\n      },\n      boards: [{\n        'id': '_backlog',\n        'title': 'Backlog',\n        'class': 'light-dark',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-1.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">SEO Optimization</span>\\n                        \\t            <span class=\\\"badge badge-light-success\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">A.D</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Finance</span>\\n                        \\t            <span class=\\\"badge badge-light-danger\\\">Pending</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }]\n      }, {\n        'id': '_todo',\n        'title': 'To Do',\n        'class': 'light-danger',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-2.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Server Setup</span>\\n                        \\t            <span class=\\\"badge badge-light-info\\\">Completed</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-3.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Report Generation</span>\\n                        \\t            <span class=\\\"badge badge-light-warning\\\">Due</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'light-primary',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                            \\t         <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-1.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Marketing</span>\\n                        \\t            <span class=\\\"badge badge-light-danger\\\">Planning</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-light-info me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">A.P</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Finance</span>\\n                        \\t            <span class=\\\"badge badge-light-primary\\\">Done</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'light-success',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-4.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">SEO Optimization</span>\\n                        \\t            <span class=\\\"badge badge-light-success\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-5.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Product Team</span>\\n                        \\t            <span class=\\\"badge badge-light-danger\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }]\n      }, {\n        'id': '_deploy',\n        'title': 'Deploy',\n        'class': 'light-primary',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-light-warning me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">D.L</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">SEO Optimization</span>\\n                        \\t            <span class=\\\"badge badge-light-success\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-light-danger me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">E.K</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Requirement Study</span>\\n                        \\t            <span class=\\\"badge badge-light-warning\\\">Scheduled</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }]\n      }]\n    });\n    var toDoButton = document.getElementById('addToDo');\n    toDoButton.addEventListener('click', function () {\n      kanban.addElement('_todo', {\n        'title': \"\\n                        <div class=\\\"d-flex align-items-center\\\">\\n                            <div class=\\\"symbol symbol-light-primary me-3\\\">\\n                                <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-6.jpg\\\" />\\n                            </div>\\n                            <div class=\\\"d-flex flex-column align-items-start\\\">\\n                                <span class=\\\"text-dark-50 fw-bold mb-1\\\">Requirement Study</span>\\n                                <span class=\\\"badge badge-light-success\\\">Scheduled</span>\\n                            </div>\\n                        </div>\\n                    \")\n      });\n    });\n    var addBoardDefault = document.getElementById('addDefault');\n    addBoardDefault.addEventListener('click', function () {\n      kanban.addBoards([{\n        'id': '_default',\n        'title': 'New Board',\n        'class': 'light-primary',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                                    <div class=\\\"symbol symbol-success me-3\\\">\\n                                        <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-7.jpg\\\" />\\n                                    </div>\\n                                    <div class=\\\"d-flex flex-column align-items-start\\\">\\n                                        <span class=\\\"text-dark-50 fw-bold mb-1\\\">Payment Modules</span>\\n                                        <span class=\\\"badge badge-light-primary\\\">In development</span>\\n                                    </div>\\n                                </div>\\n                        \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                                    <div class=\\\"symbol symbol-success me-3\\\">\\n                                        <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-8.jpg\\\" />\\n                                    </div>\\n                                    <div class=\\\"d-flex flex-column align-items-start\\\">\\n                                    <span class=\\\"text-dark-50 fw-bold mb-1\\\">New Project</span>\\n                                    <span class=\\\"badge badge-light-danger\\\">Pending</span>\\n                                </div>\\n                            </div>\\n                        \")\n        }]\n      }]);\n    });\n    var removeBoard = document.getElementById('removeBoard');\n    removeBoard.addEventListener('click', function () {\n      kanban.removeBoard('_done');\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRich();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoRich.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL3JpY2guanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsaUJBQWlCLEdBQUcsWUFBVztBQUMvQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVc7QUFDekIsUUFBSUMsTUFBTSxHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUNyQkMsTUFBQUEsT0FBTyxFQUFFLHVCQURZO0FBRXJCQyxNQUFBQSxNQUFNLEVBQUUsR0FGYTtBQUdyQkMsTUFBQUEsS0FBSyxFQUFFLGVBQVNDLEVBQVQsRUFBYTtBQUNoQkMsUUFBQUEsS0FBSyxDQUFDRCxFQUFFLENBQUNFLFNBQUosQ0FBTDtBQUNILE9BTG9CO0FBTXJCQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNELGNBQU0sVUFETDtBQUVELGlCQUFTLFNBRlI7QUFHRCxpQkFBUyxZQUhSO0FBSUQsZ0JBQVEsQ0FBQztBQUNELHFQQUcrQkMsT0FIL0I7QUFEQyxTQUFELEVBYUo7QUFDSTtBQURKLFNBYkk7QUFKUCxPQUFELEVBZ0NKO0FBQ0ksY0FBTSxPQURWO0FBRUksaUJBQVMsT0FGYjtBQUdJLGlCQUFTLGNBSGI7QUFJSSxnQkFBUSxDQUFDO0FBQ0QscVBBRytCQSxPQUgvQjtBQURDLFNBQUQsRUFhSjtBQUNJLHFQQUcrQkEsT0FIL0I7QUFESixTQWJJO0FBSlosT0FoQ0ksRUFnRUo7QUFDSSxjQUFNLFVBRFY7QUFFSSxpQkFBUyxTQUZiO0FBR0ksaUJBQVMsZUFIYjtBQUlJLGdCQUFRLENBQUM7QUFDRCxzUEFHZ0NBLE9BSGhDO0FBREMsU0FBRCxFQWFKO0FBQ0k7QUFESixTQWJJO0FBSlosT0FoRUksRUFnR0o7QUFDSSxjQUFNLE9BRFY7QUFFSSxpQkFBUyxNQUZiO0FBR0ksaUJBQVMsZUFIYjtBQUlJLGdCQUFRLENBQUM7QUFDRCxxUEFHK0JBLE9BSC9CO0FBREMsU0FBRCxFQWFKO0FBQ0kscVBBRytCQSxPQUgvQjtBQURKLFNBYkk7QUFKWixPQWhHSSxFQWdJSjtBQUNJLGNBQU0sU0FEVjtBQUVJLGlCQUFTLFFBRmI7QUFHSSxpQkFBUyxlQUhiO0FBSUksZ0JBQVEsQ0FBQztBQUNEO0FBREMsU0FBRCxFQWFKO0FBQ0k7QUFESixTQWJJO0FBSlosT0FoSUk7QUFOYSxLQUFaLENBQWI7QUF5S0EsUUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBakI7QUFDQUYsSUFBQUEsVUFBVSxDQUFDRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQzVDYixNQUFBQSxNQUFNLENBQUNjLFVBQVAsQ0FDSSxPQURKLEVBQ2E7QUFDTCxxT0FHa0NMLE9BSGxDO0FBREssT0FEYjtBQWVILEtBaEJEO0FBa0JBLFFBQUlNLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQXRCO0FBQ0FHLElBQUFBLGVBQWUsQ0FBQ0YsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFlBQVc7QUFDakRiLE1BQUFBLE1BQU0sQ0FBQ2dCLFNBQVAsQ0FDSSxDQUFDO0FBQ0csY0FBTSxVQURUO0FBRUcsaUJBQVMsV0FGWjtBQUdHLGlCQUFTLGVBSFo7QUFJRyxnQkFBUSxDQUFDO0FBQ0QseVBBR2tDUCxPQUhsQztBQURDLFNBQUQsRUFXRDtBQUNDLHlQQUdrQ0EsT0FIbEM7QUFERCxTQVhDO0FBSlgsT0FBRCxDQURKO0FBK0JILEtBaENEO0FBa0NBLFFBQUlRLFdBQVcsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBQ0FLLElBQUFBLFdBQVcsQ0FBQ0osZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBVztBQUM3Q2IsTUFBQUEsTUFBTSxDQUFDaUIsV0FBUCxDQUFtQixPQUFuQjtBQUNILEtBRkQ7QUFHSCxHQXBPRDs7QUFzT0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNibkIsTUFBQUEsV0FBVztBQUNkO0FBSkUsR0FBUDtBQU1ILENBOU91QixFQUF4QixDLENBZ1BBOzs7QUFDQW9CLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ3RCLEVBQUFBLGlCQUFpQixDQUFDb0IsSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9yaWNoLmpzPzA1ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEpLYW5iYW5EZW1vUmljaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlUmljaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBrYW5iYW4gPSBuZXcgakthbmJhbih7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcja3RfZG9jc19qa2FuYmFuX3JpY2gnLFxyXG4gICAgICAgICAgICBndXR0ZXI6ICcwJyxcclxuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlbC5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2FyZHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19iYWNrbG9nJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnQmFja2xvZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LWRhcmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtMS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+U0VPIE9wdGltaXphdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LXN1Y2Nlc3NcIj5JbiBwcm9ncmVzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzeW1ib2wtbGFiZWwgZnMtNFwiPkEuRDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPkZpbmFuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1kYW5nZXJcIj5QZW5kaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ190b2RvJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnVG8gRG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtMi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+U2VydmVyIFNldHVwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtaW5mb1wiPkNvbXBsZXRlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtMy5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+UmVwb3J0IEdlbmVyYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC13YXJuaW5nXCI+RHVlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ193b3JraW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnV29ya2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTEuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPk1hcmtldGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LWRhbmdlclwiPlBsYW5uaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC1saWdodC1pbmZvIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN5bWJvbC1sYWJlbCBmcy00XCI+QS5QPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+RmluYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LXByaW1hcnlcIj5Eb25lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19kb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnRG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtNC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+U0VPIE9wdGltaXphdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LXN1Y2Nlc3NcIj5JbiBwcm9ncmVzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtNS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+UHJvZHVjdCBUZWFtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtZGFuZ2VyXCI+SW4gcHJvZ3Jlc3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2RlcGxveScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RlcGxveScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtbGlnaHQtd2FybmluZyBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzeW1ib2wtbGFiZWwgZnMtNFwiPkQuTDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlNFTyBPcHRpbWl6YXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1zdWNjZXNzXCI+SW4gcHJvZ3Jlc3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLWxpZ2h0LWRhbmdlciBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzeW1ib2wtbGFiZWwgZnMtNFwiPkUuSzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlJlcXVpcmVtZW50IFN0dWR5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtd2FybmluZ1wiPlNjaGVkdWxlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHRvRG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9EbycpO1xyXG4gICAgICAgIHRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAga2FuYmFuLmFkZEVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAnX3RvZG8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtbGlnaHQtcHJpbWFyeSBtZS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtNi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+UmVxdWlyZW1lbnQgU3R1ZHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1zdWNjZXNzXCI+U2NoZWR1bGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGFkZEJvYXJkRGVmYXVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGREZWZhdWx0Jyk7XHJcbiAgICAgICAgYWRkQm9hcmREZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGthbmJhbi5hZGRCb2FyZHMoXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ05ldyBCb2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC1zdWNjZXNzIG1lLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTcuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlBheW1lbnQgTW9kdWxlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtcHJpbWFyeVwiPkluIGRldmVsb3BtZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLXN1Y2Nlc3MgbWUtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtOC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFyay01MCBmdy1ib2xkIG1iLTFcIj5OZXcgUHJvamVjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1kYW5nZXJcIj5QZW5kaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcmVtb3ZlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQm9hcmQnKTtcclxuICAgICAgICByZW1vdmVCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBrYW5iYW4ucmVtb3ZlQm9hcmQoJ19kb25lJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVSaWNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUSkthbmJhbkRlbW9SaWNoLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpLYW5iYW5EZW1vUmljaCIsImV4YW1wbGVSaWNoIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJjbGljayIsImVsIiwiYWxlcnQiLCJpbm5lckhUTUwiLCJib2FyZHMiLCJob3N0VXJsIiwidG9Eb0J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkRWxlbWVudCIsImFkZEJvYXJkRGVmYXVsdCIsImFkZEJvYXJkcyIsInJlbW92ZUJvYXJkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/jkanban/rich.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/jkanban/rich.js"]();
/******/ 	
/******/ })()
;