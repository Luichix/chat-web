import React, { createContext, useEffect, useState } from 'react'
import firebaseApp from '../services/firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { modifyUser, resetUser } from '../redux/actions/user.action'
import {
  modifyAssistant,
  resetAssistant,
} from '../redux/actions/assistant.action'
import { adapterUserCredentials } from '../utilities/adapters/formattedUser'
import { useLazyQuery } from '@apollo/client'
import { GET_USER_DATA } from '../services/graphql/query/user.query'
import { dataInterceptor } from '../utilities/interceptors/userInterceptor'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const auth = getAuth(firebaseApp)
  const dispatch = useDispatch()
  const [uid, setUid] = useState(null)
  const user = auth.currentUser
  const [getInfo, { loading, error, data }] = useLazyQuery(GET_USER_DATA)
  const [userData, setUserData] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.uid !== uid) {
        setUid(user.uid)
      }
    } else {
      setUid(null)
    }
  })

  useEffect(() => {
    if (uid) {
      const credentials = { user: user }
      const adapter = adapterUserCredentials(credentials)
      dispatch(modifyUser(adapter))
      getInfo({ variables: { uid } })
      setUserData(true)
    } else {
      dispatch(resetUser())
      dispatch(resetAssistant())
      setUserData(false)
    }
  }, [uid])

  useEffect(() => {
    if (userData && data) {
      const result = dataInterceptor({ loading, error, data, uid })
      dispatch(modifyUser(result.user))
      dispatch(modifyAssistant(result.assistant))
    }
  }, [userData, data])

  return <AuthContext.Provider value={uid}>{children}</AuthContext.Provider>
}
export default AuthContext

export const onAuthStateChangedFirebase = (onChange) => {
  return firebaseApp.auth().onAuthStateChanged(onChange)
}
