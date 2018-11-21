import { applyMiddleware, createStore } from 'redux';
import AnimeListApp from '../reducers/RootReducer';

const customMiddleware = (store: any) => (next: any) => (action: any) => {
    next({ ...action })
};
const Store = createStore(AnimeListApp, applyMiddleware(customMiddleware));

export default Store;