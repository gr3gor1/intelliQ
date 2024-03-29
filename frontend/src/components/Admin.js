import React from 'react';
import { useNavigate } from "react-router-dom";
import './Admin.css';

const Admin = () => {
    const navigate = useNavigate();

    return (
        <div className='Admin'>
            <div className='row heading'>
                <h1 className='text-center col'>Administrative Actions</h1>
                <button className='col text-center home' onClick={() => navigate("/")}>Go Back</button>
            </div>
            <div className='row'>
                <div className='col col1'>
                    <div className="card-body crd1 text-center">
                        <button className="btn btn2 heartbeat" onClick={() => navigate("/healthcheck")}>Healtcheck</button>
                    </div>
                    <div className="card-body crd1 text-center">
                        <button className="btn btn2 heartbeat" onClick={() => navigate("/all")}>View All Questionnaires</button>
                    </div>
                    <div className="card-body crd1 text-center">
                        <button className="btn btn2 heartbeat" onClick={() => navigate("/allanswers")}>View All Answers</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Admin;