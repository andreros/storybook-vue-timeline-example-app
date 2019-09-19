<template>
	<div>
		<div class="timeline">
			<div class="timeline__up-col">
				<template v-for="(event, index) in events">
					<timeline-event
						v-if="index % 2 == 0"
						:key="index"
						:description="event.description"
						:day="event.day"
						:month="event.month"
						:year="event.year"
					/>
				</template>
			</div>
			<hr class="timeline__border" />
			<div class="timeline__down-col">
				<template v-for="(event, index) in events">
					<timeline-event
						v-if="index % 2 == 1"
						:key="index"
						:description="event.description"
						:day="event.day"
						:month="event.month"
						:year="event.year"
					/>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import TimelineEvent from "../timeline-event/index.vue";

export default {
	name: "Timeline",
	components: {
		TimelineEvent
	},
	props: {
		events: {
			type: Array,
			required: true
		}
	}
};
</script>
