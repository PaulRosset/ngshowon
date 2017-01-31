var ngshow = angular.module('ngShowOn', []);

    ngshow.directive('ngShowOn', function() {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                var options = {
                    screenMobile: 767,
                    screenTablet: 1024,
                    getScreenMobile: function() {
                        return this.screenMobile;
                    },
                    getScreenTablet: function () {
                        return this.screenTablet;
                    }
                };
                switch (attrs.ngShowOn) {
                    case "desktop" :
                        if (window.outerWidth > options.getScreenTablet())
                            element.show();
                        else
                            element.hide();
                        break;
                    case "mobile" :
                        if (window.outerWidth <= options.getScreenMobile())
                            element.show();
                        else
                            element.hide();
                        break;
                    case "tablet" :
                        if (window.outerWidth <= options.getScreenTablet() && window.outerWidth >= options.getScreenMobile())
                            element.show();
                        else
                            element.hide();
                        break;
                    default:
                        element.hide(); // By default the element is hidden on all device
                }
            }
        }
    });