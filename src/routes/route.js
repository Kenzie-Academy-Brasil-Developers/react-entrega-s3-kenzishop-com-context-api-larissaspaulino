import { Redirect, Route as ReactDOMRoute} from 'react-router-dom'

import { useUser } from '../Providers/user'

const Route = ({ isPrivate = false, component: Component, ...rest}) => {
    const { user } = useUser()

    return (
        <ReactDOMRoute
            {...rest}
            render={() => {
                return isPrivate === !!user.token ? <Component /> : <Redirect to={isPrivate ? "/login" : "/"}/>
            }}
        />
    )
}

export default Route