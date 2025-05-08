'use client'

import {} from '@shared/core'
import { IUser } from '@user/core'
import { useState } from 'react'

export default function useAuth() {
  const [mode, setMode] = useState<'signin' | 'sigout'>()
  const [user, setUser] = useState<IUser.IProps>()

  function signin(user: IUser.IProps) {}
  function signout(user: IUser.ICreateUser) {}

  return {
    mode,
    user,
    setMode,
    setUser,
    signin,
    signout,
  }
}
