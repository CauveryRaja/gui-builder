import React, { Component } from 'react';
import './button.scss';

class ButtonComponent extends Component {
    /**
     * Lifecycle method that renders React Elements in DOM
     */
    render() {
        return (
            <button id={this.props.id} name={this.props.id} onDragStart={this.props.listenDragStart}
                onDragEnd={this.props.moveElement} draggable="true"
                style={{position:"absolute", left:this.props.x+"px", top:this.props.y+"px",
                        width: this.props.width+"px", height: this.props.height+"px"}}>
                {this.props.id}
            </button>
        )
    }
}

export default ButtonComponent;
