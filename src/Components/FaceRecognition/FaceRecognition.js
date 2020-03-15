import React from 'react';
import './FaceRecognition.css'

function FaceRecognition({imageURL , box}) {
  return (

	<div className="center">3

	<div className="bounding-box" style={{top:box.topRow, bottom:box.bottomRow, left:box.leftCol, right:box.rightCol}}></div>
	<img id="inputimage" src={imageURL} alt="" style={{ width:"500px" , height:"auto", marginTop:10}}/>
	</div>

  );
}

export default FaceRecognition;
