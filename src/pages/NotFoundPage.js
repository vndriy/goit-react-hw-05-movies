import {
  NotFoundContainer,
  NotFoundMessage,
  HomeLink,
} from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundMessage>
        Oops! It seems like the page you are looking for doesn't exist. Please
        use this <HomeLink to="/">link</HomeLink> to navigate to our home page!
      </NotFoundMessage>
    </NotFoundContainer>
  );
}
