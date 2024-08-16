export const formatDate = (date) => {
    const today = new Date()
    const tomorrow = new Date(today)
    // const yesterday = new Date(today)

    tomorrow.setDate(today.getDate() + 1)
    //yesterday.setDate(today.getDate() - 1)

    const targetDate = new Date(date)

    const isToday = 
    targetDate.getUTCFullYear() === today.getUTCFullYear() &&
    targetDate.getUTCMonth() === today.getUTCMonth() &&
    targetDate.getUTCDate() === today.getUTCDate()

    const isTomorrow  = 
    targetDate.getUTCFullYear() === tomorrow.getUTCFullYear() &&
    targetDate.getUTCMonth() === tomorrow.getUTCMonth() &&
    targetDate.getUTCDate() === tomorrow.getUTCDate()

    // const isYesterday  = 
    // targetDate.getUTCFullYear() === yesterday.getUTCFullYear() &&
    // targetDate.getUTCMonth() === yesterday.getUTCMonth() &&
    // targetDate.getUTCDate() === yesterday.getUTCDate()

    if (isToday) {
        return 'Hoje'
    }

    if (isTomorrow) {
        return 'Amanhã'
    }

    // if (isYesterday) {
    //     return 'Ontem'
    // }

    return targetDate.toLocaleDateString('pt-br', {
        month: '2-digit',
        weekday: 'short',
        day: '2-digit',
        timeZone: 'UTC'
    })
}

export const formatDateCart = (date) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const targetDate = new Date(date)

    const isToday = 
    targetDate.getUTCFullYear() === today.getUTCFullYear() &&
    targetDate.getUTCMonth() === today.getUTCMonth() &&
    targetDate.getUTCDate() === today.getUTCDate()

    const isTomorrow  = 
    targetDate.getUTCFullYear() === tomorrow.getUTCFullYear() &&
    targetDate.getUTCMonth() === tomorrow.getUTCMonth() &&
    targetDate.getUTCDate() === tomorrow.getUTCDate()

    if (isToday) {
        return 'Hoje'
    }

    if (isTomorrow) {
        return 'Amanhã'
    }

    return targetDate.toLocaleDateString('pt-br', {
        year: 'numeric',
        month: '2-digit',
        weekday: 'long',
        day: '2-digit',
        timeZone: 'UTC'
    })
}

export const formatDateCartResume = (date) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const targetDate = new Date(date)

    const isToday = 
    targetDate.getUTCFullYear() === today.getUTCFullYear() &&
    targetDate.getUTCMonth() === today.getUTCMonth() &&
    targetDate.getUTCDate() === today.getUTCDate()

    const isTomorrow  = 
    targetDate.getUTCFullYear() === tomorrow.getUTCFullYear() &&
    targetDate.getUTCMonth() === tomorrow.getUTCMonth() &&
    targetDate.getUTCDate() === tomorrow.getUTCDate()

    if (isToday) {
        return 'Hoje'
    }

    if (isTomorrow) {
        return 'Amanhã'
    }

    return targetDate.toLocaleDateString('pt-br', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        timeZone: 'UTC'
    })
}

export const formatDateAgender = date => {
    return new Date(date).toLocaleDateString('pt-br', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
}