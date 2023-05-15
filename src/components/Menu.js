import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../context/Context";

export default function Menu() {
    const { setGameState} = useContext(GameStateContext);
    return (
        <div className="Menu">
            <h1>Як добре ти знаєш українських художників?</h1>
            <button
            onClick={() => {
                setGameState("playing");
            }}
            >
                Розпочати Quiz
            </button>
        </div>
    );
}