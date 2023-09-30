import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform:Platform|null
}

const PlatfromSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
