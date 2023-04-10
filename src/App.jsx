import React, { useState, useEffect } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [loadGhibli, setLoadGhibli] = useState('');

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms));

        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople));
    }, []);


    return (
        <div className="container">
            <div className="row justify-content-center mt-2">
                <button onClick={() => setLoadGhibli('filmsLoaded')} className='btn btn-primary m-1'>Load Films</button>
                <button onClick={() => setLoadGhibli('peopleLoaded')} className='btn btn-primary m-1'>Load People</button>
            </div>
        </div>

    )

    if (loadGhibli === 'filmsLoaded') {
        return (
            <div className="container">
                <div className="row justify-content-center m-5">
                    {films.map(film => (
                        <div className="col-12 col-md-6" key={film.id}>
                            <div className="card shadow-lg my-2">
                                <div className="card-body">
                                    <h4 className="card-title">{film.title}</h4>
                                    <hr style={{ background: '#aaaaaa' }} />
                                    <p className="card-text">{film.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    if (loadGhibli === 'peopleLoaded') {
        return (
            <div className="container">
                <div className="row justify-content-center m-5">
                    {people.map(person => (
                        <div className="col-12 col-md-6" key={person.id}>
                            <div style={{ background: '#hahaha' }} className="card shadow-lg my-2">
                                <div className="card-body">
                                    <h4 className="card-title">{person.name}</h4>
                                    <hr style={{ background: 'black' }} />
                                    <p className="card-text">Age: {person.age}</p>
                                    <p className="card-text">Gender: {person.gender}</p>
                                    <p className="card-text">Eye Color: <span style={{ color: `${person.eye_color}` }}>{person.eye_color}</span></p>
                                    <p className="card-text">Hair Color: <span style={{ color: `${person.hair_color}` }}>{person.hair_color}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App;