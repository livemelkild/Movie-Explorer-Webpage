import React from "react";

interface HeaderProps{
  title : string;
}

const Header = (props: HeaderProps) => {
  return props.title;
};

export default Header;
