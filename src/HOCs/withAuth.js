import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import hoistNonReactStatics from 'hoist-non-react-statics'

import jwt_decode from 'jwt-decode'

const LOGIN_REDIRECT = '/login'

const withAuth = (WrappedComponent) => {
  const AuthComponent = props => {
    const newProps = {}
    const [cookies] = useCookies(['authorization'])

    if (cookies['authorization']) {
      newProps.user = jwt_decode(cookies['authorization'])
      newProps.authorization = cookies['authorization']
    }

    if (process.browser && !newProps.user) {
      const router = useRouter()
      router.push(LOGIN_REDIRECT)
    }

    return (
      <WrappedComponent {...props} {...newProps} />
    )
  }

  hoistNonReactStatics(AuthComponent, WrappedComponent)

  return AuthComponent
}

export default withAuth