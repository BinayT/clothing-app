import React from "react";
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from "../../components/preview-collection/CollectionPreview";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    const mappedCollections = collections.map(
      ({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      )
    );
    return <div className="shop-page">{mappedCollections}</div>;
  }
}
