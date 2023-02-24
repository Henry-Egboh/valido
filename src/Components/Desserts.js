const Desserts = (props) => {
  const listName = props.myList.map(list => {
    const newList = `${list.name}`;
    return (
      <li>{newList}</li>
    )
  });
  return ( 
    <ul>{listName}</ul>
   );
}
 
export default Desserts;