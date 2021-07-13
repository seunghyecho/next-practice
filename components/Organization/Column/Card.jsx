import videoImg from "/public/icons/video.png";

function Card({ value, flex, marginRight, width }) {
    return (
        <div
            className="card"
            style={{
                flex: flex,
                marginRight: marginRight,
            }}
        >
            {value.type === "text" ? (
                <div className="text">
                    <h2>{value.infoDes}</h2>
                    <div className="content">{value.infoContent}</div>
                </div>
            ) : (
                <div className="img">
                    <img src={value.image} alt="column_01" />
                    {value.type === "video" ? (
                        <img className="video" src={videoImg} />
                    ) : null}
                </div>
            )}

            <div className="info">
                <div
                    style={{
                        width: width,
                    }}
                >
                    <h3> {value.type === "text" ? null : value.infoDes}</h3>
                </div>
                <p className="date">{value.infoDate}</p>
                <span className={"tag " + value.tag} />
            </div>
        </div>
    );
}

export default Card;
