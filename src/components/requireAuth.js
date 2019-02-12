import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway = () => {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ChildComponent {...this.props}/>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
};


//Example explaining the aobve
// Imagine we are in CommentBox.js
// import requireAuth from 'components/requireAuth';

// class CommentBox {

// }

// export default requireAuth(CommentBox)

// Imagine we are in App.ks
// and we import CommentBox.js, we also import the HOC as well since its been exported with requireAuth