import { signal } from '@preact/signals-core';
import './CharacterCreation.scss'
import RaceSelectCard from './Components/RaceSelectCard';

let selected_race = signal("")
let race_confirmed = signal(false)

const CharacterCreation = () => {
    const races = ["Human", "Lucus", "Beastman", "Masquarus"]
    const archetype = ["Warrior", "Rouge", "Spellcaster", "Craftsman"]


    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className="text-center py-3">{
                    ["Choose a race", "Choose an archetype"][character_creation_step()]
                }</h1>
                <div id="race-choices-div">
                    {races.map((race, index)=>{
                        return <RaceSelectCard 
                            race={race}
                            key={index}
                            index={index}
                            selected_race={selected_race}  
                            race_confirmed_finished={race_confirmed}
                        >
                        </RaceSelectCard>
                    })}
                </div>
            </div>
        </div>
    );

    function character_creation_step() {
        if (!race_confirmed.value) return 0

        return 1
    }
}

export default CharacterCreation