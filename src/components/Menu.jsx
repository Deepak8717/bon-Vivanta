const Menu = ({ sideMenu }) => {
  return (
    <>
      {Object.entries(sideMenu).map(([key], index) => {
        return (
          <div key={index} className="p-1 capitalize">
            {key}
          </div>
        );
      })}
    </>
  );
};

export default Menu;
