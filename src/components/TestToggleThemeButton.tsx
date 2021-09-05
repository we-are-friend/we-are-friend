import useSettings from '@/hooks/useSettings';
import { THEMES } from '@/constants';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import type { FC } from 'react';

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
