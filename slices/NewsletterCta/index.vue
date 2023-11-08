<script setup lang="ts">
import type { Content, HTMLRichTextSerializer } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
	getSliceComponentProps<Content.NewsletterCtaSlice>([
		"slice",
		"index",
		"slices",
		"context",
	]),
);

const serializer: HTMLRichTextSerializer = {
	heading2: ({ children }) =>
		/* html */ `<h2 class="text-4xl xl:text-[56px] leading-[1.125] font-bold">${children}</h2>`,
};
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="bg-butter box"
	>
		<div class="bounded flex flex-col xl:flex-row gap-12 xl:gap-6">
			<PrismicRichText :field="slice.primary.title" :serializer="serializer" />
			<form action="/api/sign-up" method="post">
				<div class="border-b mb-4 flex">
					<input
						type="email"
						:placeholder="slice.primary.placeholder ?? ''"
						required
						class="bg-transparent text-4xl xl:text-[56px] leading-[1.125] font-bold placeholder-black/50 focus:outline-none w-full"
					/>
					<button
						type="submit"
						class="transition-transform will-change-transform hover:-translate-y-0.5"
					>
						<Icon
							name="ic:baseline-subdirectory-arrow-right"
							class="h-[36px] w-[36px] xl:h-[56px] sm:w-[56px]"
						/>
					</button>
				</div>
				<label
					for="optin"
					class="text-sm leading-relaxed optin flex gap-3 items-center"
				>
					<input
						id="optin"
						type="checkbox"
						name="optin"
						required
						class="sr-only"
					/>
					<figure
						class="border w-5 h-5 inline-flex items-center justify-center"
					>
						<Icon name="radix-icons:cross-2" class="h-4 w-4 opacity-0" />
					</figure>
					{{ slice.primary.optin_label }}
				</label>
				<PrismicRichText :field="slice.primary.disclaimer" class="mt-6" />
			</form>
		</div>
	</section>
</template>

<style scoped>
.optin input:checked + figure svg {
	opacity: 1;
}

.optin {
	cursor: var(--cursorPointer);
}
</style>
