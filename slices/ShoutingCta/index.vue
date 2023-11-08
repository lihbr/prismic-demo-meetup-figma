<script setup lang="ts">
import type { Content, HTMLRichTextSerializer } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
	getSliceComponentProps<Content.ShoutingCtaSlice>([
		"slice",
		"index",
		"slices",
		"context",
	]),
);

const serializer: HTMLRichTextSerializer = {
	heading2: ({ children }) =>
		/* html */ `<h2 class="heading-1 font-medium">${children}</h2>`,
	strong: ({ children }) =>
		/* html */ `<strong class="font-medium text-mantis">${children}</strong>`,
};
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="bg-black text-white box"
	>
		<div
			class="bounded flex flex-col xl:flex-row gap-12 xl:gap-6 items-center justify-between"
		>
			<PrismicRichText :field="slice.primary.title" :serializer="serializer" />
			<CtaButton :link="slice.primary.cta_link" size="xl">
				{{ slice.primary.cta_label }}
			</CtaButton>
		</div>
	</section>
</template>
