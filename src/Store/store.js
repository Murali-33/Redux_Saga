import { configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catReducer from '../Feactures/catSlice';
import catSaga from '../Saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(catSaga);

export default store;
