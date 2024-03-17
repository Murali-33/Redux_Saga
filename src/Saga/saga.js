import { call, put, takeEvery} from 'redux-saga/effects';
import {getCatsSuccess} from '../Feactures/catSlice';
import axios from 'axios';


function* getTheCats() {
  try {
    const response = yield call(axios.get, 'https://api.thecatapi.com/v1/breeds');
    const formatCats = response.data;
    yield put(getCatsSuccess(formatCats));
  } catch (error) {
    // Handle errors if needed
    console.error('Error fetching cats:', error);
  }
}


function* catSaga(){
  //1.name of the reducer 2.name of the slice or action
  yield takeEvery('cats/getCatfetch', getTheCats)
}

export default catSaga;