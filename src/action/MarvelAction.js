import AppDispatcher from '../dispatcher/dispatcher.js';

class MarvelAction {

    setCharacter(data) {
        AppDispatcher.dispatch({
            actionType: 'SET_CHARACTER',
            value: data
        })
    }
}

export default new MarvelAction();