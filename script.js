// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class=\"experiment-container\"\u003E\r\n  \r\n  \u003Ch2\u003E実験にご参加いただき、ありがとうございます。\u003C\u002Fh2\u003E\r\n\r\n  \u003Cdiv class=\"content-body\"\u003E\r\n    \u003Cp\u003E\r\n      この実験は、\u003Cb\u003E映画予告の視聴に伴う経験\u003C\u002Fb\u003Eを調べるためのものです。\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003E\r\n      この実験では、\u003Cb\u003Eはじめに映画の視聴経験に関する質問に答えていただき、1つの映画の予告編を見ていただいた後、簡単な質問に答えていただきます。\u003C\u002Fb\u003E\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003E\r\n      実験を始める前に、次のページでは、まず、実験参加への同意をいただきます。\r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cp class=\"footer-text\"\u003E\r\n    準備ができましたら「次へ」をクリックしてください。\r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "welcome"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ch2 style=\"text-align: center; margin-bottom: 30px;\"\u003E実験参加への同意確認\u003C\u002Fh2\u003E\r\n\r\n\u003Chr style=\"border: 0; border-top: 1px solid #ccc; margin-bottom: 20px;\"\u003E\r\n\r\n\u003Cul style=\"line-height: 1.8; text-align: left; padding-left: 20px;\"\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【目的】\u003C\u002Fstrong\u003E この実験は、映画予告の視聴に伴う経験を調査するためのものです。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【所要時間】\u003C\u002Fstrong\u003E この実験はおおよそ10分から15分かかります。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【リスク】\u003C\u002Fstrong\u003E 緊張したり、疲労を感じる可能性があります。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【リスクへの対策】\u003C\u002Fstrong\u003E 体調がわるくなった場合には、参加を取りやめてください。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【謝礼】\u003C\u002Fstrong\u003E この実験への参加に対する謝金は100円です。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【個人情報】\u003C\u002Fstrong\u003E この実験では、個人を特定できる情報は一切収集しません。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【データの利用】\u003C\u002Fstrong\u003E この実験で得られたデータは、学術的な目的にのみ利用します。\u003C\u002Fli\u003E\r\n  \u003Cli\u003E\u003Cstrong\u003E【データの廃棄】\u003C\u002Fstrong\u003E この実験で得られたデータは、10年後に廃棄します。\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Chr style=\"border: 0; border-top: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;\"\u003E\r\n\r\n\u003Cdiv style=\"text-align: left; line-height: 1.6;\"\u003E\r\n  \u003Cp\u003E上記のすべてをご了解の上、実験参加にご同意いただけますか。\u003C\u002Fp\u003E\r\n  \u003Cp\u003Eご同意いただけない方は、ブラウザを閉じて終了してください。\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"text-align: left; margin-top: 20px;\"\u003E\r\n  \u003Clabel\u003E\r\n    \u003Cinput type=\"checkbox\" id=\"consent-checkbox1\" name=\"consent1\" value=\"yes\" required\u003E\r\n    はい、同意します。\r\n  \u003C\u002Flabel\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
const id = Number(this.state.participantID); 
this.state.condition = (id % 4) + 1;
}
      },
      "title": "informed-consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男",
              "coding": "male"
            },
            {
              "label": "女",
              "coding": "female"
            },
            {
              "label": "回答しない",
              "coding": "no-answer"
            }
          ],
          "help": "性別を選択してください",
          "name": "sex"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographic"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご参加ありがとうございます。",
          "content": "本研究では、ご自身の映画鑑賞経験に関する質問に回答していただいた後、１本の予告編をご覧いただき、予告編を視聴して感じたことに関する質問に回答していただきます。正解などはありませんので，感じたままにご回答ください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "準備ができた方は「次へ」を押して，開始してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご自身の映画鑑賞経験に関して、以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "１．映画を見る頻度について教えてください（配信・DVD・Blu-ray・映画館などを含む）",
          "options": [
            {
              "coding": "1",
              "label": "まったく見ない（見たことがない）"
            },
            {
              "label": "年に１本未満（数年に１本）",
              "coding": "2"
            },
            {
              "coding": "3",
              "label": "年に１～２回程度"
            },
            {
              "coding": "4",
              "label": "数か月に１回程度"
            },
            {
              "coding": "5",
              "label": "１か月に１～３回程度"
            },
            {
              "coding": "6",
              "label": "１週間に１本以上"
            }
          ],
          "name": "experience1"
        },
        {
          "required": true,
          "type": "radio",
          "label": "２．映画館で映画を見る頻度を教えてください。",
          "options": [
            {
              "label": "まったく行かない（行ったことがない）",
              "coding": "1"
            },
            {
              "label": "年に１回未満（数年に１回）",
              "coding": "2"
            },
            {
              "label": "年に１～２回程度",
              "coding": "3"
            },
            {
              "label": "数か月に１回程度",
              "coding": "4"
            },
            {
              "label": "１か月に１～３回程度",
              "coding": "5"
            },
            {
              "label": "１週間に１回以上",
              "coding": "6"
            }
          ],
          "name": "experience2"
        },
        {
          "required": true,
          "type": "radio",
          "label": "３．直近で映画を見たのはいつですか？（配信・DVD・Blu-ray・映画館などを含む）",
          "options": [
            {
              "label": "見たことがない",
              "coding": "1"
            },
            {
              "label": "１年以上前",
              "coding": "2"
            },
            {
              "label": "１年以内",
              "coding": "3"
            },
            {
              "label": "６か月以内",
              "coding": "4"
            },
            {
              "label": "３か月以内",
              "coding": "5"
            },
            {
              "label": "１か月以内",
              "coding": "6"
            },
            {
              "label": "１週間以内",
              "coding": "7"
            },
            {
              "label": "覚えていない",
              "coding": "8"
            }
          ],
          "name": "experience3"
        },
        {
          "required": true,
          "type": "radio",
          "label": "４．過去１年間で、映画館に何回行きましたか？",
          "options": [
            {
              "label": "０回",
              "coding": "1"
            },
            {
              "label": "１～２回",
              "coding": "2"
            },
            {
              "label": "３～５回",
              "coding": "3"
            },
            {
              "label": "６～１１回",
              "coding": "4"
            },
            {
              "label": "１２～２３回",
              "coding": "5"
            },
            {
              "label": "２４回以上",
              "coding": "6"
            },
            {
              "label": "覚えていない",
              "coding": "7"
            }
          ],
          "name": "experience4"
        },
        {
          "required": true,
          "type": "radio",
          "label": "５．最もよく見る映画のジャンルについて教えてください",
          "options": [
            {
              "coding": "1",
              "label": "アクション"
            },
            {
              "coding": "2",
              "label": "恋愛"
            },
            {
              "coding": "3",
              "label": "ホラー"
            },
            {
              "coding": "4",
              "label": "サスペンス"
            },
            {
              "coding": "5",
              "label": "SF"
            },
            {
              "label": "ミステリー",
              "coding": "6"
            }
          ],
          "name": "experience5"
        },
        {
          "required": true,
          "type": "radio",
          "label": "６．映画を見る前にその映画の予告編を視聴しますか？",
          "options": [
            {
              "coding": "1",
              "label": "まったく見ない"
            },
            {
              "coding": "2",
              "label": "ほとんど見ない"
            },
            {
              "coding": "3",
              "label": "どちらともいえない"
            },
            {
              "coding": "4",
              "label": "たまに見る"
            },
            {
              "coding": "5",
              "label": "毎回見る"
            }
          ],
          "name": "experience6"
        },
        {
          "required": true,
          "type": "radio",
          "label": "７．普段映画をどのような手段で視聴しますか？最もよく利用するものを選んでください。",
          "options": [
            {
              "label": "映画館",
              "coding": "1"
            },
            {
              "label": "テレビ番組",
              "coding": "2"
            },
            {
              "label": "配信サービス",
              "coding": "3"
            },
            {
              "label": "DVD\u002FBlu-ray",
              "coding": "4"
            },
            {
              "coding": "5",
              "label": "その他"
            }
          ],
          "name": "experience7"
        },
        {
          "required": true,
          "type": "radio",
          "label": "８．映画館で本編開始前に流れる予告編をどの程度楽しみにしていますか？",
          "options": [
            {
              "label": "全く楽しみにしていない",
              "coding": "1"
            },
            {
              "label": "それほど楽しみにしていない",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "ある程度楽しみにしている",
              "coding": "4"
            },
            {
              "label": "かなり楽しみにしている",
              "coding": "5"
            }
          ],
          "name": "experience8"
        },
        {
          "required": true,
          "type": "radio",
          "label": "９．映画を見る前にレビュー情報をよく参照しますか？",
          "options": [
            {
              "label": "全く参照しない",
              "coding": "1"
            },
            {
              "label": "あまり参照しない",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "ある程度参照する",
              "coding": "4"
            },
            {
              "label": "毎回参照する",
              "coding": "5"
            }
          ],
          "name": "experience9"
        },
        {
          "required": true,
          "type": "radio",
          "label": "１０．映画を選ぶ時にはどのような要素を重視しますか？",
          "options": [
            {
              "label": "ストーリー",
              "coding": "1"
            },
            {
              "label": "キャスト",
              "coding": "2"
            },
            {
              "label": "監督",
              "coding": "3"
            },
            {
              "label": "制作会社",
              "coding": "4"
            },
            {
              "label": "評判・レビュー",
              "coding": "5"
            },
            {
              "label": "予告・プロモーション",
              "coding": "6"
            }
          ],
          "name": "experience10"
        },
        {
          "required": true,
          "type": "radio",
          "label": "１１．あなたにとって映画鑑賞はどの程度重要な趣味ですか？",
          "options": [
            {
              "label": "全く重要でない",
              "coding": "1"
            },
            {
              "label": "それほど重要でない",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "ある程度重要である",
              "coding": "4"
            },
            {
              "label": "かなり重要である",
              "coding": "5"
            }
          ],
          "name": "experience11"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": "",
        "undefined": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "experience-question"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "回答ありがとうございました。",
          "content": "この後、1本の映画予告編をご覧いただき、その内容についての質問に回答していただきます。\n"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cp class=\"footer-text\"\u003E\r\n    準備ができましたら「次へ」をクリックしてください。\r\n  \u003C\u002Fp\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "thanks1"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 384,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "この後、予告編が流れます",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "screen",
      "timeout": "2000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videofile": "https:\u002F\u002Fkmikan7391x-dev.github.io\u002Fexperiment-video-ver1\u002Fvideo.ver.1.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "video-loop1",
      "skip": "${this.state.condition != 1}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "video-sequence1",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cstyle\u003E\r\n  .video-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: #000000; \u002F* 背景色（不要なら削除するか #ffffff にしてください） *\u002F\r\n  }\r\n  #my-video {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    object-fit: contain;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv\u003E\r\n \u003Cvideo id=\"video-player\" autoplay playsinline style=\"display: block; margin: 0 auto; width: 120%; max-width: 1000px; height: auto;\"\u003E\r\n   \u003Csource src=\"${parameters.videofile}\" type=\"video\u002Fmp4\"\u003E\r\n   お使いのブラウザはビデオタグをサポートしていません。\r\n \u003C\u002Fvideo\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": "",
              "undefined": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// 1. 今の画面（this）を、JavaScript全体から触れる変数に避難させる
window.currentScreen = this;

// 2. ビデオプレイヤーをIDで取得
const video = document.getElementById("video-player");

if (video) {
    // 3. 動画の再生が「終了（ended）」した瞬間を監視
    video.addEventListener("ended", () => {
        console.log("動画終了：次の画面へ安全に遷移します。");
        
        // 4. 避難させておいた画面の情報を使って、次の画面へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}

}
            },
            "title": "video1"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videofile": "https:\u002F\u002Fkmikan7391x-dev.github.io\u002Fexperiment-video-ver1\u002Fvideo.ver.2.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "video-loop2",
      "skip": "${this.state.condition != 2}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "video-sequence2",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv\u003E\r\n \u003Cvideo id=\"video-player\" autoplay playsinline style=\"display: block; margin: 0 auto; width: 120%; max-width: 1000px; height: auto;\"\u003E\r\n   \u003Csource src=\"${parameters.videofile}\" type=\"video\u002Fmp4\"\u003E\r\n   お使いのブラウザはビデオタグをサポートしていません。\r\n \u003C\u002Fvideo\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": "",
              "undefined": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// 1. 今の画面（this）を、JavaScript全体から触れる変数に避難させる
window.currentScreen = this;

// 2. ビデオプレイヤーをIDで取得
const video = document.getElementById("video-player");

if (video) {
    // 3. 動画の再生が「終了（ended）」した瞬間を監視
    video.addEventListener("ended", () => {
        console.log("動画終了：次の画面へ安全に遷移します。");
        
        // 4. 避難させておいた画面の情報を使って、次の画面へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}

}
            },
            "title": "video2"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videofile": "https:\u002F\u002Fkmikan7391x-dev.github.io\u002Fexperiment-video-ver1\u002Fvideo.ver.3.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "video-loop3",
      "skip": "${this.state.condition != 3}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "video-sequence3",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv\u003E\r\n \u003Cvideo id=\"video-player\" autoplay playsinline style=\"display: block; margin: 0 auto; width: 120%; max-width: 1000px; height: auto;\"\u003E\r\n   \u003Csource src=\"${parameters.videofile}\" type=\"video\u002Fmp4\"\u003E\r\n   お使いのブラウザはビデオタグをサポートしていません。\r\n \u003C\u002Fvideo\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": "",
              "undefined": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// 1. 今の画面（this）を、JavaScript全体から触れる変数に避難させる
window.currentScreen = this;

// 2. ビデオプレイヤーをIDで取得
const video = document.getElementById("video-player");

if (video) {
    // 3. 動画の再生が「終了（ended）」した瞬間を監視
    video.addEventListener("ended", () => {
        console.log("動画終了：次の画面へ安全に遷移します。");
        
        // 4. 避難させておいた画面の情報を使って、次の画面へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}

}
            },
            "title": "video3"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videofile": "https:\u002F\u002Fkmikan7391x-dev.github.io\u002Fexperiment-video-ver1\u002Fvideo.ver.4.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "video-loop4",
      "skip": "${this.state.condition != 4}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "video-sequence4",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv\u003E\r\n \u003Cvideo id=\"video-player\" autoplay playsinline style=\"display: block; margin: 0 auto; width: 120%; max-width: 1000px; height: auto;\"\u003E\r\n   \u003Csource src=\"${parameters.videofile}\" type=\"video\u002Fmp4\"\u003E\r\n   お使いのブラウザはビデオタグをサポートしていません。\r\n \u003C\u002Fvideo\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": "",
              "undefined": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// 1. 今の画面（this）を、JavaScript全体から触れる変数に避難させる
window.currentScreen = this;

// 2. ビデオプレイヤーをIDで取得
const video = document.getElementById("video-player");

if (video) {
    // 3. 動画の再生が「終了（ended）」した瞬間を監視
    video.addEventListener("ended", () => {
        console.log("動画終了：次の画面へ安全に遷移します。");
        
        // 4. 避難させておいた画面の情報を使って、次の画面へ進む
        if (window.currentScreen && typeof window.currentScreen.end === "function") {
            window.currentScreen.end();
        }
    });
}

}
            },
            "title": "video4"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご視聴ありがとうございました。予告編を見て感じたことに関して、以下の質問文を読んでいただき、あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く見たくならなかった",
            null,
            null,
            null,
            "非常に見たくなった"
          ],
          "label": "１．この映画の本編を見たくなりましたか？",
          "name": "question1-2-1"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く見たいと感じなかった",
            null,
            null,
            null,
            "非常に見たいと感じた"
          ],
          "label": "２．この映画を映画館で見たいと感じましたか？",
          "name": "question1-2-2"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "非常に短いと感じた",
            null,
            null,
            null,
            "非常に長いと感じた"
          ],
          "label": "３．予告編の長さについてどう感じましたか？",
          "name": "question1-2-3"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く把握できなかった",
            null,
            null,
            null,
            "完全に把握できた"
          ],
          "label": "４．映画の内容をどのくらい把握できたと感じましたか？",
          "name": "question1-2-4"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "非常に少なかった",
            null,
            null,
            null,
            "非常に多かった"
          ],
          "label": "５．予告編において映画のネタバレが多かったと感じましたか？",
          "name": "question1-2-5"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く魅力的ではなかった",
            null,
            null,
            null,
            "非常に魅力的だった"
          ],
          "label": "６．予告編に登場したキャラクターを魅力的に感じましたか？",
          "name": "question1-2-6"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く魅力的ではなかった",
            null,
            null,
            null,
            "非常に魅力的だった"
          ],
          "label": "７．予告編で流れていたBGMは魅力的でしたか？",
          "name": "question1-2-7"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く好ましく感じなかった",
            null,
            null,
            null,
            "非常に好ましく感じた"
          ],
          "label": "８．予告編自体をどのくらい好ましく感じましたか？",
          "name": "question1-2-8"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "multipleChoice1-2",
      "skip": "${ ![1, 2].includes(this.state.condition)}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご視聴ありがとうございました。予告編を見て感じたことに関して、以下の質問文を読んでいただき、あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く見たくならなかった",
            null,
            null,
            null,
            "非常に見たくなった"
          ],
          "label": "１．この映画の本編を見たくなりましたか？",
          "name": "questtion3-4-1"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く見たいと感じなかった",
            null,
            null,
            null,
            "非常に見たいと感じた"
          ],
          "label": "２．この映画を映画館で見たいと感じましたか？",
          "name": "questtion3-4-2"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "非常に短いと感じた",
            null,
            null,
            null,
            "非常に長いと感じた"
          ],
          "label": "３．予告編の長さについてどう感じましたか？",
          "name": "questtion3-4-3"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く把握できなかった",
            null,
            null,
            null,
            "完全に把握できた"
          ],
          "label": "４．映画の内容をどのくらい把握できたと感じましたか？",
          "name": "questtion3-4-4"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "非常に少なかった",
            null,
            null,
            null,
            "非常に多かった"
          ],
          "label": "５．予告編において映画のネタバレが多かったと感じましたか？",
          "name": "questtion3-4-5"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く魅力的ではなかった",
            null,
            null,
            null,
            "非常に魅力的だった"
          ],
          "label": "６．予告編に登場したキャラクターを魅力的に感じましたか？",
          "name": "questtion3-4-6"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く魅力的ではなかった",
            null,
            null,
            null,
            "非常に魅力的だった"
          ],
          "label": "７．予告編で流れていたBGMは魅力的でしたか？",
          "name": "questtion3-4-7"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く魅力的ではなかった",
            null,
            null,
            null,
            "非常に魅力的だった"
          ],
          "label": "８．予告編に登場した監督名や受賞歴などは魅力的に感じましたか？",
          "name": "questtion3-4-8"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "回答",
              "coding": "1"
            }
          ],
          "width": "5",
          "anchors": [
            "全く好ましく感じなかった",
            null,
            null,
            null,
            "非常に好ましく感じた"
          ],
          "label": "９．予告編自体をどのくらい好ましく感じましたか？",
          "name": "questtion3-4-9"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "multipleChoice3-4",
      "skip": "${ ![3, 4].includes(this.state.condition)}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "textarea",
          "help": "選択肢の内容以外で、もしくは選択肢の内容についてより詳しく、予告編のどういった部分が映画を見たいと思う理由になりましたか？あなたの考えを自由に書いてください。 ない場合は「特になし」と記入してください。",
          "label": "予告編の魅力についての質問",
          "name": "free-description"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "free-description"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": false,
          "type": "textarea",
          "label": "調査・実験時の問題",
          "help": "調査・実験の際に問題があった方は内容をご入力ください。問題がなかった方は空欄のままでけっこうです。",
          "name": "error-report"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "error-report"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv\u003E\r\n  \u003Ch2 style=\"text-align: center;\"\u003E実験に関するご説明（デブリーフィング）\u003C\u002Fh2\u003E\r\n  \r\n  \u003Cp\u003E実験にご参加いただき、誠にありがとうございました。\u003C\u002Fp\u003E\r\n\u003Ch3\u003E１．実験刺激について\u003C\u002Fh3\u003E\r\n\u003Cp\u003E本実験における実験刺激となる予告編の映像は、架空の映画のものを生成AIを用いて作成し、\u003Cstrong\u003E①ストーリーの情報量が少なく、監督名などの情報が無いもの、②ストーリーの情報量が多く、監督名などの情報が無いもの、③ストーリーの情報量が少なく、監督名などの情報が含まれているもの、④ストーリーの情報量が多く、監督名などの情報が含まれているもの\u003C\u002Fstrong\u003E、の合計4つの映像の中から一つをランダムに視聴していただきました。\u003C\u002Fp\u003E\r\n \r\n  \u003Ch3\u003E２．実験の本当の目的について\u003C\u002Fh3\u003E\r\n  \u003Cp\u003E実験の開始前には、映画予告の視聴に伴う経験の調査と説明しておりましたが、\u003Cstrong\u003E本実験の本当の目的は①「映画の予告編の中で、ストーリーの情報量が映画本編の視聴意欲にどの程度影響するかを調べること」、②「映画の予告編の中で、監督名や受賞歴などが映画本編の視聴意欲にどの程度影響するのかを調べること」\u003C\u002Fstrong\u003Eでした。\u003C\u002Fp\u003E\r\n  \r\n  \u003Cp\u003E事前に本当の目的をお伝えしてしまうと、予告編を見る際の見方や評価に無意識の偏り（バイアス）が生じてしまう可能性があったため、事前の説明を控えさせていただきました。これは研究の科学的な正確性を保つための手続きであり、何卒ご理解いただけますと幸いです。\u003C\u002Fp\u003E\r\n  \r\n\u003C\u002Fdiv\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "１つ目の目的",
              "coding": "1"
            },
            {
              "label": "２つ目の目的",
              "coding": "2"
            }
          ],
          "width": "5",
          "anchors": [
            "全く気づかなかった",
            null,
            null,
            null,
            "完全に気づいていた"
          ],
          "label": "あなたはこの実験の本当の目的に気付いていましたか？",
          "name": "debriefing"
        },
        {
          "required": true,
          "type": "html",
          "content": " \u003Cdiv\u003E\r\n \u003Chr style=\"margin: 20px 0; border: 0; border-top: 1px solid #ccc;\"\u003E\r\n\r\n  \u003Ch3\u003Eデータの取り扱いと同意の撤回についてのご説明\u003C\u002Fh3\u003E\r\n  \u003Cp\u003Eこの説明をお読みになり、ご自身のデータを提供したくないと判断された場合は、同意を撤回することができます。その場合でも、参加に対する不利益が生じることは一切ありません。同意を撤回する場合は、このままウィンドウを閉じてください。\u003C\u002Fp\u003E\r\n\r\n  \u003Cform id=\"debrief-form\" style=\"margin-top: 30px; text-align: center;\"\u003E\r\n    \u003Cdiv style=\"margin-bottom: 20px;\"\u003E\r\n      \u003Clabel\u003E\r\n        \u003Cinput type=\"checkbox\" id=\"consent-checkbox2\" name=\"consent2\" required\u003E \r\n        上記の説明を理解し、研究のために自分のデータを使用することに同意します。\r\n      \u003C\u002Flabel\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fform\u003E\r\n\u003Ch3\u003E謝金受け取りのためのメールアドレスの記入\u003C\u002Fh3\u003E\r\n  \u003Cp\u003E本実験の謝金はAmazon e-Giftにてお送りします。以下の欄に謝金受け取り用のメールアドレスの記入をお願いいたします。\u003C\u002Fp\u003E\r\n  \u003Ctextarea id=\"feedback\" name=\"emailaddress\" rows=\"2\" required style=\"width: 100%; max-width: 500px; resize: none;\"\u003E\u003C\u002Ftextarea\u003E\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "debriefing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cspan style = \"color:tomato\"\u003Eこれで本実験・調査は終了です！\u003C\u002Fspan\u003E",
          "content": "\u003Cspan style = \"color:tomato\"\u003Eご協力くださり，誠にありがとうございました。ウィンドウを閉じて実験を終了してください。\u003C\u002Fspan\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "iMLK6smYfscY",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "final-thanks",
      "timeout": "1000",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()