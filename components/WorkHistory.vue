<template>
	<div>
		<h2 class="text-3xl font-bold mb-16">Work & Education</h2>
		<div class="space-y-24">
			<!-- Current Position -->
			<div>
				<div class="text-sm text-zinc-500 mb-2">2018 - NOW</div>
				<h3 class="text-xl font-medium mb-1">Spiegel Institut GmbH</h3>
				<div class="text-zinc-600 mb-2">Senior UX Consultant</div>
			</div>

			<!-- Education -->
			<div>
				<div class="text-sm text-zinc-500 mb-2">2015 - 2018</div>
				<h3 class="text-xl font-medium mb-1">
					Master Human Computer Interaction
				</h3>
				<div class="text-zinc-600 mb-2">Studying at University of Siegen +</div>
				<div class="text-zinc-600">Apprenticeship at Bosch R&D Automotive</div>
			</div>

			<!-- Sabbatical -->
			<div>
				<div class="text-sm text-zinc-500 mb-2">2014 - 2015</div>
				<h3 class="text-xl font-medium mb-1">Sabbatical</h3>
				<div class="text-zinc-600">
					Travelling through Australia and Asia for work and Travel.
				</div>
			</div>

			<!-- Bachelor -->
			<div>
				<div class="text-sm text-zinc-500 mb-2">2011 - 2014</div>
				<h3 class="text-xl font-medium mb-1">Bachelor Business Informatics</h3>
				<div class="text-zinc-600">Dual Studies at the DHBW Mannheim</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const workHistory = [
	{
		period: '2018 - NOW',
		title: 'Senior UX Consultant',
		company: 'Company Name',
		description: 'Detailed description of your role and achievements',
	},
	{
		period: '2015 - 2018',
		title: 'UX Designer',
		company: 'Previous Company',
		description: 'Description of your previous role',
	},
	// Add more work history items
];
</script>
