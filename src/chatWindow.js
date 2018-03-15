import React, { Component } from 'react';
import './App.css';
import Message from './message'
export default class ChatWindow extends Component {
  constructor(){
    super();
  }
  
  sendMessage(){
    let chatMessage = document.getElementById("chat-message-" + this.props.chatObj.id).value;
    let recipient = document.getElementById("chat-recipient-" + this.props.chatObj.id).value;
    let messageObj = {
        message: chatMessage,
        sender_id: this.props.chatObj.id,
        sender: this.props.chatObj.name,
        time: new Date()
    }
    this.props.sendMessage(messageObj, recipient);
  }

  render(){
      console.log('Inside comp render');
      return (
          <div className="col-md-3 chat-window-container">
            <div className="chat-window">
                <div className="chat-window-header">
                    <div className="pull-left">
                        <span className="chat-name"> {this.props.chatObj.name} </span>
                    </div>
                    <div className="pull-right">
                    <button className="btn btn-danger" type="button" onClick={() => this.props.removeChatWindow(this.props.chatObj.id)}>Remove</button>
                    </div>
                </div>
                <div className="chat-window-body">
                    {this.props.chatObj.messages.map(message =>
                        <Message key={message.id} message = {message} currentUser = {this.props.chatObj.id}/>
                    )}
                </div>
                <div className="chat-window-footer">
                    <div className="input-group mb-3">
                    <select id= {"chat-recipient-" + this.props.chatObj.id} className="form-control">
                        <option value="all">All</option>
                        {this.props.chatOption.map(chatOption =>
                            (chatOption.id != this.props.chatObj.id) ? <option key={chatOption.id} value={chatOption.id}>{chatOption.name}</option> : ''
                        )}
                    </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" id={"chat-message-" + this.props.chatObj.id} className="form-control" placeholder="Message"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={() => this.sendMessage()}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      )
  }
}

