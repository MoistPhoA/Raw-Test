#pragma strict

var target : Transform ;
//target for the camera of type Transform. Transform is used in many things susch as spawning, position, rotation, etc.
var distance = -5 ;
//from top perspective, distance downward is negative. distance upward is positive
var lift = 0.8 ;
// will be used later in the update function to define camera tiltng when looking at the object.
function Update () {
	transform.position = target.position + Vector3(0, lift, distance) ;
	// position that the object(lowercase transform) the script is sitting on, which in this case is the camera.
	// vector3(x position, y position, z position)
	transform.LookAt (target) ;
}