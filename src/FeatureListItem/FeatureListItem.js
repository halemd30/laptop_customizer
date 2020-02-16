import React from 'react';
import FeatureListOptions from '../FeatureListOptions/FeatureListOptions';

function FeatureListItem(props) {

    const featureHash = props.feature + '-' + props.idx;

    return (
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
            <FeatureListOptions 
                {...props}
            />
        </fieldset>
    );
}

export default FeatureListItem;