import { styled } from '../styles';
import Header from './Header';

const LinkCardWrapper = styled.div`
  position: relative;
  isolation: isolate;
  margin: 2rem 1.5rem 3.5rem 0;

  :before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 1.5rem;
    left: 1.5rem;
    right: -1.5rem;
    bottom: -1.5rem;
    background-color: ${(props) => props.theme.colors.teal};
  }
`;

const StyledLinkCard = styled.a`
  display: grid;
  grid-template-columns: 5fr 4fr;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease;

  :hover,
  :focus-visible {
    transform: translate(0.75rem, 0.75rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${(props) => props.theme.break_medium}) {
    grid-template-columns: 1fr;
  }
`;

const LinkCardImage = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem;
  background-color: white;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${(props) => props.theme.break_small}) {
    padding: 2rem;
  }
`;

const LinkCardText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 2rem;
  background-color: rgba(45, 45, 45, 0.08);
  text-align: left;

  p {
    margin: 0;
  }

  span {
    color: ${(props) => props.theme.colors.muted};
  }
`;

interface LinkCardProps {
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  displayUrl: string;
  description: string;
}

function LinkCard({
  href,
  image,
  imageWidth,
  imageHeight,
  title,
  displayUrl,
  description,
  children,
}: React.PropsWithChildren<LinkCardProps>) {
  return (
    <LinkCardWrapper>
      <StyledLinkCard href={href} target="_blank" rel="noopener noreferrer">
        <LinkCardImage>
          <img src={image} width={imageWidth} height={imageHeight} alt="" />
        </LinkCardImage>
        <LinkCardText>
          <Header size="small">{title}</Header>
          <span>{displayUrl}</span>
          <p>{description}</p>
          {children}
        </LinkCardText>
      </StyledLinkCard>
    </LinkCardWrapper>
  );
}

export default LinkCard;
