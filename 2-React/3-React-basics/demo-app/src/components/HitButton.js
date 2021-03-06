import React, { Component } from 'react';

class HitButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        //this.handleBtnClick = this.handleBtnClick.bind(this);

        console.log('HitButton instance created');
    }

    handleBtnClick() {
        this.setState({
            count: this.state.count + 1
        })
        let { onHit } = this.props;
        onHit();
    }

    render() {
        console.log('HitButton render()');
        let { label } = this.props;
        let { count } = this.state;
        return (
            <div>
                <button onClick={() => { this.handleBtnClick() }} className="btn btn-primary">
                    {label} => <span className="badge">{count}</span>
                </button>
            </div>
        );
    }
}

export default HitButton;