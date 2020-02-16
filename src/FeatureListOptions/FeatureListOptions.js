import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function FeatureListOptions(props) {
    const options = props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(props.feature)}
                    checked={item.name === props.selected[props.feature].name}
                    onChange={e => props.updateFeature(props.feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({props.usCurrencyFormat.format(item.cost)})
                </label>
            </div>
        );
    });

    return (
        <div>
            {options}
        </div>
    )
}
export default FeatureListOptions;