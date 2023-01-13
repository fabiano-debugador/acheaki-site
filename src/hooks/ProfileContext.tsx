import React, { ProviderProps, useContext } from 'react';
import { IProfile, IContextProfile } from '../model/profile';

const ProfileContext = React.createContext<IContextProfile>({
  profile: {} as IProfile
});

const ProfileProvider: React.FC<ProviderProps<IContextProfile>> = ({
  children, value
}) =>{
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

const UseProfileContext = (): IContextProfile => {
  return useContext(ProfileContext)
}

export { ProfileProvider, UseProfileContext }