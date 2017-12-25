import React, { Component } from 'react';
import CareerProfile from './CareerProfile';
import Experiences from './Experiences';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state= {
            careerProfile:'Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
            Experiences: {
                one:{
                    title:'Full-stack Web Developer',
                    time:'July 2017 - Present',
                    company:'TEDxUniben',
                    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, pariatur! Animi, ipsum. Magnam voluptates amet qui? Aliquam, recusandae mollitia ipsum exercitationem pariatur voluptatum at delectus soluta eos perspiciatis, qui placeat.'
                }
            }
        }
    }
    render(){
        return(
            <div class="main-wrapper">
            <CareerProfile data= {this.state.careerProfile}/>
            <Experiences data={this.state.Experiences}/>
            
            </div>
        );
    }
}
