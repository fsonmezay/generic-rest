//js/restapp.js

(function() {
    var app = angular.module('restapp', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
                templateUrl: 'partials/main.html',
                controller: 'MainController'
            })
			.when('/foo', {
		 		templateUrl: 'partials/foo.html',
		  		controller: 'FooController'
		  	})
		  	.when('/foo/:id', {
                templateUrl: 'partials/foo-detail.html',
                controller: 'FooDetailController'
            })
		  	.when('/bar', {
  		 		templateUrl: 'partials/bar.html',
  		  		controller: 'BarController'
  		  	})
  		  	.when('/bar/:id', {
                templateUrl: 'partials/bar-detail.html',
                controller: 'BarDetailController'
            })
            .when('/error', {
                templateUrl: 'partials/error.html',
                controller: 'ErrorController'
            })
            .otherwise({
                redirectTo: '/error'
            });
    }]);


    app.controller('MainController', ['$scope', function($scope) {

    }]);
    
    app.controller('ErrorController', ['$scope', function($scope) {
    	$scope.errorMessage = "Error Occured!";
    }]);

    app.service('RestService', function($http) {
        var service = this;
        
        function getPath(section) {
            return '/' + section + '/';
        }

        function getUrl(section, action) {
            return getPath(section) + action;
        }

        service.list = function(section) {
            return $http.get(getUrl(section, ""));
        };
        
        service.insert = function(section, item) {
            return $http.post(getUrl(section, ""), item);
        };

        service.update = function(section, item) {
            return $http.put(getUrl(section, item.id), item);
        };
        
        service.get = function(section, id) {
        	console.log(getUrl(section, id));
            return $http.get(getUrl(section, id), id); //http://abc.com/section/#id -> /menu/2 
        };

        service.delete = function(section, id) {
            return $http.delete(getUrl(section, id), {
                'id': id
            });
        };
    });


    
    app.controller('FooController', ['$scope', '$routeParams', 'RestService', function($scope, $routeParams, RestService) {
    	
    	$scope.path = "foo";
    	
	    function resetParams() {
	        $scope.actionName = "New Foo";
	        $scope.submitButtonLabel = "Insert";
	        $scope.currentFoo = {
	            id: null,
	            "name": null,
	            "age":0
	        };
	        $scope.isFormClean = true;
	        $scope.foo = {
	        	"name": null,
	        	"age" : 0
	        };
	    }
	
	    function fooList() {
	        RestService.list($scope.path)
	            .then(function(response) {
	                $scope.foos = response.data;
	            });
	    }
	
	    function resetParamsAndLoadFooList() {
	        resetParams();
	        fooList();
	    }
	    	
	    $scope.selectFoo = function(foo) {
	        $scope.actionName = "Update Foo";
	        $scope.submitButtonLabel = "Update";
	        $scope.currentFoo = foo;
	        $scope.foo = $scope.currentFoo;
	        $scope.isFormClean = false;
	    };
	
	    $scope.submit = function() {
	        if ($scope.isFormClean) {
	            $scope.insert($scope.path, $scope.foo);
	        } else  {
	            $scope.currentFoo = $scope.foo;
	            $scope.update($scope.path, $scope.currentFoo);
	        }
	        resetParamsAndLoadFooList();
	    };
	
	    $scope.insert = function(path, foo) {
	        RestService.insert(path, foo)
	            .then(function(response) {
	                resetParamsAndLoadFooList();
	            });
	    };
	
	    $scope.update = function(path, foo) {
	        RestService.update(path, foo)
	            .then(function(response) {
	                resetParamsAndLoadFooList();
	            });
	    };
	
	    $scope.delete = function(path, fooId) {
	        RestService.delete(path, fooId)
	            .then(function(response) {
	                resetParamsAndLoadFooList();
	            });
	    };
	
	    $scope.cancel = function() {
	        resetParams();
	    };
	    
	    resetParamsAndLoadFooList();

    }]);
    
    app.controller('FooDetailController', ['$scope', '$routeParams', 'RestService', function($scope, $routeParams, RestService) {
    	
    	RestService.get("foo", $routeParams.id)
        .then(function(response) {
            $scope.detailFoo = response.data;
        });
    }]);
    
    
    app.controller('BarController', ['$scope', 'RestService', function($scope, RestService) {
    	
    	$scope.path = "bar";
    	
	    function resetParams() {
	        $scope.actionName = "New Bar";
	        $scope.submitButtonLabel = "Insert";
	        $scope.currentBar = {
	            id: null,
	            "propertyName": null,
	            "propertyValue": null
	        };
	        $scope.bar = {
	        	"propertyName": null,
	        	"propertyValue" : null
	        };
	        $scope.isFormClean = true;
	    }
	
	    function barList() {
	        RestService.list($scope.path)
	            .then(function(response) {
	                $scope.bars = response.data;
	            });
	    }
	
	    function resetParamsAndLoadBarList() {
	        resetParams();
	        barList();
	    }
	    
	    $scope.getBar = function(path, barId) {
	        RestService.get(path, barId)
	            .then(function(response) {
	                $scope.detailBar = response.data;
	            });
	    };
	
	    $scope.selectBar = function(bar) {
	        $scope.actionName = "Update Bar";
	        $scope.submitButtonLabel = "Update";
	        $scope.currentBar = bar;
	        $scope.bar = $scope.currentBar;
	        $scope.isFormClean = false;
	    };
	
	    $scope.submit = function() {
	        if ($scope.isFormClean) {
	            $scope.insert($scope.path, $scope.bar);
	        } else  {
	            $scope.currentBar = $scope.bar;
	            $scope.update($scope.path, $scope.currentBar);
	        }
	        resetParamsAndLoadBarList();
	    };
	
	    $scope.insert = function(path, bar) {
	        RestService.insert(path, bar)
	            .then(function(response) {
	                resetParamsAndLoadBarList();
	            });
	    };
	
	    $scope.update = function(path, bar) {
	        RestService.update(path, bar)
	            .then(function(response) {
	                resetParamsAndLoadBarList();
	            });
	    };
	
	    $scope.delete = function(path, barId) {
	        RestService.delete(path, barId)
	            .then(function(response) {
	                resetParamsAndLoadBarList();
	            });
	    };
	
	    $scope.cancel = function() {
	        resetParams();
	    };
	
	    resetParamsAndLoadBarList();

    }]);
    
    app.controller('BarDetailController', ['$scope', '$routeParams', 'RestService', function($scope, $routeParams, RestService) {
    	
    	RestService.get("bar", $routeParams.id)
        .then(function(response) {
            $scope.detailBar = response.data;
        });
    }]);


})();
