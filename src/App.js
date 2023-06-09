import { createBrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import DisplayPrice from "./components/DisplayPrice";
import RoomList from "./components/RoomList";
import TopBar from "./components/TopBar";



const App = () => {
    return(
        <div>
            <TopBar />
            <Categories />
            <DisplayPrice />
            <RoomList />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:'<App />'
    }
])

export default App;