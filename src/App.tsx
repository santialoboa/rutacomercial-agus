import { useState, useEffect } from 'react';
import type { GamePhase, Character, DecisionRecord, StoryBranch, StoryId } from './types/game';
import { CHARACTERS } from './data/characters';
import { GAME_CARDS } from './data/cards';
import { GOLD_ROAD_CARDS } from './data/goldRoadCards';
import { CoverScreen } from './components/game/CoverScreen';
import { IntroScreen } from './components/game/IntroScreen';
import { CharacterSelection } from './components/game/CharacterSelection';
import { StoryCardView } from './components/game/StoryCardView';
import { JourneyMap } from './components/game/JourneyMap';
import { ChronicleSummary } from './components/game/ChronicleSummary';
import { ReflectionQuestions } from './components/game/ReflectionQuestions';
import { HistoricalEpilogue } from './components/game/HistoricalEpilogue';
import { TeacherToolbar } from './components/ui/TeacherToolbar';
import { sounds } from './utils/audio';

const STORAGE_KEY = 'caravan_adventure_save_v2';

export function App() {
  const [activeStory, setActiveStory] = useState<StoryId>('silk-road');
  const [phase, setPhase] = useState<GamePhase>('cover');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [currentCardNumber, setCurrentCardNumber] = useState<number>(1);
  const [decisions, setDecisions] = useState<DecisionRecord[]>([]);
  const [forcedBranch, setForcedBranch] = useState<StoryBranch | null>(null);
  const [showMapModal, setShowMapModal] = useState<boolean>(false);

  const isGoldRoad = activeStory === 'gold-road';
  const maxCards = isGoldRoad ? 4 : 6;

  // Restore game state from localStorage on initial load
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.activeStory) setActiveStory(parsed.activeStory);
        if (parsed.phase) setPhase(parsed.phase);
        if (parsed.characterId) {
          const char = CHARACTERS.find((c) => c.id === parsed.characterId) || null;
          setSelectedCharacter(char);
        }
        if (parsed.currentCardNumber) setCurrentCardNumber(parsed.currentCardNumber);
        if (parsed.decisions) setDecisions(parsed.decisions);
        if (parsed.forcedBranch) setForcedBranch(parsed.forcedBranch);
      }
    } catch {
      // Gracefully start fresh if stored data is corrupted
    }
  }, []);

  // Save game state whenever relevant parts change
  useEffect(() => {
    try {
      const stateToSave = {
        activeStory,
        phase,
        characterId: selectedCharacter?.id || null,
        currentCardNumber,
        decisions,
        forcedBranch
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch {
      // Silently catch quota or privacy mode errors
    }
  }, [activeStory, phase, selectedCharacter, currentCardNumber, decisions, forcedBranch]);

  // Determine active branch:
  // For Silk Road: decision on Card 3 (choice C = sea)
  // For Gold Road: decision on Card 2 (choice B = egypt-byzantium, others = carthage-venice)
  const branchDecision = isGoldRoad
    ? decisions.find((d) => d.cardNumber === 2)
    : decisions.find((d) => d.cardNumber === 3);

  const activeBranch: StoryBranch =
    forcedBranch ||
    (isGoldRoad
      ? branchDecision?.choiceId === 'B'
        ? 'egypt-byzantium'
        : 'carthage-venice'
      : branchDecision?.choiceId === 'C'
      ? 'sea'
      : 'land');

  // Handle character choice
  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    setPhase('map-view');
  };

  // Switch between Silk Road and Gold Road stories
  const handleSwitchStory = (story: StoryId) => {
    setActiveStory(story);
    setCurrentCardNumber(1);
    setDecisions([]);
    setForcedBranch(null);
    if (story === 'gold-road') {
      const wangaraChar = CHARACTERS.find((c) => c.id === 'wangara') || CHARACTERS[0];
      setSelectedCharacter(wangaraChar);
    } else {
      setSelectedCharacter(CHARACTERS[0]);
    }
  };

  const handleStartSilkRoad = () => {
    setActiveStory('silk-road');
    setSelectedCharacter(CHARACTERS.find((c) => c.id === 'merchant') || CHARACTERS[0]);
    setCurrentCardNumber(1);
    setDecisions([]);
    setForcedBranch(null);
    setPhase('intro');
  };

  const handleStartGoldRoad = () => {
    setActiveStory('gold-road');
    const wangaraChar = CHARACTERS.find((c) => c.id === 'wangara') || CHARACTERS[0];
    setSelectedCharacter(wangaraChar);
    setCurrentCardNumber(1);
    setDecisions([]);
    setForcedBranch(null);
    setPhase('intro');
  };

  // Handle decision made on a story card
  const handleChoiceDecided = (decision: DecisionRecord) => {
    if (isGoldRoad) {
      if (decision.cardNumber === 2) {
        setForcedBranch(decision.choiceId === 'B' ? 'egypt-byzantium' : 'carthage-venice');
      }
    } else {
      if (decision.cardNumber === 3) {
        setForcedBranch(decision.choiceId === 'C' ? 'sea' : 'land');
      }
    }

    const updatedDecisions = decisions.filter((d) => d.cardNumber !== decision.cardNumber);
    const branchForDecision: StoryBranch | undefined = isGoldRoad
      ? decision.cardNumber >= 3
        ? activeBranch
        : decision.cardNumber === 2
        ? decision.choiceId === 'B'
          ? 'egypt-byzantium'
          : 'carthage-venice'
        : undefined
      : decision.cardNumber >= 4
      ? activeBranch
      : decision.cardNumber === 3 && decision.choiceId === 'C'
      ? 'sea'
      : undefined;

    updatedDecisions.push({
      ...decision,
      branch: branchForDecision
    });
    updatedDecisions.sort((a, b) => a.cardNumber - b.cardNumber);
    setDecisions(updatedDecisions);

    if (currentCardNumber < maxCards) {
      setCurrentCardNumber(currentCardNumber + 1);
      setPhase('card-situation');
    } else {
      setPhase('summary');
    }
  };

  // Reset entire game
  const handleResetGame = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhase('cover');
    setSelectedCharacter(null);
    setCurrentCardNumber(1);
    setDecisions([]);
    setForcedBranch(null);
    setShowMapModal(false);
  };

  // Teacher manual jumps
  const handleJumpToCard = (cardNum: number, branch?: StoryBranch) => {
    setCurrentCardNumber(cardNum);
    if (branch) {
      setForcedBranch(branch);
    } else if (isGoldRoad ? cardNum <= 2 : cardNum <= 3) {
      setForcedBranch(null);
    }
    if (!selectedCharacter) {
      const defaultChar = isGoldRoad
        ? CHARACTERS.find((c) => c.id === 'wangara') || CHARACTERS[0]
        : CHARACTERS[0];
      setSelectedCharacter(defaultChar);
    }
    setPhase('card-situation');
  };

  const handleJumpToPhase = (targetPhase: GamePhase) => {
    if (!selectedCharacter && targetPhase !== 'cover' && targetPhase !== 'intro') {
      const defaultChar = isGoldRoad
        ? CHARACTERS.find((c) => c.id === 'wangara') || CHARACTERS[0]
        : CHARACTERS[0];
      setSelectedCharacter(defaultChar);
    }
    setPhase(targetPhase);
  };

  // Current active card based on number and active branch
  const activeCards = isGoldRoad ? GOLD_ROAD_CARDS : GAME_CARDS;
  const currentCard =
    activeCards.find((c) => c.number === currentCardNumber && (!c.branch || c.branch === activeBranch)) ||
    activeCards.find((c) => c.number === currentCardNumber) ||
    activeCards[0];

  return (
    <div className="min-h-screen bg-[#25231f] text-[#2a2118] relative overflow-x-hidden selection:bg-[#713c3d] selection:text-[#fff6df]">
      {/* Teacher Floating Toolbar */}
      <TeacherToolbar
        currentPhase={phase}
        currentCardNumber={currentCardNumber}
        currentBranch={activeBranch}
        currentStory={activeStory}
        onSwitchStory={handleSwitchStory}
        onJumpToCard={handleJumpToCard}
        onJumpToPhase={handleJumpToPhase}
        onResetAdventure={handleResetGame}
      />

      {/* Main Screens based on active phase */}
      <main className="relative z-10">
        {phase === 'cover' && (
          <CoverScreen
            onStartSilkRoad={handleStartSilkRoad}
            onStartGoldRoad={handleStartGoldRoad}
          />
        )}

        {phase === 'intro' && (
          <IntroScreen
            storyId={activeStory}
            onContinue={() => setPhase('character-select')}
          />
        )}

        {phase === 'character-select' && (
          <CharacterSelection
            storyId={activeStory}
            onSelectCharacter={handleSelectCharacter}
          />
        )}

        {phase === 'map-view' && (
          <div className="min-h-screen py-8 px-4 sm:px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl">
              <JourneyMap
                currentCardNumber={currentCardNumber}
                branch={activeBranch}
                storyId={activeStory}
                className="mb-6"
              />
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    sounds.playParchment();
                    setPhase('card-situation');
                  }}
                  className="rounded-xl border-2 border-[#501213] bg-[#713c3d] hover:bg-[#8f2d30] px-8 py-3.5 text-lg font-serif font-bold text-[#fff6df] shadow-xl cursor-pointer"
                >
                  Comenzar la Marcha con la Carta 1 ➔
                </button>
              </div>
            </div>
          </div>
        )}

        {phase === 'card-situation' && (
          <StoryCardView
            key={currentCard.id}
            card={currentCard}
            character={selectedCharacter || (isGoldRoad ? CHARACTERS.find((c) => c.id === 'wangara') || CHARACTERS[0] : CHARACTERS[0])}
            onChoiceDecided={handleChoiceDecided}
            onOpenMap={() => setShowMapModal(true)}
          />
        )}

        {phase === 'summary' && (
          <ChronicleSummary
            character={selectedCharacter || (isGoldRoad ? CHARACTERS.find((c) => c.id === 'wangara') || CHARACTERS[0] : CHARACTERS[0])}
            decisions={decisions}
            onOpenMap={() => setShowMapModal(true)}
            onProceedToReflection={() => setPhase('reflection')}
          />
        )}

        {phase === 'reflection' && (
          <ReflectionQuestions
            storyId={activeStory}
            onContinueToEpilogue={() => setPhase('epilogue')}
          />
        )}

        {phase === 'epilogue' && (
          <HistoricalEpilogue
            storyId={activeStory}
            onRestartAdventure={handleResetGame}
            onViewChronicle={() => setPhase('summary')}
          />
        )}
      </main>

      {/* Interactive Map Modal (can be summoned from anywhere in-game) */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="w-full max-w-5xl my-auto animate-fadeIn">
            <JourneyMap
              currentCardNumber={currentCardNumber}
              branch={activeBranch}
              storyId={activeStory}
              isModal={true}
              onClose={() => setShowMapModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
