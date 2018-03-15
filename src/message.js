import React, { Component } from 'react';
import './App.css';

export default class Message extends Component {
  constructor(){
    super();
  }

  render(){
      console.log('Inside comp render');
      return (
          <div className="row row-no-margin">
            <div className={"message-container col-md-9 " + (this.props.currentUser ==  this.props.message.sender_id? 'offset-md-3 right' : 'left')}>
                <div className="message">
                    {this.props.message.message}
                </div>
            </div>
          </div>
      )
  }
}

