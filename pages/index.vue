<template>
	<div>
		<Container background="gray-100">
			<Container container-width='' width="full" padding=0 mobile-padding=0 align="center">
				<h3 class="text-lg text-indigo-600 font-medium mb-2 uppercase tracking-wider">Now available</h3>
				<h1 class="text-5xl font-bold leading-tight mb-2">25+ responsive, free, and easy to use UI components built with TailwindCSS & VueJS</h1>
				<p class="leading-relaxed text-gray-600 text-xl mb-4">Neutron UI is a free to use, open-source UI kit made to help supercharge your next TailwindCSS and VueJS project.</p>
			</Container>
			<Container width="full" padding=0 mobile-padding=0 direction="row" align="center">
				<a href="https://github.com/Neutron-Creative/Neutron-UI" class="flex items-center justify-center w-full md:w-auto mb-2 md:mb-0">
					<Button size="lg" class="md:mr-4 flex flex-row items-center" background="white" color="gray-800">
						<img class="mr-3" style="width:20px;height:auto;opacity:.85;" src="/github.svg"/>
						View the repository
					</Button>
				</a>
				<a href="https://github.com/Neutron-Creative/Neutron-UI" class="flex items-center justify-center w-full md:w-auto mb-2 md:mb-0">
					<Button size="lg" background="indigo-600">👇 Download for free</Button>
				</a>
			</Container>
		</Container>
		<Container background="white">
			<h2 id="website" class="text-3xl font-semibold mb-4 text-gray-800">Components</h2>
			<div style="height: 1px;" class="w-full bg-gray-100 mb-4"></div>
			<div class="flex flex-col md:flex-row w-full mb-24">
				<div class="flex flex-col w-full md:w-1/3 p-2 rounded-lg border border-white hover:border-gray-200 cursor-pointer">
					<div class="w-full p-16 rounded-lg border border-gray-200 bg-gray-100 mb-4 ">

					</div>
					<span class="text-lg font-medium mb-2">Containers</span>
					<span class="text-gray-700">Coming soon</span>
				</div>
				<div class="flex flex-col w-full md:w-1/3 p-2 rounded-lg border border-white hover:border-gray-200 cursor-pointer">
					<div class="w-full p-16 rounded-lg border border-gray-200 bg-gray-100 mb-4 ">

					</div>
					<span class="text-lg font-medium mb-2">Typography</span>
					<span class="text-gray-700">Coming soon</span>
				</div>
				<div class="flex flex-col w-full md:w-1/3 p-2 rounded-lg border border-white hover:border-gray-200 cursor-pointer">
					<div class="w-full p-16 rounded-lg border border-gray-200 bg-gray-100 mb-4 ">

					</div>
					<span class="text-lg font-medium mb-2">Buttons</span>
					<span class="text-gray-700">Coming soon</span>
				</div>
			</div>
			<h2 id="website" class="text-3xl font-semibold mb-4 text-gray-800">Examples</h2>
			<div style="height: 1px;" class="w-full bg-gray-100 mb-4"></div>
			<div class="flex flex-col md:flex-row w-full">
				<div class="flex flex-col w-full md:w-1/3 p-2 rounded-lg border border-white hover:border-gray-200 cursor-pointer">
					<div class="w-full p-16 rounded-lg border border-gray-200 bg-gray-100 mb-4 ">

					</div>
					<span class="text-lg font-medium mb-2">Hero section</span>
					<span class="text-gray-700">Coming soon</span>
				</div>
				<div class="flex flex-col w-full md:w-1/3 p-2 rounded-lg border border-white hover:border-gray-200 cursor-pointer">
					<div class="w-full p-16 rounded-lg border border-gray-200 bg-gray-100 mb-4 ">

					</div>
					<span class="text-lg font-medium mb-2">Feature section</span>
					<span class="text-gray-700">Coming soon</span>
				</div>
				<div class="flex flex-col w-full md:w-1/3 p-2 rounded-lg border border-white hover:border-gray-200 cursor-pointer">
					<div class="w-full p-16 rounded-lg border border-gray-200 bg-gray-100 mb-4 ">

					</div>
					<span class="text-lg font-medium mb-2">Hero section</span>
					<span class="text-gray-700">Coming soon</span>
				</div>
			</div>
		</Container>
	</div>
</template>
<script>
	import Container from "../components/Container";
    import Button from "../components/Button";
    export default {
        components: {Button, Container},
	};
</script>
