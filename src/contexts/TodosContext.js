import React, { Component, createContext } from 'react';
import 'firebase/storage';
import { storageRef } from '../config/firebase'
export const TodosContext = createContext();


export default class TodosContextProvider extends Component {
    state = {
        photos: [],
    }
    componentWillMount = () => {
        storageRef.listAll().then((result) => {
          let images = [];
          result.items.forEach( (imageRef) => {
            imageRef.getDownloadURL().then( (url) => {
              images.push(url);
              }).catch( (error) => {
                console.log(error);
              });
          });
          this.setState({ photos: images })
        }).catch((error) => {
            console.log(error);
        });
        };
    render() {
        return (
            <TodosContext.Provider value={{ ...this.state}}>
                {this.props.children}
            </TodosContext.Provider>
            
        )
    }

}
