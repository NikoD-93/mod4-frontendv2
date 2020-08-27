import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'



export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        const postObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(
            {
              username: this.state.username
            }
          )
        }
        fetch('http://localhost:3001/users', postObj)
        .then(resp => resp.json())
        .then(userData => {this.props.updateUser(userData)
            this.props.history.push("/dashboard")
        }
        )

    }

    handleChange = (event) => {
        this.setState ({
          username: event.target.value
        })    
      }

    render() {
        return (
            <div>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Dunnit</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    </Navbar>
    <Container>
    <Form onSubmit={this.handleLogin}>
    <Col md={{ span: 6, offset: 3 }}>
    <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4" >
      Login/Signup
    </Form.Label>
    <Col md={{ span: 6, offset: 3 }}>
      <Form.Control onChange={this.handleChange} value={this.state.username} type="username" placeholder="username" />
    </Col>
  </Form.Group>
  <Button variant="outline-dark" type="submit">
    Login
  </Button>
  </Col>
    </Form>
    </Container>
    </div>

        )
    }
}
