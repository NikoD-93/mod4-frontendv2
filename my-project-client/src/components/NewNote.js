import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'




export default class NewNote extends React.Component {
    constructor(){
        super()
            this.state = {
                title: "",
                content: ""
            }
    }
    
    handleChange = (e) => {
        if (e.target.tagName === "INPUT"){
            this.setState({
                title: e.target.value
            })
        } else {
            this.setState({
                content: e.target.value
            })
        }

    }

    getToDash = (event) => {
        this.props.history.push('/dashboard')
        this.props.handleNewNote(event, this.state.title, this.state.content)
    }

   


render() {
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
        <Container>
    <Form onSubmit={(event) => {this.getToDash(event)}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={this.handleChange} value={this.state.title} type="title" placeholder="Enter title" />
    <Form.Text className="text-muted">
      High quality titles only please...
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Notes</Form.Label>
    <Form.Control onChange={this.handleChange} value={this.state.content} placeholder="Note content..." as="textarea" rows="8" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
</Container>
</div>

    )
}
}