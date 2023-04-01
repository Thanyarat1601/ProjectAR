var app = angular.module('ViewWeb', []);
app.directive('fileModel', ['$parse', function ($parse) { 
  return { 
     restrict: 'A', 
     link: function(scope, element, attrs) { 
        var model = $parse(attrs.fileModel); 
        var modelSetter = model.assign; 

        element.bind('change', function() { 
           scope.$apply(function() { 
              modelSetter(scope, element[0].files);
              scope.$apply(); 
           }); 

        }); 

     } 

  }; 

}]); 


        // document.addEventListener('ViewWebController',['$scope','$http', function($scope,$http,) {
        // const input = document.getElementById('imageinput'); //1 
        // const area = document.getElementById('previewarea');//2 
        // input.onchange = (e) =>{ //3
        //     let text = document.getElementById('text');
        //     let bird1 = document.getElementById('bird1');
        //     let bird2 = document.getElementById('bird2');
        //     let btn = document.getElementById('btn');
        //     let rocks = document.getElementById('rocks');
        //     let forest = document.getElementById('forest');
        //     let water = document.getElementById('water');
        //     let header = document.getElementById('header');
            
        //     window.addEventListener('scroll', function() {
        //         let value = window.scrollY;
                
        //         text.style.top = 50 + value * -.1 + '%';
        //         bird2.style.top = value * -1.5 + 'px';
        //         bird2.style.left = value * 2 + 'px';
        //         bird1.style.top = value * -1.5 + 'px';
        //         bird1.style.left = value * -5 + 'px';
        //         // btn.style.marginTop = value * 1.5 + 'px';
        //         rocks.style.top = value * -.12 + 'px';
        //         forest.style.top = value * .40 + 'px';
        //         header.style.top = value * .5 + 'px';
        //     }
        // }       
        // }]);

// app.controller('ViewWebController',['$scope','$http', function($scope,$http,) {
  
//         while (area.hasChildNodes()) { //3 
//               area.removeChild(area.firstChild); 
//         }; 
//         for (var i = 0; i < e.target.files.length; i++) { //4 
//               let img = new Image(); //4 
//               img.width = 100;       //4 
//               img.src = URL.createObjectURL(e.target.files[i]);  //4 
//               area.appendChild(img);  //5 
//               img.onload = () => URL.revokeObjectURL(img.src);  //6 
//         }; 
//     }];
 
document.addEventListener('ViewWebController',['$scope','$http', function($scope,$http,) {
    const input = document.getElementById('imageinput'); //1 
    const area = document.getElementById('previewarea');//2 
    input.onchange = (e) =>{ //3
        let text = document.getElementById('text');
        let bird1 = document.getElementById('bird1');
        let bird2 = document.getElementById('bird2');
        let btn = document.getElementById('btn');
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');
        let water = document.getElementById('water');
        let header = document.getElementById('header');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;

            text.style.top = 50 + value * -.1 + '%';
            bird2.style.top = value * -1.5 + 'px';
            bird2.style.left = value * 2 + 'px';
            bird1.style.top = value * -1.5 + 'px';
            bird1.style.left = value * -5 + 'px';
            // btn.style.marginTop = value * 1.5 + 'px';
            rocks.style.top = value * -.12 + 'px';
            forest.style.top = value * .40 + 'px';
            header.style.top = value * .5 + 'px';
        });
    }       
}]);


//  $scope.rtree = {};
 
 
//  var fd = new FormData();

//         $scope.select = function(){  
//         var tem = null;
//         if(angular.isUndefined($scope.search)) {
//         tem = 1;
//     }else{
//         tem = $scope.search;
//     }

//         $http({method : 'post' ,
//                url : './DB/select.php',
//                data : {search:tem},
          
//     }).then( function  mySuccess(response){
//                $scope.rtree = response.data;
//             },  

//             function myError(response){

  
//             });         
//         };
//     }]);



    $scope.rtree = {};

        var fd = new FormData();

        $scope.select = function() {
            var tem = null;
            if (angular.isUndefined($scope.search)) {
                tem = 1;
            } else {
                tem = $scope.search;
            }

            $http({
                method: 'post',
                url: './DB/select.php',
                data: {search: tem},
            }).then(function mySuccess(response) {
                $scope.rtree = response.data;
            }, function myError(response) {
                // Handle error response
            });
        };
