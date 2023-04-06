angular.module('myApp', [])
.controller('ViewWebController', ['$scope', '$http', function($scope, $http) {
    $scope.rtree = {};
    $scope.rtree1 = {};
    $scope.show = {}; 

    $scope.select = function() {
        var tem = null;
        if (angular.isUndefined($scope.search)) {
            tem = 1;
        } else {
            tem = $scope.search;
        }

        $http({
            method: 'post',
            url: 'selectmain.php',
            data: {search: tem},
        }).then(function mySuccess(response) {
            $scope.rtree = response.data;
        }, function myError(response) {
            // Handle error response
        });
    };

            var area = document.getElementById('previewarea');



    window.addEventListener('scroll', function() {
        let value = window.scrollY;

        let text = document.getElementById('text');
        let bird1 = document.getElementById('bird1');
        let bird2 = document.getElementById('bird2');
        let btn = document.getElementById('btn');
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');
        let water = document.getElementById('water');
        let header = document.getElementById('header');

        text.style.top = 50 + value * -.1 + '%';
        bird2.style.top = value * -1.5 + 'px';
        bird2.style.left = value * 2 + 'px';
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.left = value * -5 + 'px';
        if (btn) { // check if btn is not null
            btn.style.marginTop = value * 1.5 + 'px';
        }
        rocks.style.top = value * -.13 + 'px';
        forest.style.top = value * .40 + 'px';
        if (header) { // check if header is not null
            header.style.top = value * .5 + 'px';
        }
    });
}]);

