<script setup lang="ts">
	import { useAuth } from "vue-clerk";
	import { SignOutButton } from "vue-clerk";

	const router = useRouter();
	const { isLoaded, userId, sessionId } = useAuth();

	if (isLoaded && !userId) {
		router.push("/login");
	}
	watch(userId, (newValue) => {
		if (!newValue && isLoaded) {
			router.push("/login");
		}
	});
</script>

<template>
	<div class="px-8 py-12 sm:py-16 md:px-20">
		<section
			class="w-full flex flex-col"
			v-if="isLoaded && userId">
			Hello, {{ userId }}
			<SignOutButton v-slot="{ handler }">
				<button
					class="border w-[200px] border-black px-4 py-2 mt-4 rounded-md bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
					@click="handler">
					Sign out
				</button>
			</SignOutButton>
		</section>
	</div>
	<div></div>
</template>
