import * as React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Tweet from "./Tweet";
import Timeline from "./Timeline";
import TweetInput from "./TweetInput";

function App() {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: "ð½",
      displayName: "ããããå¤ªé",
      accountName: "morokoshi",
      content: "ä»æ¥ã1æ¥ããããããã¾ã",
    },
    {
      id: 1,
      icon: "ð¦",
      displayName: "ã¨ããã³ã¹",
      accountName: "evidence",
      content: "ãã«ã¿ããã¹ãã",
    },
  ]);
  // addTweeté¢æ°ã¯useCallbackã§ä½æãã
  // ãããæ¯åä½æãã¦ããã¨éããªãã®ã§
  const addTweet = React.useCallback(
    (tweet) => setTweets((prev: any) => [tweet, ...prev]),
    [setTweets]
  );

  return (
    <React.StrictMode>
      <Hello />
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </React.StrictMode>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
