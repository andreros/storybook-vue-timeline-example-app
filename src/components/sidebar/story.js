import Sidebar from './index.vue';
import { storiesOf } from '@storybook/vue';

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
            <Sidebar />
        `
    }));