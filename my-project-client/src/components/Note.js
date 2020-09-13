import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'


export default class Note extends React.Component {
    


    render() {
        console.log(this.props.note)
        return (
            <Card md={"auto"} className="block-example border border-primary rounded w-100" >
                <Card.Header as="h5">{this.props.note.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {this.props.note.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}