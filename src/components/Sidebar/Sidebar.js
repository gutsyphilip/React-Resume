import React, { Component } from 'react'
import Profile from './Profile'
import Contact from './Contact';
import Education from './Education';
import Languages from './Languages';
import Interests from './Interests';

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
            },
            Languages: {
               English:'Native',
               French:'Intermediate',
               Igbo:'Native' 
            },
            Interests:{
                one: 'Data Science and Machine Learning',
                two:'Artificial Intelligence',
                three:'Music, I play the Guitar',
                four:'Places and People'

            }

        }
    }
    render(){
        return (
            <div className="sidebar-wrapper">
            <Profile data={this.state.Profile}  />
            <Contact/>
            <Education data={this.state.Education}/>
            <Languages data= {this.state.Languages}/>
            <Interests data={this.state.Interests}/>

            </div>
        );
    }

}