#pragma strict
static var inBattleCamera = false ;

static var battleMode = false ;
static var randomNumber = 0;
var snap = false;

function OnTriggerEnter(info: Collider) { 
		snap = true ;
		Debug.Log ("snap is true") ;
		if (snap == true){
		InvokeRepeating ("Timer", 2, 3) ; 
		// invoke repeating -> ("function", delay in seconds before the function executes, delay before repeat execution)
			}
	}

function Timer () {
	Debug.Log ("Timer function was called and ran at least once") ;
	randomNumber = Random.Range(1,101) ;
		if (randomNumber < 11 && randomNumber > 1) {
			battleMode = true ;	
			Debug.Log ("random number is < 11 and > 1" ) ;
			Application.LoadLevel ("battle") ;
			}
}