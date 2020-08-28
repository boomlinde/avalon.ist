interface GameState {
  // Player Info
  username: string | null;
  players: string[];
  seat: number;
  imRes: boolean;
  // Game State Info
  started: boolean | undefined;
  ended: boolean | undefined;
  frozen: boolean | undefined;
  stage: string | undefined;
  cause: number | undefined;
  // Game UI Info
  tabs: number;
  scale: number;
  // Game Pick Info
  picks: number[];
  votesRound: number[];
  voted: number[];
  // Game Knowledge
  publicKnowledge: string[];
  privateKnowledge: string[];
  // Game Power Positions
  leader: number;
  card: number;
  assassin: boolean;
  // Game Mission Info
  mission: number;
  round: number;
  // Past Game Info
  results: boolean[];
  cardHolders: number[];
  missionLeader: number[][];
  missionVotes: number[][][];
  missionTeams: number[][][];
  // Room Number
  code: number;
  // Game Settings
  playerMax: number;
  roleSettings: {
    merlin: boolean;
    percival: boolean;
    morgana: boolean;
    assassin: boolean;
    oberon: boolean;
    mordred: boolean;
    card: boolean;
  };
}

type GameStateType = GameState;

export default GameStateType;