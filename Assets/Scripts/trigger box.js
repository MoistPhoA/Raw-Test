#pragma strict

function OnTriggerEnter (info: Collider){
	if (info.name == "Sphere") {
		var clones = GameObject.FindGameObjectsWithTag ("clone") ;
		for(var i : int = 0; i < clones.length ; i++){
				Destroy(clones[i]);
		}
		//keep in mind var "clones" creates an array once the objects are found.
	}
}