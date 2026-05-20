import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import RespondingToEvents from "./components/RespondingToEvents";
import Throttle from "./components/Throttle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <h2>進捗</h2>

        <ul>
          <li>
            <details>
              <summary>初めてのコンポーネント✅</summary>
              <p>
                Reactコンポーネントとは、簡単にいうと、マークアップを添えられるJavaScript関数である
              </p>
            </details>
          </li>
          <li>コンポーネントのインポートとエクスポート</li>
          <li>JSX でマークアップを記述する</li>
          <li>JSX に波括弧で JavaScript を含める</li>
          <li>コンポーネントに props を渡す</li>
          <li>条件付きレンダー</li>
          <li>リストのレンダー</li>
          <li>コンポーネントを純粋に保つ</li>
          <li>UI をツリーとして理解する</li>
        </ul>

        <h3>インタラクティビティの追加</h3>
        <ul>
          <li>イベントへの応答</li>
          <li>state：コンポーネントのメモリ</li>

          <li>レンダーとコミット</li>
          <li>state はスナップショットである</li>
          <li>一連の state の更新をキューに入れる</li>
          <li>state 内のオブジェクトの更新</li>
          <li>state 内の配列の更新</li>
        </ul>

        <h3>state の管理</h3>
        <ul>
          <li>state を使って入力に反応する</li>
          <li>state 構造の選択</li>
          <li>コンポーネント間で state を共有する</li>
          <li>state の保持とリセット</li>
          <li>state ロジックをリデューサに抽出する</li>
          <li>コンテクストで深くデータを受け渡す</li>
          <li>リデューサとコンテクストでスケールアップ</li>
        </ul>

        <h3>避難ハッチ</h3>
        <ul>
          <li>ref で値を参照する</li>
          <li>ref で DOM を操作する</li>
          <li>エフェクトを使って同期を行う</li>
          <li>そのエフェクトは不要かも</li>
          <li>リアクティブなエフェクトのライフサイクル</li>
          <li>エフェクトからイベントを分離する</li>
          <li>エフェクトから依存値を取り除く</li>
          <li>カスタムフックでロジックを再利用する</li>
        </ul>
        <h6>スロットル例</h6>
        <Throttle />
        <RespondingToEvents />

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
