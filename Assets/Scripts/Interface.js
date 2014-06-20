#pragma strict
var target : GameObject ;
var targetScript ;
targetScript = target.GetComponent("RandomBattle") ;
var menuOpen = false ;
function OnGUI() {
	GUI.Label (Rect (10,10,110,50), "The number that was generated is: " + RandomBattle.randomNumber) ;
	if (menuOpen == false ){
		if (GUI.Button(Rect (Screen.width - 80, Screen.height - 50, 75, 40 ), "Start Menu")){
			Invoke ("testInterface", 0) ;
		}
	}
	if (Input.GetKeyUp(KeyCode.Return)){
		Invoke ("testInterface", 0 ) ;
	} 
	if (Input.GetKeyUp(KeyCode.Backspace)){
		menuOpen = false ;
		Debug.Log ("Start menu closed") ;
	}
	if (menuOpen == true ){
		GUI.BeginGroup (Rect (10, 10, Screen.width - 10, Screen.height - 10));
			GUI.Box (Rect (0,0,Screen.width - 10,Screen.height - 20), "Start menu");
			if (GUI.Button (Rect (10, Screen.height - 280, 80, 30), "Player")) {
				//
			}
			if (GUI.Button (Rect (10, Screen.height - 230, 80, 30), "Items")) {
				//
			}
			if (GUI.Button (Rect (10, Screen.height - 180, 80, 30), "Save")) {
				//
			}
    		if (GUI.Button (Rect (10, Screen.height - 130, 80, 30), "Exit Menu")){
    			menuOpen = false ;
    		}
    		if (GUI.Button (Rect (10, Screen.height - 80, 80, 30), "Quit Game")){
    			Application.Quit() ;
    		}
    	GUI.EndGroup ();
    	//centers the gui interface and makes sure that all further dimensions added in this group have the group's boundary
	}
	
} 
//rectangle dimensions: (direction on the screen in x, direction on the screen in y, box length in x, box length in y)
// the bigger the number for x, the more right-shifted the interface is. the bigger the number for y, the lower the interface.
function testInterface () {
	Debug.Log ("Start menu opened!") ;
	menuOpen = true ;
}