<template>
	<div>
		<Container direction="row" class="shadow sticky top-0" max-width="6xl" padding="4">
			<n-link to="/library" class="flex flex-row items-center justify-center">
				<Logo style="max-width: 115px;" class="mr-4"/>
			</n-link>
			<a href="https://github.com/Neutron-Creative/Neutron-UI" class="flex flex-row items-center justify-center">
				<span class="text-gray-600 text-sm cursor-pointer hover:underline">Last updated July 3rd, 2020</span>
			</a>
			<div class="ml-auto flex flex-row items-center hidden md:flex">
				<n-link to="/library/">
					<Button class="mr-2" inverted-shadow background="none" color="gray-600" size="sm" styles="inline">Browse components</Button>
				</n-link>
				<n-link to="/library/pricing">
					<Button class="mr-2" inverted-shadow background="none" color="gray-600" size="sm" styles="inline">Pricing & FAQ</Button>
				</n-link>
				<a href="">
					<Button size="sm" styles="short" background="indigo-600">Download free</Button>
				</a>
			</div>
		</Container>
		<Nuxt class="min-h-screen">
		</Nuxt>
		<Container padding="8">
			<span class="text-sm font-medium text-gray-600">
				© 2020 Neutron Creative Inc. All rights reserved.
			</span>
		</Container>
	</div>
</template>
<script>
    import Button from "../components/Button";
    export default {
        components: {Button}
    };
</script>
<style>
	a, button {
		outline: none !important;
	}
</style>
