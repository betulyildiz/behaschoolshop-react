import React from "react";
import {connectSearchBox, SortBy} from "react-instantsearch-dom";

const AlgoliaHeader = () => (
  <div className="gx-algolia-header">
    <ConnectedSearchBox/>
    <div className="gx-algolia-sort-by">
      <label>Sırala</label>
      <SortBy
            items={[
             {value: 'beha_app', label: 'Varsayılan'},/*
             {value: 'price_desc', label: 'Fiyat Artan'},
             {value: 'price_asc', label: 'Fiyat Azalan'}*/
            ]}
           defaultRefinement="beha_app"
          />
    </div>
  </div>
);
const CustomSearchBox = ({currentRefinement, refine}) => (
  <div className="gx-search-bar gx-lt-icon-search-bar">
    <div className="gx-form-group">
      <input
        type="search"
        placeholder="Ürün, marka ara..."
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        autoComplete="off"
        className="ant-input form-control"
        id="q"
      />
      <span className="gx-search-icon gx-pointer"><i className="icon icon-search"/></span>
    </div>
  </div>
);
const ConnectedSearchBox = connectSearchBox(CustomSearchBox);

export default AlgoliaHeader;
