<template>
	<div>
		<welcome-header/>
		<welcome-info/>
		<welcome-reviews/>
	</div>
</template>

<script>

import Info from './welcome/Info.vue'
import Header from './welcome/Header.vue'
import Reviews from './welcome/Reviews.vue'

export default {
	components:{
    	'welcome-info': Info,
    	'welcome-header': Header,
    	'welcome-reviews': Reviews
    }
}
</script>