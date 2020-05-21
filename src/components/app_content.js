import React, {Component} from 'react';
import Appleft from './app_left';
import Appright from './app_right';
import Appsocial from './app_social';
import Appcopyright from './app_copyright';
import '../style.css';

class Appcontent extends React.Component {
    render() {
        return (
            <div className = "d-flex justify-content-center align-items-center content_all">
                <div className = "content_container">
                    <div className = "d-flex justify-content-center content">
                        <div className = "row m-0 p-0 content_card">
                            <div className = "col-md-6">
                                <Appleft />
                            </div>
                            <div className = "col-md-6">
                                <Appright />
                            </div>
                        </div>
                    </div>
                    <div class = "row mr-0 mb-0 ml-0 p-0 content_bottom">
                        <div className = "col-md-6 mr-0 mb-0 ml-0 p-0 d-flex justify-content-md-start justify-content-center content_social">
                            <Appsocial />
                        </div>
                        <div className = "col-md-6 d-flex justify-content-md-end justify-content-center mr-0 mb-0 ml-0 p-0 content_copyright">
                            <Appcopyright />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appcontent;