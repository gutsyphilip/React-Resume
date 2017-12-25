import React, { Component } from 'react'
import Profile from './Profile'
import Contact from './Contact';
import Education from './Education';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            Profile :{
                imageUrl:'avatar.png',
                name:'Justine Philip',
                tagLine:'Developer of all things JS'

            },
            Education: {
                one:{
                    degree:'BSc in Computer Engineering',
                    meta:'University of Benin, Nigeria',
                    time:'2014/15 - 2019/20',
                    status:'onGoing'
                }
            }
        }
    }
    render(){
        return (
            <div className="sidebar-wrapper">
            <Profile data={this.state.Profile}  />
            <Contact/>
            <Education data={this.state.Education}/>

            </div>
        );
    }

}