<template>
	<div>
		<img :src="item_data.img" alt="">
	</div>
</template>
	
<script>

export default {
    name: "CaoruselItem",
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    },
};
</script>