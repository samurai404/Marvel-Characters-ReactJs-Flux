import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/dispatcher';


let listeUser = [];
class MarvelStore extends EventEmitter {


    setCharacter(data) {
        listeUser = data;
    }

    getCharacter() {
        return listeUser;
    }

    addChangeListener(callback) {
        this.on('event', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('event', callback);
    }

    emitChange() {
        this.emit('event');
    }

}
const marvelStore = new MarvelStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case 'SET_CHARACTER':
            marvelStore.setCharacter(action.value);
            break;
        default:
            break;
    }

    marvelStore.emitChange();
    return true;
});

export default marvelStore;
