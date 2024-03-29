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
 
              // เมื่อมีการเลือกรูปภาพใหม่
          document.getElementById('imageinput').addEventListener('change', function (event) {
            var previewArea = document.getElementById('previewarea');
            previewArea.innerHTML = ''; // ล้างรายการรูปภาพที่แสดงอยู่ก่อนหน้า

            // แสดงตัวอย่างรูปภาพ
            for (var i = 0; i < event.target.files.length; i++) {
                var image = document.createElement('img');
                image.src = URL.createObjectURL(event.target.files[i]);
                image.className = 'preview-image';
                previewArea.appendChild(image);
            }
          });



    $scope.rtree = {};
    $scope.rtree1 = {};
    $scope.show = {}; 
    // อัปเดตส่วนที่รับค่า ENUM จากฟอร์ม
    
 var fd = new FormData();

    $scope.select = function() {
      var tem = null;
      var searchTerm = $scope.search || '';
      if (angular.isUndefined($scope.search)) {
          tem = 1;
      } else {
          tem = $scope.search;
      }

      $http.get('selectmain.php', {params: {search: searchTerm}}).then(function(response) {
        $scope.rtree = response.data;
      }, function(error) {
        console.error(error);
      });
    };

     // อัปเดตส่วนที่ส่งข้อมูล
     $scope.Update = function(){              //สร้างฟังก์ชันเพื่อส่งค่าไปใช้ในฟอร์ม   //http ทำการสั่งงาน then ตอบสนองการทำงาน
        let newdata1 = new FormData();//2 
        let fileTag = document.getElementById("imageinput2"); //3 

      for(var i=0; i<fileTag.files.length; i++){ //4 
          newdata1.append(i, fileTag.files[i]); 
      };
      newdata1.append('data', JSON.stringify($scope.rtree1)); //5 
        $http({ method : "post" ,
            url : "edit.php",
            data : newdata1 ,
            transformRequest: angular.identity, //6 
            headers: { "Content-Type": undefined }, //6 
            
        }).then  (function(A){
        if (A.data == 'แก้ไขข้อมูลเสร็จเรียบร้อย'){$scope.show = "แก้ไขข้อมูลเสร็จสิ้น";}
        else if (A.data == 'แก้ไขข้อมูลล้มเหลว'){$scope.show = "แก้ไขข้อมูลล้มเหลว";}
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
      if (A.data == 'เพิ่มข้อมูลเรียบร้อย'){$scope.show = "เพิ่มข้อมูลเสร็จสิ้น";}
      else if (A.data == 'เกิดข้อผิดพลาดในการเพิ่มข้อมูล'){$scope.show = "เพิ่มข้อมูลล้มเหลว";}
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