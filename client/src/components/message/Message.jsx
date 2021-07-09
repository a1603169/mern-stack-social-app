import "./message.css"

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg"
          src="https://scontent.fqlf1-1.fna.fbcdn.net/v/t1.18169-9/15977145_911136895656030_7583342455303071937_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=w81Pea0IDS0AX_TW956&_nc_ht=scontent.fqlf1-1.fna&oh=d0ca5fad04c9077ca5b44c36e92b3e87&oe=60EDF7E3" 
          alt="" />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsum. Nesciunt enim adipisci, nulla soluta voluptates nisi ullam atque commodi necessitatibus. Voluptatibus blanditiis libero, voluptate eveniet consectetur nostrum repellendus vitae.</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
