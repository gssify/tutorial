<template>
	<div class="counter">
		<a-button type="primary" @click="subtract()" >-</a-button>
		<pre>{{ count }}</pre>
		<a-button @click="add()">+</a-button>
	</div>
	<div class="counter-message">
		<slot />
	</div>

  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Button, Calendar } from 'ant-design-vue';

export default {
  components: {
    AButton: Button,
    ACalendar: Calendar,
  },
	setup() {
		const count = ref(0);
		const add = () => (count.value = count.value + 1);
		const subtract = () => (count.value = count.value - 1);

		return {
			count,
			add,
			subtract,
		};
	},
};
</script>

<style>
.counter {
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
}

.counter-message {
	text-align: center;
}
</style>
