// Color system
import { Dimensions } from 'react-native';
export const colors = {
  BLACK: '#000',
  WHITE: '#fff',
  END_WHITE: '#e6e6e6',
  GRAY: '#a2a2a2',
  RED: '#FF0000',
  BORDER_LINE: '#a8a8a8a9',
  SHADOW: '#656566',
  TRANSPARENT: 'transparent',
  GRAY_DOVE: '#707070',
  LIGHT_GREY: '#f5f5f5',
  LIGHT_BLUE: '#3BB9FF',
  BLUE_PICK: '#0072CA',
  SELECTED: '#1F4BA5',
  BLUE: '#007bff',
  INDIGO: '#6610f2',
  PURPLE: '#6f42c1',
  PINK: '#e83e8c',
  ORANGE: '#fd7e14',
  YELLOW: '#ffc107',
  GREEN: '#28a745',
  TEAL: '#20c997',
  CYAN: '#17a2b8',
  BROWN: '#8B572A',
  DARK_BLUE: '#1A94F3',
  BUTTON_GREEN: '#30D24C',
  BUTTON_BLUE: '#3061C4',
  BACKGROUND_COLOR: '#EAEAEA',
  END_COLOR_MAIN: '#24194C',
  MID_COLOR_MAIN: '#1E153F',
  START_COLOR: '#ffffff',
  END_COLOR: '#E8E8E8',
  DIVIDER: '#C1C1C1',
  YELLOW_STAR: '#F2C634',
  DISABLE: 'gray',
  GRAY_C: '#CCCCCC',
  ICON_GRAY: '#515151',
  GRAY_DATE: '#B8B8B8',
};
// Sizing
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH_RATIO = WIDTH > 375 ? 1 : WIDTH / 375;
export const PADDING = 20 * WIDTH_RATIO;
export const BORDER_RADIUS = 8 * WIDTH_RATIO;
// Border
export const BORDER_WIDTH = 1;
