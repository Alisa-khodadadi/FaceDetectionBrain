import React from 'react'
import './LinkForm.css'




function LinkForm(props) {
  return (

		<div>
		  	<div>
		  		<p className="f4 white">This website will detect any faces in an Image</p>

		  	</div>
		  	<div className="container center">
			  	<div className="center pa4 br3 shadow-5 inputwidth mypattern">
			  		<input className=" inputwidth center w-70 f4 pa2" type="text" placeholder="enter your URL here" onChange={props.onInputChange}/>
			  		<button className="center w-30 f4 link ph3 pv2 dib white bg-light-purple grow" onClick={props.onButtonSubmit}>Detect</button>
			  	</div>
		  	</div>

		</div>
  );
}

export default LinkForm;
