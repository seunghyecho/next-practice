import videoImg from "/public/icons/video.png";

function MobileCard({ item }) {
    return (
        <div className="mobile">
            {item.type === "text" ? (
                <div className="text">
                    <h2>{item.infoDes}</h2>
                    <div className="content">{item.infoContent}</div>
                </div>
            ) : (
                <div className="img">
                    <img src={item.image} alt="column_01" />
                    {item.type === "video" ? (
                        <img className="video" src={videoImg} />
                    ) : null}
                </div>
            )}

            <div className="info">
                <h3> {item.type === "text" ? null : item.infoDes}</h3>

                <p className="date ff-r">{item.infoDate}</p>
                <span className={"tag " + item.tag}></span>
            </div>
        </div>
    );
}

export default MobileCard;
