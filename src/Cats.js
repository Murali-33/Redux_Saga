import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCatfetch} from './Feactures/catSlice';


function Cats() {
  const cat = useSelector((state)=> state.cats.cat);
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getCatfetch())
  },[dispatch])

  console.log(cat);

  return (
    <div>
      <h1>CATS SPACIES GALLARY</h1>
      <p>Imaes of different types of cats..Lots of cats for your viewing pleassure...</p><hr />
      <div className='Gallery'>
        {
          cat.map((cats)=>{
            return (
              <div key={cats.id} className='column column-left'>
               <h2>{cats.name}</h2>
               <p>{cats.description}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cats
