import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img 
            className="chatOnlineImg"
            src="https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.18169-9/18033295_982494475186938_7586027725717908810_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PeMxXmeanysAX_mb_Ka&_nc_oc=AQnByymW5yt1mTR8yVre4oW39FUHCT1IxVVbuZPlNa0N51VGWd5nXACglPuB5xIpbQA&_nc_ht=scontent.fqlf1-1.fna&oh=888642b7ad6b7a5ddc5e79118a688555&oe=60ED53C4"
            alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">David Bang</span>
      </div>
    </div>
  )
}
