/*
 * GamePlayMessage Messages
 *
 * This contains all the text for the GamePlayMessage component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.GamePlayMessage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the GamePlayMessage component!',
  },
});
