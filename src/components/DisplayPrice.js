import ToggleSwitch from "./ToggleSwitch"



const DisplayPrice = () => {
    return(
        <>
            <section className="flex justify-between w-5/12 m-auto h-20 border rounded-2xl">
                <div className="flex my-auto ml-4 ">
                    <p className="mr-2 font-bold">Display Total Price</p>
                    <p className="ml-2">Includes all fees, before taxes</p>
                </div>
                <div className="my-auto mr-4">
                <ToggleSwitch />
                </div>
            </section>
        </>
    )
}

export default DisplayPrice