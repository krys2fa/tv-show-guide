/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';



class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.showFilter = this.showFilter.bind(this);
  }

  showFilter(event) {
    const { changeFilter } = this.props;
    changeFilter(event.target.value);
  }

  render() {
    return (


    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
