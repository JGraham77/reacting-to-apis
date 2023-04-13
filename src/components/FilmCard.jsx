import React from 'react'

const FilmCard = props => {
    const { film } = props;

    return (
        <div className="col-12 col-md-6">
            <div className="card shadow-lg my-2">
                <div className="card-body">
                    <h4 className="card-title text-center">{film.title}</h4>
                    <hr style={{ background: '#aaaaaa' }} />
                    <p className="card-text text-center"><span className='font-weight-bold'>Description:</span> {film.description}</p>
                    <a href={`${film.url}`} target='_blank' className='btn btn-info'>API Resource Link</a>
                </div>
            </div>
        </div>
    )
}

export default FilmCard;