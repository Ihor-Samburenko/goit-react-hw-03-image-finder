import { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import { searchPost } from 'components/Shared/api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

class ImgSearch extends Component {
  state = {
    page: 1,
    search: '',
    images: [],
    loading: false,
    error: null,
    showModal: false,
    bigImage: '',
    tag: '',
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.fetchPosts();
    }
  }

  updateSaerch = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  async fetchPosts() {
    const { search, page } = this.state;
    try {
      this.setState({ loading: true });
      const {
        data: { hits },
      } = await searchPost(search, page);
      this.setState(({ images }) => ({
        images: [...images, ...hits],
      }));
    } catch (error) {
      console.log(error);
      this.setState({
        error: error.message || 'Upss... Try again',
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  showModal = (url, alt) => {
    this.setState({
      showModal: true,
      bigImage: url,
      tag: alt,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const {
      images,
      loading,
      error,
      showModal,
      tag,
      bigImage,

      search,
    } = this.state;

    return (
      <>
        {showModal && (
          <Modal close={this.closeModal}>
            <img src={bigImage} alt={tag} width="800wh" />
          </Modal>
        )}

        <Searchbar onSubmit={this.updateSaerch} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {search !== '' && images.length === 0 && !loading && <p>Not found</p>}
        <ImageGallery images={images} showModal={this.showModal} />
        {Boolean(images.length) && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImgSearch;
