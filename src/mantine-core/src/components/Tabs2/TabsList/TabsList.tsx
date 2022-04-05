import React, { forwardRef } from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { Box } from '../../Box';
import { useTabsContext } from '../Tabs.context';
import useStyles from './TabsList.styles';

export type TabsListStylesNames = ClassNames<typeof useStyles>;

export interface TabsListProps
  extends DefaultProps<TabsListStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Tabs.Tab /> components */
  children: React.ReactNode;

  /** Determines whether tabs should take the whole space */
  grow?: boolean;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, grow = false, ...others }, ref) => {
    const { orientation } = useTabsContext();
    const { classes, cx } = useStyles({ orientation, grow });

    return (
      <Box
        {...others}
        className={cx(classes.tabsList, className)}
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
      >
        {children}
      </Box>
    );
  }
);

TabsList.displayName = '@mantine/core/TabsList';