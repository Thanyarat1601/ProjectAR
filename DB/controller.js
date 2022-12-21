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
app.controller('ViewWebController',['$scope','$http', function($scope,$http,) {
  const input = document.getElementById('imageinput'); //1 
    const area = document.getElementById('previewarea');//2 
    input.onchange = (e) =>{ //3 
        while (area.hasChildNodes()) { //3 
              area.removeChild(area.firstChild); 
        }; 
        for (var i = 0; i < e.target.files.length; i++) { //4 
              let img = new Image(); //4 
              img.width = 100;       //4 
              img.src = URL.createObjectURL(e.target.files[i]);  //4 
              area.appendChild(img);  //5 
              img.onload = () => URL.revokeObjectURL(img.src);  //6 
        }; 
    }; 
 $scope.tree = {};
 $scope.show = {};
var fd = new FormData();

        $scope.select = function(){  
        var tem = null;
        if(angular.isUndefined($scope.search)) {
        tem = 1;
    }else{
        tem = $scope.search;
    }

        $http({method : 'post' ,
               url : 'select.php',
               data : {search:tem},
          
    }).then( function  mySuccess(response){
               $scope.tree = response.data;
            },  

            function myError(response){

  
            });         
        }; 
        
        $scope.Update = function(){              //สร้างฟังก์ชันเพื่อส่งค่าไปใช้ในฟอร์ม   //http ทำการสั่งงาน then ตอบสนองการทำงาน
          let newdata = new FormData();//2 
          let fileTag = document.getElementById("imageinput2"); //3 
  
        for(var i=0; i<fileTag.files.length; i++){ //4 
            newdata.append(i, fileTag.files[i]); 
        };
        newdata.append('data', JSON.stringify($scope.tree)); //5 
          $http({ method : 'post' ,
              url : "edit.php",
              data : newdata ,
              transformRequest: angular.identity, //6 
              headers: { "Content-Type": undefined }, //6 
              
          }).then  (function(A){
          if (A.data == 'up'){$scope.show = "แก้ไขข้อมูลเสร็จสิ้น";}
          else if (A.data == 'down'){$scope.show = "แก้ไขข้อมูลล้มเหลว";}
          else {$scope.show ="กรุณาติดต่อผู้ดูแลระบบ";}
         
          // const myModal = new bootstrap.Modal('#exampleModal2', {
          //   keyboard: false
          // });
          // myModal.show();
        },  
  
        function(B){

          const myModal = new bootstrap.Modal('#exampleModal2', {
            keyboard: false
          });
          myModal.show();
  
  
  
        });  
  
      }; 
    
    $scope.senddata = function(){              //สร้างฟังก์ชันเพื่อส่งค่าไปใช้ในฟอร์ม   //http ทำการสั่งงาน then ตอบสนองการทำงาน
      let newdata = new FormData();//2 
      let fileTag = document.getElementById("imageinput"); //3 

      for(var i=0; i<fileTag.files.length; i++){ //4 
          newdata.append(i, fileTag.files[i]); 
      }; 
      newdata.append('data', JSON.stringify($scope.frntree)); //5

        $http({method : "post" ,
            url : "insert.php",
            data : newdata,
            transformRequest: angular.identity, //6 
            headers: { "Content-Type": undefined }, //6 
            })
        .then  ( function(A){
        if (A.data == 'PP'){$scope.show = "เพิ่มข้อมูลเสร็จสิ้น";}
        else if (A.data == 'LOL'){$scope.show = "เพิ่มข้อมูลล้มเหลว";}
        else {$scope.show ="กรุณาติดต่อผู้ดูแลระบบ";}
       
        const myModal = new bootstrap.Modal('#exampleModal2', {
          keyboard: false
        });
        myModal.show(); 
  },  

  function(B){

    const myModal = new bootstrap.Modal('#exampleModal2', {
        keyboard: false
      });
      myModal.show();



    });  


}; 
    
     $scope.deleteData = function(xxx){
    if(confirm("Are you sure you want to remove it?"))
    {
        $http({method : 'post' ,
        url : "delete.php",
        data :   {YYY:xxx},
        header : {"Content-Type": "application/x-www-from-urlencoded"}})
        .then  ( function(A){
        if (A.data == '124'){$scope.show = "ลบข้อมูลสำเร็จเรียบร้อย";}
        else if (A.data == '587'){$scope.show = "ลบข้อมูลไม่สำเร็จ";}
        else {$scope.show ="กรุณาติดต่อผู้ดูแลระบบ";}

        const myModal = new bootstrap.Modal('#exampleModal3', {
        keyboard: false
        });
        myModal.show();
      }, function myError(response){ } 
         
        ); 
   }
    };
}]);           
            







