// import { configureStore  } from 'redux';

import { createStore   } from "@reduxjs/toolkit"
import rootReducer from './Reducers.jsx'; // Import your rootReducer file

const Store = createStore(rootReducer);


export default Store;
