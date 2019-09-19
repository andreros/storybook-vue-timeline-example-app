import { configure } from '@storybook/vue';

// import styles
import './_index.scss'

// automatically import all files ending in *.stories.js
configure([
    require.context('../src', true, /story\.js$/),
    require.context('../stories', true, /\.stories\.js$/)
], module);
