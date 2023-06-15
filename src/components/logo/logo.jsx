import React from "react";
import { styled } from "@mui/system";
import logoImage from "../../assets/icon.png"

const LogoImage = styled("img")({
  width: (props) => props.width,
  height: (props) => props.height,
});

function Logo({  alt, width, height }) {
  return <LogoImage src={logoImage} alt={alt} width={width} height={height} />;
}

export default Logo;
