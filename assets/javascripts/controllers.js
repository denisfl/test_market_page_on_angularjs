'use strict';

// Path to JSONs
var 
	productDetailsPathToJson = 'data/product_details.json',
	similarProductsPathToJson = 'data/similar_products.json';


var marketApp = angular.module('marketApp', []);

// Product Details Controller 
marketApp.controller('ProductDetails', function ($scope, $http) {
	$http.get(productDetailsPathToJson).
		success(function(data) {
			$scope.productDetails = data;
			$scope.mainImage = data.images[0];
			$scope.selected = data.images[0]; 
			$scope.currentImgIndex  = 0;

			$scope.hide = false;
			$scope.show = true;

			$scope.imagesCount = $scope.productDetails.images.length;			
			$scope.featuresItemsCount = $scope.productDetails.main_features.length;			
		}); 


	$scope.setImage = function(images, currentImgIndex) {
		$scope.currentImgIndex = currentImgIndex;

		$scope.mainImage = $scope.productDetails.images[$scope.currentImgIndex];	
        $scope.selected = $scope.productDetails.images[$scope.currentImgIndex]; 
	};

	$scope.setHideElement = function(hide) {
		$scope.hide = !$scope.hide;
	};

	$scope.removeFeatures = function(featuresItemsCount) {
		$scope.featuresItemsCount = $scope.featuresItemsCount - 1;
		if ($scope.featuresItemsCount == 0) {
			$scope.featuresItemsCount = $scope.productDetails.main_features.length;	
			$scope.hide = !$scope.hide;
		}
	};

	$scope.viewPrevImage = function(images) {
		$scope.currentImgIndex = ($scope.currentImgIndex > 0) ? $scope.currentImgIndex - 1: $scope.imagesCount - 1;		
		$scope.setImage(images, $scope.currentImgIndex);
	};

	$scope.viewNextImage = function(images) {
		$scope.currentImgIndex = ($scope.currentImgIndex < $scope.imagesCount - 1) ? $scope.currentImgIndex + 1: 0;		
		$scope.setImage(images, $scope.currentImgIndex);
	};




});


// Similar products Controller 
marketApp.controller('SimilarProducts', function ($scope, $http) {
	$http.get(similarProductsPathToJson).
		success(function(data) {
			$scope.similarProducts = data;
		});
 
  	$scope.orderProp = 'price';
});
