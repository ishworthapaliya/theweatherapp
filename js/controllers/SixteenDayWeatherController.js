'use strict';

weatherApp.controller('sixteenDayWeatherController', 

	function sixteenDayWeatherController($scope, sixteenDayWeatherAppData, $routeParams){
	
	
	$scope.searchWeatherByCity = function(city){
		sixteenDayWeatherAppData.getWeatherData(city).then(function(res){
   	  		console.log(res);
   	  		console.log(res.cod);
   	  		
   	  		//$scope.weatherInfos = res.data;
   	  		$scope.cod= res.cod;
   	  		$scope.weatherData = res.list;
   	  		//$scope.weatherDate = res.dt +'000'; //receiving unix timestamp in seconds, convert to miliseconds
   	  		//$scope.main = res.data.main;
	 });
   };
    
});
