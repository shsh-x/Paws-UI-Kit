<script setup lang="ts">
import type { BaseIcon } from "@components/Icon/icon";

const {
	color = "currentColor",
	width = "16px",
	height = "16px",
} = defineProps<BaseIcon>();
</script>

<template>
	<svg
		:width="width"
		:height="height"
		viewBox="0 -960 960 960"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M154-128q-43.72 0-74.86-31.14Q48-190.27 48-234v-492q0-43.72 31.14-74.86T154-832h176q21.43 0 40.85 8.09Q390.27-815.83 405-801l75 75h326q43.72 0 74.86 31.14T912-620v386q0 43.73-31.14 74.86Q849.72-128 806-128H154Zm0-106h652v-386H436L330-726H154v492Zm0 0v-492 492Z"
			:fill="color"
		/>
	</svg>
</template>
