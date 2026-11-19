import { createContext, useContext, useState } from "react";
const StudentContext = createContext();
function StudentProvider({ children }) {
    const [favourites, setFavourites] = useState([])
    const addFavourite = (student) => {
        if (favourites.some((s) => s.id === student.id)) return
        setFavourites([...favourites, student])
    }
    const removeFavourite = (id) => {
        setFavourites(favourites.filter((s) => s.id !== id));
    }
    const isFavourite = (id) => {
        return favourites.some((s) => s.id === id);
    };
    return (

        <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
            {children}
        </StudentContext.Provider>
    )
}
function useFavourites() {
    return useContext(StudentContext)
}
export { StudentProvider, useFavourites } 
