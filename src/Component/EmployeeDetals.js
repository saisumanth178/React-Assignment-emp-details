import React from 'react'
import './EmployeeDetals.css'

const EmployeeDetals = (props) => {
    
    return (
        <div className='card'>          
            <img src={props.image} alt="ImageCard"  />          
            <div classname='employee-detail' >
            <div className='container'>
                <p className='py-3 my-0'><strong>Employee id :</strong> {props.id}</p>
                <h4>Post name: {props.post}</h4>
                <h2>Description:</h2>
                <p className='detail' style={{"font-size": "1.2rem"}}>{props.postDetail}</p>
                <h4>Author name: {props.author}</h4>
                <h6>Date: {props.date}</h6>
                </div>
            </div>      
        </div>
    )
}

export default EmployeeDetals
