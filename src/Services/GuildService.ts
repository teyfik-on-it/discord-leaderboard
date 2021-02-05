import delay from '../helpers/delay';
import guilds from '../data/guilds.json';

interface Guild {
  id: string;
  name: string;
  icon: string;
  voice: number;
  details: Details;
  sheet: false;
}

interface Details {
  url: string;
  memberSize: number;
  banner: string;
}

class GuildService {
  guilds: Guild[] = guilds as Guild[];

  find(): Promise<Guild[]> {
    return delay(1, 3).then(() => this.guilds);
  }
}

const guildService = new GuildService();

export type { Guild };
export default guildService;
