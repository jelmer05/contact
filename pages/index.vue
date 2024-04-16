<script setup lang="ts">
	useHead({
		title: "Contact techgether",
		meta: [
			{
				name: "description",
				content:
					"Neem gemakkelijk contact op met Techgether via onze chatbot, 24/7 bereikbaar ",
			},
		],
	});
	onMounted(() => {
		const script = document.createElement("script");
		script.src = "//code.tidio.co/w6yfcexhzyaob5abpjedi6gwazcobfc0.js";
		script.async = true;
		document.body.appendChild(script);
	});

	const share = () => {
		navigator.share({
			url: "https://contact.techgether.nl",
		});
	};
</script>

<template>
	<section
		class="min-h-screen justify-center flex flex-col items-center bg-background">
		<div class="img-box mb-[-50px]">
			<img
				class="w-96"
				src="/jelmer.png"
				alt="Jelmer van der Veen" />
		</div>
		<div class="info gap-5 p-8 rounded-t-lg w-96 bg-white">
			<SvgLogo class="w-16" />
			<h1 class="text-xl">Jelmer van der veen</h1>
			<h2 class="text-sm">Web development</h2>

			<!-- ?contact info -->
			<div class="contact-info mt-5">
				<ul class="flex gap-5 text-[10px]">
					<li><nuxt-link to="tel:0629284803">0629284803</nuxt-link></li>
					<li>
						<nuxt-link to="mailto:info@techgether.nl"
							>info@techgether.nl</nuxt-link
						>
					</li>
					<li>
						<nuxt-link to="https://techgether.nl">Techgether.nl</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="icons flex transition-all duration-700 ani gap-5">
				<nuxt-link to="mailto:info@techgether.nl">
					<div class="icon p-3 flex-col flex items-center justify-center">
						<SvgMail
							class="p-5 scale-75 gap-2 flex-col flex items-center hover:bg-opacity-100 justify-center rounded-full bg-background bg-opacity-65 hover:animate-pulse" />
						<p class="text-[10px]">Mail</p>
					</div>
				</nuxt-link>
				<div
					@click="share()"
					class="icon p-3 flex-col flex items-center justify-center">
					<SvgDeel
						class="p-5 scale-75 hover:animate-pulse hover:bg-opacity-100 gap-2 flex-col flex items-center justify-center rounded-full bg-background bg-opacity-65" />
					<p class="text-[10px]">Deel</p>
				</div>
				<!-- <div
					class="icon p-5 scale-75 flex-col flex items-center justify-center">
					<SvgSave
						class="p-3 gap-2 flex-col flex items-center justify-center rounded-full bg-background bg-opacity-65" />
					<p class="text-[10px]">Save</p>
				</div> -->
			</div>
		</div>
		<div class="iphone mt-[-50px]">
			<img
				class="w-96"
				src="/iphones.png"
				alt="iphones techgether" />
		</div>
	</section>
</template>
