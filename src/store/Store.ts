import { createStore } from 'redux';
import AnimeListApp from '../reducers/RootReducer';

const Store = createStore(AnimeListApp);console.log(Store.getState())
export default Store;