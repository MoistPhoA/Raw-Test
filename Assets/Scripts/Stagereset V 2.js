#pragma strict

var GameOverDistance = -12 ;

function Update () 
{
	if (transform.position.y <= GameOverDistance)
	// transform refers to our ball object with all its characteristics(rotation,etc.). If statement to check if in position on the y axis
	{
		Debug.Log("Stage reset test") ;
		// tests and displays the string in parenthesis when the function has been called.
		Application.LoadLevel("battle") ;
	}
}