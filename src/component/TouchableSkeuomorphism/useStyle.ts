interface Props {
  size: number;
  isDown?: boolean;
  downColor: string;
  upColor: string;
}
const useStyle = (props: Props) => {
  const { size, isDown, downColor, upColor } = props;

  const gradColors = isDown ? [downColor, upColor] : [upColor, downColor];

  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size,
  };
  const buttonOuterStyle = {
    shadowOffset: { width: size, height: size },
    marginTop: size,
    marginBottom: size,
    shadowColor: upColor,
  };
  const buttonInnerStyle = {
    shadowOffset: { width: -size, height: -size },
    backgroundColor: upColor,
    shadowColor: downColor,
  };
  const buttonFaceStyle = {
    borderRadius: size,
    padding: size,
  };
  return {
    gradColors,
    buttonCommonStyle,
    buttonOuterStyle,
    buttonInnerStyle,
    buttonFaceStyle,
  };
};
export default useStyle;
