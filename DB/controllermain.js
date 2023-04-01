angular.module('myApp', [])
.controller('ViewWebController', ['$scope', '$http', function($scope, $http) {
    $scope.rtree = {};

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

//     fetch('http://localhost/ProjectAR/DB/api/get_image_url.php')
//   .then(response => response.json())
//   .then(data => {
//     var area = document.getElementById('previewarea');
//     var img = new Image();
//     img.width = 100;
//     img.src = data.url; // ใช้ URL ของภาพจาก API endpoint ที่ส่งกลับมา
//     area.appendChild(img);
//   });


            var area = document.getElementById('previewarea');

            // for (var i = 0; i < e.target.files.length; i++) {
            //     let img = new Image();
            //     img.width = 100;
            //     img.src = URL.createObjectURL(e.target.files[i]);
            //     area.appendChild(img);
            //     img.onload = () => URL.revokeObjectURL(img.src);
            // };

            // var data =  {search: tem};

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
        btn.style.marginTop = value * 1.5 + 'px';
        rocks.style.top = value * -.12 + 'px';
        forest.style.top = value * .40 + 'px';
        header.style.top = value * .5 + 'px';
    });
}]);
