export default function RespondingToEvents() {
  return (
    <>
      <button
        onClick={() => {
          alert('イベント');
        }}
      >
        イベントハンドラ用のボタン
      </button>
      <details>
        <summary>イベントハンドラ</summary>
        <p>
          イベントハンドラとはhandleClickといった具合で、自分で作成した関数のことで
          ボタンクリック、ホバーといったインタラクションをトリガーとさせることができる。
          イベントハンドラはコンポーネント内部で定義する。
          イベントハンドラはあくまで関数をわたすだけで呼び出さない。またインラインでイベントハンドラを渡すには無名関数でラップする
        </p>
      </details>
      <details>
        <summary>幻覚モード</summary>
        <p></p>
      </details>
    </>
  );
}
