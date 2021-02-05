import { useEffect, useState } from 'react';
import random from '../../../../helpers/random';
import { Guild } from '../../../../Services/GuildService';
import CountUp from 'react-countup';

interface GuildWidgetProps {
  guild: Guild;
}

const DEFAULT_ICON = 'https://cdn.discordapp.com/embed/avatars/2';

const GuildWidget = ({
                       guild: {name, icon: $icon, voice},
                     }: GuildWidgetProps) => {
  const [error, setError] = useState(false);
  const [icon, setIcon] = useState($icon);
  const [hover, setHover] = useState(false);
  const [duration, setDuration] = useState<number>();

  useEffect(() => {
    setIcon(error ? DEFAULT_ICON : icon);
  }, [error]);
  useEffect(() => {
    setDuration(random(2, 5));
  }, []);

  return (
    <div
      role={'button'}
      tabIndex={0}
      className={
        'flex items-center py-2 px-4 border border-transparent cursor-pointer ' +
        'transition-colors user-select-none outline-none ' +
        'hover:bg-blue-100 focus:bg-blue-100 focus:border-blue-300'
      }
    >
      <div
        className="w-12 rounded-3xl transition-all overflow-hidden hover:rounded-lg"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={icon + (!error && hover ? '' : '.png')}
          alt={name}
          onError={() => setError(true)}
          className={'max-w-full'}
        />
      </div>

      <div className={'inline-block ml-4'}>{name}</div>

      <div className="flex-1"/>

      {duration ? (
        <div className={'bg-green-400 text-white rounded-full px-4 py-2'}>
          <CountUp end={voice} duration={duration}/>
        </div>
      ) : null}
    </div>
  );
};

export default GuildWidget;
