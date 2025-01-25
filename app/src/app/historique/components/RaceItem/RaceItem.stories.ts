import { Meta, StoryObj } from "@storybook/react";
import RaceItem from "./RaceItem";
import { Race, RocketProgress } from "src/__generated__/graphql";
import { RocketInteraction } from "@appTypes/enrichedTypes";

const meta: Meta<typeof RaceItem> = {
  title: "Components/RaceItem",
  component: RaceItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RaceItem>;

// Mock data for rockets
const mockRocket1: RocketInteraction = {
  id: "rocket-1",
  name: "Falcon 9",
  image: "/rocket.png",
};

const mockRocket2: RocketInteraction = {
  id: "rocket-2",
  name: "Starship",
  image: "/rocket.png",
};

// Mock data for race
const mockRace: Race = {
  id: "race-123",
  rocket1: mockRocket1 as RocketProgress,
  rocket2: mockRocket2 as RocketProgress,
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
