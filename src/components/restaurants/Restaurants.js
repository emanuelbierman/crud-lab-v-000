import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} restaurantId={this.props.restaurantId} />
        })}
      </ul>
    );
  }
};

export default Restaurants;
