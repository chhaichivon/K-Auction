/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//app.controller('AppController', function($scope, $http){
///************************************************** LOADING SCOPE **********************************************************/
//         $scope.getAuction = function(){
//                    $http({
//                                url:'http://localhost:9999/api/auction/get',
//                                method:'GET'
//                    }).then(function(response){
//                                $scope.auctions = response.data.DATA;
//                                console.log(response.data.DATA);
//                    });
//         };
////                  $http({
////                            url:'http://localhost:9999/api/bid-log/get',
////                            method:'GET'
////                   }).then(function(response){
////                            $scope.biding = response.data.DATA;
////                            console.log(response.data.DATA);
////	});
//	
//        $scope.getAuction();
//});
//
//app.controller('CategoryController', function($scope, $http){
///************************************************** LOADING SCOPE **********************************************************/
//    
//        $scope.getAuction();
//});
var app = angular.module('AuctionApp', []);
/************************************************** AUCTION CONTROLLER**********************************************************/
app.controller('AuctionController', function($scope, $http){
    // FORMAT DATE

         $scope.getAuction = function(){
                    $http({
                                url:'http://localhost:9999/api/auction/get',
                                method:'GET'
                    }).then(function(response){

                    $scope.auctions = response.data.DATA;
                                console.log(response.data.DATA);
                    });
         };
         
         $scope.getProduct = function(){
                    $http({
                                url:'http://localhost:9999/api/product/get',
                                method:'GET'
                    }).then(function(response){
                                $scope.products = response.data.DATA;
                                console.log(response.data.DATA);
                    });
         };
         $scope.getOwner = function(){
                    $http({
                                url:'http://localhost:9999/api/product-owner/get',
                                method:'GET'
                    }).then(function(response){
                                $scope.owners = response.data.DATA;
                                console.log(response.data.DATA);
                    });
         };
        $scope.addAuctionItem = function(){
                 $http({
                           url:'http://localhost:9999/api/auction/add',
                           method:'POST',
                           data:{	
                                    'auc_id': $scope.aucid,
                                    'bid_increment_price': $scope.bidincrementprice,
                                    'buy_price': $scope.buyprice,
                                    'current_price': $scope.currentprice,
                                    'end_date':$scope.enddate ,
                                    'image': $scope.image,
                                    'name': $scope.name,
                                    'owner_id': $scope.ownerid,
                                    'pro_id': $scope.proid,
                                    'product_condition': $scope.productcondition,
                                    'start_date': $scope.startdate,
                                    'start_price': $scope.startprice,
                                    'status': $scope.status,
                                    'usr_id': $scope.usrid     
                           }            
                 }).then(function(response){
                            alert("Message : "+response.data.MESSAGE);
                                   // $scope.getAuction();
                                    //console.log(response.data.MESSAGE);
                           },function(response){
                                    //console.log(response.data.DATA);
                  });
        };
        $scope.deleteAuctionItem = function(id){	
	$http({
		url:'http://localhost:9999/api/auction/delete/'+id,
		method:'PUT'    
                           }).then(function(response){    
                                    $scope.getAuction();
                                    console.log(response.data.MESSAGE);
                           },function(response){
                                    //console.log(response.data.DATA);  
                                    //$scope.getAuction();            
	});          
         };
         $scope.findAuctionItemUpdate = function(obj){
                  $scope.item = obj.auc.auc_id;    
         };
         $scope.AuctionItemUpdate = function(){	
	$http({
                            url:'http://localhost:9999/api/auction/edit',
                            method:'PUT',
                            data:{
                                   
                                    'bid_increment_price': $scope.bidincrementprice,
                                    'buy_price': $scope.buyprice,
                                    'current_price': $scope.currentprice,
                                    'end_date':$scope.enddate ,
                                    'name': $scope.name,
                                    'owner_id': $scope.ownerid,
                                    'pro_id': $scope.proid,
                                    'product_condition': $scope.productcondition,
                                    'start_date': $scope.startdate,
                                    'start_price': $scope.startprice,
                                    'status': $scope.status,
                                    'usr_id': $scope.usrid
                            }
                           }).then(function(response){
                                    $scope.getAuction();
                                    console.log(response.data.MESSAGE);
                           },function(response){
                                    //console.log(response.data.DATA);    
	});          
         };
        $scope.getAuction();
        $scope.getOwner();
        $scope.getProduct();
});
