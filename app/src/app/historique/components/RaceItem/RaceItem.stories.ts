import { Meta, StoryObj } from "@storybook/react";
import RaceItem from "./RaceItem";
import { Race, Rocket } from "src/__generated__/graphql";
import { RocketInteraction } from "@appTypes/enrichedTypes";

const meta: Meta<typeof RaceItem> = {
  title: "Components/RaceItem",
  component: RaceItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RaceItem>;

// Mock data for rockets
const mockRocket1: Rocket = {
  id: "rocket-1",
  name: "Falcon 9",
  image: "/rocket.png",
  description: "",
};

const mockRocket2: Rocket = {
  id: "rocket-2",
  name: "Starship",
  image: "/rocket.png",
  description: "",
};

// Mock data for race
const mockRace: Race = {
  id: "race-123",
  rocket1: mockRocket1 as RocketInteraction,
  rocket2: mockRocket2 as RocketInteraction,
  winner: "rocket-1",
};

export const Default: Story = {
  args: {
    race: mockRace,
  },
};

export const NoWinner: Story = {
  args: {
    race: {
      ...mockRace,
      winner: null, // No winner scenario
    },
  },
};
