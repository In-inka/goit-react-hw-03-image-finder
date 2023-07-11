import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';

import Notiflix from 'notiflix';

import { Apps } from './App.styled';
import { Component } from 'react';
import * as api from '../service/api.js';

export class App extends Component {
  state = {
    name: ' ',
    page: 1,
    pictures: [],
    isLoading: false,
    error: ' ',
    totalHits: 0,
  };

  onClickLoadMore = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  onSearchNamePicture = name => {
    this.setState({
      name: name,
      page: 1,
      pictures: [],
      totalHits: 0,
    });
  };

  async componentDidUpdate(_, prevState) {
    const { name, page, pictures } = this.state;
    const namePicture = name.trim();
    if (!name) {
      return Notiflix.Notify.info('Enter a name to search for!');
    }

    if (prevState.name !== name || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });

      await api
        .getPicture(namePicture, page)
        .then(({ totalHits, hits }) => {
          if (!totalHits) {
            return Notiflix.Notify.failure(
              'Oops... :( nothing was found for your query, please try again!'
            );
          }
          this.setState({
            pictures: [...pictures, ...hits],
            totalHits: totalHits,
          });
        })
        .catch(error => {
          this.setState({
            error: error.response.data,
          });
          Notiflix.Notify.failure(`Something went wrong`);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { isLoading, page, totalHits, pictures } = this.state;
    const pageNull = Math.ceil(totalHits / api.PER_PAGE);
    return (
      <Apps>
        <Searchbar onSubmit={this.onSearchNamePicture} />
        <ImageGallery pictures={pictures} />
        {isLoading && <Loader />}
        {page < pageNull && <Button onClickLoadMore={this.onClickLoadMore} />}
      </Apps>
    );
  }
}
