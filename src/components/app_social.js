import React, {Component} from 'react';
import '../style.css';

class Appsocial extends React.Component {
   render() {
      return (
        <div>
            <a href = "https://twitter.com/explore">
                <span class = "mr-3 fa-stack fa-1x">
                    <i class = "fa fa-circle fa-stack-2x icon-background">
                    </i>
                    <i class = "fa fa-twitter fa-stack-1x">
                    </i>
                </span>
            </a>
            <a href = "https://www.facebook.com/">
                <span class = "mr-3 fa-stack fa-1x">
                    <i class = "fa fa-circle fa-stack-2x icon-background">
                    </i>
                    <i class = "fa fa-facebook fa-stack-1x">
                    </i>
                </span>
            </a>
            <a href = "https://github.com/">
                <span class = "mr-3 fa-stack fa-1x">
                    <i class = "fa fa-circle fa-stack-2x icon-background">
                    </i>
                    <i class = "fa fa-github fa-stack-1x">
                    </i>
                </span>
            </a>
            <a href = "https://www.instagram.com/?hl=en">
                <span class = "mr-3 fa-stack fa-1x">
                    <i class = "fa fa-circle fa-stack-2x icon-background">
                    </i>
                    <i class = "fa fa-instagram fa-stack-1x">
                    </i>
                </span>
            </a>
            <a href = "#">
                <span class = "mr-3 fa-stack fa-1x">
                    <i class = "fa fa-circle fa-stack-2x icon-background">
                    </i>
                    <i class = "fa fa-envelope fa-stack-1x">
                    </i>
                </span>
            </a>
        </div>
      );
   }
}

export default Appsocial;