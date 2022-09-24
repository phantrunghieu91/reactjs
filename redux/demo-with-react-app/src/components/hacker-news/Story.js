import LinkTo from './LinkTo';

const Story = ({ story: { id, by, title, kids, time, url } }) => (
  <div className='container bg-light mt-3'>
    <div className='container'>
      <LinkTo
        url={url}
        title={title}
      />
    </div>
    <div className='container'>
      <span>
        By{' '}
        <LinkTo
          url={`https://news.ycombinator.com/user?id=${by}`}
          title={by}
        />
      </span>
      <span>
        {new Date(time * 1000).toLocaleDateString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </span>
      <span>
        <LinkTo
          url={`https://news.ycombinator.com/item?id=${id}`}
          title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
        />
      </span>
    </div>
  </div>
);

export default Story;
