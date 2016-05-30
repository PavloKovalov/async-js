// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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
  Slide,
  Spectacle
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  cry: require("../assets/cry.png"),
  erase: require("../assets/erase_mem.gif"),
  callback: {
    hell: require("../assets/callback_hell.gif")
  },
  promise: {
    state: require("../assets/promise.png")
  },
  async: require("../assets/async_in_da_house.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#2d2d2d",
  secondary: "#efefef",
  jsPrime: "#f3df49"
});

const code = {
  callback: {
    func: require("raw!../assets/callback_func.example"),
    chain: require("raw!../assets/callback.example"),
    named: require("raw!../assets/callback_named.example"),
    nesting: require("raw!../assets/callback_nesting.example"),
    retrn: require("raw!../assets/callback_return.example")
  },
  promise: {
    api: require("raw!../assets/promise.example"),
    resolve: require("raw!../assets/promise_resolve.example"),
    reject: require("raw!../assets/promise_reject.example"),
    throw: require("raw!../assets/promise_throw.example"),
    nested: require("raw!../assets/promise_nested.example"),
    chain: require("raw!../assets/promise_chain.example"),
    all: require("raw!../assets/promise_all.example"),
    unhandled: require("raw!../assets/promise_unhandled.example"),
    unhandledFix: require("raw!../assets/promise_unhandled_fix.example")
  },
  async: {
    example: require("raw!../assets/async.example"),
    explained: require("raw!../assets/async_explained.example"),
    error: require("raw!../assets/async_error.example")
  }
};

