import { createTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#4D4DFF',
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) =>
  <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>;

export default ThemeProvider;