/**
 * Design system: dark editorial travel journal with warm orange route markers.
 * These pages use the user's documentary travel photos as visual waypoints, combining a clear timeline with practical private-car planning guidance.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPinned, Route, ShieldCheck } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

type Day = { label: string; stay: string; title: string; body: string; note: string };
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
  gallery: GalleryImage[];
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
    ],
    route: ["空港", "ダンブッラ", "シーギリヤ", "ポロンナルワ", "アヌラーダプラ", "空港・コロンボ"],
    days: [
      { label: "DAY 1", stay: "シーギリヤ周辺泊", title: "空港から文化三角地帯へ。到着日は移動を一本化する", body: "到着便の時間に合わせて空港からダンブッラ・シーギリヤ方面へ移動します。深夜便や長時間フライトの後は、観光を詰め込むよりホテルへ確実に着くことを優先。時間と体力に余裕があれば、ダンブッラの景色を眺める程度にとどめ、翌日の世界遺産巡りに備えます。", note: "空港から遠方へ進む日は、便名・荷物・休憩の希望を事前に共有するとスムーズです。" },
      { label: "DAY 2", stay: "シーギリヤ周辺泊", title: "朝のシーギリヤロックと、午後のダンブッラ石窟寺院", body: "暑さを避けるため、シーギリヤロックは朝早くに訪れるのがおすすめです。登った後はホテルで休憩し、午後にダンブッラ石窟寺院へ。二つの見どころを一日で組み合わせる場合も、出発時間を固定しすぎず、体調や天候に合わせて調整できる車があると安心です。", note: "寺院では服装・靴・撮影可否など、その場のルールを確認しましょう。" },
      { label: "DAY 3", stay: "シーギリヤ周辺泊", title: "ポロンナルワで古都の広がりを味わう", body: "ポロンナルワは遺跡が点在するため、歩く範囲と見たい場所を先に決めると一日が整います。午前に主要遺跡を巡り、午後はホテルでゆっくり過ごすか、周辺の景色を楽しむ時間に。日差しが強い時間帯もあるので、飲み物と休憩を旅程に入れておきます。", note: "荷物を車に置き、遺跡ごとに必要なものだけ持って歩けるのが専用車移動の利点です。" },
      { label: "DAY 4", stay: "アヌラーダプラまたはシーギリヤ周辺泊", title: "アヌラーダプラの聖地を、時間に追われずに巡る", body: "アヌラーダプラは仏塔や寺院群が広く、場所ごとに空気感が変わります。すべてを急いで回るより、訪れたい遺跡を絞り、参拝者の動きを尊重しながら巡るのがよいでしょう。シーギリヤ周辺から日帰りにするか、アヌラーダプラに一泊するかは、翌日の出発時間で決めます。", note: "聖地では肌の露出を抑えた服装を用意し、靴を脱ぐ場面にも備えましょう。" },
      { label: "DAY 5", stay: "帰国またはコロンボ泊", title: "空港・コロンボへ戻る。帰国便に合わせて余白をつくる", body: "最終日は、国際線の出発時刻から逆算して空港またはコロンボへ戻ります。途中で休憩や食事を取る時間、道路状況の変動も考え、遺跡観光を詰め込みすぎないのがポイントです。帰国便が遅い場合だけ、コロンボで軽く街歩きを加えます。", note: "最終日の車は、送迎だけでなく、荷物を持ったままの休憩・食事も考えて手配します。" },
    ],
    gallery: [
      { src: "/manus-storage/anuradhapura_02897f3c.jpg", alt: "アヌラーダプラの仏塔と参道", caption: "アヌラーダプラは、巡る場所を絞って聖地の空気を味わう日をつくります。" },
      { src: "/manus-storage/dambulla-ceiling_da604173.jpg", alt: "ダンブッラ石窟寺院の仏像と天井画", caption: "ダンブッラ石窟寺院は、シーギリヤ周辺を拠点にする旅程と組み合わせやすい場所です。" },
      { src: "/manus-storage/polonnaruwa_f2c929a7.jpeg", alt: "ポロンナルワの歴史遺跡", caption: "ポロンナルワは遺跡が点在するため、車での移動と徒歩観光を使い分けます。" },
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
    ],
    route: ["空港", "シーギリヤ", "キャンディ", "高原・紅茶列車", "南部サファリ", "ゴール", "空港・コロンボ"],
    days: [
      { label: "DAY 1", stay: "シーギリヤ周辺泊", title: "空港から文化三角地帯へ。最初の夜は移動を整える", body: "空港に到着したら、シーギリヤまたはダンブッラ周辺へ向かいます。初日はホテルで休み、翌朝のシーギリヤロックに備えるのが基本です。時間帯によっては空港周辺で一泊して翌朝出発する方が無理のない場合もあります。", note: "到着便・人数・荷物に合う車種を先に決めると、旅のスタートが安定します。" },
      { label: "DAY 2", stay: "シーギリヤ周辺泊", title: "シーギリヤロックとダンブッラを、暑さに合わせて巡る", body: "朝はシーギリヤロック、午後はダンブッラ石窟寺院へ。二つの訪問順は天候・混雑・体力で入れ替えて構いません。時間に追われないよう、ホテルで休憩する余白も残しましょう。", note: "世界遺産を一日にまとめる日は、車に飲み物や着替えを置けると快適です。" },
      { label: "DAY 3", stay: "キャンディ泊", title: "キャンディへ移動し、仏歯寺の夜に触れる", body: "文化三角地帯からキャンディへ移動します。到着後はホテルで少し休み、夕方から仏歯寺周辺を訪れる流れが組みやすいでしょう。寺院の行事・入場・服装などは、当日の案内に従ってください。", note: "都市間移動の途中にスパイスガーデンや食事を入れる場合は、滞在時間を決めておくと安心です。" },
      { label: "DAY 4", stay: "ヌワラエリヤまたはエッラ泊", title: "高原へ向かい、紅茶列車を旅のハイライトにする", body: "キャンディから高原へ進み、旅程に合う区間で紅茶列車を楽しみます。列車の時刻・予約・運行状況は事前に確認し、駅まで・駅からの移動と荷物の扱いまで考えておくことが大切です。", note: "列車は景色を味わう時間に。ホテル移動と観光を同時に詰め込みすぎないようにします。" },
      { label: "DAY 5", stay: "ティッサマハラーマ周辺泊", title: "高原から南東部へ。サファリ前日は早めに休む", body: "高原からサファリ拠点へ向かう移動日です。距離感だけで予定を決めず、休憩・食事・道路状況を含めて考えましょう。到着後は翌朝のサファリに備え、ホテルでゆっくり過ごします。", note: "野生動物観察は入園・車両・時間の運用が変わり得るため、事前に確認します。" },
      { label: "DAY 6", stay: "ゴールまたは南部海岸泊", title: "早朝サファリと、南部海岸へのドライブ", body: "早朝にサファリを楽しんだ後、南部海岸へ進みます。午後にゴールへ到着できれば、城塞内を散策し、海に沈む夕日を眺める時間も取れます。無理な詰め込みを避け、サファリとホテル移動の二つを主役にする日です。", note: "サファリの出発時刻が早いので、移動距離を短くする宿泊地選びが大切です。" },
      { label: "DAY 7", stay: "帰国またはコロンボ泊", title: "ゴール旧市街を味わい、空港へ戻る", body: "午前はゴール旧市街を散策し、帰国便の時刻に合わせて空港またはコロンボへ戻ります。旧市街での滞在時間を確保したい場合は、空港への出発時刻から逆算し、最終日の立ち寄りを絞るのがおすすめです。", note: "南部海岸から空港へ向かう日は、渋滞や休憩を含めた余裕を確保しましょう。" },
    ],
    gallery: [
      { src: "/manus-storage/kandy-1_5ad18432.jpg", alt: "キャンディ仏歯寺", caption: "キャンディでは、仏歯寺を訪れる時間を一日の中心に置くと旅程が整います。" },
      { src: trainImage, alt: "スリランカ高原を走る紅茶列車", caption: "紅茶列車は、都市間を急ぐためではなく、景色を味わう区間として組み込みます。" },
      { src: "/manus-storage/safari_ddff1136.png", alt: "スリランカでのジープサファリ", caption: "サファリは早朝出発を前提に、前後のホテル移動を軽くしておくのがポイントです。" },
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
    ],
    route: ["空港", "ダンブッラ・シーギリヤ", "キャンディ", "空港・コロンボ"],
    days: [
      { label: "DAY 1", stay: "シーギリヤまたはダンブッラ泊", title: "空港から文化三角地帯へ。到着日を迷わない移動日にする", body: "到着後は空港からダンブッラ・シーギリヤへ向かい、ホテルにチェックインします。早朝到着で体力に余裕があれば、ダンブッラを軽く訪れる選択肢もありますが、基本は翌日の観光に備える日です。", note: "短期旅行ほど、空港での当日配車に頼らず、ホテルまでの動線を先に決めておくと安心です。" },
      { label: "DAY 2", stay: "シーギリヤまたはダンブッラ泊", title: "シーギリヤロックとダンブッラ石窟寺院を主役にする", body: "早朝のシーギリヤロックを旅の中心に置き、午後にダンブッラ石窟寺院を組み合わせます。どちらも十分に見応えがあるので、周辺の観光地を増やしすぎず、休憩・食事・ホテルでの時間を確保しましょう。", note: "猛暑や雨の影響を受けやすい日程なので、出発順は現地の状況に合わせて調整します。" },
      { label: "DAY 3", stay: "キャンディ泊", title: "キャンディへ移動し、仏歯寺と街の空気を感じる", body: "朝にキャンディへ向かい、途中の景色や食事を楽しみながら移動します。到着後は仏歯寺、キャンディ湖周辺、ホテルでの休憩を組み合わせます。都市間移動と寺院観光を同日に入れるため、ホテルの場所と出発時間を先に整理しておきます。", note: "寺院を訪れる場合は、肩・膝を覆う服装など基本的な参拝マナーに備えましょう。" },
      { label: "DAY 4", stay: "帰国", title: "空港へ戻る。最終日は帰国便を最優先にする", body: "最終日は、国際線の出発時刻から逆算してキャンディから空港へ向かいます。時間に余裕がある場合だけコロンボで短時間の立ち寄りを検討し、帰国便のチェックインに影響する予定は入れないようにします。", note: "長距離移動を伴うため、休憩と渋滞を見込んだ送迎時間を確保します。" },
    ],
    gallery: [
      { src: "/manus-storage/dambulla-2_f5724815.jpg", alt: "ダンブッラ石窟寺院の内部", caption: "ダンブッラは、短期旅行でもシーギリヤと組み合わせやすい世界遺産です。" },
      { src: "/manus-storage/kandy-2_d9911315.jpg", alt: "キャンディ仏歯寺", caption: "キャンディでは、仏歯寺とホテルでの休憩を一日の流れに入れます。" },
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
      <Heading label="DAY BY DAY">日程別：無理をしない回り方</Heading><div className="border-l ml-2" style={{ borderColor: "rgba(232,115,42,0.5)" }}>{itinerary.days.map((day) => <section key={day.label} className="relative pl-8 pb-10 last:pb-0"><span className="absolute h-3 w-3 rounded-full -left-[6.5px] top-1" style={{ backgroundColor: "#E8732A", boxShadow: "0 0 0 5px #0A1520" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.19em]" style={{ color: "#F1A368" }}>{day.label} · {day.stay}</span><h2 className="font-serif-jp text-xl md:text-2xl font-bold leading-relaxed text-white mt-2 mb-3">{day.title}</h2><p className="font-sans text-[15px] leading-8" style={{ color: "#C7D3DB" }}>{day.body}</p><p className="mt-4 border-l-2 pl-4 font-sans text-sm leading-7" style={{ borderColor: "#E8732A", color: "#B8C5D0" }}><span className="font-bold text-white">旅程のポイント：</span>{day.note}</p></section>)}</div>
      <Heading label="VISUAL WAYPOINTS">このルートで出会う景色</Heading><div className="grid sm:grid-cols-2 gap-5">{itinerary.gallery.map((image, index) => <figure key={image.src} className={index === itinerary.gallery.length - 1 && itinerary.gallery.length % 2 === 1 ? "sm:col-span-2" : ""}><div className="h-64 md:h-72 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" /></div><figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{image.caption}</figcaption></figure>)}</div>
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
