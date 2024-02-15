<template>
	<div>
		<h1>Caoruseltest</h1>
        <CaoruselItem 
            v-for="item in caorusel_data" 
            :key="item.id"
            :item_data="item"
        />
	</div>
</template>
	
<script>
import CaoruselItem from "@/components/CaoruselItem.vue"

export default {
    name: "CaoruselTest",
    components: {
		CaoruselItem,
	},
    props:{
        caorusel_data :{
            tape: Array,
            default: () => []
        }
    },
    data() {
        return {
        
        };
    },
};
</script>