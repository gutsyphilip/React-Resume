import React, { Component } from 'react'
import Profile from './Profile'
import Contact from './Contact';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            Profile :{
                imageUrl:'avatar.png',
                name:'Justine Philip',
                tagLine:'Developer of all things JS'

            }
        }
    }
    render(){
        return (
            <div className="sidebar-wrapper">
            <Profile data={this.state.Profile}  />
            <Contact/>

            </div>
        );
    }

}