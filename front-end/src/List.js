import React from 'react';
import moment from 'moment';

const List = ({ people }) => {

  let getAge = (dob) => {
    return moment().diff(dob, 'years');
  }

  return (
    <>
      {people.map((person) => {
        const { id, name, date_of_birth, thumbnail } = person;
        return (
          <article key={id} className='person'>
            <img src={thumbnail} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{getAge(date_of_birth)} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
