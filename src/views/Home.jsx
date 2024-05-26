import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import {PizzasContext} from "../context/PizzasContextProvider";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const {data} = useContext(PizzasContext)
    const navigate = useNavigate();
    const {agregaPizza} = useContext(PizzasContext)

    const handleC = (id) => {
        navigate(`/detallePizza/${id}`);
    };

    return (
    <>
    <div className='imgportada text-center text-light p-5 mb-4'>
        <h1>¡Pizzería Mamma Mia!</h1>
        <h3 className=''>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
    </div>
    <Container fluid>
        <Row>
        {
            data && 
            data.map((dPizzas,index) => (
                <Col key={index} xs={12} md={4}>
                    <Card key={"card" + index} className="shadow-lg" style={{ width: '100%', marginBottom: '20px' }}>
                        <Card.Img key={"cardimg" + index} variant="top" src={dPizzas.img} />
                        <Card.Body key={"cardBody" + index}>
                            <Card.Title className='border-bottom border-secondary' key={"cardTitulo" + index}>{dPizzas.name}</Card.Title>
                                <div className='border-bottom border-secondary' key={"cardtexto" + index}>
                                    <b>ingredientes</b>
                                    <ul className='lista'>
                                    {dPizzas.ingredients.map((ingredient, i) => (
                                        <li key={i}>🍕{ingredient}</li>
                                    ))}
                                    </ul>
                                </div>
                                <div className='text-center'>
                                    <h2>$ {dPizzas.price}</h2>
                                    <button type='button' onClick={() => handleC(dPizzas.id)} className="btn btn-info me-1">Ver Más 👀</button>
                                    <button type="button" onClick={() => agregaPizza(dPizzas)} className="btn btn-danger ms-1">Añadir 🛒</button>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }
        </Row>
    </Container>
    </>
    )
}
export default Home