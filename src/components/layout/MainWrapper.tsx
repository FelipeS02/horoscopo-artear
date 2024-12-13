import { FC, ReactNode } from 'react';
import '@/styles/layout/main-wrapper.css';

const MainWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='main-wrapper'>{children}</div>;
};

export default MainWrapper;
