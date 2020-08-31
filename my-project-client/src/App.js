import React from 'react';
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Switch, Route } from 'react-router-dom'
import NewNote from './components/NewNote'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      users: [],
      userObj: {}
    }
  }

componentDidMount() {
  fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(usersData => { const updatedUsers = usersData.map(userObj => {
    return {
      ...userObj,
      loggedIn: false
    }
  })
    this.setState({
      users: updatedUsers  
    }) 
})
}

updateUser = (userObj) => {
  this.setState({
    userObj: userObj,
    notes: userObj.notes
  })
}

resetUserObj = () => {
  this.setState({
    userObj: {}
  })
}

handleNewNote = (event, title, content) => {
  event.preventDefault()
  const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {
          title: title,
          content: content,
          user_id: this.state.userObj.id
        }
      )
    }
    fetch('http://localhost:3000/notes', postObj)
    .then(resp => resp.json())
    .then(noteData => {
      console.log(noteData)
      let newNotes = this.state.notes
      newNotes.push(noteData)
      this.setState({
        notes: newNotes
      })
    })
}




  render () {
    console.log(this.state.notes)
  return ( 
    <div className="App">
       <Switch>
      <Route path='/dashboard' render={ (routeParams) => {
        return <Dashboard {...routeParams} resetUserObj={this.resetUserObj} user={this.state.userObj} notes={this.state.notes} handleLogout={this.handleLogout} />
      }} />
      <Route path='/login' render={ (routeParams) => {
  return <Login {...routeParams} updateUser={this.updateUser} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        }} />
         <Route path='/note/new' render={ (routeParams) => {
  return <NewNote {...routeParams} user={this.state.userObj} handleNewNote={this.handleNewNote} />
        }} />
    </Switch>
    </div>
    );
  }
}


export default App;
