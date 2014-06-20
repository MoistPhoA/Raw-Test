#pragma strict

var destroyobjectConfirmation = false ;
function OnTriggerEnter (info : Collider) 
{
	if (info.tag == "Player")
	{
		destroyobjectConfirmation = true ;
	}
	if (destroyobjectConfirmation == true)
	{
		Destroy (gameObject) ;
		Debug.Log ("coin/trigger destruction") ;
		Destroy (gameObject.Find("Cube5")) ;
		//destroys the found object
		Debug.Log ("cube5 destruction") ;
	}
}
