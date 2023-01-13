import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersFetchData } from '../actions';

const URL = 'https://jsonplaceholder.typicode.com/users';

const Table = () => {
  const [checkedUsers, setChacked] = useState([]);
  const { users } = useSelector(state => state.users);
  const dispath = useDispatch();
  
  useEffect(() => {
    dispath(usersFetchData(URL))
  }, [dispath]);
}

// const Table = () => {
//   return (
//     <h1>Fucking ass!</h1>
//   )
// }

// export default Table;