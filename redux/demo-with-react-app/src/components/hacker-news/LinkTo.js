const LinkTo = ({ url, title }) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
  >
    {title}
  </a>
);
export default LinkTo;
