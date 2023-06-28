<script setup lang="ts">
import { Content, HTMLRichTextSerializer } from "@prismicio/client";
import { VNodeRef } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
	getSliceComponentProps<Content.TextAssetSlice>([
		"slice",
		"index",
		"slices",
		"context",
	]),
);

const serializer: HTMLRichTextSerializer = {
	heading2: ({ children }) =>
		/* html */ `<h2 class="heading-1 font-medium">${children}</h2>`,
};

const $slice = ref<VNodeRef>();
const background = useBackground();
const visibility = ref(0);

let observer: IntersectionObserver;

onMounted(() => {
	// Create an Intersection Observer instance
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				visibility.value = Math.round(entry.intersectionRatio * 100);
			});
		},
		{
			threshold: new Array(101).fill(true).map((_, i) => i / 100),
		},
	);

	observer.observe($slice.value as unknown as Element);
});

watch(
	visibility,
	() => {
		background.value[props.slice.id ?? props.index] = {
			color: props.slice.primary.background_color ?? "#ffffff",
			visibility: visibility.value,
		};
	},
	{ immediate: true },
);

onUnmounted(() => {
	delete background.value[props.slice.id ?? props.index];
	observer?.disconnect();
});

const resolvedBackground = useResolvedBackground(
	props.slice.primary.background_color,
);
</script>

<template>
	<section
		ref="$slice"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pt-[144px] px-6 border-b border-black/30"
	>
		<header class="bounded mb-8">
			<div class="mb-6 text-lg font-semibold">{{ slice.primary.category }}</div>
			<PrismicRichText :field="slice.primary.title" :serializer="serializer" />
		</header>
		<div
			class="mx-auto max-w-screen-2xl flex-col sm:flex-row flex gap-[60px]"
			:class="{
				'flex-row-reverse': slice.primary.inverted,
			}"
			:style="{
				[slice.primary.inverted ? 'paddingRight' : 'paddingLeft']:
					'clamp(0rem, -41.5rem + 50vw, 8rem)',
			}"
		>
			<div class="w-[360px]">
				<PrismicRichText
					:field="slice.primary.description"
					class="text-[22px] mb-6"
				/>
				<CtaButton :link="slice.primary.cta_link" theme="monochrome">
					{{ slice.primary.cta_label }}
				</CtaButton>
			</div>
			<figure class="flex-1 overflow-hidden rounded-t-xl">
				<PrismicImage :field="slice.primary.image" />
			</figure>
		</div>
	</section>
</template>

<style scoped>
section {
	background: v-bind(resolvedBackground);
}
</style>
