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

// เมื่อมีการเลือกไฟล์ QR Code ใหม่
document.getElementById('qrcodeinput').addEventListener('change', function (event) {
  var qrcodePreviewArea = document.getElementById('qrcodepreviewarea');
  qrcodePreviewArea.innerHTML = ''; // ล้างรายการ QR Code ที่แสดงอยู่ก่อนหน้า

  // แสดงตัวอย่าง QR Code
  for (var i = 0; i < event.target.files.length; i++) {
      var qrCodeImage = document.createElement('img');
      qrCodeImage.src = URL.createObjectURL(event.target.files[i]);
      qrCodeImage.className = 'preview-image';
      qrcodePreviewArea.appendChild(qrCodeImage);
  }
});



 $scope.rtree = {};
 $scope.rtree1 = {};
 $scope.show = {}; 
 // อัปเดตส่วนที่รับค่า ENUM จากฟอร์ม
$scope.rtree1.treetyyy = $scope.selectedTreetyyy; // สมมติว่าค่า ENUM อยู่ในตัวแปร selectedTreetyyy
 
 var fd = new FormData();

        $scope.select = function(){  
        var tem = null;
        if(angular.isUndefined($scope.search)) {
        tem = 1;
    }else{
        tem = $scope.search; 
    }
    console.log("Search term:", tem);
        $http({method : 'post' ,
               url : 'select.php',
               data : {search:tem},
          
    }).then( function  mySuccess(response){
               $scope.rtree = response.data;
            },  

            function myError(response){

  
            });         
        }; 
        
     // อัปเดตส่วนที่ส่งข้อมูล
$scope.Update = function() {
  let newdata1 = new FormData();
  let fileTag = document.getElementById("imageinput2");
  let qrcodeFileTag = document.getElementById("qrcodeinput");

  for (var i = 0; i < fileTag.files.length; i++) {
      newdata1.append(i, fileTag.files[i]);
  }

  // ส่ง ENUM ไปใน JSON
  $scope.rtree1.treetyyy = $scope.selectedTreetyyy; // สมมติว่าค่า ENUM อยู่ในตัวแปร selectedTreetyyy
  newdata1.append('data', JSON.stringify($scope.rtree1));

   // ฟล์ภาพ QR Code
   for (var i = 0; i < qrcodeFileTag.files.length; i++) {
    newdata1.append('qrcode', qrcodeFileTag.files[i]);
}
  $http({
      method: "post",
      url: "edit.php",
      data: newdata1,
      transformRequest: angular.identity,
      headers: { "Content-Type": undefined },
  }).then(function (A) {
      if (A.data == 'up') {
          $scope.show = "แก้ไขข้อมูลเสร็จสิ้น";
      } else if (A.data == 'down') {
          $scope.show = "แก้ไขข้อมูลล้มเหลว";
      } else {
          $scope.show = "กรุณาติดต่อผู้ดูแลระบบ";
      }

      const myModal = new bootstrap.Modal('#exampleModal2', {
          keyboard: false
      });
      myModal.show();
  }, function (B) {
      const myModal = new bootstrap.Modal('#exampleModal2', {
          keyboard: false
      });
      myModal.show();
  });
};
    
   // อัปเดตส่วนที่ส่งข้อมูล
$scope.senddata = function() {
  let newdata = new FormData();
  let imageFileTag = document.getElementById("imageinput");
  let qrcodeFileTag = document.getElementById("qrcodeinput");

  for (var i = 0; i < imageFileTag.files.length; i++) {
      newdata.append('image[]', imageFileTag.files[i]);
  }

  for (var i = 0; i < qrcodeFileTag.files.length; i++) {
      newdata.append('qrcode[]', qrcodeFileTag.files[i]);
  }

      // ส่ง ENUM ไปใน JSON
      $scope.frntree.treetyyy = $scope.selectedTreetyyy; // สมมติว่าค่า ENUM อยู่ในตัวแปร selectedTreetyyy
      newdata.append('data', JSON.stringify($scope.frntree));

      $http({
          method: "post",
          url: "insert.php",
          data: newdata,
          transformRequest: angular.identity,
          headers: { "Content-Type": undefined },
      }).then(function (A) {
          if (A.data == 'PP') {
              $scope.show = "เพิ่มข้อมูลเสร็จสิ้น";
          } else if (A.data == 'LOL') {
              $scope.show = "เพิ่มข้อมูลล้มเหลว";
          } else {
              $scope.show = "กรุณาติดต่อผู้ดูแลระบบ";
          }

          const myModal = new bootstrap.Modal('#exampleModal2', {
              keyboard: false
          });
          myModal.show();
      }, function (B) {
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
            







