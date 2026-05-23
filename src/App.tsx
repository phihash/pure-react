import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import RespondingToEvents from "./components/RespondingToEvents";
import Throttle from "./components/Throttle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <h2>進捗</h2>
        <p>内容的に、コンポーネント→インポート→JSX→JSXにJSを含める話</p>
        <p>
          Reactは、アプリのUIを再利用しやすいようにコンポーネントを作成できる。
          Reactコンポーネントとは、マークアップ(のようなもの)を添えられるJavaScript関数である。
          <br />
          では、コンポーネント内のマークアップは、 JSX
          と呼ばれる拡張構文を使用する。 <br />
          JSX は HTML のように見えますが、裏ではプレーンな
          JavaScriptオブジェクトに変換されます。 このため、Reactでは多くの HTML
          および SVG の属性はキャメルケースで書かれます。 例えば stroke-width
          の代わりに strokeWidth を使います。class は予約語なので、React では
          className を使います 歴史的理由により、aria-* と data-* 属性は HTML
          属性と同じようにハイフン付きで書くことになっています。
          <br />
          関数から 2
          つのオブジェクトを返したい場合、配列でラップしないといけないように、2
          つの JSX
          タグを返したい場合に別のタグかフラグメントでラップしないといけないです。
          フラグメントを使えば、ブラウザの HTML
          ツリーに痕跡を残すことなく、複数の要素をまとめることができます。
          <br />
          JSX 内部で波括弧を使う方法は 2 つだけです。 テキストとして、JSX
          タグの中で直接使う 属性として、=記号の直後に使う
          <br />
          props を宣言する際は ( と ) の中に、波括弧のペアを書きこの構文は
          “分割代入 (destructuring)” と呼ばれる props
          に、値が渡されなかった場合にフォールバックとして使うデフォルト値を指定したい場合、分割代入の中でパラメータ名の直後に
          = とデフォルト値を書くことができます。 デフォルト値は size
          がない場合や size={undefined} を渡した場合にのみ使用
          <br />
          転送する時にスプレッド構文を使うと良い時がある
          スプレッド構文は慎重に使ってください。この構文をあらゆるコンポーネントで使っているなら、何かが間違っています。
          JSX スプレッド構文ですべての props を転送できるが、多用は禁物！
          多くの場合は、コンポーネントを分割して JSX として children
          を渡すべきというサイン
          <br />
          JSX
          タグ内でコンテンツをネストした場合、親側のコンポーネントはその中身を
          children という props として受け取ります。
          <br />
          コンポーネントは時間経過とともに別の props
          を受け取る可能性があるということを示しています。props
          は常に固定だとは限らないのです！ ここでは time
          プロパティは毎秒変化していますし、color
          プロパティもあなたが別の色を選択するたびに変化します。props
          とはコンポーネントの最初の時点ではなく、任意の時点でのコンポーネントのデータを反映するものなのです。
          しかし、props はイミュータブル (immutable)
          です。これは「不変な」という意味のコンピュータサイエンス用語です。コンポーネントの
          props
          が（例えばユーザ操作や新しいデータの到着に反応して）変わらないといけない場合、親のコンポーネントに別の
          props、つまり新しいオブジェクトを渡してもらう必要があります！ 古い
          props は忘れられ、使われていたメモリは JavaScript
          エンジンがそのうち回収します 「props
          の書き換え」をしようとしてはいけません。（上記のカラー選択のように）ユーザの入力に反応する必要がある場合は、「state
          のセット」が必要です。 props
          とはある時点での読み取り専用のスナップショットである。レンダー毎に新しいバージョンの
          props を受け取る。 props
          を書き換えることはできない。インタラクティブ性が必要な場合は state
          を設定する必要がある。
        </p>
        <ul>
          初めてのコンポーネント✅ コンポーネントのインポートとエクスポート✅
          JSX でマークアップを記述する✅JSX に波括弧で JavaScript を含める✅
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
