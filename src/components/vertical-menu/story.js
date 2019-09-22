import verticalMenu from './index.vue';
import { storiesOf } from '@storybook/vue';


storiesOf(`Vertical Menu`, module)

    .addDecorator(() => ({
        template: `
        <div class="app-scope">
            <story />
        </div>`
    }))
    .add('Base', () => ({
        components: {verticalMenu},
        template: `
            <vertical-menu />
        `
    }));