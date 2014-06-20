#pragma strict
var capsule : Transform ;
var cylinder : Transform ;
var oriCapsule : GameObject ;
var oriCylinder : GameObject ;
Invoke ("spawner", 1) ;
function spawner (){
	switch (Random.Range( 1, 4 ) ) {
		case 1 : 
			Debug.Log("case 1 initiated") ;
			Instantiate (capsule , Vector3(1.5, 1, 0), Quaternion.identity) ;
			capsule.tag = "clone" ;
			oriCapsule.SetActive(false) ;
			oriCylinder.SetActive(false) ;
			break;
		case 2 :
			Debug.Log("case 2 initiated") ;
			Instantiate (cylinder , Vector3(3, 1, 0), Quaternion.identity) ;
			cylinder.tag = "clone" ;
			oriCylinder.SetActive(false) ;
			oriCapsule.SetActive(false) ;
			break ;
		case 3 :
			Debug.Log("case 3 initiated") ;
			Instantiate (capsule , Vector3(1.5, 1, 0), Quaternion.identity) ;
			capsule.tag = "clone" ;
			Instantiate (cylinder , Vector3(3, 1, 0), Quaternion.identity) ;
			cylinder.tag = "clone" ;
			oriCapsule.SetActive(false) ;
			oriCylinder.SetActive(false) ;
			break ;
		default :
			print ("Spawning error") ;
			break ;
	} 
}