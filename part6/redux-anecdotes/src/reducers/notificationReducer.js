const notificationReducer = (state = null, action) => {
    console.log('state now: ', state);
    console.log('action', action);
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data.notification
        default:
            return state;
    }
};

export const setNotification = (notification, time) => {
    return async (dispatch) => {
        setTimeout(
            () =>
                dispatch({
                    type: 'SET_NOTIFICATION',
                    data: {
                        notification: null,
                    },
                }),
            time * 1000
        )
        dispatch({
            type: 'SET_NOTIFICATION',
            data: {
                notification,
            },
        })
    }
}

export default notificationReducer;