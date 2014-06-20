#pragma strict
//pragma strict is used to make sure that the coding is not overly taxing on the system hardware.
var rotationSpeed = 100 ;
var jumpHeight = 7 ;
private var isFalling = false ;
// variable which can only be accessed in this script
// static var is a variable which can be accessed by other scripts
function Update () {
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed ; 
	// float is a number with decimals
	// A and D, left and right arrow keys and console left and right keys will be recognized by the system in Input.GetAxis ("Horizontal")
	// rotation speed multiplication adjusts how fast the ball rolls
	rotation *= Time.deltaTime ; 
	// makes sure the ball will keep rolling the same amount independent of frame rate
	rigidbody.AddRelativeTorque (Vector3.back * rotation) ;
	// torque is pushing an object to make it rotate. We are telling the rigidbody that we want to rotate it(Torque)
	//what is included in parenthesis is how you want to rotate it
	//vector 3 is vector in 3D coordinates(forward,left,etc.) Inversion would be Vector3.XXX*-1
	// multiplying by rotation will make sure that it will rotate according to the input keys left/right, and independent of frame rate
	if (Input.GetKeyDown(KeyCode.Space) && isFalling == false ) {
	// getkeydown = get the key that is pressed 
	// getkey = function will be run as long as key is pressed(continuous). Think of holding
	// getkeyup = calls the function when the key is released
		rigidbody.velocity.y = jumpHeight ;
		// sets a velocity to the rigidbody in the form of a jumpheight in the y direction with a value of 7
	}
	//if statements checks if the requirements in the parenthesis are true. If they are true, the code within the brackets is run
	isFalling = true ;
}

function OnCollisionStay (){
//unity function that checks whether or not the object is in collision with another object
//only coliision and triggers get a separate function away from the if statements
	isFalling = false ;
	//defines that when we are colliding or standing on another object, we are not falling
}