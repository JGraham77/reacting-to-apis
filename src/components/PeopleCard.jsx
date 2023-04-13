import React from 'react';

const PeopleCard = props => {
    const { person } = props

    return (
        <div className="col-12 col-md-6">
            <div style={{ background: '#aaaaaa' }} className="card shadow-lg my-2">
                <div className="card-body">
                    <h4 className="card-title text-center">{person.name}</h4>
                    <hr style={{ background: 'black' }} />
                    <p className="card-text">Age: {person.age}</p>
                    <p className="card-text">Gender: {person.gender}</p>
                    <p className="card-text">Eye Color: <span style={{ color: `${person.eye_color}` }}>{person.eye_color}</span></p>
                    <p className="card-text">Hair Color: <span style={{ color: `${person.hair_color}` }}>{person.hair_color}</span></p>
                    <a href={`${person.url}`} target='_blank' className='btn btn-info'>API Resource Link</a>
                </div>
            </div>
        </div>
    )
}

export default PeopleCard;