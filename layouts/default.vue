<template>
	<div>
		<Container direction="row" class="shadow sticky top-0 z-40" max-width="6xl" padding="4">
			<n-link to="/" class="flex flex-row items-center justify-center">
				<Logo style="max-width: 115px;" class="mr-4"/>
			</n-link>
			<a href="https://github.com/Neutron-Creative/Neutron-UI" class="flex flex-row items-center justify-center">
				<span class="text-gray-600 text-sm cursor-pointer hover:underline" v-if="this.github_meta">Last updated on {{ new Date(github_meta.updated_at).toLocaleDateString() }}</span>
			</a>
			<div class="ml-auto flex flex-row items-center hidden md:flex">
				<!-- <n-link to="/examples"> -->
					<Button class="mr-2" inverted-shadow background="none" color="gray-600" size="sm" styles="inline">Examples</Button>
				<!-- </n-link> -->
				<!-- <n-link to="/components"> -->
					<Button class="mr-2" inverted-shadow background="none" color="gray-600" size="sm" styles="inline">Components</Button>
				<!-- </n-link> -->
				<!-- <n-link to="/contribute"> -->
					<Button class="mr-2" inverted-shadow background="none" color="gray-600" size="sm" styles="inline">Contribute</Button>
				<!-- </n-link> -->
				<!-- <n-link to="/faq"> -->
					<Button class="mr-2" inverted-shadow background="none" color="gray-600" size="sm" styles="inline">FAQ</Button>
				<!-- </n-link> -->
				<a href="https://github.com/Neutron-Creative/Neutron-UI">
					<Button size="sm" styles="short" background="indigo-600">Download free</Button>
				</a>
			</div>
		</Container>
		<Nuxt class="min-h-screen">
		</Nuxt>
		<Container padding="8" align="center" background="black">
			<span class="text-sm font-medium text-gray-300 leading-loose">
				© 2020 Neutron Creative Inc. All rights reserved.<br/>
				Neutron-UI is free-to-use, open-source software licensed under <a class="text-indigo-600 hover:underline" href="#">GPLv3+</a><br/>
				Have a question or need support? Visit us at
				<a href="https://neutroncreative.com" class="text-indigo-600 hover:underline">neutroncreative.com</a><br/>
				On a mission to make the world open-source 🌎
			</span>
		</Container>
	</div>
</template>
<script>
    export default {
        data: function() {
            return {
				github_meta: null
            };
        },
	    methods: {
            fetch_github_meta: async function() {
                let request = await this.$axios.get(
                    'https://api.github.com/repos/Neutron-Creative/Neutron-UI'
                );
                this.github_meta = request.data;
                console.log(request.data);
            }
	    },
        mounted: function() {
            this.fetch_github_meta();
        }
    };
</script>
<style>
	a, button {
		outline: none !important;
	}
	body {
		background: #000;
	}
</style>
