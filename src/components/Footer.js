import React from 'react'
import Wrapper from './Wrapper'

const footer = (props) =>{
    return (
        <Wrapper>
            <footer className="footer">
        <div className="text-center">
                <small className="copyright">Designed with <i className="fa fa-heart"></i> by Jusine Philip, inspired by<a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
        </div>
         </footer>
        </Wrapper>
    );
}

export default footer;