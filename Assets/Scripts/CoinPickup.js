#pragma strict
static var coinDestroyed = false ;
function OnTriggerEnter (info : Collider) 
{
	//if an object collides in the trigger area, information is gathered on it, and is called info of type collider.
	
	if (info.name == "ball")// name of the object in the info gathered. 
	//Alternatively, the ball object can be tagged as Player under the inspector menu, and this line can be replaced as info.tag == "Player"), or whatever the tag is.
	{
		Debug.Log("Coin pick up through name info") ;
		coinDestroyed = true;
	}
	if (info.tag == "Player")
	{
		Debug.Log("Coin pick up through Player tag info") ;
		Destroy (gameObject);
		//gameObject = object the script is sitting on. Destroy will destroy it.
	}
}