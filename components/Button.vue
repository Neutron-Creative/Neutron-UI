<template>
	<button :class="buttonStyles" :style="inlineButtonStyles">
		<slot></slot>
	</button>
</template>
<script>
	export default {

		data: function() {
			return {
			    buttonStyles: '',
				inlineButtonStyles: ''
            };
		},
		mounted: function() {

		    // If uppercase is true, enforce policy
		    if(this.uppercase) this.buttonStyles+= ' uppercase';

		    // If background is image, gradient, or hex color
		    if(this.background.indexOf('#') >= 0 || this.background.indexOf('(') >= 0) {
		        this.inlineButtonStyles += 'background:' + this.background + ';';
		    } else {
				this.buttonStyles += ' bg-' + this.background;
		    }

		    // If color is hex color
            if(this.color.indexOf('#') >= 0 || this.color.indexOf('(') >= 0) {
                this.inlineButtonStyles += 'color:' + this.color + ';';
            } else {
                this.buttonStyles += ' text-' + this.color;
            }

            // Apply text size to button
			this.buttonStyles += ' text-' + this.size;

		    switch(this.styles) {
		            default:
		                this.buttonStyles += ' p-4 px-6 rounded-lg shadow font-semibold';
		                break;
		    }
		},
		props: {
			styles: {
			    default: 'default',
				type: String
			},
			uppercase: {
			    default: true,
			    type: Boolean
			},
			background: {
			    type: String,
				default: 'gray-600'
			},
			color: {
			    type: String,
				default: 'white'
			},
			size: {
			    type: String,
				default: 'sm'
			}
		}
	};
</script>

<style scoped>
	button:hover {
		box-shadow: inset 0 -100px 0 0 rgba(255,255,255,.1);
	}
</style>
