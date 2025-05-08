import { UserPresenter } from '@user/core'
import { AxiosResponse } from 'axios'
import { http } from '../api'

const useSignInService = async (
  user: UserPresenter,
): Promise<UserPresenter> => {
  try {
    const response: AxiosResponse<UserPresenter> = await http({
      method: 'POST',
      url: 'users',
      data: user,
    })
    // throw new Error('Usuário cadastrado com sucesso!')
    return response.data
  } catch {
    // toast.error('Erro ao cadastrar  usuário')
    throw new Error('Erro ao cadastrar  usuário')
  }
}

export { useSignInService }
