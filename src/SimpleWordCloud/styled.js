import styled from "styled-components";

export const Word = styled.span`
	position: relative;
	margin: 0px 3px;
  verticalAlign: middle;
  display: inline-block;
	top: ${props => props.top};
	left: ${props => props.left};
	fontSize: ${props => props.fontSize};
	fontWeight: ${props => props.fontWeight};
	color: ${props => props.color};
`;