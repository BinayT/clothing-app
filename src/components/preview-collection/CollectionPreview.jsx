import React from "react";
import "./CollectionPreview.scss";
import CollectionItems from "../collection-items/CollectionItems";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, i) => i < 4)
        .map(({ id, ...restProps }) => (
          <CollectionItems key={id} {...restProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
