import { signal } from "@preact/signals-core";
import { useTranslation } from "react-i18next";

let race_confirmed = signal(false)

const RaceSelectCard = ({race, index , selected_race, race_confirmed_finished}) => {

    function selected () {
        return selected_race.value === race;
    }

    function not_hidden() {
        return selected_race.value === "" || selected_race.value === race;
    }

    const [t] = useTranslation("CHARCREATION");
    let classes = [
        //selected_race.value === "" || selected_race.value === race ?"":"visually-hidden",
        not_hidden() ?"":"disapear",
        race_confirmed.value ? "confirmed": "",
        "rounded",
        "sm",
        "rounded",
        //selected_race.value !== ""  ? "col-12" : "col-3",
        selected() ? "selected" : "col-3",
        not_hidden() ?"px-3   ":"",
        `choosable-panel-${race}`,
        "py-3"
    ]

    return <div 
        key={index}
        id={"race-select-" + race.toLowerCase()} 
        className={classes.join(" ")}
        onClick={selected_race.value === "" ?(()=>{selected_race.value = race}):(race_confirmed.value? ()=>{ race_confirmed.value = false; setTimeout(()=>{race_confirmed_finished.value = false }, 500)}:()=>{})} 
    >
            <h2 className="text-center my-3">{not_hidden() ? race : ""}</h2>
            <div id="grid" className={[race_confirmed.value ? "confirmed" : ""]}>
                <div id="hide-grid">
                    <div className="row">
                    <div className={
                    'choosable-panel choosable-panel-'
                    + race
                    + '-image '
                    + (selected() ? "col-3" : "col-12")}></div>
                <div className={selected() ? "my-3 mx-auto col-6" : ""}>{selected() ? <p>{t("RACE."+race+".DESC")}</p> : ""}{selected() ? <p className="race-text">{t("RACE."+race+".FEATS")}</p> : ""}</div>
                </div>
                {selected() && <div className="d-flex justify-content-center">
                    <button className="mx-3 btn btn-danger col-3" onClick={()=>{selected_race.value = "";}}>Revert Choice</button>
                    <button className="mx-3 btn btn-primary col-3" onClick={() => { race_confirmed.value = true; setTimeout(()=>{race_confirmed_finished.value = true }, 500) }}>Confirm Choice</button>
                </div>}
                </div>
            </div>
    </div>
}

export default RaceSelectCard