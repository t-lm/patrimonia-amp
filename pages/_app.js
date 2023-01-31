// ./_app.js

import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
