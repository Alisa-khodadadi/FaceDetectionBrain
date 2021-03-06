import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import LinkForm from './Components/LinkForm/LinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';




const app = new Clarifai.App({
 apiKey: '5e8fc23781cc4d6da1a47641cee2fde3'
});





const particleOptions = {
  particles: {

     "number": {
              "value": 30,
              "density": {
                  "enable": true,
                  "value_area": 800

   }
  }  
 }
}

class App extends Component {

  constructor(){
    super();
    this.state = {

      input:"",
      imageURL:"",
      box:{}

    };

  };

  calculateFaceLocation = (data) => {

   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
   const image = document.getElementById("inputimage")
   const width = Number(image.width);
   const height = Number(image.height);
   return {

    leftCol:clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)

   }
  };

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box});
  };

  onInputChange = (event) => {

    this.setState({input:event.target.value});

  };


  onButtonSubmit = () => {

    this.setState({imageURL:this.state.input})

    app.models

    .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response))
    .catch(err => console.log(err))
  ); 


  }


render(){
  return (

      <div className="App">
        <Particles className="particles" params={particleOptions}/>

        <Navigation/>
        <Logo/>
        <Rank/>
        <LinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageURL={this.state.imageURL} box={this.state.box}/> 
        
    </div>

  );
}
}

export default App;
