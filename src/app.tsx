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
      icon: "🌽",
      displayName: "もろこし太郎",
      accountName: "morokoshi",
      content: "今日も1日もろこしがうまい",
    },
    {
      id: 1,
      icon: "🦐",
      displayName: "エビデンス",
      accountName: "evidence",
      content: "かにみそたべたい",
    },
  ]);
  // addTweet関数はuseCallbackで作成する
  // これも毎回作成していると重くなるので
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
