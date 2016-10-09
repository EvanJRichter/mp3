
//https://code.angularjs.org/1.2.21/docs/guide/services

var app = angular.module('mp3',['ngRoute']);
	// .service('movieService', function() {
	// 	var movieList = null;

	// 	$http.get('./data/imdb250.json').
	// 		success(function(data) {
	// 	  		movieList = data;
	// 		}).
	// 		error(function(err) {
	// 	  		console.log(err);
	// 		});

	// 	 return {
	// 	 	getMovieList: function(){
	// 	 		return movieList;
	// 	 	}
	// 	 };
	// });


app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', { 
            templateUrl : 'partials/list.html',
            controller: 'myListController'
        })
        .when('/gallery', {
            templateUrl : 'partials/gallery.html',
            controller: 'myGalleryController'
        })
        .when('/details/:movie_id', {
            templateUrl : 'partials/details.html',
            controller: 'myDetailsController'
        })
        .otherwise({
            redirectTo: '/gallery'
        });
})



