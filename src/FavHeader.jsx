import { Link } from "react-router-dom";
import { useFavourites } from "./StudentProvider";

function FavHeader() {
    const { favourites, removeFavourite } = useFavourites();
    return (
        <>
            <h1 className="text-[#304332] text-5xl mt-5 ml-10 font-bold">My <span className="text-[#379240]">Favourite</span> Students</h1>
            <p className="text-[#304332] ml-11 mt-2 text-lg">Your personally selected students.</p>
            <div className="w-20 h-1 ml-11 mt-2 bg-gradient-to-r from-green-900 to-green-500"></div>
            <p className="bg-[#304332] rounded-3xl px-3 py-2 text-white font-semibold ml-10 my-5 w-fit">Saved Students ({favourites.length})</p>
            {favourites.length === 0 ? (
                <div className="bg-green-100 flex p-10 mx-10 rounded-2xl">
                    <img className="h-40 rounded-2xl" src="/images/fav.jpg" alt="fav_student" />
                    <div>
                        <h2 className="text-[#304332] text-5xl mt-5 ml-10 font-bold">No favourite students added yet</h2>
                        <p className="text-[#304332] ml-11 my-5 text-lg">Start exploring students add your favourites here</p>
                        <Link to="/" className="bg-[#304332] rounded-3xl px-3 py-2 text-white font-semibold ml-10">Explore Students</Link>
                    </div>
                </div>
            ) : (
                <div className="max-w-8xl mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{
                favourites.map((student) => (
                    <div key={student.id} className="relative grid grid-rows-2 my-5 p-4 w-full max-w-sm rounded-2xl bg-white shadow-md overflow-hidden">
                        <div className="flex gap-4 items-center">
                            <img className="rounded-full w-24 h-24" src={student.photo} alt={student.name} />
                            <div>
                                <h3 className="text-xl font-medium">{student.name}</h3>
                                <p>{student.id}</p>
                            </div>
                            
                        </div>
                        <div className="mt-2">
                            <p><i className="fa-solid fa-graduation-cap mr-2"></i> {student.dept}</p>
                            <p><i class="fa-regular fa-calendar-days mr-3 ml-1"></i> {student.year}</p>
                            <button className="bg-[#304332] rounded-3xl px-3 py-1 text-white font-semibold  my-5 w-fit" onClick={() => removeFavourite(student.id)}>Remove</button>
                        </div>
                        
                    </div>
                ))}
                </div>
            )}
        </>
    )
}
export default FavHeader