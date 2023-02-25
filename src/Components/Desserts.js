const Desserts = (props) => {
  const listName = props.myList
                              .filter(func => func.price <= 2800)
                              .sort((a, b) => a.price - b.price)
                              .map((list, index) => {
                                const newList = `${list.name} -- #${list.price}`;
                                return (
                                  <li className="li py-2">{newList}</li>
                              );
  });
  return ( 
    <ul className="ul">{listName}</ul>
   );
}
 
export default Desserts;