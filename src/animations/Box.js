import posed from "react-pose";

export default posed.div({
  enter: {
    opacity: 1,
    height: "auto",
    delay: ({ position }) => position * 100,
  },
  exit: {
    opacity: 0,
    height: 0,
  },
});
