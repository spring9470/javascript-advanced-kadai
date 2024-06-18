// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;
// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');

// console.log(untypedfield);
// console.log(typedfield);

// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

//ランダムなテキストを表示 
// const createText = () => {};
const createText = () =>{
  // 正タイプした文字列をクリア
  typed = '';
  typedfield.textContent = typed;
  // コンソールでランダムを確認
  // console.log(Math.random());
  // console.log(Math.random() *  textLists.length);
  // console.log(Math.floor(Math.random() * textLists.length));
  // 配列のインデックス数からランダムな数値を生成する
  // let random = (Math.random());
  // let random = (Math.random() * textLists.length);
  let random = Math.floor(Math.random() * textLists.length);
  // untyped = textLists[0];
  // untypedfield.textContent = untyped;
  // untypedfield.textContent = textLists[0];
  // 配列からランダムにテキストを取得し画面に表示する
  untyped = textLists[random];
  untypedfield.textContent = untyped;
  // untypedfield.textContent = textLists[random];
};
// createText();

// キー入力の判定(アロー関数)
// const keyPress = e => {};
const keyPress = e => {
  // console.log(e.key);

  // 誤タイプの場合
  if(e.key !== untyped.substring(0,1)){
    // <div id="wrap" class="wrap mistyped">
    // class属性に追加される
    wrap.classList.add('mistyped');
    // console.log(wrap);
    // 100ms後に背景色を元に戻す
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    },100);
    // returnが実行されるとそれ以降の処理は実行されずに中断する
    return;
  }

  // 正タイプの場合
    // <div id="wrap" class="wrap">
    // class属性を削除
  score++;
  // wrap.classList.remove('mistyped');
  typed += untyped.substring(0,1);
  untyped = untyped.substring(1);
  // console.log(typed);
  // console.log(untyped);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;
  // テキストがなくなったら新しいテキストを表示
  if (untyped === ''){
    createText();
  }
};

// タイピングスキルのランクを判定
// const rankCheck = score => {};
const rankCheck = score => {
  // スコアの値を返す
  // return `${score}文字打てました！`

// テキストを格納する変数を作る
let text = '';
// スコアに応じて異なるメッセージを変数textに格納する
if(score < 100 ){
  text = `あなたのランクはＣです。\n Bランクまであと${100 - score} 文字です。`;
}else if(score < 200){
  text = `あなたのランクはBです。\n Aランクまであと${200 - score} 文字です。`;
}else if(score < 300){
  text = `あなたのランクはAです。\n Sランクまであと${300 - score} 文字です。`;
}else if(score >= 300){
  text = `あなたのランクはSです。\n おめでとうございます!`;
}
// 生成したメッセージと一緒に文字列を返す
return `${score}文字打てました! \n ${text} \n 【OK】リトライ / 【キャンセル】修了`;
};

// ゲームを終了
// const gameOver = id = {};
const gameOver = id => {
  clearInterval(id);

  // console.log('ゲーム終了!');
  // スコアの値を返す
  const result = confirm(rankCheck(score));
  // const result = confirm(`${score}文字打てました!`);

  // OKボタンをクリックされたらリロードする
  if(result === true){
    window.location.reload();
  }
};

// カウンタダウンタイマー
// const timer = () => {};
const timer = () => {
  // タイマー部分のHTML要素（P要素）を取得する
  let time = count.textContent;
  // console.log(time);
  
  const id = setInterval(() => {
    // カウントダウンする
    time--;
    count.textContent = time;

    // カウンターが0になったらタイマーを停止する
    if( time <= 0){
      // タイマー停止
      // clearInterval(id);
      // ゲームオーバー表示
      gameOver(id);
      // console.log('ゲーム終了!');
    }
  },1000);
};
  // キーボードのイベント処理
  // document.addEventListener('keypress',keyPress);

// ゲームスタート時の処理
start.addEventListener('click',() => {

  // カウントダウンタイマーを開始する
  timer( );

  // ランダムのテキストを表示する
  createText();

  // 「スタート」ボタンを非表示にする
  start.style.display = 'none';

 // キーボードのイベント処理
  document.addEventListener('keypress',keyPress);
})
untypedfield.textContent = 'スタートボタンで開始';










