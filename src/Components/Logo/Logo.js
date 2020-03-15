import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.svg'


function Logo() {

  return (

    	<div className='ma4 mt0 center'>
 			<Tilt className="Tilt  br2 shadow-3" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner pa4"><img src={brain} alt="logo"/></div>
			</Tilt>
    	</div>
  );
}

export default Logo;
