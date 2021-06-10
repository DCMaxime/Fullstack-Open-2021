const initialState = 'No new notification'

const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state);
    console.log('action', action);
    switch (action.type) {
        case 'NEW_NOTIFICATION':
            return {...state, notification: action.notification}
        default:
            return state;
    }
};

export const createNotification = (content) => {
    return {
        type: 'NEW_NOTIFICATION',
        notification: content
    }
};

export default notificationReducer;