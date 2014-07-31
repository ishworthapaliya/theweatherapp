'use strict';

// weatherApp.controller('WeatherController', 
	// function WeatherController ($scope, $http) {
		  // $http.get('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric')
		       // .then(function(res){
		          // $scope.weatherInfos = res.data; 
		          // $scope.weather = res.data.weather;
		          // $scope.main = res.data.main;     
		       // })
// });


weatherApp.controller('currentWeatherController', 

	function currentWeatherController($scope, currentWeatherAppData, $routeParams){
	
	
	$scope.searchCurrentWeatherByCity = function(city){
		currentWeatherAppData.getCurrentWeatherData(city).then(function(res){
   	  		//console.log(res);
   	  		//console.log(res.cod);
   	  		
   	  		//$scope.weatherInfos = res.data;
   	  		$scope.weatherData = res;
   	  		$scope.weatherDate = res.dt * 1000; //receiving unix timestamp in seconds, convert to miliseconds
   	  		//$scope.main = res.data.main;
	 });
   };
    
});
