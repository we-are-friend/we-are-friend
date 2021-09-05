import SettingsContext from 'src/contexts/SettingsContext';
import { useContext } from 'react';
import type { SettingsContextValue } from 'src/contexts/SettingsContext';

const useSettings = (): SettingsContextValue => useContext(SettingsContext);

export default useSettings;
