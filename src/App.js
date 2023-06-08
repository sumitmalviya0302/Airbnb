import Categories from "./components/Categories";
import DisplayPrice from "./components/DisplayPrice";
import RoomList from "./components/RoomList";
import TopBar from "./components/TopBar";



const App = () => {
    return(
        <>
            <TopBar />
            <Categories />
            <DisplayPrice />
            <RoomList />
        </>
    )
}

export default App;