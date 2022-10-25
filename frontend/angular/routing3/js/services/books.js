app.factory('books', ['$http', function($http){
  return $http.get('https://content.codecademy.com/courses/ltp4/books-api/books.json')
  .success(function(data){return data;})
  .error(function(err){return err;})
}])
