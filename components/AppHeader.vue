<script setup lang="ts">
const partials = usePartials();
</script>

<template>
	<header class="py-6 px-12 flex justify-between items-center">
		<NuxtLink to="/">
			<Icon name="logos:prismic-icon" class="w-auto h-[58px]" />
		</NuxtLink>
		<nav>
			<ul class="flex items-center">
				<li
					v-for="item in partials?.data.nav"
					:key="item.label ?? ''"
					:class="{
						'mx-2 last:mr-0 first:ml-0': item.cta,
					}"
				>
					<PrismicLink
						v-if="!item.cta"
						:field="item.link"
						class="leading-none inline-block py-2 px-4 font-medium underline-offset-[6px] decoration-[3px] hover:underline"
					>
						{{ item.label }}
					</PrismicLink>
					<CtaButton v-else :link="item.link">
						{{ item.label }}
					</CtaButton>
				</li>
			</ul>
		</nav>
	</header>
</template>
