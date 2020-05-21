import React, {Component} from 'react';
import '../style.css';
import '../responsive.css';

class Appleft extends React.Component {
    render() {
        return (
            <div className = "d-flex justify-content-center align-items-center content_left">
                <div className = "w-75">
                    <h1>
                        Explore the multiverse
                    </h1>
                    <h2 className = "mt-4">
                        Sed feugiat amet aliquam
                    </h2>
                    <h3 className = "mt-4">
                        Lorem ipsum sed dolor sit feugiat amet consectetur elit. Praesent etiam nibh sed tellus egestas congue. Aenean ornare velit lacus et varius enim proin aliquam facilisis ante sed etiam congue. Lorem et ipsum dolor amet nullam consequat.
                    </h3>
                </div>
            </div>
        );
    }
}

export default Appleft;