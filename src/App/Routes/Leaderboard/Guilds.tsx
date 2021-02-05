import { Guild } from '../../../Services/GuildService';
import GuildWidget from './Guilds/GuildWidget';

interface GuildsProps {
  guilds: Guild[];
}

const Guilds = ({guilds}: GuildsProps) => (
  <ul>
    {guilds.map((guild) => (
      <li key={guild.id} className={'border-t border-gray first:border-t-0'}>
        <GuildWidget guild={guild}/>
      </li>
    ))}
  </ul>
);

export default Guilds;
