import { ColorModeContext, useMode } from './theme.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';

import Topbar from './scenes/global/Topbar';
import Dashboad from './scenes/dashboard/index';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FQA from './scenes/faq';
import Geography from './scenes/geography';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route>
                  <Route path="/" element={<Dashboad />} />
                </Route>
                <Route>
                  <Route path="/sidebar" element={<Sidebar />} />
                </Route>
                {/* <Route>
                  <Route path="/team" element={<Team />} />
                </Route>
                <Route>
                  <Route path="/invoices" element={<Invoices />} />
                </Route>
                <Route>
                  <Route path="/contacts" element={<Contacts />} />
                </Route>
                <Route>
                  <Route path="/bar" element={<Bar />} />
                </Route>
                <Route>
                  <Route path="/form" element={<Form />} />
                </Route>
                <Route>
                  <Route path="/line" element={<Line />} />
                </Route>
                <Route>
                  <Route path="/pie" element={<Pie />} />
                </Route>
                <Route>
                  <Route path="/fqf" element={<FQA />} />
                </Route>
                <Route path="/geography" element={<Geography />} /> 
                <Route path="/calendar" element={<Calendar />} />}
                */}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
