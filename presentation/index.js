// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  callback: {
    hell: require("../assets/callback_hell.gif"),
  }
};

preloader(images);

const theme = createTheme({
  primary: "#2e2e2c",
  secondary: "#efefef",
  js_prime: "#f3df49"
});

const code = {
  callback: {
    func: require("raw!../assets/callback_func.example"),
    chain: require("raw!../assets/callback.example"),
    named: require("raw!../assets/callback_named.example"),
    nesting: require("raw!../assets/callback_nesting.example"),
    retrn: require("raw!../assets/callback_return.example")
  },
  promise: require("raw!../assets/promise.example")
}

export default class Presentation extends React.Component {
  render() {
    const biggerFont = {
      fontSize: '1.4rem'
    };

    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide>
            <Heading size={3} fit textColor="js_prime">Async JavaScript</Heading>
          </Slide>

          <Slide>
            <Heading>Callbacks</Heading>
          </Slide>

          <Slide>
            <CodePane lang="js"
                      style={Object.assign({paddingLeft:'15%'}, biggerFont)}
                      source={code.callback.func} />
          </Slide>

          <Slide>
            <CodePane lang="js"
                      style={ biggerFont }
                      source={code.callback.chain} />
          </Slide>

          <Slide>
            <Heading textColor="js_prime">What's the matter?</Heading>
            <Appear fid="4">
              <Heading>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</Heading>
            </Appear>
            <Appear fid="3">
              <Heading>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</Heading>
            </Appear>
            <Appear fid="2">
              <Heading>&nbsp;&nbsp;});</Heading>
            </Appear>
            <Appear fid="1">
              <Heading>});&nbsp;&nbsp;</Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.callback.hell.replace("/", "")}>
          </Slide>

          <Slide>
            <Heading fit>Escape from Callback Hell</Heading>
            <Appear>
              <Heading size={4}>Named Callbacks</Heading>
            </Appear>
            <Appear>
              <Heading size={4}>Avoid Nesting</Heading>
            </Appear>
            <Appear>
              <Heading size={4}>return</Heading>
            </Appear>
            <Appear>
              <Heading size={4}>Promises</Heading>
            </Appear>
          </Slide>

          <Slide>
            <CodePane lang="js"
                      style={ biggerFont }
                      source={code.callback.chain} />
          </Slide>

          <Slide>
            <Heading size={4} textColor="js_prime">Named Callbacks</Heading>

            <CodePane lang="js"
                      style={ Object({fontSize: '1.1rem', paddingLeft: '20%'}) }
                      source={code.callback.named} />
          </Slide>

          <Slide>
            <Heading size={4} textColor="js_prime">Avoid Nesting</Heading>

            <CodePane lang="js"
                      style={ Object({fontSize: '1.1rem', paddingLeft: '20%'}) }
                      source={code.callback.nesting} />
          </Slide>

          <Slide>
            <Heading size={4} textColor="js_prime">return</Heading>

            <CodePane lang="js"
                      style={ Object({fontSize: '1.1rem', paddingLeft: '20%'}) }
                      source={code.callback.retrn} />
          </Slide>


          <Slide>
            <Heading fit size={3} textColor="js_prime">&nbsp;Promises&nbsp;</Heading>
          </Slide>

          <Slide>
            <Heading><Link href="https://promisesaplus.com/" textColor="js_prime">Promises/A+</Link></Heading>
            <List textColor>
              <ListItem>“promise” is an object or function with a “then” method</ListItem>
              <ListItem>“value” is any legal JavaScript value</ListItem>
              <ListItem>A promise must be in one of three states: pending, fulfilled, or rejected</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Base promise</Heading>
            <Heading>new Promise((resolve, reject) => {})</Heading>
            <Heading>promise.resolve(42)</Heading>
            <Heading>promise.reject("oops")</Heading>
            <Heading>promise.then(onFulfilled, onRejected)</Heading>
            <Heading>promise.catch(onRejected)</Heading>
            <Heading>throw new Error("oops") === promise.reject("oops")</Heading>
          </Slide>

          <Slide>
            <CodePane lang="js"
                      style={ biggerFont }
                      source={code.promise} />
          </Slide>

          <Slide>
            <Heading>fetch.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading>+</Heading>
                <List>
                  <ListItem>
                    <Text></Text>
                  </ListItem>
                  <ListItem>
                    <Text>Promise.all</Text>
                  </ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading>-</Heading>
                <List>
                  <ListItem>
                    <Text></Text>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading size={3} fit textColor="js_prime">async / await</Heading>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading>+</Heading>
                <List>
                  <ListItem>
                    <Text></Text>
                  </ListItem>
                  <ListItem>
                    <Text></Text>
                  </ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading>-</Heading>
                <List>
                  <ListItem>
                    <Text>is not a part of ES2015</Text>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <Text>is not a part of ES2016 either</Text>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
