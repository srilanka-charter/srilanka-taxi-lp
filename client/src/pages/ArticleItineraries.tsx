/**
 * Design system: dark editorial travel journal with warm orange route markers.
 * These pages use the user's documentary travel photos as visual waypoints, combining a clear timeline with practical private-car planning guidance.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPinned, Route, ShieldCheck } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

type Day = { label: string; stay: string; title: string; body: string; detail: string[]; note: string; image?: GalleryImage };
type GalleryImage = { src: string; alt: string; caption: string };
type RelatedLink = { before: string; text: string; href: string; after: string };
type Itinerary = {
  number: string;
  slug: string;
  title: string;
  description: string;
  keywords: string;
  hero: GalleryImage;
  intro: string[];
  route: string[];
  days: Day[];
  routeAdvice: string;
  goodFor: string[];
  related: RelatedLink[];
  faqs: { question: string; answer: string }[];
  references?: { label: string; href: string }[];
};

const trainImage = "/manus-storage/train-1_47ef775a.jpg";

const itineraries: Record<"five" | "seven" | "four", Itinerary> = {
  five: {
    number: "11",
    slug: "sri-lanka-5-day-itinerary",
    title: "スリランカ旅行5日間モデルコース｜初めてでも世界遺産を満喫する王道ルート",
    description: "スリランカ旅行5日間の王道モデルコースを解説。シーギリヤ、ダンブッラ、ポロンナルワ、アヌラーダプラを無理なくめぐる日程、ホテルの置き方、専用車の使い方を紹介します。",
    keywords: "スリランカ モデルコース 5日,スリランカ旅行 5日間,スリランカ 世界遺産,シーギリヤ ダンブッラ ポロンナルワ,スリランカ タクシーチャーター",
    hero: { src: "/manus-storage/sigiriya-1_60f050bc.jpg", alt: "スリランカの世界遺産シーギリヤロック", caption: "5日間なら、文化三角地帯に滞在拠点を置いて世界遺産をつなぐのが王道です。" },
    intro: [
      "初めてのスリランカ旅行で5日間しか取れないなら、行き先を広げすぎず、文化三角地帯を中心に組み立てるのが現実的です。シーギリヤ、ダンブッラ、ポロンナルワ、アヌラーダプラは一つずつに見応えがあるため、移動を最短化するだけでなく、暑さや休憩も含めた余白を残すことが大切です。",
      "このモデルコースでは、空港到着後にシーギリヤ周辺を拠点にして世界遺産を巡り、最後にコロンボまたは空港へ戻ります。長い移動日を専用車でつなげば、遺跡・食事・ホテル移動を一日の流れに入れやすく、限られた日数でも旅の密度を保てます。",
      "5日間の旅程で大切なのは、「すべてを見る」よりも「各地で何を感じたいか」を決めることです。石窟寺院の壁画をじっくり見たいのか、シーギリヤロックに朝から登りたいのか、アヌラーダプラで静かな参拝の時間を取りたいのか。優先順位が決まれば、滞在地、出発時間、移動手段も自然に整います。",
    ],
    route: ["空港", "ダンブッラ", "シーギリヤ", "ポロンナルワ", "アヌラーダプラ", "空港・コロンボ"],
    days: [
      { label: "DAY 1", stay: "シーギリヤ周辺泊", title: "空港から文化三角地帯へ。到着日は移動を一本化する", body: "到着便の時間に合わせて空港からダンブッラ・シーギリヤ方面へ移動します。深夜便や長時間フライトの後は、観光を詰め込むよりホテルへ確実に着くことを優先。時間と体力に余裕があれば、ダンブッラの景色を眺める程度にとどめ、翌日の世界遺産巡りに備えます。", detail: ["空港からシーギリヤ周辺までは、飛行機を降りてすぐに移動を始めるより、両替・SIM・トイレ休憩などに必要な時間も含めて考えるのが安心です。到着ロビーでの合流場所を決め、ホテル名をドライバーと共有しておけば、土地勘のない初日でも移動に迷いません。", "早朝に到着する便なら、ホテルのアーリーチェックイン可否も確認しておきましょう。部屋に入れない時間は、カフェやホテルの共用スペースで休むだけでも、翌日のシーギリヤ観光の満足度が変わります。"], note: "空港から遠方へ進む日は、便名・荷物・休憩の希望を事前に共有するとスムーズです。" },
      { label: "DAY 2", stay: "シーギリヤ周辺泊", title: "朝のシーギリヤロックと、午後のダンブッラ石窟寺院", body: "暑さを避けるため、シーギリヤロックは朝早くに訪れるのがおすすめです。登った後はホテルで休憩し、午後にダンブッラ石窟寺院へ。二つの見どころを一日で組み合わせる場合も、出発時間を固定しすぎず、体調や天候に合わせて調整できる車があると安心です。", detail: ["シーギリヤロックは登ること自体が目的になりやすい場所ですが、朝の光の中で岩山を眺める時間や、麓の庭園を歩く時間も旅の印象をつくります。登頂後に次の観光地へ急がず、ホテルでシャワーや昼食の時間を取ってからダンブッラへ向かうと、午後の観光を落ち着いて楽しめます。", "ダンブッラ石窟寺院では、洞窟の中に入る前から階段・靴・服装の準備が必要です。写真を撮ることだけを目的にせず、仏像と天井画を見上げ、静かな空間を歩く時間を確保しましょう。"], image: { src: "/manus-storage/dambulla-ceiling_da604173.jpg", alt: "ダンブッラ石窟寺院の仏像と天井画", caption: "DAY 2：午後のダンブッラでは、仏像群と鮮やかな天井画をじっくり見上げる時間を取ります。" }, note: "寺院では服装・靴・撮影可否など、その場のルールを確認しましょう。" },
      { label: "DAY 3", stay: "シーギリヤ周辺泊", title: "ポロンナルワで古都の広がりを味わう", body: "ポロンナルワは遺跡が点在するため、歩く範囲と見たい場所を先に決めると一日が整います。午前に主要遺跡を巡り、午後はホテルでゆっくり過ごすか、周辺の景色を楽しむ時間に。日差しが強い時間帯もあるので、飲み物と休憩を旅程に入れておきます。", detail: ["出発前に、寺院跡・石像・水辺など、特に見たい場所を二つか三つに絞っておくと、遺跡を急ぎ足で通り過ぎずに済みます。興味のある場所では少し長く歩き、移動が必要な区間だけ車を使うという配分が、ポロンナルワの広さに合っています。", "カメラ、帽子、飲み物、羽織ものなどを車に置いておけると、遺跡ごとに持ち歩く荷物を少なくできます。午後はホテルで休むほか、プールや周辺散策の時間にあてても、連日の世界遺産観光に疲れを残しにくくなります。"], image: { src: "/manus-storage/polonnaruwa_f2c929a7.jpeg", alt: "ポロンナルワの歴史遺跡", caption: "DAY 3：ポロンナルワは、車での移動と徒歩観光を使い分けながら古都を巡ります。" }, note: "荷物を車に置き、遺跡ごとに必要なものだけ持って歩けるのが専用車移動の利点です。" },
      { label: "DAY 4", stay: "アヌラーダプラまたはシーギリヤ周辺泊", title: "アヌラーダプラの聖地を、時間に追われずに巡る", body: "アヌラーダプラは仏塔や寺院群が広く、場所ごとに空気感が変わります。すべてを急いで回るより、訪れたい遺跡を絞り、参拝者の動きを尊重しながら巡るのがよいでしょう。シーギリヤ周辺から日帰りにするか、アヌラーダプラに一泊するかは、翌日の出発時間で決めます。", detail: ["仏教の聖地として訪れる人がいる場所では、観光のペースを少し落とすことが大切です。参道や仏塔の周囲では、写真を撮る前に周囲の人の動きを見て、落ち着いて行動しましょう。白い服を着た参拝者の姿や旗の色など、遺跡だけではない日常の風景にも目を向けると、旅の印象が深くなります。", "日帰りにする場合は、シーギリヤ周辺のホテルへ戻る時間を考えて観光範囲を決めます。アヌラーダプラに一泊する場合は、翌朝の空気が穏やかな時間にもう一度散策する余裕が生まれます。帰国便・次のホテル・移動時間のどれを優先するかで選びましょう。"], image: { src: "/manus-storage/anuradhapura_02897f3c.jpg", alt: "アヌラーダプラの仏塔と参道", caption: "DAY 4：アヌラーダプラでは、仏塔へ続く参道を歩きながら聖地の時間を感じます。" }, note: "聖地では肌の露出を抑えた服装を用意し、靴を脱ぐ場面にも備えましょう。" },
      { label: "DAY 5", stay: "帰国またはコロンボ泊", title: "空港・コロンボへ戻る。帰国便に合わせて余白をつくる", body: "最終日は、国際線の出発時刻から逆算して空港またはコロンボへ戻ります。途中で休憩や食事を取る時間、道路状況の変動も考え、遺跡観光を詰め込みすぎないのがポイントです。帰国便が遅い場合だけ、コロンボで軽く街歩きを加えます。", detail: ["最終日を慌ただしくしないためには、朝にホテルを出る前にパスポート、荷物、eチケット、現金をまとめて確認しておくことが重要です。観光の追加よりも、途中で休憩できる場所と空港への到着時刻を優先する方が、帰国まで気持ちに余裕を持てます。", "もし帰国便が翌朝であれば、コロンボに一泊して旅をゆるやかに締めくくる選択もあります。5日間の王道ルートでは、最後まで世界遺産を詰め込むより、移動の確実性を取ることが結果的に満足度につながります。"], note: "最終日の車は、送迎だけでなく、荷物を持ったままの休憩・食事も考えて手配します。" },
    ],
    routeAdvice: "5日間では、公共交通だけで全てをつなごうとすると、乗り換え・荷物・遅れの調整に時間が取られがちです。列車やローカル移動は次回の旅に残し、今回は文化三角地帯の世界遺産を主役に。空港送迎と都市間移動を専用車で確保し、観光地では歩く時間をしっかり取る設計が向いています。",
    goodFor: ["初めてのスリランカで、世界遺産を軸に旅をしたい方", "到着日から迷わず文化三角地帯へ進みたい方", "家族旅行や荷物が多い旅で、移動を安定させたい方"],
    related: [
      { before: "到着日の空港からの移動を詳しく知りたい方は、", text: "コロンボ空港送迎の比較記事", href: "/articles/colombo-airport-transfer-guide", after: "を確認してください。" },
      { before: "列車・バス・専用車の役割を全体から比較するなら、", text: "スリランカの移動手段は何が正解？", href: "/articles/sri-lanka-transport-guide", after: "が旅程づくりの出発点になります。" },
    ],
    faqs: [
      { question: "スリランカ旅行5日間でシーギリヤとキャンディは両方行けますか？", answer: "行くことはできますが、文化三角地帯の遺跡を複数入れるなら、5日間では移動が多くなります。本記事では世界遺産を丁寧に楽しむため、シーギリヤ周辺を中心にしています。キャンディも入れたい場合は、7日間モデルコースを参考にしてください。" },
      { question: "5日間のモデルコースでタクシーチャーターは必要ですか？", answer: "必須ではありません。ただし、空港から遠方へ向かう日、遺跡を複数巡る日、帰国便に合わせて戻る日には、移動条件を事前に決められる専用車が旅程を組みやすくします。" },
      { question: "文化三角地帯ではどこに泊まるのが便利ですか？", answer: "初めての5日間なら、シーギリヤまたはダンブッラ周辺を拠点にすると、シーギリヤ・ダンブッラ・ポロンナルワへ動きやすくなります。アヌラーダプラを長く見たい場合は、1泊を加える選択肢もあります。" },
    ],
  },
  seven: {
    number: "12",
    slug: "sri-lanka-7-day-itinerary",
    title: "スリランカ旅行7日間モデルコース｜シーギリヤ・キャンディ・ゴールをめぐる旅",
    description: "スリランカ旅行7日間のモデルコース。シーギリヤ、キャンディ、紅茶列車、ゴールをめぐる王道ルートに、サファリやホートンプレインズを加える際の考え方も解説します。",
    keywords: "スリランカ モデルコース 7日,スリランカ旅行 7日間,シーギリヤ キャンディ ゴール,スリランカ 紅茶列車 モデルコース,スリランカ タクシーチャーター",
    hero: { src: "/manus-storage/galle_46cff405.jpg", alt: "スリランカ南部の世界遺産ゴール旧市街", caption: "7日間あれば、文化三角地帯・高原・南部海岸を一つの旅につなげられます。" },
    intro: [
      "スリランカを7日間で旅するなら、シーギリヤ・キャンディ・紅茶列車・ゴールという異なる魅力を一つの線でつなげられます。古代遺跡だけで終わらず、高原の景色、宗教都市の夜、南部海岸の城塞都市まで楽しめるのが7日間の強みです。",
      "その分、移動日を軽く見ないことが重要になります。各都市に一泊ずつ足すだけでは、荷物を運ぶだけの旅になりがちです。長距離のホテル移動は専用車でつなぎ、紅茶列車は景色を楽しむ区間に絞る。これが、観光と移動を両立させる基本になります。",
      "このルートは、毎日早朝から夜まで動き続けるためのものではありません。世界遺産、高原、サファリ、海岸という旅の場面が切り替わるたびに、ホテルで休む時間、食事を選ぶ時間、次の移動を整える時間を残します。日程表を予定で埋めるより、旅の主役を一日ひとつに置くことを意識してください。",
    ],
    route: ["空港", "シーギリヤ", "キャンディ", "高原・紅茶列車", "南部サファリ", "ゴール", "空港・コロンボ"],
    days: [
      { label: "DAY 1", stay: "シーギリヤ周辺泊", title: "空港から文化三角地帯へ。最初の夜は移動を整える", body: "空港に到着したら、シーギリヤまたはダンブッラ周辺へ向かいます。初日はホテルで休み、翌朝のシーギリヤロックに備えるのが基本です。時間帯によっては空港周辺で一泊して翌朝出発する方が無理のない場合もあります。", detail: ["7日間の周遊では、到着初日に観光を足しすぎないことが後半の余裕につながります。空港での手続きとホテルまでの移動だけで一日が終わることを前提にし、早く着いた場合はホテル周辺で夕食を楽しむ程度にとどめます。", "空港近くに泊まるか、初日からシーギリヤへ進むかは、到着時間と翌日の出発時刻で判断します。初日のホテルを一つ増やすことより、翌朝に無理なく動けることを優先しましょう。"], note: "到着便・人数・荷物に合う車種を先に決めると、旅のスタートが安定します。" },
      { label: "DAY 2", stay: "シーギリヤ周辺泊", title: "シーギリヤロックとダンブッラを、暑さに合わせて巡る", body: "朝はシーギリヤロック、午後はダンブッラ石窟寺院へ。二つの訪問順は天候・混雑・体力で入れ替えて構いません。時間に追われないよう、ホテルで休憩する余白も残しましょう。", detail: ["シーギリヤロックは、登頂までの道のりだけでなく、麓から岩山を見上げる時間にも魅力があります。朝のうちに登るプランなら、ホテルに戻って涼しい時間に休憩を入れ、その後にダンブッラへ向かう流れが快適です。", "寺院の見学では、濡れた路面や裸足で歩く場面もあるため、歩きやすい靴と拭けるタオルを用意しておくと安心です。短い旅でも、この日は観光を増やしすぎず、文化三角地帯の中心をじっくり味わいましょう。"], note: "世界遺産を一日にまとめる日は、車に飲み物や着替えを置けると快適です。" },
      { label: "DAY 3", stay: "キャンディ泊", title: "キャンディへ移動し、仏歯寺の夜に触れる", body: "文化三角地帯からキャンディへ移動します。到着後はホテルで少し休み、夕方から仏歯寺周辺を訪れる流れが組みやすいでしょう。寺院の行事・入場・服装などは、当日の案内に従ってください。", detail: ["移動途中の立ち寄りは、スパイスガーデンや食事など、ひとつか二つに絞るのがポイントです。予定を入れすぎると、キャンディ到着が遅れ、ホテルで休む時間や寺院周辺を歩く時間が削られてしまいます。", "仏歯寺を訪れるなら、夕方以降の混雑や参拝の空気も含めて楽しみます。写真だけを急いで撮るのではなく、服装を整え、入場時の案内を確認しながら、キャンディらしい一夜を過ごしましょう。"], image: { src: "/manus-storage/kandy-1_5ad18432.jpg", alt: "キャンディ仏歯寺", caption: "DAY 3：キャンディでは、仏歯寺を訪れる時間をその日の中心に置きます。" }, note: "都市間移動の途中にスパイスガーデンや食事を入れる場合は、滞在時間を決めておくと安心です。" },
      { label: "DAY 4", stay: "ヌワラエリヤまたはエッラ泊", title: "高原へ向かい、紅茶列車を旅のハイライトにする", body: "キャンディから高原へ進み、旅程に合う区間で紅茶列車を楽しみます。列車の時刻・予約・運行状況は事前に確認し、駅まで・駅からの移動と荷物の扱いまで考えておくことが大切です。", detail: ["紅茶列車は、都市間を最短で移動するための乗り物ではなく、窓の外に広がる高原の景色を味わうための時間として組み込みます。どの区間に乗るか、席をどうするか、荷物をどう運ぶかまで決めておくと、当日は景色に集中しやすくなります。", "列車を降りた後の駅からホテルまでを、事前に手配した車でつなぐと、暗くなる時間や荷物の心配を小さくできます。列車の運行状況は変わり得るため、必ず公式案内と当日の情報を確認してください。"], image: { src: trainImage, alt: "スリランカ高原を走る紅茶列車", caption: "DAY 4：紅茶列車は、移動を急ぐためではなく高原の景色を味わう時間として組み込みます。" }, note: "列車は景色を味わう時間に。ホテル移動と観光を同時に詰め込みすぎないようにします。" },
      { label: "DAY 5", stay: "ティッサマハラーマ周辺泊", title: "高原から南東部へ。サファリ前日は早めに休む", body: "高原からサファリ拠点へ向かう移動日です。距離感だけで予定を決めず、休憩・食事・道路状況を含めて考えましょう。到着後は翌朝のサファリに備え、ホテルでゆっくり過ごします。", detail: ["この日は、旅の前半に見た高原の景色から、南東部の乾いた空気へと環境が変わる日です。出発前にホテルで朝食をしっかり取り、途中で休憩しながら進みます。移動の途中で多くの観光地を追加するより、翌朝早いサファリに備えることが優先です。", "サファリの集合時刻、入園方法、朝の服装、飲み物などは、前日のうちに確認します。眠りが浅くならないよう、夕食後は早めに部屋へ戻り、カメラや双眼鏡なども整えておくとよいでしょう。"], note: "野生動物観察は入園・車両・時間の運用が変わり得るため、事前に確認します。" },
      { label: "DAY 6", stay: "ゴールまたは南部海岸泊", title: "早朝サファリと、南部海岸へのドライブ", body: "早朝にサファリを楽しんだ後、南部海岸へ進みます。午後にゴールへ到着できれば、城塞内を散策し、海に沈む夕日を眺める時間も取れます。無理な詰め込みを避け、サファリとホテル移動の二つを主役にする日です。", detail: ["サファリは、野生動物に出会えるかどうかを急いで判断するより、ジープで自然の中を進む体験そのものを楽しむ時間です。撮影機材や防塵対策を整え、ガイドの案内に従って静かに観察しましょう。", "サファリ後は、南部海岸へ移動します。眠気や疲れが出やすい日なので、ゴール旧市街を十分に歩くのは翌朝に回しても構いません。海沿いのホテルで休み、夕日を眺める程度に予定を軽くしておくと、旅の後半にも余裕が生まれます。"], image: { src: "/manus-storage/safari_ddff1136.png", alt: "スリランカでのジープサファリ", caption: "DAY 6：早朝のサファリを旅の主役にし、午後は南部海岸へゆるやかに移動します。" }, note: "サファリの出発時刻が早いので、移動距離を短くする宿泊地選びが大切です。" },
      { label: "DAY 7", stay: "帰国またはコロンボ泊", title: "ゴール旧市街を味わい、空港へ戻る", body: "午前はゴール旧市街を散策し、帰国便の時刻に合わせて空港またはコロンボへ戻ります。旧市街での滞在時間を確保したい場合は、空港への出発時刻から逆算し、最終日の立ち寄りを絞るのがおすすめです。", detail: ["ゴールでは、城塞の中を目的なく歩くだけでも、古い建物、海風、カフェ、路地の景色に出会えます。チェックアウト後に荷物を車に預け、歩きたい範囲を決めてから散策すると、身軽に過ごせます。", "帰国便が夜なら、昼食を取ってから空港へ向かう流れが組みやすいでしょう。早い時間の便なら、旧市街散策は短くし、空港への移動を最優先にします。最後まで予定を詰め込まず、空港到着に余白を持たせることが旅を気持ちよく終えるコツです。"], note: "南部海岸から空港へ向かう日は、渋滞や休憩を含めた余裕を確保しましょう。" },
    ],
    routeAdvice: "7日間のルートでは、空港から文化三角地帯、キャンディ、高原、サファリ、ゴールと環境が大きく変わります。各地を公共交通でつなぐこともできますが、ホテル移動が連続する日やサファリ前後は、専用車で旅程の軸を整えるのが有効です。ホートンプレインズを加えたい場合は、サファリまたはゴールの滞在を削るのではなく、ヌワラエリヤにもう一泊する8日間以上の旅程に延ばす方が無理がありません。",
    goodFor: ["世界遺産・高原・海岸をバランスよく楽しみたい方", "紅茶列車とサファリを、移動の負担を抑えて組み込みたい方", "複数都市のホテル移動を、専用車でわかりやすく整えたい方"],
    related: [
      { before: "紅茶列車の予約や、ナインアーチブリッジを含むエッラ周辺の回り方は、", text: "紅茶列車・ナインアーチブリッジ完全ガイド", href: "/articles/sri-lanka-tea-train-nine-arch-bridge", after: "を参照してください。" },
      { before: "長距離のホテル移動で使う車種・料金・予約の考え方は、", text: "タクシーチャーターの使い方ガイド", href: "/articles/sri-lanka-taxi-charter-guide", after: "で詳しく説明しています。" },
    ],
    faqs: [
      { question: "スリランカ旅行7日間でサファリとゴールは両方入れられますか？", answer: "入れられます。ただし、サファリ当日とゴールへの移動日を別の観光日と重ねすぎないことが大切です。このモデルコースでは早朝サファリの後に南部海岸へ移動し、ゴールに一泊する流れにしています。" },
      { question: "ホートンプレインズは7日間モデルコースに入れられますか？", answer: "入れることはできますが、約9kmの周回トレッキングを含むため、早朝から時間を確保したい場所です。文化三角地帯・サファリ・ゴールも回る7日間なら、無理に追加せず、8日間以上に延ばすことをおすすめします。" },
      { question: "7日間でタクシーチャーターは何日必要ですか？", answer: "空港からの移動、文化三角地帯からキャンディ、高原からサファリ、南部海岸から空港など、ホテル移動と観光をつなぐ日で使うと効果的です。全日チャーターか必要な日だけかは、列車利用と宿泊地で決めます。" },
    ],
    references: [
      { label: "Sri Lanka Railways：鉄道サービス・運行情報", href: "https://www.railway.gov.lk/web/" },
      { label: "Department of Wildlife Conservation：保護地域・観光サービス", href: "https://www.dwc.gov.lk/" },
      { label: "Sri Lanka Tourism：Horton Plains", href: "https://srilanka.travel/attraction?attraction_id=158" },
    ],
  },
  four: {
    number: "13",
    slug: "sri-lanka-4-day-itinerary",
    title: "スリランカ旅行3泊4日モデルコース｜短期間で見どころを絞る効率的な旅程",
    description: "スリランカ旅行3泊4日の効率的なモデルコース。空港送迎を起点に、シーギリヤ、ダンブッラ、キャンディを無理なくめぐる日程と、短期旅行での移動手段の選び方を解説します。",
    keywords: "スリランカ 3泊4日 モデルコース,スリランカ旅行 4日間,シーギリヤ キャンディ 3泊4日,スリランカ 短期旅行,スリランカ 空港送迎",
    hero: { src: "/manus-storage/sigiriya-2_c47ed17b.jpg", alt: "スリランカの世界遺産シーギリヤロック", caption: "3泊4日では、見どころを絞り、移動の無駄を減らすことが旅を楽しむ鍵です。" },
    intro: [
      "スリランカを3泊4日で旅するなら、島を一周しようとしないことが最初のルールです。限られた時間でも、文化三角地帯のシーギリヤ・ダンブッラとキャンディに焦点を当てれば、世界遺産の景色とスリランカらしい文化の両方に触れられます。",
      "短期旅行では、到着日と最終日の移動をどう設計するかが成否を分けます。空港送迎を事前に確保し、宿泊地を二つ程度に絞る。観光地間の移動は車でつなぎ、現地で歩く時間を残す。この考え方で組めば、忙しさだけが残る旅を避けられます。",
      "このモデルコースは、初めて訪れる人が「スリランカらしい景色と文化」に出会うための最短距離を考えたものです。世界遺産を一日でいくつも消化するのではなく、シーギリヤを登る日、キャンディで寺院を訪れる日、空港へ戻る日と、目的を明確に分けます。",
    ],
    route: ["空港", "ダンブッラ・シーギリヤ", "キャンディ", "空港・コロンボ"],
    days: [
      { label: "DAY 1", stay: "シーギリヤまたはダンブッラ泊", title: "空港から文化三角地帯へ。到着日を迷わない移動日にする", body: "到着後は空港からダンブッラ・シーギリヤへ向かい、ホテルにチェックインします。早朝到着で体力に余裕があれば、ダンブッラを軽く訪れる選択肢もありますが、基本は翌日の観光に備える日です。", detail: ["3泊4日では、空港からの移動が旅程の大きな部分を占めます。現地到着後に配車を探す時間を減らせるよう、合流場所、ホテル名、荷物の数を出発前に整理しておきましょう。到着日は目的地をひとつに絞るだけで、気持ちに余裕が生まれます。", "ホテルに着いたら、翌朝の出発時間、朝食の開始時刻、必要な服装を確認します。外出を急がず、移動の疲れを取る時間を持つことが、短期旅行を最後まで楽しむための準備になります。"], note: "短期旅行ほど、空港での当日配車に頼らず、ホテルまでの動線を先に決めておくと安心です。" },
      { label: "DAY 2", stay: "シーギリヤまたはダンブッラ泊", title: "シーギリヤロックとダンブッラ石窟寺院を主役にする", body: "早朝のシーギリヤロックを旅の中心に置き、午後にダンブッラ石窟寺院を組み合わせます。どちらも十分に見応えがあるので、周辺の観光地を増やしすぎず、休憩・食事・ホテルでの時間を確保しましょう。", detail: ["シーギリヤロックは、朝のうちに出発して登ることで、体力と時間を使うメインイベントです。登り終えた後は、景色を振り返る時間、軽い食事、ホテルでの休憩を取ってから次へ進みます。短期日程であっても、休憩を削らないことが午後の満足度を左右します。", "ダンブッラ石窟寺院は、洞窟に入る前の階段や参拝マナーも含めて体験する場所です。足元・服装・雨具を整え、写真撮影の可否は現地の案内に従いましょう。"], image: { src: "/manus-storage/dambulla-2_f5724815.jpg", alt: "ダンブッラ石窟寺院の内部", caption: "DAY 2：シーギリヤの後は、ダンブッラ石窟寺院の静かな空間へ向かいます。" }, note: "猛暑や雨の影響を受けやすい日程なので、出発順は現地の状況に合わせて調整します。" },
      { label: "DAY 3", stay: "キャンディ泊", title: "キャンディへ移動し、仏歯寺と街の空気を感じる", body: "朝にキャンディへ向かい、途中の景色や食事を楽しみながら移動します。到着後は仏歯寺、キャンディ湖周辺、ホテルでの休憩を組み合わせます。都市間移動と寺院観光を同日に入れるため、ホテルの場所と出発時間を先に整理しておきます。", detail: ["短期旅行では、キャンディで多くの観光スポットを回るより、仏歯寺とキャンディ湖周辺に時間を使う方が、街の雰囲気を感じやすくなります。到着時間に合わせて、寺院を先に訪れるか、ホテルに荷物を置いてから向かうかを決めましょう。", "仏歯寺では、宗教施設であることを意識し、服装や撮影に関する案内を確認します。夕方の時間帯に訪れる場合は、ホテルへ戻る時間や夕食の場所もあらかじめ考えておくと、限られた一夜を落ち着いて過ごせます。"], image: { src: "/manus-storage/kandy-2_d9911315.jpg", alt: "キャンディ仏歯寺", caption: "DAY 3：キャンディでは、仏歯寺の参拝と街の静かな夜を楽しみます。" }, note: "寺院を訪れる場合は、肩・膝を覆う服装など基本的な参拝マナーに備えましょう。" },
      { label: "DAY 4", stay: "帰国", title: "空港へ戻る。最終日は帰国便を最優先にする", body: "最終日は、国際線の出発時刻から逆算してキャンディから空港へ向かいます。時間に余裕がある場合だけコロンボで短時間の立ち寄りを検討し、帰国便のチェックインに影響する予定は入れないようにします。", detail: ["最終日は、朝から観光を入れる前に空港への移動時間を決めます。キャンディを出発してから空港へ向かう間には、食事やトイレの休憩、交通状況による時間の変動もあります。チェックインに間に合うことを最優先にして、立ち寄りは時間に余裕がある場合だけにしましょう。", "荷物を車に積んだ後に必要なものを取り出しにくくならないよう、パスポート、財布、充電器、上着などは手元のバッグにまとめます。帰国前の移動も旅程の一部と考え、最後まで余白を残すのが短期旅行を気持ちよく締めるコツです。"], note: "長距離移動を伴うため、休憩と渋滞を見込んだ送迎時間を確保します。" },
    ],
    routeAdvice: "3泊4日で重要なのは、空港・シーギリヤ・キャンディ・空港を一続きの移動として考えることです。路線バスや列車は魅力がありますが、短期旅行で乗り換えまで楽しむと、観光時間が小さくなります。専用車なら、空港送迎・ホテル移動・観光地への立ち寄りを同じ計画の中にまとめられ、予定変更にも対応しやすくなります。",
    goodFor: ["初めてのスリランカで、世界遺産を絞って楽しみたい方", "週末や休暇を利用した短期旅行の方", "空港送迎からホテル移動まで、迷う時間を減らしたい方"],
    related: [
      { before: "到着初日の送迎・合流・遠方のホテルへの移動を詳しく比較するなら、", text: "コロンボ空港送迎は必要？", href: "/articles/colombo-airport-transfer-guide", after: "を先に確認しておくと安心です。" },
      { before: "3泊4日では何を専用車でつなぐべきか迷う場合は、", text: "スリランカのタクシーチャーターとは？", href: "/articles/sri-lanka-taxi-charter-guide", after: "で料金・予約・車種の基本を確認できます。" },
    ],
    faqs: [
      { question: "スリランカ3泊4日でシーギリヤとキャンディは両方楽しめますか？", answer: "楽しめます。ただし、行き先を増やしすぎず、シーギリヤ・ダンブッラ・キャンディに絞るのがコツです。到着日と最終日は移動を中心に考えましょう。" },
      { question: "3泊4日の短期旅行で紅茶列車は入れられますか？", answer: "入れることは可能ですが、シーギリヤ・キャンディ・高原・空港を短期間でつなぐため、移動が多くなります。紅茶列車を主役にしたい場合は、5日間以上に延ばすか、行き先を高原に絞ることをおすすめします。" },
      { question: "3泊4日なら空港送迎とタクシーチャーターはどちらがよいですか？", answer: "空港とホテルの往復だけなら送迎でも対応できます。シーギリヤ・ダンブッラ・キャンディをつなぐなら、都市間移動と観光の立ち寄りを一緒に相談できるタクシーチャーターの方が、短い日程を組みやすいでしょう。" },
    ],
  },
};

function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="mt-16 mb-7 md:mt-20"><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#E8732A" }}>{label}</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2></div>;
}

function ItineraryPage({ variant }: { variant: "five" | "seven" | "four" }) {
  const itinerary = itineraries[variant];
  useEffect(() => {
    document.title = itinerary.title;
    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null; if (!description) { description = document.createElement("meta"); description.name = "description"; document.head.appendChild(description); } description.content = itinerary.description;
    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null; if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); } keywords.content = itinerary.keywords;
    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null; if (!canonical) { canonical = document.createElement("link"); canonical.id = "article-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); } canonical.href = `https://srilankataxicharter.com/articles/${itinerary.slug}`;
    const id = `article-itinerary-${itinerary.number}-jsonld`; document.getElementById(id)?.remove(); const jsonLd = document.createElement("script"); jsonLd.id = id; jsonLd.type = "application/ld+json"; jsonLd.text = JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: itinerary.title, description: itinerary.description, mainEntityOfPage: canonical.href, inLanguage: "ja", about: ["スリランカ", "モデルコース", "個人旅行"], image: itinerary.hero.src }, { "@type": "FAQPage", mainEntity: itinerary.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }); document.head.appendChild(jsonLd); return () => document.getElementById(id)?.remove();
  }, [itinerary]);
  return <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}><MediaHeader activeCategory="itinerary" /><main>
    <section className="relative overflow-hidden" style={{ minHeight: "min(680px, 78svh)" }}><img src={itinerary.hero.src} alt={itinerary.hero.alt} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.90) 0%, rgba(7,16,26,0.62) 51%, rgba(7,16,26,0.06) 100%), linear-gradient(0deg, #0A1520 0%, transparent 40%)" }} /><div className="relative z-10 max-w-3xl ml-0 md:ml-[max(0px,calc((100vw-1152px)/2))] px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20"><div className="max-w-3xl"><Link href="/articles?category=itinerary" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> モデルコースの記事一覧へ</Link><div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>ITINERARY GUIDE · {itinerary.number}</span></div><h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{itinerary.title}</h1><p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>{itinerary.hero.caption}</p><div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>モデルコース</span><span className="h-px w-5 bg-white/30" /><span>読了約10分</span></div></div></div></section>
    <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28"><div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{itinerary.intro.map((paragraph) => <p key={paragraph} className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>{paragraph}</p>)}</div>
      <Heading label="ROUTE AT A GLANCE">このモデルコースの流れ</Heading><div className="flex flex-wrap items-center gap-y-3 font-sans text-sm leading-7" style={{ color: "#D5E0E7" }}>{itinerary.route.map((place, index) => <span key={place} className="inline-flex items-center">{index > 0 && <ArrowRight size={15} className="mx-3" style={{ color: "#E8732A" }} />}<span className="border px-3 py-2" style={{ borderColor: "rgba(232,115,42,0.45)", backgroundColor: "rgba(232,115,42,0.06)" }}>{place}</span></span>)}</div>
      <Heading label="DAY BY DAY">日程別：無理をしない回り方</Heading><div className="border-l ml-2" style={{ borderColor: "rgba(232,115,42,0.5)" }}>{itinerary.days.map((day) => <section key={day.label} className="relative pl-8 pb-12 last:pb-0"><span className="absolute h-3 w-3 rounded-full -left-[6.5px] top-1" style={{ backgroundColor: "#E8732A", boxShadow: "0 0 0 5px #0A1520" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.19em]" style={{ color: "#F1A368" }}>{day.label} · {day.stay}</span><h2 className="font-serif-jp text-xl md:text-2xl font-bold leading-relaxed text-white mt-2 mb-3">{day.title}</h2><p className="font-sans text-[15px] leading-8" style={{ color: "#C7D3DB" }}>{day.body}</p><div className="space-y-4 mt-5">{day.detail.map((paragraph) => <p key={paragraph} className="font-sans text-[15px] leading-8" style={{ color: "#C7D3DB" }}>{paragraph}</p>)}</div>{day.image && <figure className="mt-7 max-w-2xl"><div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={day.image.src} alt={day.image.alt} className="w-full h-full object-cover" loading="lazy" /></div><figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{day.image.caption}</figcaption></figure>}<p className="mt-5 border-l-2 pl-4 font-sans text-sm leading-7" style={{ borderColor: "#E8732A", color: "#B8C5D0" }}><span className="font-bold text-white">旅程のポイント：</span>{day.note}</p></section>)}</div>
      <Heading label="MOVE WITH PURPOSE">この日程で、専用車をどう使う？</Heading><p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>{itinerary.routeAdvice}</p><div className="mt-7 border p-5 md:p-6" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}><div className="flex gap-3"><Route size={19} className="shrink-0 mt-1" style={{ color: "#E8732A" }} /><div><h2 className="font-serif-jp text-lg font-bold text-white mb-3">このモデルコースが向く方</h2><ul className="space-y-3 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{itinerary.goodFor.map((item) => <li key={item} className="flex gap-3"><Check size={16} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</li>)}</ul></div></div></div>
      <section className="mt-12 space-y-4">{itinerary.related.map((link) => <p key={link.href} className="font-sans text-[15px] leading-8" style={{ color: "#C7D3DB" }}>{link.before}<Link href={link.href} className="underline decoration-[#E8732A] underline-offset-4 hover:text-white">{link.text}</Link>{link.after}</p>)}</section>
      <Heading label="FAQ">このモデルコースでよくある質問</Heading><div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{itinerary.faqs.map((faq, index) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-4 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>)}</div>
      <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>MAKE THE ROUTE YOURS</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">この日程を、<br />自分の旅のペースに整えよう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div></section>
      {itinerary.references && <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>{itinerary.references.map((reference, index) => <li key={reference.href}>[{index + 1}] <a className="underline underline-offset-4 hover:text-white" href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}</a></li>)}</ol></section>}
    </article></main></div>;
}

export function ArticleItineraryFiveDays() { return <ItineraryPage variant="five" />; }
export function ArticleItinerarySevenDays() { return <ItineraryPage variant="seven" />; }
export function ArticleItineraryFourDays() { return <ItineraryPage variant="four" />; }
