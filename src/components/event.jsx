const Event = ({name}) => {
    return (
        <>
            <button onClick={() => { alert(name) }} className="bg-blue-500 text-lg mt-5 hover:bg-blue-700 py-2 px-4 ml-[50%] text-white  rounded">Click Me</button>
        </>
    )
};
export default Event;