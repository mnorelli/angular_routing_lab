var app = angular.module('wineApp', ['ngRoute']);

console.log('Angular is working.');

////////////
// ROUTES //
////////////

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      // template: 'Home!'
      templateUrl: '/templates/wines-index.html',
      controller: 'WinesIndexCtrl'
    })
    .when('/wines/:id', {
        templateUrl: '/templates/wines-show.html',
        controller: 'WinesShowCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})

/////////////////
// CONTROLLERS //
/////////////////

app.controller('WinesIndexCtrl',function($scope, WineService){ 
  WineService.query()
    .then(function(wines){
        $scope.wines = wines; 
        // console.log($scope.wines);
    });
  });

app.controller('WinesShowCtrl', function($scope, $routeParams, WineService){ 
    // console.log(WineService);
    WineService.findOne($routeParams.id)
        .then(function(res, err){
            if(err){
                console.log('error ', err)
            }
            $scope.wine = res;
        });
    // console.log(wineId);
});



////////////
// MODELS //
////////////

app.factory('WineService', function($http){
  var WineService = {};

  WineService.query = function(){
    return $http.get('http://daretoexplore.herokuapp.com/wines')
        .then(function(response, err) {
            if(err){
                console.log('error: ', err);
            }
        //success method:
        return response.data;
      });
    }

  WineService.findOne = function(id){
     return $http.get('http://daretoexplore.herokuapp.com/wines/' +  id)
        .then(function(response, err){
            if(err){
                console.log('error: ', err);
            }
            return response.data;
        });
    }

  return WineService;

});











/*
 * Temporary Mock JSON
 * Eventually we will retrieve this data using AJAX
 */

ALL_WINES = [
    {
        "id": 1423,
        "created_at": "2015-10-13T01:30:28.255Z",
        "updated_at": "2015-10-13T01:30:28.255Z",
        "name": "CHATEAU DE SAINT COSME",
        "year": "2009",
        "grapes": "Grenache / Syrah",
        "country": "France",
        "region": "Southern Rhone",
        "price": 13,
        "description": "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/saint_cosme.jpg"
    },
    {
        "id": 1424,
        "created_at": "2015-10-13T01:30:28.608Z",
        "updated_at": "2015-10-13T01:30:28.608Z",
        "name": "LAN RIOJA CRIANZA",
        "year": "2006",
        "grapes": "Tempranillo",
        "country": "Spain",
        "region": "Rioja",
        "price": 21,
        "description": "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/lan_rioja.jpg"
    },
    {
        "id": 1425,
        "created_at": "2015-10-13T01:30:28.613Z",
        "updated_at": "2015-10-13T01:30:28.613Z",
        "name": "MARGERUM SYBARITE",
        "year": "2010",
        "grapes": "Sauvignon Blanc",
        "country": "USA",
        "region": "California",
        "price": 25,
        "description": "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/margerum.jpg"
    },
    {
        "id": 1426,
        "created_at": "2015-10-13T01:30:28.618Z",
        "updated_at": "2015-10-13T01:30:28.618Z",
        "name": "OWEN ROE \"EX UMBRIS\"",
        "year": "2009",
        "grapes": "Syrah",
        "country": "USA",
        "region": "Washington",
        "price": 15,
        "description": "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Dont miss this award-winning taste sensation.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/ex_umbris.jpg"
    },
    {
        "id": 1427,
        "created_at": "2015-10-13T01:30:28.623Z",
        "updated_at": "2015-10-13T01:30:28.623Z",
        "name": "REX HILL",
        "year": "2009",
        "grapes": "Pinot Noir",
        "country": "USA",
        "region": "Oregon",
        "price": 32,
        "description": "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/rex_hill.jpg"
    },
    {
        "id": 1428,
        "created_at": "2015-10-13T01:30:28.627Z",
        "updated_at": "2015-10-13T01:30:28.627Z",
        "name": "VITICCIO CLASSICO RISERVA",
        "year": "2007",
        "grapes": "Sangiovese Merlot",
        "country": "Italy",
        "region": "Tuscany",
        "price": 45,
        "description": "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/viticcio.jpg"
    },
    {
        "id": 1429,
        "created_at": "2015-10-13T01:30:28.631Z",
        "updated_at": "2015-10-13T01:30:28.631Z",
        "name": "CHATEAU LE DOYENNE",
        "year": "2005",
        "grapes": "Merlot",
        "country": "France",
        "region": "Bordeaux",
        "price": 12,
        "description": "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/le_doyenne.jpg"
    },
    {
        "id": 1430,
        "created_at": "2015-10-13T01:30:28.646Z",
        "updated_at": "2015-10-13T01:30:28.646Z",
        "name": "DOMAINE DU BOUSCAT",
        "year": "2009",
        "grapes": "Merlot",
        "country": "France",
        "region": "Bordeaux",
        "price": 34,
        "description": "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
        "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/bouscat.jpg"
    }
];
