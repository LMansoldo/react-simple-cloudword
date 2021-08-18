import styled from 'styled-components';

export const Word = styled.span`
	position: relative;
	margin: 0px 3px;
	verticalalign: middle;
	display: inline-block;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	fontsize: ${(props) => props.fontSize};
	fontweight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
`;
