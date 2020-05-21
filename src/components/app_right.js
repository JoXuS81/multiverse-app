import React, {Component} from 'react';
import '../style.css';

class Appright extends React.Component {
    render() {
        return (
            <div className = "d-flex justify-content-center align-items-center content_right">
                <div className = "w-75">
                    <h3 className = "text-center">
                        Sign up today
                    </h3>
                    <h4 className = "mt-4 text-center">
                        Aenean ornare velit lacus et varius enim proin aliquam facilisis ante.
                    </h4>
                    <div className = "d-flex justify-content-center mt-3">
                        <form className = "contact_fo">
                            <input name = "name" placeholder = "Name" className = "pl-3 content_form">
                            </input>
                            <input name = "email" placeholder = "Email" className = "pl-3 mt-3 content_form">
                            </input>
                            <button className = "mt-3 content_submit" href = "#">
                                Submit
                            </button>
                        </form>
                    </div>
                    <h5 className = "mt-4 text-center">
                        Aenean lorem ipsum ornare velit lacus.
                    </h5>
                </div>
            </div>
        );
    }
}

export default Appright;