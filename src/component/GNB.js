import "../App.css";
import "../GNB.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function GNB() {
  return (
    <div className="Mainbar">
      <div className="Mainbar_in">
        <div className="Mainbar_MainNav">
          <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" />
          <div className="Mainbar_MainNav_text">wanted</div>
        </div>
        <div className="Mainbar_Menu">
          <div>홈</div>
          <div>채용</div>
          <div>이벤트</div>
          <div>직군별 연봉</div>
          <div>이력서</div>
          <div>
            커뮤니티
            <span>New</span>
          </div>
          <div>프리랜서</div>
          <div>
            AI 합격예측
            <span>Beta</span>
          </div>
          <div></div>
        </div>
        <div className="Mainbar_SideMenu">
          <div className="Mainbar_SideMenu_search">
            <FontAwesomeIcon icon={faSearch} className="search" />
            <span>N</span>
          </div>
          <div className="Mainbar_SideMenu_bell">
            <FontAwesomeIcon icon={faBell} className="bell" />
            <span>N</span>
          </div>
          <div className="Mainbar_SideMenu_avatar"></div>
          <div className="Mainbar_SideMenu_menuPlus">
            <FontAwesomeIcon icon={faEllipsisH} className="menuPlus" />
          </div>
          <div className="Mainbar_SideMenu_verticalbar">|</div>
          <div className="Mainbar_SideMenu_text">기업 서비스</div>
        </div>
      </div>
    </div>
  );
}
export default GNB;
