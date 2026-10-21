export type CharacterId = 'merchant' | 'traveler' | 'medic' | 'scholar' | 'wangara';

export type StoryId = 'silk-road' | 'gold-road';

export interface Character {
  id: CharacterId;
  name: string;
  role: string;
  description: string;
  perspectiveText: string;
  avatarIcon: string;
  avatarImage?: string;
  motifs: string[];
}

export type StoryBranch = 'land' | 'sea' | 'carthage-venice' | 'egypt-byzantium';

export interface GameChoice {
  id: 'A' | 'B' | 'C' | 'D' | string;
  label: string;
  title: string;
  description: string;
  consequence: string;
  historicalInsight: string;
  chronicleText: string;
  discoveredGoodsOrIdeas?: string[];
}

export interface GameCard {
  id: string;
  number: number;
  storyId?: StoryId;
  branch?: StoryBranch;
  title: string;
  theme: string;
  location: string;
  intro: string;
  prompt: string;
  teacherPrompt: string;
  illustrationType:
    | 'market'
    | 'paper'
    | 'math'
    | 'medicine'
    | 'port'
    | 'plague'
    | 'monsoon'
    | 'ship-customs'
    | 'quarantine'
    | 'ghana-gold'
    | 'mali-timbuktu'
    | 'transsahara-tunis'
    | 'transsahara-cairo'
    | 'venice-ducat'
    | 'byzantium-hyperpyron';
  characterFlavor: Partial<Record<CharacterId, string>> & Record<string, string>;
  characterChoices: Partial<Record<CharacterId, GameChoice[]>> & Record<string, GameChoice[]>;
  choices?: GameChoice[];
}

export interface DecisionRecord {
  cardId: string;
  cardNumber: number;
  branch?: StoryBranch;
  cardTitle: string;
  choiceId: 'A' | 'B' | 'C' | 'D' | string;
  choiceTitle: string;
  chronicleText: string;
  consequence: string;
  historicalInsight: string;
  discoveredGoodsOrIdeas?: string[];
}

export type GamePhase =
  | 'cover'
  | 'intro'
  | 'character-select'
  | 'map-view'
  | 'card-situation'
  | 'card-consequence'
  | 'summary'
  | 'reflection'
  | 'epilogue';

export interface TradeGood {
  id: string;
  name: string;
  origin: string;
  circuit: string;
  significance: string;
  icon: string;
}

export interface MapNode {
  id: string;
  name: string;
  region: string;
  x: number; // percentage on map (0-100)
  y: number; // percentage on map (0-100)
  description: string;
  goods: string[];
  cardAssociated?: number;
}

export interface MapRoute {
  from: string;
  to: string;
  type: 'terrestrial' | 'maritime' | 'transsaharan';
  label?: string;
  activeUntilCard?: number;
}
