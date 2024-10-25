const RaceSelectCard = ({race, index , selected_race}) => {
    let classes = [
        selected_race.value === "" || selected_race.value === race ?"":"visually-hidden",
        "rounded",
        "sm",
        "rounded",
        "sm-col-12",
        selected_race.value === "" || selected_race.value === race ? "col-12" : "col-3",
        "px-3",
        `choosable-panel-${race}`
    ]

    return <div 
        key={index}
        id={"race-select-" + race.toLowerCase()} 
        className={classes.join(" ")}
        onClick={()=> {selected_race.value=race}} 
    >
            <h2 className="text-center">{race}</h2>
            <div className={
                'choosable-panel choosable-panel-'
                +race
                +'-image '
                +(selected_race.value === "" || selected_race.value === race ? "col-3" : "")}></div>
    </div>
}

export default RaceSelectCard