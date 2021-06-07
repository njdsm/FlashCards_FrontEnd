import React from 'react';

const SelectedCollection = (props) => {

    return(
        <div>
            <div classNameName="row">
                <h1>{props.collection.name}</h1>
                <h5>{props.collection.description}</h5>
            </div>
            {props.cards.map((card) => 
                <div key={card.id} className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{card.front_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                            <p className="card-text">{card.back_text}</p>
                            </div>
                        </div>
                    </div>
              </div>
            )}
        </div>
    )
}

export default SelectedCollection