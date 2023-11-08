<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const prop = defineProps(
	getSliceComponentProps<Content.BoldQuoteSlice>([
		"slice",
		"index",
		"slices",
		"context",
	]),
);

const theme = computed(() => {
	const map: Record<string, string> = {
		Indigo: "bg-indigo",
		Mantis: "bg-mantis",
		Butter: "bg-butter",
	};

	return map[prop.slice.primary.theme];
});
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="box"
		:class="theme"
	>
		<div class="bounded text-center">
			<PrismicRichText
				:field="slice.primary.title"
				class="mb-8 text-[22px] font-semibold"
			/>
			<figure>
				<PrismicRichText
					:field="slice.primary.quote"
					wrapper="blockquote"
					class="mb-10 font-display text-3xl sm:text-4xl xl:text-5xl leading-[1.125] before:content-['“_'] after:content-['_”']"
				/>
				<figcaption class="font-semibold">
					{{ slice.primary.author }}
				</figcaption>
			</figure>
			<CtaButton
				v-if="slice.variation === 'withCta'"
				:link="slice.primary.cta_link"
				theme="transparent"
				class="mt-16"
			>
				{{ slice.primary.cta_label }}
			</CtaButton>
		</div>
	</section>
</template>

<style scoped>
blockquote:deep(p) {
	display: inline;
}
</style>
