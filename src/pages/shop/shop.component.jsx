import React, { Component } from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    console.log(collection);
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;
