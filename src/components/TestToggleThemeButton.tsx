import React, { useState } from 'react';
import type { FC } from 'react';
import useSettings from '@/hooks/useSettings';
import Button from '@material-ui/core/Button';
import { THEMES } from '@/constants';

interface TestToggleThemeButtonProps {
  className?: string;
}

const TestToggleThemeButton: FC<TestToggleThemeButtonProps> = () => {
  const { saveSettings } = useSettings();
  const [value, setValue] = useState(false);
  const handleSwitch = (): void => {
    saveSettings(value ? { theme: THEMES.LIGHT } : { theme: THEMES.ONE_DARK });
    setValue((prev: boolean) => !prev);
  };
  return (
    <div>
      Hello <Button onClick={handleSwitch}>asdasd</Button>
    </div>
  );
};

export default TestToggleThemeButton;
