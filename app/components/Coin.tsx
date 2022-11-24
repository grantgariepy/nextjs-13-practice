const Coin = ({ name, id }: { name: string; id: string }) => {
  return (
    <>
      <li>
        <a href={`/${id}`}>{name}</a>
      </li>
    </>
  );
};

export default Coin;
