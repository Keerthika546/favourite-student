import { useFavourites } from "./StudentProvider";

function StudentCard({ student }) {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const liked = isFavourite(student.id);

  const toggleFavourite = () => {
    if (liked) {
      removeFavourite(student.id);
    } else {
      addFavourite(student);
    }
  };

  return (
    <div>

      <div className="relative grid grid-rows-2 my-5 p-4 w-full max-w-sm rounded-2xl bg-white shadow-md overflow-hidden">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-24 h-24" src={student.photo} alt={student.name} />
          <div>
            <h3 className="text-xl font-medium">{student.name}</h3>
            <p>{student.id}</p>
          </div>
          <button
              className={`heart_btn absolute top-4 right-6 w-fit bg-white rounded-full px-2 py-1 text-5xl ${liked ? "text-red-500" : "text-gray-400"
                }`}
              onClick={toggleFavourite}
            >
              {liked ? "♥" : "♡"}
            </button>
        </div>
        <div className="my-2">
          <p><i className="fa-solid fa-graduation-cap mr-2"></i> {student.dept}</p>
          <p><i class="fa-regular fa-calendar-days mr-3 ml-1"></i> {student.year}</p>
        </div>
        
      </div>


    </div>
  );
}

export default StudentCard;