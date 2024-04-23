<script setup lang="ts">
	import { SignIn } from "vue-clerk";

	definePageMeta({
		middleware: ["public"],
	});
</script>

<template>
	<div class="flex justify-center py-24">
		<SignIn
			afterSignInUrl="/dashboard"
			signInUrl="/dashboard"
			path="/dashboard"
			redirect-url="/dashboard" />
	</div>
</template>
