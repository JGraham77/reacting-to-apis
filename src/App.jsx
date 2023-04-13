import React, { useState, useEffect } from 'react';
import FilmCard from './components/FilmCard';
import PeopleCard from './components/PeopleCard';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [loadGhibli, setLoadGhibli] = useState('home');

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
            <img height={'300em'} className='row justify-content-center mx-auto' src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
            <div className="row justify-content-center mt-2">
                <button onClick={() => setLoadGhibli('filmsLoaded')} className='btn btn-primary m-1'>Load Films</button>
                <button onClick={() => setLoadGhibli('peopleLoaded')} className='btn btn-primary m-1'>Load People</button>
                <button onClick={() => setLoadGhibli('home')} className='btn btn-primary m-1'>Back Home</button>
            </div>
            <div className="row justify-content-center m-3">
                {loadGhibli === 'home' && <h1>Welcome Home!</h1>}
                {loadGhibli === 'filmsLoaded' && films.map(film => <FilmCard key={film.id} film={film} />)}
                {loadGhibli === 'peopleLoaded' && people.map(person => <PeopleCard key={person.id} person={person} />)}
            </div>
        </div>
    )


    // if (loadGhibli === 'filmsLoaded') {
    //     return (
    //         <div className="container">
    //             <div className="row justify-content-center mt-2">
    //                 <button onClick={() => setLoadGhibli('home')} className='btn btn-primary m-1'>Back Home</button>
    //             </div>
    //             <div className="row justify-content-center m-3">
    //                 {films.map(film => <FilmCard key={film.id} film={film} />)}
    //             </div>
    //         </div>
    //     )
    // };

    // if (loadGhibli === 'peopleLoaded') {
    //     return (
    //         <div className="container">
    //             <div className="row justify-content-center mt-2">
    //                 <button onClick={() => setLoadGhibli('home')} className='btn btn-primary m-1'>Back Home</button>
    //             </div>
    //             <div className="row justify-content-center m-3">
    //                 {people.map(person => <PeopleCard key={person.id} person={person} />)}
    //             </div>
    //         </div>
    //     )
    // }
}

export default App;