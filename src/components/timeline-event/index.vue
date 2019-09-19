<template>
	<div class="timeline-event">
		<h1 class="timeline-event__date">{{day}}.{{month}}.{{year}}</h1>
		<p class="timeline-event__text">{{description}}</p>
	</div>
</template>

<script>
const DEFAULT_TEXTS = {
	description: "Some event"
};
export default {
	name: "TimelineEvent",
	props: {
		description: {
			type: String,
			required: false,
			default: DEFAULT_TEXTS.description
		},
		day: {
			type: Number,
			required: false,
			default: 1
		},
		month: {
			type: Number,
			required: false,
			default: 1
		},
		year: {
			type: Number,
			required: false,
			default: 1970
		}
	}
};
</script>
