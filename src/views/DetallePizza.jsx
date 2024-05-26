import React from 'react'
import { useContext } from "react";
import {PizzasContext} from "../context/PizzasContextProvider";
import { useParams } from 'react-router-dom';

const DetallePizza = () => {

    const {data, agregaPizza} = useContext(PizzasContext)
    const { id } = useParams();

    return (
        <>
        {
            data &&
            data.map((detallepizza,i) => {
                if (detallepizza.id == id) {
                    return (
                        <div key={'cards' +{i}} className="card mb-3">
                            <div key={'card' +{i}} className="row g-0">
                                <div key={'cardi' +{i}} className="col-md-4">
                                    <img key={'cardimg' +{i}} src={detallepizza.img} className="img-fluid rounded-start" alt={detallepizza.name}/>
                                </div>
                                
                                <div key={'card' +{i}} className="col-md-8">
                                    <div key={'body' +{i}} className="card-body">
                                        <h5 key={'title' +{i}} className="card-title">{detallepizza.name}</h5>
                                        <p key={'text' +{i}} className="card-text">{detallepizza.desc}</p>
                                        <b>ingredientes</b>
                                        <ul className='lista'>
                                        {detallepizza.ingredients.map((ingredient, i) => (
                                            <li key={i}>🍕{ingredient}</li>
                                        ))}
                                        </ul>
                                        <div key={'pre' + {i}} className='d-flex justify-content-between'>
                                            <h2>Precio $ {detallepizza.price}</h2>
                                            <button type="button" onClick={() => agregaPizza(detallepizza)} className="btn btn-danger ms-1">Añadir 🛒</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    
                }
            })
        }
            
        </>
    )
}

export default DetallePizza




