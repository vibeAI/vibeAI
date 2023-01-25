import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../styles/aboutUs.css"

const AboutUs = () => {
  return (
    <>
    <div className='containerCards'>
      <Card className='cardAboutUs' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Neiva Jiménez</Card.Title>
          <Button variant="primary">Linkedin</Button>
        </Card.Body>
      </Card>

      <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Rafa Cabezas</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Dani Valero</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> Ruben Ganga</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Marcelo </Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Génesis</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Alberto</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Ma</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>

    <Card className='cardAboutUs' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>sss</Card.Title>
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default AboutUs;