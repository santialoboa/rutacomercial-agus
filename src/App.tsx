import { useState, useEffect } from 'react';
import type { GamePhase, Character, DecisionRecord } from './types/game';
import { CHARACTERS } from './data/characters';
import { GAME_CARDS } from './data/cards';
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

const STORAGE_KEY = 'caravan_adventure_save_v1';

export function App() {
  const [phase, setPhase] = useState<GamePhase>('cover');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [currentCardNumber, setCurrentCardNumber] = useState<number>(1);
  const [decisions, setDecisions] = useState<DecisionRecord[]>([]);
  const [showMapModal, setShowMapModal] = useState<boolean>(false);

  // Restore game state from localStorage on initial load
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.phase) setPhase(parsed.phase);
        if (parsed.characterId) {
          const char = CHARACTERS.find((c) => c.id === parsed.characterId) || null;
          setSelectedCharacter(char);
        }
        if (parsed.currentCardNumber) setCurrentCardNumber(parsed.currentCardNumber);
        if (parsed.decisions) setDecisions(parsed.decisions);
      }
    } catch {
      // Gracefully start fresh if stored data is corrupted
    }
  }, []);

  // Save game state whenever relevant parts change
  useEffect(() => {
    try {
      const stateToSave = {
        phase,
        characterId: selectedCharacter?.id || null,
        currentCardNumber,
        decisions
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch {
      // Silently catch quota or privacy mode errors
    }
  }, [phase, selectedCharacter, currentCardNumber, decisions]);

  // Handle character choice
  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    setPhase('map-view');
  };

  // Handle decision made on a story card
  const handleChoiceDecided = (decision: DecisionRecord) => {
    const updatedDecisions = decisions.filter((d) => d.cardNumber !== decision.cardNumber);
    updatedDecisions.push(decision);
    updatedDecisions.sort((a, b) => a.cardNumber - b.cardNumber);
    setDecisions(updatedDecisions);

    if (currentCardNumber < 6) {
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
    setShowMapModal(false);
  };

  // Teacher manual jumps
  const handleJumpToCard = (cardNum: number) => {
    setCurrentCardNumber(cardNum);
    if (!selectedCharacter) {
      setSelectedCharacter(CHARACTERS[0]);
    }
    setPhase('card-situation');
  };

  const handleJumpToPhase = (targetPhase: GamePhase) => {
    if (!selectedCharacter && targetPhase !== 'cover' && targetPhase !== 'intro') {
      setSelectedCharacter(CHARACTERS[0]);
    }
    setPhase(targetPhase);
  };

  // Current active card
  const currentCard = GAME_CARDS.find((c) => c.number === currentCardNumber) || GAME_CARDS[0];

  return (
    <div className="min-h-screen bg-[#25231f] text-[#2a2118] relative overflow-x-hidden selection:bg-[#713c3d] selection:text-[#fff6df]">
      {/* Teacher Floating Toolbar */}
      <TeacherToolbar
        currentPhase={phase}
        currentCardNumber={currentCardNumber}
        onJumpToCard={handleJumpToCard}
        onJumpToPhase={handleJumpToPhase}
        onResetAdventure={handleResetGame}
      />

      {/* Main Screens based on active phase */}
      <main className="relative z-10">
        {phase === 'cover' && (
          <CoverScreen onStart={() => setPhase('intro')} />
        )}

        {phase === 'intro' && (
          <IntroScreen onContinue={() => setPhase('character-select')} />
        )}

        {phase === 'character-select' && (
          <CharacterSelection onSelectCharacter={handleSelectCharacter} />
        )}

        {phase === 'map-view' && (
          <div className="min-h-screen py-8 px-4 sm:px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl">
              <JourneyMap
                currentCardNumber={currentCardNumber}
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
            character={selectedCharacter || CHARACTERS[0]}
            onChoiceDecided={handleChoiceDecided}
            onOpenMap={() => setShowMapModal(true)}
          />
        )}

        {phase === 'summary' && (
          <ChronicleSummary
            character={selectedCharacter || CHARACTERS[0]}
            decisions={decisions}
            onOpenMap={() => setShowMapModal(true)}
            onProceedToReflection={() => setPhase('reflection')}
          />
        )}

        {phase === 'reflection' && (
          <ReflectionQuestions
            onContinueToEpilogue={() => setPhase('epilogue')}
          />
        )}

        {phase === 'epilogue' && (
          <HistoricalEpilogue
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
