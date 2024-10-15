const Companies = () => {
    const compimages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQMIGUVau1S22CqZmi7W_YiyyhtVUJdpMtOJCmWjVql6D2hSiccvzKaKrblsGRfoiLeg&usqp=CAU", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyvJKm6KrBnfQ2vC2EGTNnuvNiI8T9kTxILBeADlav9wFzh_mOpdhnzFU1K8aBkuYAc0&usqp=CAU", 
        "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609428052138-2TML36W0HSSB6UEQ379L/New-Balance-logo+2021.jpg", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTash2yE2U5LOn0b8iGRcNjTVyLxHYNrK96GQ&s"
    ]
    return (
        <div className="flex flex-col items-center my-[6rem] gap-6">
            <h1 className="w-full text-center text-[2rem] lg:text-[3rem] font-bold text-1 uppercase">Popular Companies that use Evento</h1>
            <div className="w-full lg:w-[80%]">
                    <div className="flex overflow-hidden">
                        {
                            compimages.map((item, id) => {
                                return <div key={id} className="custom-animation min-w-[10rem] min-h-[8rem] bg-center bg-contain bg-no-repeat mx-4" style={{ backgroundImage: `url( ${item} )` }}></div>

                            })
                        }
                                 {
                            compimages.map((item, id) => {
                                return <div key={id} className="custom-animation min-w-[10rem] min-h-[8rem] bg-center bg-contain bg-no-repeat mx-4" style={{ backgroundImage: `url( ${item} )` }}></div>

                            })
                        }
                        
                    </div>

            </div>
        </div>
    )
}

export default Companies;