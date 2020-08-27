import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'


export default class Note extends React.Component {
    constructor() {
        super()
        this.state = {
            note: {}
        }
    }



    render() {
        return (
            <Card className="block-example border border-primary rounded mb-0" >
                <Card.Header as="h5">{note.title} - </Card.Header>
                <Card.Body>
                    <Card.Text>
                    {note.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}