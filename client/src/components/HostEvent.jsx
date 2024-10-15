const HostEvent = () => {

    const bgimage = "https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className="w-full h-[60vh] flex items-center justify-start p-4 bg-center bg-cover" style={ { backgroundImage : `url( ${bgimage} )` } }>
        <div className="w-[50%] flex flex-col gap-4">
            <h1 className="text-white text-[2.5rem] lg:text-[4rem] font-extrabold leading-none ">Want to Add Your Event So that you can gather people and make it awesome?</h1>
            <button className="custom-button uppercase w-[8rem]">Add Event</button>
        </div>
    </div>
  )
}

export default HostEvent