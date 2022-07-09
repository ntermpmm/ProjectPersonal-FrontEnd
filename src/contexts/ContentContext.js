import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

const ContentContext = createContext();

function ContentContextProvider({ children }) {
    const [contents, setContents] = useState([]);
    const [createCon, setCreateCon] = useState([]);
    useEffect(() => {
        const fetchMe = async () => {
            try {
                const resMe = await axios.get("/contents/all");
                setContents(resMe.data.contents);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMe();
    }, []);

    // const fetchById = async () => {
    //     try {
    //         const resMe = await axios.get("/contents/:id");
    //         console.log(resMe.data);
    //         setContents(resMe.data.contents);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const createContent = async (input) => {
        const res = await axios.post("/contents/", input);
        setCreateCon(res.data.contents);
        // const resMe = await axios.get("/contents/all");
        // setContents(resMe.data.contents);
    };

    return (
        <ContentContext.Provider value={contents}>
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContextProvider;

const useContent = () => {
    const ctx = useContext(ContentContext);
    return ctx;
};

export { useContent };
