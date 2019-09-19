import TimelineEvent from './index.vue';
import { storiesOf } from '@storybook/vue';

storiesOf(`Timeline Event`, module)
    .addDecorator(() => ({
        template: `
        <div class="app-scope">
            <story />
        </div>`
    }))
    .add('Base', () => ({
        components: {TimelineEvent},
        template: `
            <timeline-event />
        `
    }));
