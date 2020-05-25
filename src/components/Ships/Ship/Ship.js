import React, {useState} from 'react';

export default (props) => {  

  const [event, setEvent] = useState('');
  const submitValue = () => {   
    props.click(event)
}

  
   return (
    
    <div className="col-sm-12 col-lg-6 ">
    <div className="card h-100">
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <h6 className="card-subtitle">$ {props.costInCredits}</h6>
      <p className="card-text">manufacturer: {props.manufacturer}</p>
      <input disabled={props.costInCredits==="unknown"} type="number" min="0" placeholder="0" onChange={e => setEvent(e.target.value)} />
            <button disabled={props.costInCredits==="unknown"} onClick={submitValue}>Buy</button>
    </div>
    </div>
  </div>
       
)
};

