import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Note from './Note'


export default class Dashboard extends React.Component {
  constructor() {
    super() 
      this.state = {
        display: false,
        currentNote: null 
      }
    
  }

showNote = (clickedNote) => {
  console.log(clickedNote)
  this.renderNoteComp()
  return this.setState({
    ...this.state,
    currentNote: clickedNote
  })
}

renderNoteComp = () => {
  if (!this.state.display) {
  this.setState({
      display: true
  })
} else {
  this.setState({
      display: false
  })
}
}


renderUserNotes = () => {
    if (this.props.notes) {
    return this.props.notes.map(note => {
        return <div id={note.id} >
          <Card onClick={() => {this.showNote(note)}} className="block-example border border-primary rounded mb-0" >
            <Card.Header as="h5">{note.title} - </Card.Header>
            <Card.Body>
              <Card.Text>
                {note.content.substr(0, 30)}...
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    })
} else {
    return 
    }
}

handleLogout = () => {
    this.props.resetUserObj()
    return this.props.history.push("/login")
  }

  newNote = () => {
    return this.props.history.push("/note/new")
  }
  

render() {
  console.log(this.props.notes)
    return (
    <div>
        <Navbar bg="light" variant="light" width="100">
        <Navbar.Brand href="#home">Dunnit</Navbar.Brand>
        <Nav className="mr-auto">
        <Button onClick={this.newNote} variant="outline-primary">New Note</Button>
        </Nav>
        <Form inline>
        <Button variant="outline-primary" onClick={this.handleLogout}>Logout</Button>
        </Form>
        </Navbar>
    <Container className="notes">
        <Row>
        <Col md={4}> {this.renderUserNotes()}  </Col>
        {this.state.currentNote ?
        <Col  className="border border-dark">
          <Container md={8} className="w-100">
              <Note note={this.state.currentNote}></Note>
          </Container>
        </Col> 
        :
        <Col md={8}>
        </Col>
        }
        </Row>
    </Container>
  </div>
    )
}

}





