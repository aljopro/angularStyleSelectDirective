/*!
 * @license Stylable Select Directive
 * (c) 2013 John Chappell
 * License: MIT
 */

'use strict';

angular.module('jcStyleSelect', [])
    .directive('jcStyleSelect', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            compile: function () {
                return {
                    pre: function preLink(scope, element, attrs) {
                        var el = element[0];
                        var ngClass = attrs.ngClass || '';
                        var e, lastValue, selectElement, selectValueElement, template;

                        el.removeAttribute('jc-style-select');
                        el.removeAttribute('class');
                        el.removeAttribute('ng-class');

                        template = '<span ng-class="' + ngClass + '" class="jc-style-select" >' +
                            '<span class="jc-style-select-value" ></span>' +
                            '<span class="jc-style-select-control-wrapper">' + el.outerHTML + '</span>' +
                            '</span>';

                        e = $compile(template)(scope);
                        selectElement = e.find('select')[0];
                        selectValueElement = e.find('span')[0];
                        element.replaceWith(e);

                        scope.$watch(function () {
                            var thisValue;
                            if (selectElement.selectedIndex == -1) {
                                return;
                            }

                            thisValue = selectElement.options[selectElement.selectedIndex].text;

                            if (thisValue !== lastValue) {
                                selectValueElement.innerHTML = thisValue;
                            }

                            lastValue = thisValue;
                        });
                    }
                };
            }
        };
    }]);
