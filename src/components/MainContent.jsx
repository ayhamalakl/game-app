import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GameHeading } from "./GameHeading";

const MainContent = ({ selectGenre, onSelectPlatform, selectPlatform, selectSortOrder, onSelectSortOrder, searchText }) => {
    return (
        <>
            <div className="main-content col-span-5">
                <GameHeading selectGenre={selectGenre} selectPlatform={selectPlatform} />
                <div className="filter my-3">
                    <PlatformSelector onSelectPlatform={onSelectPlatform} selectPlatform={selectPlatform} />
                    <SortSelector onSelectSortOrder={onSelectSortOrder} selectSortOrder={selectSortOrder} />
                </div>
                <div className="cover-card">
                    <GameList selectPlatform={selectPlatform} selectGenre={selectGenre} selectSortOrder={selectSortOrder} searchText={searchText} />
                </div>
            </div>
        </>
    );
};

export default MainContent;
