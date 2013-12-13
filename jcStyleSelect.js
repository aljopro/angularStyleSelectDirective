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
                        var e, lastValue, selectElement, template;

                        el.removeAttribute('jc-style-select');
                        el.removeAttribute('class');
                        el.removeAttribute('ng-class');

                        template = '<span ng-class="' + ngClass + '" class="jc-style-select" >' +
                            '<span class="jc-style-select-value" >{{ selectValue }}</span>' +
                            '<span class="jc-style-select-control-wrapper">' + el.outerHTML + '</span>' +
                            '</span>';

                        e = $compile(template)(scope);
                        selectElement = e.find('select')[0];
                        element.replaceWith(e);

                        scope.$watch(function () {
                            var thisValue;

                            if (selectElement.selectedIndex == -1) {
                                return;
                            }

                            thisValue = selectElement.options[selectElement.selectedIndex].text;

                            if (thisValue !== lastValue) {
                                scope.selectValue = thisValue;
                            }

                            lastValue = thisValue;
                        });
                    }
                };
            }
        };
    }]);
