import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import moment from 'moment';
import AddBirthdayModal from './AddBirthday';


let App = () => {
    const [people, setPeople] = useState([]);
    const [showType, setShowtype] = useState('this month');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let toMonth = moment().month() + 1;

        axios.get('/api/birthday/month/',{
            params: {
                month: toMonth,
            }
        }).then((response) => {
            setPeople(response.data);
        }).catch((err) => {
            console.error(err);
        })
    }, [])

    let getAllBirthdays = () => {
        axios.get('/api/birthday/').then((response) => {
            setShowtype('total')
            setPeople(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }

    return ( <main>
            <AddBirthdayModal
                show={showModal}
                onClose={
                    () => setShowModal(false)
                } />
            <section className = 'container' >
                <h3 > { people.length } birthdays {showType} </h3> 
                <List people = { people }/> 
                <button onClick = {() => setPeople([]) } > Clear All </button> 
                <button onClick = {() => getAllBirthdays() } > Show All </button> 
                <button onClick = {() => setShowModal(true) } > Add New </button> 
            </section>
        </main>


    );
}

export default App;