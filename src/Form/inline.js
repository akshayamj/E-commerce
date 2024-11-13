// const Color = () => {
//   return (
//     <>
//       <h1 style={{ color: "blue" }}>Hello World!</h1>
//       <p>Add a little Color!</p>
//     </>
//   );
// };

// export default Color;

// const Color = () => {
//   return (
//     <>
//       <h1 style={{ backgroundColor: "lightblue" }}>Make it Simple</h1>
//       <p>Just Follow this</p>
//     </>
//   );
// };

// export default Color;

const Color = () => {
  const MyStyle = {
    color: "pink",
    backgroundColor: "black",
    border: "5px solid black",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  };
  return (
    <>
      <h1 style={MyStyle}>Life Gives Opportunities </h1>
      <p>Grab it</p>
    </>
  );
};

export default Color;
