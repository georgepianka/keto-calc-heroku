import React from 'react';
import getEntrySearch from './';


class SearchForm extends React.Component {
  state = {
    foods: [],
    searchValue: ''
  };


  handleSearchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    Client.search(this.state.searchValue, (data) => {
      console.log(data.foods[0].food_name)
      console.log(
        /*203 = PROTEIN
          204 = FAT
          205 = CARBS
          208 = CAL
          291 = DIETARY FIBER */

        data.foods[0].full_nutrients.filter(n =>
          n.attr_id === 203 || n.attr_id === 204 || n.attr_id === 205 || n.attr_id === 208 || n.attr_id === 291)

        );

      this.setState({
        foods: data.foods,
        showRemoveIcon: true
      });
    });
  }

  handleSearchCancel = () => {
    this.setState({
      foods: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {

    return (

    )

  }

};

export default SearchForm;
