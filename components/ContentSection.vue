<template>
	<section class="py-20 bg-white text-zinc-900 px-4 sm:px-8">
		<div class="container mx-auto max-w-7xl">
			<div class="grid grid-cols-12 gap-16 md:gap-32">
				<!-- Left Column -->
				<div class="col-span-12 md:col-span-4">
					<WorkHistory />
				</div>

				<!-- Right Column -->
				<div class="col-span-12 md:col-span-5 md:col-start-7">
					<About />
					<ToolGrid />
				</div>
			</div>
		</div>
	</section>
</template>
