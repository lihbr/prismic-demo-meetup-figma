<script setup lang="ts">
const partials = usePartials();
</script>

<template>
	<header class="py-6 px-6 lg:px-12 lg:flex justify-between items-center">
		<NuxtLink to="/">
			<Icon name="logos:figma" class="w-auto h-[58px]" />
		</NuxtLink>
		<nav class="mt-6 lg:mt-0">
			<ul class="lg:flex items-center">
				<li
					v-for="item in partials?.data.nav"
					:key="item.label ?? ''"
					:class="{
						'lg:mx-2 last:mr-0 first:ml-0 my-2 last:mb-0 first:mt-0 lg:my-0':
							item.cta,
					}"
				>
					<PrismicLink
						v-if="!item.cta"
						:field="item.link"
						class="leading-none inline-block py-2 lg:px-4 font-medium underline-offset-[6px] decoration-[3px] hover:underline"
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
