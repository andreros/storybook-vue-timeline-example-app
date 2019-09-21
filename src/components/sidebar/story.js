import Sidebar from './index.vue';
import { storiesOf } from '@storybook/vue';
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

storiesOf(`Sidebar`, module)
    .addDecorator(() => ({
        template: `
        <div class="app-scope">
            <story />
        </div>`
    }))
    .add('Base', () => ({
        components: {Sidebar},
        template: `
            <sidebar />
        `
    }));