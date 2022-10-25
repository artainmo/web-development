app.factory('shows', ['$http', function($http) {
  return $http.get('https://content.codecademy.com/courses/ltp4/shows-api/shows.json')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  })
}])
