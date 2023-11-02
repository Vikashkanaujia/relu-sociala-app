import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp'
import Social from './pages/SocialApp/Social'
import { useEffect, useState } from 'react';
import { auth } from "./Firebase"
function App() {
  const [userauth, setUserAuth] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserAuth(user)
      } else {
        setUserAuth('')
      }
    });
  })
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <>
            
              {/* userauth ? */}
                
                  <Route path='/account' element={<Social />} />
                  <Route path='/' element={<Login  />} />
                  <Route path='/signup' element={<SignUp  />} />

            {/* <Route path='*' element={<PageNotFound />} /> */}
            </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
