'use strict';

weatherApp.factory('currentWeatherAppData', function($resource, $q){
	//var resource = $resource('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric');
	
	var resource = $resource('http://api.openweathermap.org/data/2.5/weather?q=:city&units=metric', {city:'@city'});
		return {
			getCurrentWeatherData: function(city){
				var deferred = $q.defer();
				
				resource.get({city:city},
					function (data){
					deferred.resolve(data);
				},
				function(response){
					deferred.reject(response);
				});
				
				return deferred.promise;
			}
			
		};

});