import React from "react";
import {Layout} from "antd";
import {
  ClearRefinements,
  HierarchicalMenu,
  Panel,
  RefinementList,
  RangeInput
} from "react-instantsearch-dom";

const {Sider} = Layout;
const Sidebar = (props) => (
  
  <Sider className="gx-algolia-sidebar">
    <div className="gx-algolia-sidebar-content">
      <ClearRefinements
        translations={{
          reset: 'Tüm Filtreleri Temizle',
        }}
      />

      <div className="gx-algolia-category-item">
        <div className="gx-algolia-category-title">Sonuçları Göster:</div>
        <HierarchicalMenu
                attributes={[
                  'categories.​lvl0',
                  'categories.​lvl1',
                  'categories.​lvl2',
                ]}
                defaultRefinement={props.category}
              />
      </div>
      <div className="gx-algolia-category-item">
        <div className="gx-algolia-category-title">Filtrele</div>

        <Panel header={<span>Marka</span>}>
          <RefinementList className="gx-algolia-refinementList"
                          attribute="manufacturer"
                          operator="or"
                          limit={5}
                          searchable
                          translations={{
                            showMore(expanded) {
                            return expanded ? 'Daha Az' : 'Daha Fazla';
                            },
                            noResults: 'Sonuç Yok',
                            submitTitle: 'Arama sorgunuzu gönderin.',
                            resetTitle: 'Arama sorgunuzu temizleyin.',
                            placeholder: 'Marka girin...',
  }}   
          />
        </Panel>

      </div></div>

  </Sider>
);


export default Sidebar;

