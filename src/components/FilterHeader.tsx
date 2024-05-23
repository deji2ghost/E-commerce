
type FilteredProduct ={
    filteredProduct: any
}

export const FilterHeader = ({filteredProduct}: FilteredProduct) => {
  return (
    <div className="flex justify-around gap-5 flex-wrap">
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('ALL')}
        >
            All
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('BEDROOM')}
        >
            BEDROOM
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('OFFICE')}
        >
            OFFICE
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('LIGHTING')}
        >
            LIGHTING
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('BATHROOM')}
        >
            BATHROOM
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('KITCHEN')}
        >
            KITCHEN
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('INTERIOR')}
        >
            INTERIOR
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('LIVING ROOM')}
        >
            LIVING ROOM
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('DECOR')}
        >
            DECOR
        </h1>
        <h1 
            className="bg-gray-200 shadow-md p-2 cursor-pointer w-[35%] md:w-[17%] text-center"
            onClick={() => filteredProduct('SOFA')}
        >
            SOFA
        </h1>
    </div>
  )
}
