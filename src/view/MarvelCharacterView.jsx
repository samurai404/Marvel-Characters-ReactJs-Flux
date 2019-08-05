import React, { Component } from 'react';
import marvelStore from '../store/MarvelStore';
import service from '../service/ApiRest';
import Character from '../component/Character'
import HeaderView from './HeaderView';
import { loaderURI } from '../common/constante';


export default class MarvelCharacterView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listeUser: [],
            isLoading: false
        }
    }

    componentDidMount() {
        service.getMarvelUser(this);
        marvelStore.addChangeListener(this.onStoreChange);
    }

    componentWillUnmount() {
        marvelStore.removeChangeListener(this.onStoreChange);
    }

    onStoreChange = () => {
        this.setState({ listeUser: marvelStore.getCharacter() })
    }

    getFirstThreeElement(liste) {
        const listFirstThreeElements = liste.filter((element, index) => index < 3);
        return listFirstThreeElements;
    }

    render() {
        return <>
            <HeaderView />
            {this.state.isLoading ?
                <img src={loaderURI} className="loader" alt="loader-gif" />
                :
                <div className="container-body">
                    <div className="container-character">
                        {this.state.listeUser ? this.state.listeUser.map((element) => (
                            <Character
                                key={element.id}
                                urlToImage={element.thumbnail.path}
                                extension={element.thumbnail.extension}
                                name={element.name}
                                description={element.description}
                                comicsNumber={element.comics.available}
                                firstThreeComics={this.getFirstThreeElement(element.comics.items)}
                            />
                        )) : ''}
                    </div>
                </div>}
        </>
    }
}