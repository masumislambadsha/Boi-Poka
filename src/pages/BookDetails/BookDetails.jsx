import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
  const {id} = useParams()
  console.log(id);
  
  return (

    <div className='container mx-auto'>
      <h4>Details</h4>
    </div>
  );
};

export default BookDetails;
