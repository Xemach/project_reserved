import { makeTheme } from 'dripsy';

export const theme = makeTheme({
  colors: {
    $text: '#0C1A30',
    $primary: '#D8FF3B',
    $background: '#FFFFFF',
    $secondary: '#FAFAFA',
    $textGray: '#838589',
    $labelNeutral: '#EFF5FB',
    $labelSuccess: '#EEFAF6',
    $labelError: '#FCECEF',
    $placeholder: '#C4C5C4',
    $link: '#3669C9',
    $error: 'red',
  },
  space: {
    $default: 20,
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    title: {
      fontSize: '$6',
      fontWeight: 'bold',
      color: '$text',
    },
    p: {
      fontSize: '$1',
      color: '$text',
    },
    label: {
      fontSize: '$2',
      color: '$text',
      fontWeight: '500',
    },
    subtitle: {
      fontSize: '$1',
      color: '$textGray',
    },
    header: {
      fontSize: '$2',
      color: '$text',
      fontWeight: '500',
    },
    buttonText: {
      fontSize: '$3',
      color: '$text',
      fontWeight: '500',
    },
    link: {
      fontSize: '$2',
      color: '$link',
      fontWeight: '500',
    },
    error: {
      fontSize: '$2',
      color: '$textGray',
      fontWeight: '500',
    },
    mainCard: {
      color: '$text',
      fontSize: '$2',
      fontWeight: '500',
    },
    homeCardTitle: {
      color: '$text',
      fontSize: '$5',
      fontWeight: '500',
    },
    tableCard: {
      color: '$text',
      fontSize: '$3',
    },
  },
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}
