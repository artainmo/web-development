app.factory('emails', ['$http', function($http) {
  return $http.get('https://content.codecademy.com/courses/ltp4/emails-api/emails.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
