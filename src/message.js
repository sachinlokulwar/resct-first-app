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
                    <p className="message-header">
                        <span className="sender pull-left">{this.props.message.sender ? this.props.message.sender : 'Me'}</span>
                        <span className="sent-at pull-right">{this.props.message.time.getDate() + '-' + (this.props.message.time.getMonth() + 1) + ' ' + this.props.message.time.getHours() + ':' + this.props.message.time.getMinutes()}</span>
                    </p>
                    <p className="message-body">{this.props.message.message}</p>
                </div>
            </div>
          </div>
      )
  }
}

