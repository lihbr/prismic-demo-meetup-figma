<script setup lang="ts">
import { Content, HTMLRichTextSerializer } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
	getSliceComponentProps<Content.HeroAssetSlice>([
		"slice",
		"index",
		"slices",
		"context",
	]),
);

const serializer: HTMLRichTextSerializer = {
	heading1: ({ children }) =>
		/* html */ `<h1 class="heading-1 font-medium">${children}</h1>`,
};
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="box"
	>
		<div class="bounded xl:flex justify-between mb-14 items-end">
			<PrismicRichText
				:field="slice.primary.title"
				:serializer="serializer"
				class="flex-1 mb-6 xl:mb-0"
			/>
			<CtaButton :link="slice.primary.cta_link" size="l">
				{{ slice.primary.cta_label }}
			</CtaButton>
		</div>
		<figure class="bounded rounded-xl overflow-hidden shadow-lg">
			<PrismicImage :field="slice.primary.image" class="w-full" />
		</figure>
	</section>
</template>
