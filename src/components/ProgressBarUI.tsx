const MAX = 100;
const MIN = 0;

export function ProgressBar({ value }) {
  const clampValue = Math.min(Math.max(value, MIN), MAX);
  return (
    <>
      <div className="progress">
        <div>{clampValue}%</div>
      </div>
    </>
  );
}

export default function ProgressBarUI() {
  return (
    <>
      <ProgressBar value={-10} />
      <ProgressBar value={0} />
      <ProgressBar value={30} />
      <ProgressBar value={60} />
      <ProgressBar value={80} />
      <ProgressBar value={110} />
    </>
  );
}

// ⏺ 「Add」ボタンをクリックするとページに
// プログレスバーが追加されるアプリを作成してください。
// プログレスバーは表示されると同時に徐々に埋まっていきます。

//

// 状態管理

// プログレスバーは互いに影響し合わず、アニメーションは「撃ちっぱなし」モデルを使用するため、必要な状態は画面上のバーの数を表す単一の数値のみです。「Add」ボタン
// を押すと、レンダリングされるバーの数が増えます。

// スタイリング

// 100段階の値を元にプログレスバーをスタイリングする方法については、Progress Barの問題を参照してください。ただし、幅を変更する代わりにCSSトランスフォームを使用
// します。CSSトランスフォームはGPUで実行されるため、アニメーションのパフォーマンスが向上します。

// アニメーション

// 前述の通り、各プログレスバーのアニメーションは「撃ちっぱなし」モデルを採用しています。つまり、中断できず、他のバーとも互いに影響しません。CSSトランジションは
// バーを0から100にアニメーションするのに非常に適しており、JavaScriptに頼る必要はありません。なお、transform-origin: left を設定することで、塗りつぶされたバーが
// 左側に「固定」され、右方向に広がるようになります。これがないと、トランジションは中央から外側に広がるように見えてしまいます。
