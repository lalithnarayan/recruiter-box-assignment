/**
 *
 * Asynchronously loads the component for ChatWidgetContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
