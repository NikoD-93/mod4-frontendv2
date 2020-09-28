import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal';


export default class EditForm extends React.Component {
    constructor() {
        super()
        this.state = {
            updatedTitle: "",
            updatedContent: "",
        }
    }


    handleClose = () => {

    }

render() {
    return (
        <Container>
            <Modal
            show={this.props.show}
            onHide={this.props.showEdit}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    Title
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                name="updated_title" 
                                placeholder={this.props.note.title}
                                onChange={(event) => {this.props.handleChange(event)}}>
                            </Form.Control>
                            <Form.Control name="updated_content"plceholder="{this.props.note.content}">
                            </Form.Control>
                        </Form.Group>
                    </Form>     
                </Modal.Body>  
            </Modal>
        </Container>





    )
}

}