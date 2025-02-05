<template>
	<section
		class="min-h-[30rem] bg-zinc-900 text-white px-4 sm:px-8 py-12 sm:py-20"
	>
		<div class="container mx-auto max-w-7xl">
			<div class="grid grid-cols-12 gap-6 md:gap-16">
				<!-- Mobile Name -->
				<div class="md:hidden col-span-12 mb-8">
					<h1 class="text-4xl sm:text-5xl font-bold tracking-tighter">
						Andrew L.
					</h1>
				</div>

				<!-- Left Column with Vertical Name - Hidden on Mobile -->
				<div class="hidden md:block col-span-2">
					<div class="flex flex-col h-full justify-center">
						<h1
							class="text-[6rem] uppercase font-bold tracking-tighter rotate-180 [writing-mode:vertical-lr] leading-none"
						>
							Andrew L.
						</h1>
					</div>
				</div>

				<!-- Main Content Area -->
				<div class="col-span-12 md:col-span-9 md:col-start-4">
					<div class="grid grid-cols-12 gap-6 md:gap-12">
						<!-- Image Column -->
						<div class="col-span-12 md:col-span-5">
							<div class="max-w-[280px] md:max-w-full mx-auto md:mx-0">
								<div
									class="aspect-square bg-zinc-800 rounded-lg overflow-hidden"
								>
									<img
										src="/images/blank-pfp.png"
										alt="Profile"
										class="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>

						<!-- Content Column -->
						<div
							class="col-span-12 md:col-span-7 flex flex-col justify-between"
						>
							<!-- Bio -->
							<div class="mb-8 md:mb-16">
								<p class="text-lg text-zinc-300">
									Hi, im Drew - Web / App Designer based in the United States. I
									have a background in Full Stack Development and Marketing.
									When i'm not building I'm probably watching a video on Tech &
									AI or playing Guitar.
								</p>
							</div>

							<!-- Bottom Section -->
							<div class="grid grid-cols-1 sm:grid-cols-12 gap-8">
								<!-- Contact Info -->
								<div class="sm:col-span-5">
									<div class="space-y-3">
										<a
											v-for="link in socialLinks"
											:key="link.url"
											:href="link.url"
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm sm:text-base"
										>
											<Icon :name="link.icon" class="w-5 h-5" />
											{{ link.label }}
										</a>
									</div>
								</div>

								<!-- Interests -->
								<div class="sm:col-span-7">
									<div class="flex flex-col items-start sm:items-end">
										<h3 class="text-sm mb-3 sm:mb-4">Interests</h3>
										<div
											class="flex flex-wrap gap-2 justify-start sm:justify-end"
										>
											<span
												v-for="interest in interests"
												:key="interest"
												class="px-3 sm:px-4 py-1 rounded-full border border-zinc-700 text-xs sm:text-sm"
											>
												{{ interest }}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const socialLinks = [
	{
		label: 'Username Here',
		url: 'https://twitter.com/',
		icon: 'simple-icons:x',
	},
	{
		label: 'Email Here',
		url: 'mailto:',
		icon: 'mdi:email',
	},
	{
		label: 'Site Name Here',
		url: 'https://Google.com',
		icon: 'mdi:web',
	},
];

const interests = ['UI/UX', 'Tech', 'Gaming', 'Web3', 'SAAS', 'AI'];
</script>
