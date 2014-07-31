'use strict';

weatherApp.controller('sixteenDayWeatherController', 

	function sixteenDayWeatherController($scope, sixteenDayWeatherAppData, $routeParams){
	
	$scope.searchWeatherByCity = function(city){
		sixteenDayWeatherAppData.getWeatherData(city).then(function(res){
   	  		$scope.cod= res.cod;
   	  		$scope.weatherData = res.list;
	 });
   };
    
});
