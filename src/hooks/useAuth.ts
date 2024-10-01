import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@store/index';
import { logout } from '@store/slices/authSlice';

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const signOut = () => {
    dispatch(logout());
  };
  return { ...auth, signOut };
};
