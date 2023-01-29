import { ReactNode } from 'react';
import { Group } from '@mantine/core';
import { TextTitle } from '/@/renderer/components';
import { PlayButton as PlayBtn } from '/@/renderer/features/shared/components/play-button';

interface LibraryHeaderBarProps {
  children: ReactNode;
}

export const LibraryHeaderBar = ({ children }: LibraryHeaderBarProps) => {
  return (
    <Group
      noWrap
      align="center"
      h="100%"
      px="1rem"
      spacing="md"
    >
      {children}
    </Group>
  );
};

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <TextTitle
      order={2}
      overflow="hidden"
      weight={700}
    >
      {children}
    </TextTitle>
  );
};

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton = ({ onClick }: PlayButtonProps) => {
  return (
    <PlayBtn
      h="50px"
      w="50px"
      onClick={onClick}
    />
  );
};

LibraryHeaderBar.Title = Title;
LibraryHeaderBar.PlayButton = PlayButton;
