import PropTypes from 'prop-types'

import { ContainerButton, ContainerButtonDisabled } from "./styles"


export function Button({children, ...props}) {
    return (
        <ContainerButton {...props}>{children}</ContainerButton>
    )
}

export function ButtonDisabled({children, ...props}) {
    return (
        <ContainerButtonDisabled {...props}>{children}</ContainerButtonDisabled>
    )
}

Button.propTypes = {
    children: PropTypes.string
}

ButtonDisabled.propTypes = {
    children: PropTypes.string
}