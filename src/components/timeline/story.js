import Timeline from './index.vue';
import { storiesOf } from '@storybook/vue';

storiesOf(`Timeline`, module)
    .addDecorator(() => ({
        template: `
        <div class="app-scope">
            <story />
        </div>`
    }))
    .add('Base', () => ({
        components: {Timeline},
        data() {
            return {
                events: [
                    {
                        description: "My first event",
                        day: 1,
                        month: 9,
                        year: 2019
                    },
                    {
                        description: "My second event",
                        day: 4,
                        month: 9,
                        year: 2019
                    },
                    {
                        description: "My third event",
                        day: 7,
                        month: 9,
                        year: 2019
                    },
                    {
                        description: "My fourth event",
                        day: 12,
                        month: 9,
                        year: 2019
                    },
                    {
                        description: "My fifth event",
                        day: 18,
                        month: 9,
                        year: 2019
                    },
                    {
                        description: "My sixth event",
                        day: 22,
                        month: 9,
                        year: 2019
                    }
                ]
            };
        },
        template: `
            <timeline
                :events="events" />
        `
    }));
