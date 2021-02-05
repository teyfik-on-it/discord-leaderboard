import { useEffect, useState } from 'react';
import guildService, { Guild } from '../../Services/GuildService';
import Danger from '../../Shared/Danger';
import Info from '../../Shared/Info';
import Guilds from './Leaderboard/Guilds';

const Leaderboard = () => {
  const [error, setError] = useState<{ name: string; message: string }>();
  const [guilds, setGuilds] = useState<Guild[]>();

  useEffect(() => {
    guildService.find().then(setGuilds).catch(setError);
  }, []);

  return (
    <section>
      <header>
        <h1 className={'text-2xl'}>Leaderboard</h1>
      </header>

      <main className={'mt-4'}>
        {error ? (
          <Danger title={error.name} description={error.message}/>
        ) : guilds ? (
          <Guilds guilds={guilds}/>
        ) : (
          <Info title={'Yükleniyor'} description={'Lütfen bekleyin'}/>
        )}
      </main>

      <footer className={'mt-4'}>
        <i>paginator will be here</i>
      </footer>
    </section>
  );
};

export default Leaderboard;
