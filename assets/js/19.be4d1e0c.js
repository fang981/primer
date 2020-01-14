(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{221:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"лайкнуть-пост"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#лайкнуть-пост"}},[s._v("#")]),s._v(" Лайкнуть пост")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("примечание")]),s._v(" "),a("p",[s._v("Это задание позволит вам получить "),a("strong",[s._v("10 токенов Desmos")]),s._v(" после завершения.")]),s._v(" "),a("p",[s._v("Обратите внимание, что для предотвращения спама вы получите вознаграждение только за "),a("strong",[s._v("первое сообщение")]),s._v(", которое вам нравится. Токены не будут присуждаться за последующие сообщения.")])]),s._v(" "),a("p",[s._v("Лайки в Desmos это способ пользователей выразить свою признательность посту, созданному автором поста или другим пользователем.")]),s._v(" "),a("p",[s._v("В отличие от постов, лайки можно удалить с помощью транзакции "),a("em",[s._v("unlike")]),s._v(". Однако, если вам нравится пост, след останется навсегда, и клиенты могут решить игнорировать анлайки и показывать только оригинальные лайки. Поэтому убедитесь, что вам действительно понравился пост, прежде чем он понравится в Desmos, так как лайки будут навсегда.")]),s._v(" "),a("h2",{attrs:{id:"лайкните-пост"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#лайкните-пост"}},[s._v("#")]),s._v(" Лайкните пост")]),s._v(" "),a("h3",{attrs:{id:"поnучите-id-поста"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#поnучите-id-поста"}},[s._v("#")]),s._v(" Получите id поста")]),s._v(" "),a("p",[s._v("Чтобы лайкнуть пост, вым нужно будет знать id этого поста. Id постов можно получить отправив транзакцию.")]),s._v(" "),a("p",[s._v("Как пример, давайте возьмем транзакцию которая была создана в результате поста и имеет следующий хеш:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Чтобы получить id поста вы можете получить JSON представление этой транзакции выполнив")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("И, используя инструмент форматирования JSON, прочтите "),a("code",[s._v("post_id")]),s._v(" ассоциированное значение внтри "),a("code",[s._v("events")]),s._v(" массива. В нашем случае, id созданного поста равняется значению "),a("code",[s._v("12")]),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"отправьте-nайк-транзакцию"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#отправьте-nайк-транзакцию"}},[s._v("#")]),s._v(" Отправьте лайк транзакцию")]),s._v(" "),a("p",[s._v("После того, как вы получили id поста, на которое вы хотели бы поставить лайк, вам просто нужно выполнить следующую команду:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli tx posts like "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("id-поста"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("имя-вашего-ключа"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Пример ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli tx posts like 12 --from jack --yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Вывод должен выглядить примерно так:")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"like_post"}]}]}]\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msgindex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" message\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("attributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" action\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" like_post\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("Теперь вы можете запросить результат транзакции, чтобы убедиться, что все было успешно обработано:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli query tx 1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9 --output json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"поnучите-вознагдаждение"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#поnучите-вознагдаждение"}},[s._v("#")]),s._v(" Получите вознагдаждение")]),s._v(" "),a("p",[s._v("После того, как вы создали сообщение, пожалуйста, следуйте этой процедуре, чтобы получить свои награды:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Создайте fork этого репозитория в ваш Github профиль.\nЕсли вы не знаете как это сделать, то следуйте "),a("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub форк инструкции"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("li",[a("p",[s._v("Сделайте pull этого форка на ваш компьютер:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/primer.git ~/desmos-primer\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/desmos-primer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Создайте файл с именем вашего GitHub имени содержащий хеш транзации вашего лайка:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phases/phase-1/challenges/likes/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ваше-github-имя"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Пример")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9" >> ./phases/phase-1/challenges/likes/RiccardoM')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Сделайте commit ваших изменений, сделайте push этих изменений в ваш форкнутый репозиторий и затем создайте pull request в репозитории Desmos Primer. Если вы не знаете как это сделать, то обратитесь в "),a("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests инструкцию"),a("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);