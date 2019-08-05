import { marvelURI, apiURI, timeStamp, apiPrivateKey, hash } from '../common/config';
import marvelAction from '../action/MarvelAction';

class ApiRest {

    static getMarvelUser(context) {
        context.setState({ isLoading: true });
        fetch(`${marvelURI}${apiURI}?ts=${timeStamp}&apikey=${apiPrivateKey}&hash=${hash}`)
            .then(response => response.json())
            .then((json) => {
                marvelAction.setCharacter(json.data.results);
                context.setState({ isLoading: false })
            });
    }

}

export default ApiRest;

