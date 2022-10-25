app.factory('emails', ['$http', function($http) {
  return $http.get('https://content.codecademy.com/courses/ltp4/emails-api/emails.json?_gl=1*1hi8gn7*_ga*MDA5MDE2OTkzMC4xNjU3MjczOTc1*_ga_3LRZM6TM9L*MTY2NjcwNjQ5MS4xMi4xLjE2NjY3MDkzOTIuNTcuMC4w')
  .success(function(data) {
    return data
  })
  .error(function(err) {
    return err;
  })
}])
