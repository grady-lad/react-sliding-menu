import React from 'react';
import SlidingMenu from '../index.js';
import { storiesOf} from '@kadira/storybook';

storiesOf('Footer', module)
  .add('default view', () => (
    <div className="todoapp">
      <SlidingMenu/>
    </div>
  ))
