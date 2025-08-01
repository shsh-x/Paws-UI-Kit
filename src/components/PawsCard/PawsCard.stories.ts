import PawsCard from "@components/PawsCard/PawsCard.vue";
import PawsHeading from "@components/PawsHeading/PawsHeading.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
	title: "Paws UI Kit/Card",
	component: PawsCard,
	tags: ["autodocs"],
	argTypes: {
		appearance: {
			control: "select",
			options: ["dark", "light"],
		},
	},
	args: {
		appearance: "dark",
	},
	render: (args) => ({
		components: { PawsCard, PawsHeading },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="max-width: 420px">
				<PawsCard :appearance="args.appearance">
					<template v-slot:heading>
						<PawsHeading size="xl" font-weight="semibold">
							Card
						</PawsHeading>
					</template>

					{{ args.default }}
				</PawsCard>
			</div>
		`,
	}),
} satisfies Meta<typeof PawsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		default: "Card Content",
		appearance: "dark",
	},
};
