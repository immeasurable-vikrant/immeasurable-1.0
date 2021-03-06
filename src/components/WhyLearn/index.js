import React, { Fragment, useState } from 'react';
import Description from '../../common-components/description/description.component';
import WHY_LEARN_DATA from './whyLearnData';
import './index.scss';

const WhyLearn = () => {
  const [state] = useState({
    whyLearnData: WHY_LEARN_DATA,
  });

  const { whyLearnData } = state;
  return (
    <Fragment>
      <div className='why-learn-container'>
        {whyLearnData.map(({ id, ...otherProps }) => {
          return (
            <Fragment key={id}>
              <Description {...otherProps} />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WhyLearn;
