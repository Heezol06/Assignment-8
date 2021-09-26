import React from 'react';
import "./Series.css"
const Series = (props) => {
  const {name , immdb, type, create, makingCost, poster , session} = props.singleSeries
  return (
      <div className="container col-md-4 my-4">
    <div className="card-group">
  <div className="card">
    <img src={poster} className="card-img-top poster-sizing" alt="..." />
    <div className="card-body card-color">
      <h3 className="card-title text-success">{name}</h3>
      <p className="card-text"><span>IMDB: <small className="fw-bold text-danger">{immdb}</small></span> <small>Type: <small className="fw-bold  type-color">{type}</small></small>
      </p>
      <p>Seasons:<small className="text-danger"> {session}</small></p>
      <h5>Created By: {create.slice(0,10)}</h5>
      <h6>Making Cost: <small className="text-danger">{makingCost}M</small></h6>
    </div>
    <div className="card-footer card-color">
      <button className="btn btn-color text-muted text-light !importenet" onClick={()=>props.handleAddCost(props.singleSeries)} ><i className="fas fa-plus"></i>  Add Cost </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Series;