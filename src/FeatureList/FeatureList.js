import React from 'react';
import FeatureListItem from '../FeatureListItem/FeatureListItem';

function FeatureList(props) {
    
    const featureListItem = Object.keys(props.features).map((feature, idx) => 
            <FeatureListItem 
                {...props}
                feature={feature}
                idx={idx}
            />
      );

      return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {featureListItem}
        </form>
      )
}

export default FeatureList;