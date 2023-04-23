import React, { Suspense, useContext, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './contexts/AuthContext'
const DefaultLayout = lazy(() => import('./components/layouts/Default'))
const DashboardLayout = lazy(() => import('./components/layouts/Dashboard'))
const NonLayout = lazy(() => import('./components/layouts/Non'))
const Send = lazy(() => import('./pages/login/send'))
const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const Page404 = lazy(() => import('./pages/Page404/Page404.jsx'))
const Account = lazy(() => import('./pages/dashboard/account'))
const Answer = lazy(() => import('./pages/dashboard/answer'))
const Assistant = lazy(() => import('./pages/dashboard/assistant'))
const Security = lazy(() => import('./pages/dashboard/security'))
const Payment = lazy(() => import('./pages/dashboard/payment'))
import Launch from './pages/launch'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { useSelector } from 'react-redux'

const App = () => {
  const user = useContext(AuthContext)
  const { assistantAsigned } = useSelector((state) => state.user)
  return (
    <PayPalScriptProvider
      options={{ 'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID }}
    >
      <Suspense fallback={<Launch />}>
        <BrowserRouter>
          <>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/signup" element={<Signup />} exact />
                <Route path="/emailsend" element={<Send />} exact />
              </Route>
              {user && (
                <Route element={<DashboardLayout />}>
                  <Route path="/account" element={<Account />} exact />
                  {assistantAsigned && (
                    <Route path="/answer" element={<Answer />} exact />
                  )}
                  <Route path="/assistant" element={<Assistant exact />} />
                  <Route path="/security" element={<Security />} exact />
                  <Route path="/payment" element={<Payment />} exact />
                </Route>
              )}
              <Route element={<NonLayout />}>
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </>
        </BrowserRouter>
      </Suspense>
    </PayPalScriptProvider>
  )
}

export default App
