<template>
	<section :class="'w-' + containerWidth + ' flex items-center bg-' + background">
		<div :class="'w-' + width + ' mx-auto ' + maxWidth + ' text-' + align + ' p-' + mobilePadding + ' md:p-' + padding + ' ' + align_direction + ' flex flex-col md:flex-' + direction">
			<slot></slot>
		</div>
	</section>
</template>
<script>
	export default {
	    name: 'Container',
		data: function() {
	        return {
				align_direction: '',
	        };
		},
		mounted: function() {
			if(this.align == 'center') {
			    if(this.direction=='row') {
			        this.align_direction = 'justify-center';
			    } else {
			        this.align_direction = 'items-center';
			    }
			}
		},
		props: {
	        width: {
	            type: String,
		        default: '11/12'
	        },
	        maxWidth: {
	            type: String,
		        default: 'max-w-6xl'
	        },
			containerWidth: {
                type: String,
                default: 'full'
            },
			align: {
	            type: String,
				default: 'left'
			},
			mobilePadding: {
	            type: String,
				default: '8'
			},
			padding: {
	            type: String,
				default: '20'
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
