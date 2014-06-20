#pragma strict
 
 var cameraMain :  Camera ;//assign your main camera here
 var cameraBattle :    Camera ;//assign your battle camera here
 var target : GameObject ;
 var targetScript ;
 	function Start()
                 {
       cameraMain.enabled  = true;
       cameraBattle.enabled = false;
       //at the start of the game, the main camera will be enabled, while the battle camera is disabled.
       //start functions only run at the start, thus it only runs once per game session.
       cameraBattle.GetComponent(AudioListener).enabled = false ;
		 }
 	function OnTriggerEnter(info: Collider)
                {
                if(info.name == "ball")
                                {
                            targetScript = target.GetComponent("RandomBattle") ;
                            // changes empty variable targetScript into a container of info from script RandomBattle from gameobject described in target.
                            RandomBattle.inBattleCamera = true ;
                            // scriptName.variable dosomethingwithit.
	                        Debug.Log("inBattle variable is changed") ;
                            }    
                if (RandomBattle.inBattleCamera == true )
                			{            	
                            cameraMain.enabled  = false;
                            cameraBattle.enabled = true;
                            cameraBattle.GetComponent(AudioListener).enabled = true ;
                            Debug.Log ("camera should have changed") ;
                               }
                }//trigger on entry
 	function OnTriggerExit (info: Collider)
 		{
 		RandomBattle.inBattleCamera = false ;
 		cameraMain.enabled = true ;
 		cameraBattle.enabled = false ;
 		Debug.Log ("Camera should have reverted") ;
 	}