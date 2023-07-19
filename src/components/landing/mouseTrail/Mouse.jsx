import MouseTrail from "@pjsalita/react-mouse-trail";

function Mouse() {
  const config = {
    color: "#66BB87",
    idleAnimation: true,
    idleAnimationCount: 10,
    inverted: true,
    size: 20,
    trailCount: 20,
  };

  return <MouseTrail {...config} />;
}

export default Mouse;
