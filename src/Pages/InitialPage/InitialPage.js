import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../Assets/logo-future-eats@2x.png'
import { BackgroundColorInitialPage } from './style'

const InitialPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')

        setTimeout(() => {
            token ? history.push('/feed') : history.push('login')
        }, 3000)
    })
    return (
        <BackgroundColorInitialPage>
            <img src={Logo} alt='Logomarca com a escrita Future Eats' />
        </BackgroundColorInitialPage>
    )
}
export default InitialPage