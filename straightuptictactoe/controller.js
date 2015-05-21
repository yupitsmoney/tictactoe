angular.module ('gangstatictactoe')
.controller('GangstaController', ["$scope","$firebaseObject",GangstaController]);

/*
	Created function & attached firebase. 
	Created a new $bindto so it can auto save with the firebase database. 
	( ""'s' Are 0-8 index properties = $scope.game.board = ["","","","","","","","",""];
*/
function GangstaController($scope, $firebaseObject){
	var fireRef = new Firebase("https://gangstatictactoe.firebaseio.com/");
	$firebaseObject(fireRef).$bindTo($scope,"game").then(function() { 
		$scope.game.player = 1;
		$scope.game.board = ["","","","","","","","",""];
	});

	

	$scope.clickBtn = function(btn){

		if($scope.game.player == 1){
			$scope.game.board[btn] = "X";
			
			// $scope.game.board[btn].disabled = "disabled";
			
			$scope.game.player = 0;
			winner();

		}else{
			$scope.game.board[btn] = "O"

			//$scope.game.board[btn].disabled = "disabled";

			$scope.game.player = 1;
			winner();
		}
	}


	function winner(){
	  if(
	  $scope.game.board[0] == "X" &&
	  $scope.game.board[1] == "X" &&
	  $scope.game.board[2] == "X" ||
	  $scope.game.board[3] == "X" &&
	  $scope.game.board[4] == "X" &&
	  $scope.game.board[5] == "X" ||
	  $scope.game.board[6] == "X" &&
	  $scope.game.board[7] == "X" &&
	  $scope.game.board[8] == "X" ||
	  $scope.game.board[0] == "X" &&
	  $scope.game.board[3] == "X" &&
	  $scope.game.board[6] == "X" ||
	  $scope.game.board[1] == "X" &&
	  $scope.game.board[4] == "X" &&
	  $scope.game.board[7] == "X" ||
	  $scope.game.board[2] == "X" &&
	  $scope.game.board[5] == "X" &&
	  $scope.game.board[8] == "X" ||
	  $scope.game.board[0] == "X" &&
	  $scope.game.board[4] == "X" &&
	  $scope.game.board[8] == "X" ||
	  $scope.game.board[3] == "X" &&
	  $scope.game.board[4] == "X" &&
	  $scope.game.board[6] == "X"  
	  ){
	    alert("THE WINNER IS X!!!");
	    reset();
	  
	  } else if(
	  $scope.game.board[0] == "O" &&
	  $scope.game.board[1] == "O" &&
	  $scope.game.board[2] == "O" ||
	  $scope.game.board[3] == "O" &&
	  $scope.game.board[4] == "O" &&
	  $scope.game.board[5] == "O" ||
	  $scope.game.board[6] == "O" &&
	  $scope.game.board[7] == "O" &&
	  $scope.game.board[8] == "O" ||
	  $scope.game.board[0] == "O" &&
	  $scope.game.board[3] == "O" &&
	  $scope.game.board[6] == "O" ||
	  $scope.game.board[1] == "O" &&
	  $scope.game.board[4] == "O" &&
	  $scope.game.board[7] == "O" ||
	  $scope.game.board[2] == "O" &&
	  $scope.game.board[5] == "O" &&
	  $scope.game.board[8] == "O" ||
	  $scope.game.board[0] == "O" &&
	  $scope.game.board[4] == "O" &&
	  $scope.game.board[8] == "O" ||
	  $scope.game.board[2] == "O" &&
	  $scope.game.board[4] == "O" &&
	  $scope.game.board[6] == "O"  
	  ){
	    alert("THE WINNER IS O!!!");
	    reset();
	  }
	}


	$scope.reset = function(){ 
	  $scope.game.board[0] = ""; 
	  $scope.game.board[1] = "";
	  $scope.game.board[2] = "";
	  $scope.game.board[3] = ""; 
	  $scope.game.board[4] = "";
	  $scope.game.board[5] = ""; 
	  $scope.game.board[6] = ""; 
	  $scope.game.board[7] = "";
	  $scope.game.board[8] = "";
	  // $scope.game.board[0).disabled = ""; 
	  // $scope.game.board[1).disabled = "";
	  // $scope.game.board[2).disabled = "";
	  // $scope.game.board[3).disabled = ""; 
	  // $scope.game.board[4).disabled = "";
	  // $scope.game.board[5).disabled = ""; 
	  // $scope.game.board[6).disabled = ""; 
	  // $scope.game.board[7).disabled = "";
	  // $scope.game.board[9).disabled = ""; 
	 

	}
}