export default class Presentation extends React.Component {
  render() {
    const biggerFont = {
      fontSize: "1.4rem"
    };

    return (
      <Spectacle theme={ theme }>
        <Deck transition={ ["slide"] } transitionDuration={ 500 }>
          <Slide>
            <Heading size={3} fit textColor="jsPrime">Async JavaScript</Heading>
          </Slide>

          <Slide>
            <Heading>Callbacks</Heading>
          </Slide>

          <Slide>
            <CodePane lang="js"
              style={ Object.assign({paddingLeft: "15%"}, biggerFont) }
              source={ code.callback.func }/>
          </Slide>

          <Slide>
            <CodePane lang="js"
              style={ biggerFont }
              source={ code.callback.chain }/>
          </Slide>

          <Slide>
            <Heading textColor="jsPrime">What's the matter?</Heading>
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

          <Slide bgImage={images.callback.hell.replace("/", "")}/>

          <Slide textColor="jsPrime">
            <Heading fit>Escape from Callback Hell</Heading>
            <br/>
            <Appear>
              <Heading textColor="jsPrime" size={4}>Named Callbacks</Heading>
            </Appear>
            <Appear>
              <Heading textColor="jsPrime" size={4}>Avoid Nesting</Heading>
            </Appear>
            <Appear>
              <Heading textColor="jsPrime" size={4}>return</Heading>
            </Appear>
            <Appear>
              <Heading textColor="jsPrime" size={4}>Promises</Heading>
            </Appear>
          </Slide>

          <Slide notes="let's recall our code">
            <CodePane lang="js"
              style={ biggerFont }
              source={ code.callback.chain }/>
          </Slide>

          <Slide>
            <Heading size={4} textColor="jsPrime">Named Callbacks</Heading>

            <CodePane lang="js"
              style={ {fontSize: "1.1rem", paddingLeft: "20%"} }
              source={ code.callback.named }/>
          </Slide>

          <Slide>
            <Heading size={4} textColor="jsPrime">Avoid Nesting</Heading>

            <CodePane lang="js"
              style={ {fontSize: "1.1rem", paddingLeft: "20%"} }
              source={ code.callback.nesting }/>
          </Slide>

          <Slide>
            <Heading size={4} textColor="jsPrime">return</Heading>

            <CodePane lang="js"
              style={ {fontSize: "1.1rem", paddingLeft: "20%"} }
              source={ code.callback.retrn }/>
          </Slide>


          <Slide notes="let's talk about promises">
            <Heading fit size={3} textColor="jsPrime">&nbsp;Promises&nbsp;</Heading>
          </Slide>

          <Slide notes="what is it?">
            <Heading size={3}>
              <Link href="https://promisesaplus.com/" textColor="jsPrime">Promises/A+</Link>
            </Heading>
            <List>
              <ListItem textSize="2.3rem">“promise” is an object or function with a “then”
                method</ListItem>
              <ListItem textSize="2.3rem">“then” accepts two arguments onFulfilled and onRejected, both
                are optional</ListItem>
              <ListItem textSize="2.3rem">“value” is any legal JavaScript value</ListItem>
              <ListItem textSize="2.3rem">A promise must be in one of three states: pending, fulfilled, or
                rejected</ListItem>
            </List>
            <Image height="235px" src={images.promise.state.replace("/", "")}/>
          </Slide>

          <Slide
            notes="<ul><li>Promise - is an object/function</li>
              <li>initial state is <b>pending</b></li>
              <li>then has two callbacks</li>
              <li>optional</li><li>catch is an alias</li>
              <li>when promise changes state it calls corresponding callback</li></ul>">
            <CodePane lang="js"
              style={ biggerFont }
              source={ code.promise.api }/>

            <Image height="180px" src={images.promise.state.replace("/", "")}/>
          </Slide>

          <Slide>
            <Heading size={4} textColor="jsPrime">Fulfilled promise</Heading>
            <br/>
            <CodePane lang="js"
              style={ {fontSize: "1.6rem"} }
              source={ code.promise.resolve }/>
          </Slide>

          <Slide>
            <Heading size={4} textColor="jsPrime">Rejected promise</Heading>
            <br/>
            <CodePane lang="js"
              style={ {fontSize: "1.6rem"} }
              source={ code.promise.reject }/>
          </Slide>

          <Slide notes="synchronous throw considered as rejection">
            <Heading size={4} textColor="jsPrime">Throw to reject</Heading>
            <br/>
            <CodePane lang="js"
              style={ {fontSize: "1.6rem"} }
              source={ code.promise.throw }/>
          </Slide>

          <Slide notes="let's recap our last code and refator it with promises">
            <Heading size={4} textColor="jsPrime">refactoring time!</Heading>

            <CodePane lang="js"
              style={ {fontSize: "1.2rem", paddingLeft: "20%"} }
              source={ code.callback.retrn }/>
          </Slide>

          <Slide notes="<ul><li>consider all API functions also promises</li>
          <li>we create new Promise with executor - function that describe behaviour</li>
          <li>executor is expected to initiate some asynchronous work</li>
          <li>once that completes, call either the resolve or reject function to resolve the promise's final value</li>
          <li>or else reject it if an error occurred</li>
          </ul>">
            <Heading size={5} textColor="jsPrime">Promisify all the things</Heading>

            <CodePane lang="js"
              style={ {fontSize: "1.3rem"} }
              source={ code.promise.nested }/>
          </Slide>

          <Slide notes="<ul><li>instead of nesting promise into promise</li>
          <li>we can return new promise in then callback</li>
          <li>so it can be chained</li>
          <li>and allows to add .then and .catch to new promise</li>
          </ul>">
            <Heading size={4} textColor="jsPrime">Promise chaining</Heading>
            <br/>
            <CodePane lang="js"
              style={ biggerFont }
              source={ code.promise.chain }/>
          </Slide>

          <Slide notes="<ul>
          <li>returns a promise that resolves when all of the promises in the argument have resolved</li>
          <li> or rejects with the reason of the first passed promise that rejects.</li></ul>">
            <Heading size={4} textColor="jsPrime">Promise.all</Heading>

            <CodePane lang="js"
              style={ { fontSize: "1.4rem" } }
              source={ code.promise.all }/>
          </Slide>

          <Slide notes="<ul>
          <li>but promises is not a silver bullet</li>
          <li>it also has some cons</li>
          <li>most common is an unhandled rejections</li>
          <li>if the Promise rejected in doSomethingComplicated()</li>
          <li>there no catchers on it</li>
          <li>and promise from fetch is returned</li>
          <li>another example of silent promise</li>
          <li>that is not visible/catchable from outside of main()</li>
          </ul>">
            <Heading size={4} textColor="orange" fit>unhandled rejections</Heading>
            <br/>
            <CodePane lang="js"
              style={ biggerFont }
              source={ code.promise.unhandled }/>
          </Slide>

          <Slide notes="<ul>
            <li> to fix</li>
            <li> return the last then</li>
            <li> return always</li>
            <li>window.addEventListener('unhandledrejection', cb)</li>
          </ul>">
            <Heading size={4} textColor="jsPrime">Fix 'em all!</Heading>
            <br/>
            <CodePane lang="js"
              style={ biggerFont }
              source={ code.promise.unhandledFix }/>
          </Slide>

          <Slide notes=".then is cool, yep? seems, you're doing something wrong">
            <Heading>fetch.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
            <Heading>&nbsp;.then(...)</Heading>
          </Slide>

          <Slide>
            <Heading size={3} textColor="jsPrime">Let's recap!</Heading>
            <br/>
            <Layout fit>
              <Fill style={ {marginRight: "10%"} }>
                <Heading size={2} text>Callbacks</Heading>
                <Appear>
                  <List textColor="#efefef">
                    <ListItem>
                      Hard to figure out
                    </ListItem>
                    <ListItem>
                      Hard to debug
                    </ListItem>
                    <ListItem>
                      Works if you pay attention to code quality
                    </ListItem>
                    <Appear>
                      <ListItem>
                        Can bring you to Egypt<sup>&#9786;</sup>
                      </ListItem>
                    </Appear>
                  </List>
                </Appear>
              </Fill>
              <Fill>
                <Heading size={2}>Promises</Heading>
                <Appear>
                  <List textColor="#efefef">
                    <ListItem>
                      Clean API
                    </ListItem>
                    <ListItem>
                      Simplified code flow&#42;
                    </ListItem>
                    <ListItem>
                      Promise.all
                    </ListItem>
                    <ListItem>
                      unhandled rejections
                    </ListItem>
                    <ListItem>
                      not cancelable&#42;
                    </ListItem>
                  </List>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="black">
            <Heading fit textColor="#efefef" style={ {fontWeight: "normal"} }>One more thing…</Heading>
          </Slide>

          <Slide>
            <Heading size={3} fit textColor="jsPrime">async / await</Heading>
            <br/>
            <Heading size={5} fit>
              <Link href="https://github.com/tc39/ecmascript-asyncawait" textColor="white"
                target="_blank">
                https://github.com/tc39/ecmascript-asyncawait
              </Link>
            </Heading>
          </Slide>

          <Slide>
            <Appear><Heading fit>not a part of ES2015</Heading></Appear>
            <Appear><Heading fit>not even ES2016</Heading></Appear>
            <Appear><Heading fit>stage 3 means candidate to be included in ES2017</Heading></Appear>
            <Appear><Heading textColor="jsPrime">but it's veeery cool!</Heading></Appear>
          </Slide>

          <Slide>
            <Heading size={2}>
              Async/await is a kind of readable, synchronous code flow with asyncronous nonblocking
              execution
            </Heading>
          </Slide>

          <Slide>
            <CodePane lang="js"
              style={ {fontSize: "1.6rem"} }
              source={ code.async.example }/>
          </Slide>

          <Slide>
            <CodePane lang="js"
              style={ {fontSize: "1.8rem"} }
              source={ code.async.explained }/>
          </Slide>

          <Slide>
            <Heading size={2} textColor="jsPrime">error handling</Heading>
            <CodePane lang="js"
              style={ {fontSize: "1.5rem"} }
              source={ code.async.error }/>
          </Slide>

          <Slide bgImage={images.erase.replace("/", "")}/>

          <Slide>
            <Heading>We've got a hope</Heading>
            <br/>
            <Appear>
              <Heading size={4} textColor="jsPrime">
                Babel&nbsp;
                <Link textColor="white"
                  href="http://masnun.com/2015/11/11/using-es7-asyncawait-today-with-babel.html">
                  to the rescue
                </Link>
              </Heading>
            </Appear>
            <br/>
            <Appear>
              <div>
                <Heading size={6}>
                  <Link textColor="jsPrime"
                    href="https://twitter.com/joewalnes/status/732377366639476737">
                    “async/await hits V8! Not long until it'll be in Chrome” – @joewalnes
                  </Link>
                </Heading>
                <Image src={images.async.replace("/", "")} width="80%"/>
              </div>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={3} fit textColor="jsPrime">That's all, Folks!</Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="jsPrime">Useful Links</Heading>
            <List>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://promisesaplus.com/">
                  Promises/A+
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://learn.javascript.ru/promise">
                  JavaScript.ru – Promise
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef"
                  href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise">
                  MDN – JavaScript reference - Promise
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef"
                  href="http://robotlolita.me/2015/11/15/how-do-promises-work.html">
                  How do Promises Work?
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
                  MDN – Web APIs – Fetch API
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://www.youtube.com/watch?v=y8xPMYwQ0U8">
                  Let's write code – What is Async JavaScript?
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://www.youtube.com/watch?v=qN0dkXj7jc0">
                  Let's write code – Mastering JavaScript Callbacks
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://www.youtube.com/watch?v=g90irqWEqd8">
                  Let's write code – Async JavaScript with Promises
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://www.youtube.com/watch?v=lil4YCCXRYc">
                  Jafar Husain: Async Programming in ES7 | JSConfUS '15&#42;
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://www.youtube.com/watch?v=QtgR94Q2pt4">
                  Jeremy Fairbank: The rise of async JavaScript | Fluent Conf '16&#42;
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef" href="https://github.com/stevekane/promise-it-wont-hurt">
                  promise-it-wont-hurt – Promises Workshop for JavaScript!
                </Link>
              </ListItem>
              <ListItem textSize="2rem">
                <Link textColor="#efefef"
                  href="https://github.com/Thinkful-Ed/callbacks-promises-and-async-functions">
                  callbacks-promises-and-async-functions – Advanced Async Workshop
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide bgColor="#0f0f0f">
            <Heading textColor="lime">Coding Time!</Heading>
            <br/>
            <div style={ {textAlign: "left"} }>
              <Code style={ {color: "white", whiteSpace: "nowrap", fontSize: "1.4rem"} }>
                $ mkdir i-know-async-kung-fu && cd $_
              </Code>
              <br/>
              <Code style={ {color: "white", whiteSpace: "nowrap", fontSize: "1.4rem"} }>
                $ git clone https://github.com/PavloKovalov/async-js-workbook.git
              </Code>
            </div>
            <hr/>
            <br/>
            <Heading size={4} textColor="jsPrime">http://bit.do/asyncjs</Heading>

          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
