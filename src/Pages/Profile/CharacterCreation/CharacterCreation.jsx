import { signal } from '@preact/signals-core';
import './CharacterCreation.scss'
import RaceSelectCard from './Components/RaceSelectCard';

let selected_race = signal("")

const CharacterCreation = () => {
    const races = ["Human", "Lucus", "Beastman", "Masquarus"]

    return (
        <div className="container-fluid">
            <div className="row lg-col-11 col-12 mx-auto">
                <h1 className="text-center py-3">Choose a Race</h1>
                    {races.map((race, index)=>{
                        return <RaceSelectCard 
                            race={race}
                            index={index}
                            selected_race={selected_race}    
                        >
                        </RaceSelectCard>
                    })} 
            </div>
        </div>
    );
}

export default CharacterCreation