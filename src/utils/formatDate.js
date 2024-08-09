export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-br', {
        month: '2-digit',
        weekday: 'short',
        day: '2-digit',
        timeZone: 'UTC'
    })
}

export const formatDateCart = (date) => {
    return new Date(date).toLocaleDateString('pt-br', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        timeZone: 'UTC'
    })
}

