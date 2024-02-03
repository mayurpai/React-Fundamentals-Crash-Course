export const NameList = () => {
  const names = ["A", "B", "C", "D"];
  return <>{names.map((itr, index) => {
    return <h1 key={itr.id}>{`${itr} - ${index}`}</h1>
  })}</>;
};
