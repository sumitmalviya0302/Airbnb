import searchICON from "../assests/topbar/search.png";
import worldICON from "../assests/topbar/world.png";
import menuICON from "../assests/topbar/menu.png";
import accountICON from "../assests/topbar/round-account-button-with-user-inside.png";

const TopBar = () => {
  return (
    <header className="h-20 w-full px-10 border-b">
      <div className="flex justify-between items-center h-full w-full relative z-1">
        <div className="w-[20%]">
        <img
        src="https://tse3.mm.bing.net/th?id=OIP.EVZrE-vj_hlRN84r0YBKaQHaCT&pid=Api&P=0&h=180"
        alt="logo"
        className="h-8"
      />
        </div>
        <div className="flex border rounded-3xl shadow-md h-12 items-center">
          <p className="mx-2 p-2">Anywhere</p>
          <p className="mx-2 p-2">Any Week</p>
            <p className="mx-2 p-2">Add Guest</p>
            <img src={searchICON} alt="search-logo" className="h-9 mx-2  " />
         
        </div>
        <div className="flex px-2">
          <p className="mx-3 pr-2 mt-2">AirBnb your Home</p>
          <img src={worldICON} alt="world-logo" className="h-4 mx-3 mt-3 " />
          <div className="flex border rounded-3xl w-20 h-10 mx-1">
            <img src={menuICON} alt="menu-icon" className="h-3 mt-3 mx-3" />
            <img src={accountICON} alt="account-icon" className="h-7 mt-1 ml-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
