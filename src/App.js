import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './chatWindow'

class App extends Component {
  constructor(){
    super();
    this.state = 
    {
      chatList : [{
        id: 1,
        name: 'Sachin',
        messages: [
          {
            id:1,
            message: 'Hello... Start your conversation.',
            sender_id: 1,
            time: new Date()
          }
        ],
      }]
    }
  }

  sendMessage = (msgObj, receivers) => {
    console.log(msgObj, receivers);
    if(receivers == 'all'){
      let list = [...this.state.chatList]
      list.map(chat => {
        msgObj.id = chat.messages.length + 1;
        chat.messages.push(msgObj)
      })
      this.setState({chatList:list})
    }
    else{
      let list = [...this.state.chatList]
      let chatObj = list[receivers-1]
      msgObj.id = chatObj.messages.length + 1;
      chatObj.messages.push(msgObj)

      let chatObjSender = list[msgObj.sender_id-1]
      msgObj.id = chatObjSender.messages.length + 1;
      chatObjSender.messages.push(msgObj)
      this.setState({chatList:list})
    }
  }

  removeChatWindow = (id) => {
    let list = [...this.state.chatList]
    list.splice(id - 1,1);
    this.setState({chatList:list})
  }

  createNewChatWindow (){
    console.log('inside createNewChatWindow');
    let chatName = document.getElementById('chat-user-name').value;
    document.getElementById('chat-user-name').value = '';

    if(!chatName || chatName.trim() == ''){
      return;
    }
    let chatObj = {
      id: this.state.chatList.length + 1,
      name: chatName,
      messages: [
        {
          id:1,
          message: 'Hello... Start your conversation.',
          sender_id: this.state.chatList.length + 1,
          time: new Date()
        }
      ],
    }
    this.setState({chatList:[...this.state.chatList, chatObj]})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Chat Application</h1>
        </header>
        <div className="container">
          <div className="app-header">
            <div className="input-group mb-3">
              <input type="text" id="chat-user-name" className="form-control" placeholder="Add Chat user name"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={() => this.createNewChatWindow()}>Add</button>
              </div>
            </div>
          </div>
          <div className="app-container">
            <div className="row row-no-margin">
              {this.state.chatList.map(chat =>
                <ChatWindow key={chat.id} chatObj = {chat} chatOption = {this.state.chatList} sendMessage={this.sendMessage} removeChatWindow={this.removeChatWindow}/>
              )}
            </div>
          </div>
          <div className="app-footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
