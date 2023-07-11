import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
//import Modal from './Modal';
//style///
import { Apps } from './App.styled';
import { Component } from 'react';
import * as API from '../API/Api.js';

export class App extends Component {
  state = {
    name: ' ',
    page: 1,
    pictures: [],
  };

  onSearchNamePicture = name => {
    this.setState({
      name: name,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const namePicture = String(this.state.name).split(/ {1,}/).join('+');

      if (prevState.name !== this.state.name) {
        await API.getPicture(namePicture, this.state.page).then(({ hits }) => {
          this.setState({
            pictures: [...this.state.pictures, ...hits],
          });
        });
      }
      console.log(this.state.pictures);
    } catch (error) {}
  }

  render() {
    return (
      <Apps>
        <Searchbar onSubmit={this.onSearchNamePicture} />
        <ImageGallery pictures={this.state.pictures} />
        <Loader />
        <Button />
        {/* <Modal /> */}
      </Apps>
    );
  }
}
