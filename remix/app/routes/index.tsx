export default function Index() {
  return (
    <div className="bg-red-400" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li className="line-clamp-2" >
          <a className="line-clamp-2 block max-w-sm"
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
            asjfdklasjdkfl asdfdasfasdfasdfasdfasdfasdfa adsf asfd asdf asdf asdf as
            asdf asdfasdfasdfasdf asdfasdfasdf
            asdfjklasdjfkljjlas

          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
