import { Component } from 'react';

import { HiSearch } from 'react-icons/hi';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <HiSearch />
          </button>

          <input
            name="search"
            value={search}
            onChange={this.handleChange}
            className={css.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
