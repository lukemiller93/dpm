import { ReactElement } from 'react';

export default function thankYou(): ReactElement {
  return (
    <div
      className="container"
      style={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      }}
    >
      <h1>Thank you for your submission</h1>
      <p>We'll be following up shortly!</p>
    </div>
  );
}
