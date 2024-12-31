import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PeopleAndFilms = () => {
    const [people, setPeople] = useState([]);
    const [films, setFilms] = useState({});

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const peopleResponse = await axios.get('https://swapi.dev/api/people/');
                setPeople(peopleResponse.data.results);

                // Extract film URLs and fetch film details
                const filmRequests = peopleResponse.data.results.flatMap(person => person.films.map(filmUrl => axios.get(filmUrl)));
                
                const filmResponses = await Promise.all(filmRequests);
                console.log(filmResponses)
                const filmData = filmResponses.reduce((acc, filmResponse) => {
                    acc[filmResponse.data.url] = filmResponse.data;
                    return acc;
                }, {});

                setFilms(filmData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchPeople();
    }, []);

    return (
        <div>
            <h1>People and Films</h1>
            <ul>
                {people.map(person => (
                    <li key={person?.name}>
                        {person?.name}
                        <ul>
                            {person?.films.map(filmUrl => (
                                <li key={filmUrl}>{films[filmUrl] && films[filmUrl].title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PeopleAndFilms;
