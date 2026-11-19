import students from "./data/student";
function Header() {
    return (
        <>
            <h1 className="text-[#304332] text-5xl mt-5 ml-10 font-bold">Discover <span className="text-[#379240]">Students</span></h1>
            <p className="text-[#304332] ml-11 mt-2 text-lg">Find and connect with your favourite students.</p>
            <div className="w-20 h-1 ml-11 mt-2 bg-gradient-to-r from-green-900 to-green-500"></div>
            <div className="md:flex mt-2 justify-center gap-5">
                <div className="bg-white border border-gray-500 rounded-full flex justify-start items-center gap-2 w-3/4 ml-10 md:ml-0 md:w-1/4"><i className="fa-solid fa-magnifying-glass ml-3"></i><input className="outline-none bg-transparent w-full p-1" type="text" placeholder="Search by Student name or id"></input></div>
                <div className="bg-white flex justify-between items-center gap-4 px-2 py-1 md:py-0 w-fit border border-gray-500 rounded-full mt-5 md:m-0 ml-10 md:ml-0">
                    <div className="flex justify-center items-center gap-2">
                        <i class="fa-solid fa-building-user"></i>
                        <p>All departments</p>
                    </div>
                    <div><i class="fa-solid fa-angle-down"></i></div>
                </div>
            </div>
            <p className="bg-[#304332] rounded-3xl px-3 py-2 text-white font-semibold ml-10 my-5 w-fit">All Students ({students.length})</p>
        </>
    )
}
export default Header