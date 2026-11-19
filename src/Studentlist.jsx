import students from "./data/student";
import Header from "./Header";
import StudentCard from "./StudentCard";

function Studentlist() {
  return (
    <>
      <Header />
      <div className="max-w-8xl mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
      </div>
    </>
  );
}

export default Studentlist;