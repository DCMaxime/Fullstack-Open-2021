const initialState = 'No new notification'

const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state);
    console.log('action', action);
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return ''
        default:
            return state;
    }
};

export const setNotification = (content) => {
    return {
        type: 'SET_NOTIFICATION',
        notification: content
    }
};

export const removeNotification = () => {
    console.log("ICI ON SUPPRIME ~~~~~")
    return {
        type: 'REMOVE_NOTIFICATION',
    }
};

export default notificationReducer;