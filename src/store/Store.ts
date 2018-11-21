import { createStore } from 'redux';
import AnimeListApp from '../reducers/RootReducer';

const Store = createStore(AnimeListApp);
export default Store;