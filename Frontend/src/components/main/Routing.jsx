import { Route, Routes } from "react-router-dom";
import Display from "./Display";
import NotFound from "./NotFound";
import SingleCharacter from "./SingleCharacter";

export default function Routing() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Display/>}/>
                    <Route path="/seasons" element={<Display/>}/>
                    <Route path="/characters" element={<Display/>}/>
                    <Route path="/characters/1" element={<Display/>}/>
                    <Route path="/characters/1/:firstName" element={<SingleCharacter/>}/>
                    <Route path="/characters/2" element={<Display/>}/>
                    <Route path="/characters/3" element={<Display/>}/>
                    <Route path="/characters/4" element={<Display/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>
    );
};