function Banner_sub({title,sub}) {
  return (
    <div className="banner sub" id="sub">
      <div className="inner">
        <h1>{title}</h1>
        <h3>{sub}</h3>
      </div>
    </div>
  );
}

export default Banner_sub;
