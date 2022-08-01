export default function States(props) {
  const { img, bio, page, name } = props;
  return (
    <>
      <div className="container flex items-center justify-between">
        {img && (
          <img src={img} alt="user" className="rounded-full" width={300} />
        )}
        <p>{bio}</p>
      </div>
    </>
  );
}
