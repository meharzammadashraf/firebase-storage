import React , { Component } from "react";
import 'firebase/storage';
// import { db, storage, storageRef } from '../config/firebase'
import { storageRef } from '../config/firebase'
import { TodosContext } from '../contexts/TodosContext'
class Storage extends Component {
    // componentDidMount(){
// storageRef.child('files/deep-clean-checklist-converted.pdf').getDownloadURL().then(function(url) {
//     // `url` is the download URL for 'images/stars.jpg'
  
//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = function(event) {
//       var blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();
  
//     // Or inserted into an <img> element:
//     var img = document.getElementById('eol');
//     img.href = url;
//     // alert(url)
//   }).catch(function(error) {
//     // Handle any errors
//   });
// }

// state = {
//   photos : [],
// }
  constructor(props){
    super(props);
    this.state = {
      photos : [],
    }

  }

// componentWillMount = () => {
  
 


// storageRef.listAll().then((result) => {
//   let images = [];
//   result.items.forEach( (imageRef) => {
//     // displayImage(imageRef);

//     imageRef.getDownloadURL().then( (url) => {
//       // let image = url;
//       // alert(image)
//       console.log(url);

//       images.push(url);
//       // console.log(images)
  
//       // this.setState({images : [...this.state.images , url]});
  
//       // console.log(images);
//       // alert(this.state.images)
//       }).catch( (error) => {
//         console.log(error);
//       });

//       // this.setState({images:  images });

//   });

//   this.setState({ photos: images })
//   console.log('images');
//   console.log(this.state.photos);
// }).catch(function(error) {
// });

// // function displayImage(imageRef) {
//     // imageRef.getDownloadURL().then(function(url) {
//     // // let image = url;
//     // // alert(image)
//     // images.push(url)
//     // // console.log(images)

//     // // this.setState({images : [...this.state.images , url]});

//     // // console.log(images);
//     // // alert(this.state.images)
//     // }).catch(function(error) {

//     // });
//   // }
//   // this.setState({images: [...this.state.images , images ]});
  
// // console.log(this.state.images) 
// };


check = () => {
  var images = this.state.photos;
  console.log(images);
}



    render(){
      return <TodosContext.Consumer>

      {(imageContext) => {
        var a = imageContext.photos
        console.log(a);
        console.log(a.length);
        
  return <div className="container">
        <div className="card-panel">
            <div className="row">
                <div className="col s12 m6 l6">
                {/* <a  href="" id="eol" download target="_blank">Download PDF</a> */}
                {/* <button id="eol"  target="_blank">Download PDF</a> */}
                </div>
                <div className="col s12 m6 l6">
                  {imageContext.photos.map((src)=>{
                    console.log(src)
                    return <img id="img" src={src}/>
                  // return <div>ndas</div>
                  })}
                <button onClick={this.check} >Click</button>
                
                <img src={imageContext.photos[0]} />
                </div>
            </div>
        </div>
      
    </div>
      }}
      </TodosContext.Consumer>
}
}

export default Storage;
