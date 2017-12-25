import React from 'react'
import Wrapper from './Wrapper'

const footer = (props) =>{
    return (
        <Wrapper>
            <footer className="footer">
        <div className="text-center">
                <small className="copyright">The HTML5 Template used for this React Portfolio was originally designed with <i className="fa fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
        </div>
         </footer>
        </Wrapper>
    );
}

export default footer;