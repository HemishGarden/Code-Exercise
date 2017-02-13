var PhotoDetails = angular.module('DisplayPhoto', []);
PhotoDetails.service("imageService", function ($http) {
    
    return {
        getImages: function () {
            var id = Math.floor(Math.random() * 5) + 1;
            var img = $http.get("http://localhost:2278/api/PictureDetails/" + id, { responseType: "json" });
            return img;
        },
        
        PostEditImages: function (id, suggestion) {
            return $http.post("http://localhost:2278/api/PictureDetails/" + id + "/" + suggestion, { responseType: "json" });
        },
            
        getLikeImages: function (suggestion) {
            return $http.get("http://localhost:2278/api/PictureDetails?option=" + suggestion , { responseType: "json" });
        }
    }
})



PhotoDetails.controller('CustDetail', function ($scope, imageService) {
    self = imageService;
    setInterval(function () {
        self.getImages().success(function (result) {
            $scope.images = result;
        });
    }, 3000);

    $scope.like = function (id, opt) {
        imageService.PostEditImages(id, opt).success(function (result) {
            $scope.images = result;
        })
    };

    $scope.showPic = function (opt) {
        imageService.getLikeImages(opt).success(function (result) {
            $scope.AllImagees = result;
        })
    };
});






















//PhotoDetails.controller('CustDetail', function ($scope, $interval) {
//    $scope.index = Math.floor(Math.random() * 1060) + 1;

//    $scope.message = "Hello manju. You are doing well";

//    $scope.grey = false;
//    $scope.greyparam = ($scope.grey) ? '/g' : '';

//    $scope.blur = false;
//    $scope.blur_effect = ($scope.blur) ? '&blur' : '';


//    $scope.greyScale = function () {
//        $scope.grey = !$scope.grey;
//        $scope.greyparam = ($scope.grey) ? '/g' : '';
//    }

//    $scope.blurScale = function () {
//        $scope.blur = !$scope.blur;
//        $scope.blur_effect = ($scope.blur) ? '&blur' : '';
//    }

//    $scope.slider = null;
//    $scope.sliderSwitch = false;
//    $scope.startAutoplay = function () {
//        $scope.sliderSwitch = true;
//        $scope.index = $scope.index + 1;
//        $scope.slider = $interval(function () {
//            if ($scope.index >= 1060) { //End of image list
//                $scope.index = 2; // Start from second image
//                return false;
//            }
//            $scope.index = $scope.index + 1;
//        }, 3000);
//    };

//    $scope.stopAutoplay = function () {
//        if (angular.isDefined($scope.slider)) {
//            $interval.cancel($scope.slider);
//            $scope.sliderSwitch = false;
//        }
//    };
//});