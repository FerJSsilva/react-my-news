
export const UPDATE_NOTIFICATION = 'communication/UPDATE_NOTIFICATION';
export const INCREMENT_LOADING_STATUS = 'communication/INCREMENT_LOADING_STATUS';
export const DECREMENT_LOADING_STATUS = 'communication/DECREMENT_LOADING_STATUS';

export const updateNotification = (payload) => ({
  type: UPDATE_NOTIFICATION,
  payload,
});

export const incrementLoadingStatus = () => ({
  type: INCREMENT_LOADING_STATUS,
});

export const decrementLoadingStatus = () => ({
  type: DECREMENT_LOADING_STATUS,
});

export function dispatchUpdateNotification(notification) {
  return (dispatch) => {
    dispatch(updateNotification(notification));
  };
}

export function startLoading() {
  return (dispatch) => {
    dispatch(incrementLoadingStatus());
  };
}

export function finishLoading() {
  return (dispatch) => {
    dispatch(decrementLoadingStatus());
  };
}
