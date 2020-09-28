<template>
	<section :class="'w-full flex items-center justify-center bg-' + background">
		<div :class="'w-11/12 mx-auto ' + maxWidth + ' text-' + align + ' p-8 md:p-' + padding + ' items-center flex flex-' + direction">
			<slot></slot>
		</div>
	</section>
</template>
<script>
	export default {
	    name: 'Container',
		props: {
	        maxWidth: {
	            type: String,
		        default: 'max-w-6xl'
	        },
			align: {
	            type: String,
				default: 'left'
			},
			mobilePadding: {
	            type: Number,
				default: 8
			},
			padding: {
	            type: Number,
				default: 20
			},
			background: {
	            type: String,
				default: 'gray-100'
			},
			direction: {
	            type: String,
				default: 'col'
			}
		}
	};
</script>
