<script setup lang="ts">
import { HTMLRichTextSerializer, KeyTextField } from "@prismicio/client";

const partials = usePartials();

const resolveIcon = (label: KeyTextField): string => {
	const map: Record<string, string> = {
		youtube: "mdi:youtube",
		twitter: "mdi:twitter",
		facebook: "mdi:facebook",
		instagram: "mdi:instagram",
		linkedin: "mdi:instagram",
	};

	return map[label?.toLowerCase() ?? ""] ?? "mdi:link-variant";
};

const serializer: HTMLRichTextSerializer = {
	list: ({ children }) => /* html */ `<ul class='space-y-4'>${children}</ul>`,
};
</script>

<template>
	<footer
		class="bg-black text-white flex flex-wrap justify-center text-sm py-[120px] px-6 gap-x-6 gap-y-24"
	>
		<section class="w-[216px]">
			<h2 class="mb-4 font-bold">Prismic</h2>
			<ul class="space-y-4">
				<li v-for="social in partials?.data.socials" :key="social.label ?? ''">
					<PrismicLink
						:field="social.link"
						class="inline-flex items-center gap-2 leading-normal"
					>
						<Icon :name="resolveIcon(social.label)" class="w-4 h-4" />
						{{ social.label }}
					</PrismicLink>
				</li>
			</ul>
		</section>
		<section
			v-for="nav in partials?.data.footer_nav"
			:key="nav.category ?? ''"
			class="w-[216px] nav"
		>
			<h2 class="mb-4 font-bold">{{ nav.category }}</h2>
			<PrismicRichText :field="nav.links" :serializer="serializer" />
		</section>
	</footer>
</template>

<style scoped>
.nav:deep(a) {
	@apply underline-offset-[6px] hover:underline leading-normal;
}
</style>
