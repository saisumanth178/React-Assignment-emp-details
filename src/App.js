
import './App.css';
import React,{useState} from 'react'
import EmployeeDetals from './Component/EmployeeDetals';
import dummydata from './EmployeeDetails.json'

function App() {
  const[input,setInput]=useState(dummydata);
  return (
    <div className="App">
      <h1 className='text-center my-5'> Showing post using props from parents to child</h1>
      <div className="row">     
                        {
                            input.map((elem, i) =>
                                <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                    <EmployeeDetals image={elem.image} id={elem.id} post={elem.post} postDetail={elem.postDetail} author={elem.author} date={elem.date}/>
                                </div>
                            )
                        }
           </div>        
    </div>
  );
}

export default App;
