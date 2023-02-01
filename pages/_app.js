// ./_app.js

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

import SSRProvider from "react-bootstrap/SSRProvider";

const App = ({ Component, pageProps }) => (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
)

export default App;
