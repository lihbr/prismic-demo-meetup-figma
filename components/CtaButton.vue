<script setup lang="ts">
import { LinkField } from "@prismicio/client";

defineProps<{
	link: LinkField;
	size?: "m" | "l" | "xl";
	theme?: "transparent";
}>();
</script>

<template>
	<PrismicLink
		:field="link"
		class="leading-none inline-block font-bold transition-transform will-change-transform hover:-translate-y-0.5"
		:class="{
			'text-lg rounded-[10px] pt-[14px] pb-4 px-6': !size || size === 'm',
			'text-[28px] rounded-[12px] pt-[19px] pb-[21px] px-9': size === 'l',
			'text-5xl rounded-[10px] pt-[23px] pb-[27px] px-12': size === 'xl',
			'bg-indigo text-white': !theme,
			border: theme === 'transparent',
		}"
	>
		<slot />
	</PrismicLink>
</template>
