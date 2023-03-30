// import classes from './About.module.sass';

import { IContextProfile } from '../../../../model/profile';

const About: React.FC<IContextProfile> = ({ profile }) => {
  console.log(profile);
  return (
    <div>
      <h1>Quem somos</h1>
      <p>{profile.description}</p>
    </div>
  );
};

export default About;
