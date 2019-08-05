import React, { Component } from 'react';

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const urlToImage = `${this.props.urlToImage}.${this.props.extension}`;
    return <>
      <div className="character-card">
        <img className="character-image" src={urlToImage} alt={this.props.urlToImage} />
        <div onClick={this.handleOpen} className="character-name">{this.props.name}</div>
      </div>

      {this.state.open ?
        <div className='popup'>
          <div className='popup_inner'>
            <div>
              <img className="character-image-detail" src={urlToImage} alt={this.props.urlToImage} />
            </div>
            <div className="character-text-detail">
              <div><b>NAME: </b><span className="character-name-detail">{this.props.name}</span></div>
              {this.props.description ? <div><b>DESCRIPTION: </b>{this.props.description}</div> : ''}
              <div><b>COMICS NUMBER:</b>{this.props.comicsNumber}</div>
              {this.props.firstThreeComics.length !== 0 ? <div><b>COMICS TITLE: </b>{this.props.firstThreeComics.map((element, index) => (
                <div key={index}>{element.name}</div>
              ))}</div> : ''}
            </div>
            <button className="btn-close" onClick={this.handleClose}>X</button>
          </div>
        </div>
        : ''}
    </>
  }
}

export default Character;
