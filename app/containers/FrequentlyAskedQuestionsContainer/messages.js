/*
 * FrequentlyAskedQuestionsContainer Messages
 *
 * This contains all the text for the FrequentlyAskedQuestionsContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FrequentlyAskedQuestionsContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FrequentlyAskedQuestionsContainer container!',
  },
  preferEmail: {
    id: `${scope}.preferEmail`,
    defaultMessage: 'Prefer Email Instead ?',
  },
  mailUs: {
    id: `${scope}.mailUs`,
    defaultMessage: 'Write to Us',
  },
  mailUsExplaination: {
    id: `${scope}.mailUsExplaination`,
    defaultMessage: 'We are super quick in responding queries',
  },
  inputPlaceholder: {
    id: `${scope}.inputPlaceholder`,
    defaultMessage: 'What can we help you with? Start typing your question',
  },
});
