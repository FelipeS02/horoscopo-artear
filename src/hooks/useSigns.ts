import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { getAllSigns } from '../store/signsSlice';

export default function useSigns() {
  const signs = useAppSelector((state) => state);
  const { fullfilled } = signs;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!fullfilled) dispatch(getAllSigns());
  }, [dispatch, fullfilled]);

  return signs;
}
