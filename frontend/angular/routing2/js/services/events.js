app.factory('events', ["$http", function($http) {
  return $http.get('https://content.codecademy.com/courses/ltp4/events-api/events.json?_gl=1*1c6tgav*_ga*NjQyMDAyNzQ4LjE2NjY3MjA5NzM.*_ga_3LRZM6TM9L*MTY2NjcyMDk3Mi4xLjEuMTY2NjcyMjg2MC41NC4wLjA.')
          .success(function(data) {
            return data;
          })
          .error(function(err) {
            return err;
          });
}]);
