import React from 'react'

const contact = (props) => {
    
    return (
        <div className="contact-container container-block" >
        <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">alan.doe@website.com</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">0123 456 789</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                    <li className="twitter"><i className="fa fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
                </ul>

        </div>
    );
}

export default contact;