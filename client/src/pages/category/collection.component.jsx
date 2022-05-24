import React from "react";
import { CollectionItemHOC } from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop-selector";
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import "./collection.styles.scss";
export const CollectionPage = () => {
  const {collectionId}=useParams()

  const collection=useSelector(selectCollection(collectionId))

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemHOC key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


