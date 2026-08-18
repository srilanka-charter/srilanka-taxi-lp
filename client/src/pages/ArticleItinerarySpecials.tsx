/**
 * Design system: dark editorial travel journal with warm orange route markers.
 * These itinerary pages pair a clear day-by-day narrative with real trip photos placed inside the relevant day, not in a separate gallery.
 */
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, MapPinned, Route } from "lucide-react";
import { Link } from "wouter";
import { MediaHeader } from "@/components/MediaHeader";

type Image = { src: string; alt: string; caption: string };
type Day = { label: string; stay: string; title: string; body: string; details: string[]; note: string; images?: Image[] };
type Related = { before: string; text: string; href: string; after: string };
type Ref = { label: string; href: string };
type SafariBooking = { title: string; body: string; href: string; items: string[] };
type Course = { number: string; slug: string; title: string; description: string; keywords: string; hero: Image; intro: string[]; route: string[]; days: Day[]; advice: string; goodFor: string[]; related: Related[]; faqs: { question: string; answer: string }[]; references?: Ref[]; safariBooking?: SafariBooking; preparation?: { title: string; body: string; items: string[] } };

const courses: Record<"west" | "tea" | "women" | "yala", Course> = {
  west: {
    number: "15",
    slug: "colombo-western-sri-lanka-2-night-3-day-itinerary",
    title: "コロンボ発・スリランカ西部をめぐる2泊3日モデルコース",
    description: "コロンボ発でスリランカ西部をめぐる2泊3日モデルコース。空港送迎、ネゴンボ、コロンボ市内、短期間の専用車の使い方を個人旅行向けに解説します。",
    keywords: "コロンボ 観光 モデルコース,スリランカ コロンボ 2泊3日,コロンボ発 専用車",
    hero: { src: "/manus-storage/article-airport-transfer-hero_fd800259.jpg", alt: "コロンボ空港で到着した旅行者を待つ専用車", caption: "到着日と出発日を効率よく使える、西部エリアの短期モデルコースです。" },
    intro: [
      "スリランカへの出張前後や、南部海岸・文化三角地帯へ進む前に短期間で西部を楽しみたいなら、空港、ネゴンボ、コロンボを無理なくつなぐ2泊3日が向いています。目的地を増やすより、到着・ホテル・市内観光・空港への移動を一続きの流れにすることが、この日程のポイントです。",
      "西部は短距離に見えても、到着便の時間、荷物、交通量、ホテルの位置によって一日の進み方が変わります。空港送迎を基点に車を使えば、初日は休息を優先し、2日目だけをコロンボ市内観光の主役にできます。",
    ],
    route: ["コロンボ空港", "ネゴンボ", "コロンボ市内", "コロンボ空港"],
    days: [
      { label: "DAY 1", stay: "ネゴンボまたはコロンボ泊", title: "空港到着後は、ネゴンボまたはコロンボへ。初日の移動を確実にする", body: "到着後は、フライトの時間と体力に合わせてネゴンボまたはコロンボのホテルへ向かいます。深夜便・早朝便の後は、観光を詰め込むより、チェックイン、食事、シャワー、睡眠の時間を確保する方が翌日の満足度につながります。", details: ["空港からホテルまでの移動は、現地で車を探す方法もありますが、初めての土地では合流場所、荷物、両替、通信環境など小さな判断が続きます。送迎を事前に決めておけば、到着ロビーからホテルまでの流れを一本化できます。", "午後に余裕がある場合は、ネゴンボの海辺を散策したり、ホテル周辺で夕食を取ったりする程度に。あえて観光地を増やさず、到着日の疲れを翌日に持ち越さないことを優先しましょう。"], images: [{ src: "/manus-storage/article-airport-transfer-hero_fd800259.jpg", alt: "コロンボ空港到着後に利用する専用車", caption: "DAY 1：空港からホテルまでの移動を先に確保すると、到着日の判断を減らせます。" }], note: "便名、到着予定時刻、荷物の数、ホテル名を事前に共有すると、空港での合流がスムーズです。" },
      { label: "DAY 2", stay: "コロンボ泊", title: "コロンボ市内を、自分の興味に合わせて半日〜一日で巡る", body: "この日はコロンボ市内を主役にします。ホテルの場所を起点に、海沿い、カフェ、歴史を感じる街並み、買い物など、関心のあるテーマを二つか三つに絞ると、短い滞在でも街の表情をつかみやすくなります。", details: ["西部の市内観光では、徒歩で楽しむエリアと車で移動したいエリアが混在します。車を一日手配する場合は、目的地を細かく固定しすぎず、滞在時間をその日の気分で調整できるようにしておくと安心です。", "昼食の場所や休憩時間も旅程に入れておきましょう。暑さや雨を避けてホテルへ戻る、買い物の荷物を車に置く、といった柔軟さが、短期滞在の市内観光を快適にします。"], images: [{ src: "/manus-storage/charter-3_51d499c2.png", alt: "スリランカ市内観光に利用できる専用車", caption: "DAY 2：コロンボ市内は、徒歩で楽しむ場所と車でつなぐ場所を使い分けます。" }], note: "市内の立ち寄り先は、開館・営業状況や交通量を当日に確認して順番を調整しましょう。" },
      { label: "DAY 3", stay: "帰国または次の都市へ", title: "帰国便・次の目的地に合わせて、空港へ余裕を持って移動する", body: "最終日は、出発便または次の都市へ向かう時間から逆算してホテルを出ます。コロンボから空港へ向かう日は、道路状況や食事・休憩の時間も見込み、最後に市内観光を詰め込みすぎないようにします。", details: ["短期旅行では、最終日を観光の延長にせず、移動の確実性を優先することが大切です。荷物を車に載せたら、パスポート、充電器、必要な現金などを手元にまとめ、空港で慌てない準備をします。", "西部の2泊3日を、南部海岸や文化三角地帯への前泊として使う場合は、次のホテルまでの移動も同じ車でつなぐと、乗り換えと荷物の負担を抑えられます。"], note: "空港へ向かう日の立ち寄りは、帰国便のチェックインに影響しない範囲にとどめます。" },
    ],
    advice: "2泊3日では、時間を節約するために急ぎ続けるより、空港送迎・市内観光・ホテル移動をひとつの導線で考える方が効果的です。専用車は、荷物がある到着日と出発日、ホテルの変更日、市内の複数エリアを回る日に使うと、短い旅程の余白を守りやすくなります。",
    goodFor: ["到着日・出発日を含めて西部エリアを楽しみたい方", "短期旅行で、空港とホテルの移動に迷いたくない方", "次の周遊旅程へ進む前に、コロンボ周辺に滞在したい方"],
    related: [
      { before: "空港からホテルまでの送迎を、タクシー・配車アプリ・専用車で比べるなら、", text: "コロンボ空港送迎は必要？", href: "/articles/colombo-airport-transfer-guide", after: "を先に確認してください。" },
      { before: "短期でも移動手段に迷う場合は、", text: "スリランカの移動手段は何が正解？", href: "/articles/sri-lanka-transport-guide", after: "で全体の使い分けを確認できます。" },
    ],
    faqs: [
      { question: "コロンボ発の2泊3日で専用車は必要ですか？", answer: "必須ではありません。ただし、空港送迎、ホテル変更、市内の複数エリアを回る日をまとめるなら、乗り換えや荷物移動を減らせる専用車が便利です。" },
      { question: "ネゴンボとコロンボはどちらに泊まるのがおすすめですか？", answer: "到着便の後に休息を優先するならネゴンボ、コロンボ市内観光を中心にするならコロンボが向いています。到着時刻と翌日の予定で選びましょう。" },
      { question: "この日程を南部海岸旅行とつなげられますか？", answer: "可能です。帰国する代わりに、コロンボからゴールや南部海岸のホテルへ進むよう、DAY 3を組み替えることができます。" },
    ],
  },
  tea: {
    number: "17",
    slug: "sri-lanka-tea-train-itinerary",
    title: "紅茶列車に乗るスリランカ旅行モデルコース｜乗車区間と送迎の組み方",
    description: "スリランカ紅茶列車を旅の主役にするモデルコース。キャンディ、高原、ヌワラエリヤ、エッラの移動、乗車区間、駅送迎、荷物の扱いを解説します。",
    keywords: "スリランカ 紅茶列車 モデルコース,スリランカ 紅茶列車 送迎,キャンディ エッラ モデルコース",
    hero: { src: "/manus-storage/train-1_47ef775a.jpg", alt: "スリランカ高原を走る紅茶列車", caption: "紅茶列車は、移動手段ではなく、旅の中心となる景色の時間として組み込みます。" },
    intro: [
      "紅茶列車に乗る旅では、どの区間を走るかだけでなく、駅までどう行くか、荷物をどう運ぶか、列車を降りた後にどこへ向かうかまでを一つの旅程として考える必要があります。列車の時間だけで日程を組むと、ホテル移動や駅での待ち合わせが負担になりがちです。",
      "このモデルコースは、キャンディを起点に高原へ入り、景色を楽しみたい区間だけを紅茶列車に乗り、駅からホテル・次の観光地を専用車でつなぐ流れです。列車と車の役割を分けることで、乗車時間を急がずに楽しめます。",
    ],
    route: ["コロンボ空港", "キャンディ", "ナヌオヤ・ヌワラエリヤ", "エッラ", "コロンボ空港"],
    days: [
      { label: "DAY 1", stay: "キャンディ泊", title: "空港からキャンディへ。列車旅の前に、都市間移動を整える", body: "到着後はキャンディまで移動し、ホテルにチェックインします。紅茶列車を翌日以降に乗るなら、初日は移動と休息を中心にし、夕方に仏歯寺やキャンディ湖周辺を訪れる程度にすると無理がありません。", details: ["空港からキャンディまでの移動は、列車を乗り継ぐより、到着便に合わせて車で進む方が旅程を組みやすい日です。空港での合流、荷物、ホテル到着までを一本化しておけば、翌日の列車乗車に集中できます。", "仏歯寺を訪れる場合は、服装と参拝時の案内を確認します。夜の寺院周辺を楽しんだ後は、早めにホテルへ戻り、翌日の駅への出発時間と荷物を整えましょう。"], images: [{ src: "/manus-storage/kandy-1_5ad18432.jpg", alt: "キャンディ仏歯寺", caption: "DAY 1：キャンディでは、仏歯寺を訪れ、翌日の高原・列車旅に備えます。" }], note: "鉄道の予約状況・運行状況は変わるため、乗車前日にも公式情報を確認します。" },
      { label: "DAY 2", stay: "ヌワラエリヤまたはエッラ泊", title: "紅茶列車に乗る日。駅送迎と荷物の扱いを先に決める", body: "朝はホテルから駅へ向かい、旅程に合う区間で紅茶列車に乗ります。座席の有無、列車の時間、降車駅、駅からホテルまでの送迎を事前に決め、列車に乗る時間を景色のために使えるようにします。", details: ["Sri Lanka Railwaysのオンライン予約では、駅・日付・人数を指定して座席を探せます。予約は支払いが完了して確定するため、予約画面だけで安心せず、乗車区間、日時、乗客情報、チケットの受け取り方法を確認してください。", "スーツケースを持って乗る場合は、長い乗車時間と降車駅での移動を想定します。列車を降りる駅で車が待てるようにしておけば、ホームで次の移動を探す必要がなく、雨や暗くなる時間にも対応しやすくなります。"], images: [{ src: "/manus-storage/train-1_47ef775a.jpg", alt: "スリランカ高原を走る紅茶列車", caption: "DAY 2：紅茶列車の乗車時間は、高原の景色を楽しむための主役の時間です。" }], note: "公式の予約・運行情報を確認し、列車が変わった場合にも駅送迎を調整できるようにします。" },
      { label: "DAY 3", stay: "エッラまたは高原泊", title: "エッラ周辺を歩く日。列車の後に、景色と休息の余白をつくる", body: "列車を降りた後は、エッラまたは高原のホテルにチェックインし、街歩きや展望の時間を取ります。前日に長く列車に乗った場合は、観光を増やしすぎず、カフェやホテルでゆっくりする時間を入れるのがおすすめです。", details: ["ナインアーチブリッジなどを訪れたい場合は、日差しや天気に合わせて出発時間を調整しましょう。駅送迎と観光地への車を同じ旅程で組めば、徒歩だけでは遠い場所にも無理なくアクセスできます。", "この日は、列車の乗車体験を振り返りながら、高原に泊まること自体を楽しむ日です。翌日に南部海岸や空港へ移動する場合も、長距離の出発前に休息を取っておくと、旅全体が落ち着きます。"], images: [{ src: "/manus-storage/nine-arch-bridge_10edbdb5.jpg", alt: "エッラのナインアーチブリッジ", caption: "DAY 3：エッラでは、列車旅の余韻とナインアーチブリッジ周辺の景色を楽しみます。" }], note: "高原の朝晩は涼しく感じることがあるため、羽織るものを用意します。" },
      { label: "DAY 4", stay: "帰国または次の都市へ", title: "ホテルから空港・南部海岸へ。列車の後は専用車で旅程をつなぐ", body: "最終日は、エッラや高原から空港・コロンボ・南部海岸など次の目的地へ進みます。紅茶列車を楽しんだ後の長距離移動は、時刻表に縛られず休憩を取れる車でつなぐと、帰国便や次のホテルに合わせやすくなります。", details: ["列車と同じ日に長距離のホテル移動まで詰め込むより、一泊してから移動する方が、遅延や天候の影響を受けにくくなります。列車は景色、車は荷物と時間の確実性というように役割を分けましょう。", "旅程を延ばせる場合は、ヤーラのサファリやゴールなど南部海岸を加えることもできます。移動時間を削らず、次の主役をひとつ決めて日数を足すのが、周遊を楽しむコツです。"], note: "空港へ向かう日は、駅送迎とは別に、出発便へ十分余裕のある車両手配を行います。" },
    ],
    advice: "紅茶列車のモデルコースでは、列車に乗る区間だけを主役にし、空港・ホテル・駅・次の観光地を専用車でつなぐのが基本です。特にスーツケースがある旅、予約済みの列車に遅れたくない日、降車駅からホテルが離れている日は、駅送迎を先に決めることで旅程が安定します。",
    goodFor: ["紅茶列車の景色を、移動を急がずに楽しみたい方", "駅での荷物運びや、降車後の移動を事前に整えたい方", "キャンディ・高原・エッラを一つの流れで旅したい方"],
    related: [
      { before: "紅茶列車の予約・乗り方やナインアーチブリッジをさらに詳しく知りたい方は、", text: "紅茶列車・ナインアーチブリッジ完全ガイド", href: "/articles/sri-lanka-tea-train-nine-arch-bridge", after: "を確認してください。" },
      { before: "駅送迎を含む長距離移動の車種・料金・予約の考え方は、", text: "スリランカのタクシーチャーターとは？", href: "/articles/sri-lanka-taxi-charter-guide", after: "で解説しています。" },
    ],
    faqs: [
      { question: "紅茶列車はどの区間に乗るのがおすすめですか？", answer: "旅程の起点と宿泊地によって異なります。景色を楽しむことを優先するなら、乗車時間の長さだけでなく、駅までの送迎、降車後のホテル移動、荷物の扱いまで一緒に決めましょう。" },
      { question: "紅茶列車は事前予約した方がよいですか？", answer: "座席を確保したい場合は、Sri Lanka Railwaysの公式オンライン予約で状況を確認しましょう。予約は支払い完了後に確定するため、チケットの条件と運行状況を乗車前にも確認します。" },
      { question: "列車に大きなスーツケースを持ち込んでもよいですか？", answer: "持ち込むことはできますが、車内・ホームでの移動負担を考える必要があります。駅からホテルまでの送迎車を手配し、荷物を持って長距離を歩かない計画にするのがおすすめです。" },
    ],
    references: [{ label: "Sri Lanka Railways Online Advance Train Seats Reservation", href: "https://seatreservation.railway.gov.lk/" }],
  },
  women: {
    number: "20",
    slug: "sri-lanka-women-travel-6-day-itinerary",
    title: "スリランカ女子旅モデルコース｜安全性と写真映えを両立する6日間プラン",
    description: "スリランカ女子旅の6日間モデルコース。シーギリヤ、ダンブッラ、キャンディ、紅茶列車、ゴールをめぐり、空港送迎・ホテル移動・撮影時間を無理なく組み立てます。",
    keywords: "スリランカ 女子旅 モデルコース,スリランカ 女子旅,スリランカ旅行 6日間,スリランカ タクシーチャーター",
    hero: { src: "/manus-storage/sigiriya-2_c47ed17b.jpg", alt: "スリランカの世界遺産シーギリヤロック", caption: "ホテル・移動・撮影時間に余白を残しながら、文化三角地帯から南部海岸までをつなぐ6日間です。" },
    intro: [
      "スリランカで女子旅を計画するなら、世界遺産、高原、海岸を一度に楽しみながらも、移動に追われない日程にすることが大切です。写真を撮りたい場所、寺院を訪れる時間、ホテルで休む時間を残し、早朝・夜間の移動や荷物を持った乗り換えを減らすだけで、旅の安心感は大きく変わります。",
      "この6日間プランは、空港からシーギリヤへ入り、キャンディ、高原の紅茶列車、ゴールへ進む流れです。公共交通だけで全てをつなぐのではなく、空港送迎・都市間移動・駅送迎を事前手配の車で補い、目的地では歩く時間を楽しむ設計にしています。",
    ],
    route: ["コロンボ空港", "シーギリヤ", "キャンディ", "高原・エッラ", "ゴール", "コロンボ空港"],
    days: [
      { label: "DAY 1", stay: "シーギリヤ周辺泊", title: "空港からシーギリヤへ。到着日はホテルまでの移動を整える", body: "コロンボ空港に到着したら、シーギリヤまたはダンブッラ周辺のホテルへ向かいます。到着日は世界遺産観光を詰め込まず、ホテルで荷物をほどき、翌日に備えることを優先します。", details: ["初めての場所でフライト後に車を探すより、便名・人数・ホテル名を伝えて送迎を決めておけば、到着ロビーからホテルまでの判断を減らせます。単独行動を含む旅行では、信頼できる事業者を通じて移動を手配するという公的渡航情報の基本にも沿う方法です。", "早朝到着で時間に余裕があっても、初日に遠方の遺跡を増やしすぎないのがポイントです。夕方にホテル周辺を散策したり、プールやカフェで休んだりして、翌朝のシーギリヤ観光に体力を残します。"], images: [{ src: "/manus-storage/article-airport-transfer-hero_fd800259.jpg", alt: "コロンボ空港で到着客を待つ専用車", caption: "DAY 1：空港からホテルまでを事前に手配し、到着日の移動を一本化します。" }], note: "到着便、荷物の数、ホテル名、休憩の希望を事前に共有すると合流がスムーズです。" },
      { label: "DAY 2", stay: "シーギリヤ周辺泊", title: "シーギリヤとダンブッラを、写真も休息も楽しめるペースで巡る", body: "朝はシーギリヤロックへ向かい、暑くなる前に登る流れがおすすめです。登った後はホテルで休憩や昼食を取り、午後にダンブッラ石窟寺院を訪れます。一日に二つの世界遺産を組み合わせるからこそ、出発順や滞在時間を当日の天候・体力に合わせて調整できる余白を残します。", details: ["シーギリヤでは、登頂だけでなく、麓から岩山を見上げる時間や庭園で写真を撮る時間も旅のハイライトです。朝の柔らかい光の中で撮影し、混雑や暑さが強くなる前にホテルへ戻ると、午後まで無理なく楽しめます。", "ダンブッラ石窟寺院では、参拝のルール、服装、靴を脱ぐ場面、撮影の案内を現地で確認します。肩や膝を覆える服装を用意し、寺院の時間は写真だけを急がず、壁画や仏像を眺める時間も取るとよいでしょう。"], images: [{ src: "/manus-storage/sigiriya-1_60f050bc.jpg", alt: "朝の光を受けるシーギリヤロック", caption: "DAY 2：シーギリヤロックは、登頂前後に景色と写真を楽しむ時間を残します。" }, { src: "/manus-storage/dambulla-ceiling_da604173.jpg", alt: "ダンブッラ石窟寺院の仏像と天井画", caption: "DAY 2：午後はダンブッラで、静かな洞窟寺院の空気を味わいます。" }], note: "帽子・飲み物・羽織ものは車に置き、遺跡ごとに必要なものだけを持って歩きます。" },
      { label: "DAY 3", stay: "キャンディ泊", title: "キャンディで寺院と街歩き。夕方以降の予定を詰め込みすぎない", body: "シーギリヤ周辺からキャンディへ移動し、ホテルに荷物を置いてから仏歯寺やキャンディ湖周辺を訪れます。移動日でもあるため、途中の立ち寄りは一つか二つに絞り、キャンディに着いてからの時間を残すのがコツです。", details: ["仏歯寺は、スリランカの信仰に触れられる大切な場所です。寺院を訪れる際は、参拝者の流れを尊重し、服装・撮影・立ち入りについて当日の案内に従います。ホテルで着替える時間を取れるようにしておくと、観光と参拝の両方に落ち着いて向き合えます。", "夕食後の移動やホテル到着時刻を気にせず過ごせるよう、宿泊地までの車を先に決めておくと安心です。カフェや湖畔を少し歩く時間も、都市間移動に追われない日程だからこそ楽しめます。"], images: [{ src: "/manus-storage/kandy-2_d9911315.jpg", alt: "キャンディ仏歯寺", caption: "DAY 3：キャンディでは、仏歯寺の参拝と街の落ち着いた時間を楽しみます。" }], note: "寺院訪問に備え、肩や膝を覆える服と、履き替えやすい靴を用意します。" },
      { label: "DAY 4", stay: "エッラまたは高原泊", title: "紅茶列車に乗る日。駅送迎を先に決めて景色の時間を主役にする", body: "キャンディまたは高原の駅から、旅程に合う区間で紅茶列車に乗ります。座席・乗車駅・降車駅・ホテルまでの送迎を一つの計画として決めれば、列車に乗る間は荷物や次の移動を気にせず、高原の景色に集中できます。", details: ["紅茶列車は、目的地へ急ぐための交通機関というより、窓の外の茶畑や山あいを眺める旅の時間です。撮影したい座席や窓側の景色だけでなく、駅での待ち時間、荷物、降車後の移動を考えておくと、当日の予定に余裕が生まれます。", "列車を降りた後は、駅で車と合流してホテルへ向かいます。エッラ周辺で夕方の散策をする場合も、ホテルにチェックインして荷物を置いてから出る流れにすると、身軽に楽しめます。"], images: [{ src: "/manus-storage/train-1_47ef775a.jpg", alt: "スリランカ高原を走る紅茶列車", caption: "DAY 4：紅茶列車では、高原の景色を眺め、写真を撮る余白を旅程に残します。" }], note: "鉄道の予約・運行状況を公式情報で確認し、列車が変わった場合も送迎を調整できるようにします。" },
      { label: "DAY 5", stay: "ゴールまたは南部海岸泊", title: "ゴールへ進み、城塞都市の午後と夕方を楽しむ", body: "高原からゴールへ向かう日は、ホテル移動そのものを旅の一部として考えます。到着後は城塞内に入り、古い建物、路地、カフェ、海沿いの景色をゆっくり歩きます。日程に余裕があれば、夕日の時間まで滞在するのもおすすめです。", details: ["ゴール旧市街は、目的地を細かく決めすぎずに歩くことで、写真を撮りたい場所や休みたいカフェを見つけやすいエリアです。荷物はホテルか車に置き、必要なものだけを持って散策すると、石畳の道でも身軽に動けます。", "高原から南部へ移動した日は、早朝出発や観光を重ねすぎないことが重要です。到着後の予定を夕日・食事・短い街歩きに絞れば、旅の後半を落ち着いて締めくくれます。"], images: [{ src: "/manus-storage/galle_46cff405.jpg", alt: "スリランカ南部の世界遺産ゴール旧市街", caption: "DAY 5：ゴールでは、海沿いの城塞都市を歩きながら撮影と休憩の時間を楽しみます。" }], note: "夕方以降のホテルへの戻り方と、翌日の空港移動を前日に確認します。" },
      { label: "DAY 6", stay: "帰国", title: "空港へ戻る。最後の日は帰国便を最優先にする", body: "最終日は、帰国便の時間から逆算してゴールまたは南部海岸のホテルを出発します。午前に旧市街を少し歩く場合も、空港へ向かう出発時刻を先に決め、余裕のある範囲にとどめます。", details: ["出発前に、パスポート、eチケット、現金、充電器、羽織ものを手元のバッグにまとめます。最後の移動を慌ただしくしないため、空港への車内で休憩できるよう、途中の食事やトイレの時間も見込んでおきましょう。", "6日間で複数の地域を巡る旅では、最終日の観光を増やすより、帰国便に確実に間に合うことが優先です。車の手配を空港まで一つの導線として決めることで、荷物を持った乗り換えを減らせます。"], note: "空港へ向かう日は、渋滞・休憩・チェックイン時間を含めた余白を必ず確保します。" },
    ],
    preparation: { title: "6日間を安心して楽しむための準備チェック", body: "安全性は、特別な不安を前提にするのではなく、移動・宿泊・連絡手段を早めに整えることで高められます。スリランカの単独旅行を含む旅では、信頼できる会社を通じた移動手配が公的渡航情報でも案内されています。友人同士の女子旅でも、到着日・夜間・都市間の移動は、無理をせず事前に計画しましょう。", items: ["空港送迎、ホテル間の移動、駅送迎の担当と合流場所を予約前に確認する", "ホテル名・緊急連絡先・当日の予定を同行者同士で共有する", "寺院用に肩や膝を覆える服と、歩きやすく履き替えやすい靴を用意する", "現地で使える通信手段と、必要な現金・カードの持ち方を事前に決める", "写真・カフェ・休憩に使いたい時間を日程に残し、予定を詰め込みすぎない" ] },
    advice: "女子旅の6日間では、すべてを同じ車で巡ることより、空港送迎・都市間移動・駅送迎のように、迷いやすい移動だけを事前手配する考え方が向いています。行き先では自由に歩き、移動の節目では車とホテルを確定させる。この役割分担にすると、荷物・時間・帰着場所の心配を減らしながら、自分たちのペースで旅を楽しめます。",
    goodFor: ["世界遺産・紅茶列車・海岸を6日間でバランスよく楽しみたい方", "撮影・カフェ・ホテルでの休息を、旅程の中にきちんと残したい方", "空港・都市間・駅の移動を事前に整え、現地での判断を減らしたい方"],
    related: [{ before: "空港からホテルまでの移動を詳しく比較するなら、", text: "コロンボ空港送迎は必要？", href: "/articles/colombo-airport-transfer-guide", after: "を確認してください。" }, { before: "列車・バス・配車アプリ・専用車を旅程に合わせて選ぶなら、", text: "スリランカの移動手段は何が正解？", href: "/articles/sri-lanka-transport-guide", after: "が出発点になります。" }, { before: "高原の列車旅をさらに深掘りしたい方は、", text: "紅茶列車に乗るスリランカ旅行モデルコース", href: "/articles/sri-lanka-tea-train-itinerary", after: "も参考にしてください。" }],
    faqs: [{ question: "スリランカ女子旅は6日間でどこまで回れますか？", answer: "シーギリヤ、キャンディ、高原の紅茶列車、ゴールを主役にすれば、6日間でも無理なく楽しめます。各地の滞在時間を守るため、空港・都市間・駅の移動は事前に整えるのがおすすめです。" }, { question: "女子旅でタクシーチャーターは毎日必要ですか？", answer: "毎日必須ではありません。空港送迎、長距離のホテル移動、駅送迎など、荷物や時間の不確実性が大きい日に使うと、旅程を組みやすくなります。" }, { question: "寺院を訪れる日に用意しておくとよい服装は？", answer: "肩や膝を覆える服と、履き替えやすい靴を用意しましょう。訪問先ごとの服装・撮影・参拝のルールは当日の案内に従ってください。" }],
    references: [{ label: "Australian Government Smartraveller: Sri Lanka", href: "https://www.smartraveller.gov.au/destinations/asia/sri-lanka" }],
  },
  yala: {
    number: "18",
    slug: "yala-national-park-safari-itinerary",
    title: "ヤーラ国立公園サファリを入れたスリランカ旅行モデルコース",
    description: "ヤーラ国立公園サファリを入れたスリランカ旅行モデルコース。サファリ許可、ティッサマハラーマ滞在、ゴール・南部海岸との組み合わせ、専用車の使い方を解説します。",
    keywords: "ヤーラ国立公園 モデルコース,ヤーラ サファリ 旅行,スリランカ サファリ 専用車",
    hero: { src: "/manus-storage/safari_ddff1136.png", alt: "スリランカの国立公園を走るサファリジープ", caption: "サファリの早朝出発と前後のホテル移動を、ひとつの旅程として整えるモデルコースです。" },
    intro: [
      "ヤーラ国立公園のサファリをスリランカ旅行に入れるなら、サファリそのものだけでなく、前日の宿泊地、早朝の出発、許可・車両の手配、終了後の移動まで考えることが大切です。早起きをする体験だからこそ、前後の日を詰め込みすぎない旅程が向いています。",
      "このモデルコースでは、南部海岸または高原からティッサマハラーマ周辺へ入り、早朝サファリを楽しんだ後にゴールへ進みます。専用車は、サファリジープとは別に、長距離のホテル移動と荷物の運搬を担う役割として使います。",
    ],
    route: ["コロンボ空港", "南部海岸", "ティッサマハラーマ", "ヤーラ国立公園", "ゴール", "コロンボ空港"],
    days: [
      { label: "DAY 1", stay: "南部海岸泊", title: "空港から南部海岸へ。サファリ旅程の前に海辺で一泊する", body: "到着後は空港から南部海岸へ進み、ゴール周辺または海辺のホテルに泊まります。初日にヤーラまで進むより、南部で一泊してからサファリ拠点へ向かう方が、長時間移動を分けられます。", details: ["到着日には、フライト後の疲れを考えてホテルまでの移動を優先します。海辺のホテルで休み、夕方に短い散歩をする程度にして、翌日の長距離移動に備えましょう。", "南部海岸の宿泊地は、ゴールを楽しむか、翌日のヤーラ方面への出発を楽にするかで選びます。どちらを優先するかを決めれば、DAY 2の出発時間も自然に決まります。"], note: "荷物が多い場合は、空港からホテルまでの車種とトランク容量を事前に確認します。" },
      { label: "DAY 2", stay: "ティッサマハラーマ周辺泊", title: "南部海岸からサファリ拠点へ。翌朝に備える移動日", body: "この日は、南部海岸からティッサマハラーマ周辺へ移動します。距離だけでなく、食事・休憩・ホテルのチェックイン時間を含めて考え、サファリ前日は早めに予定を終えるのが基本です。", details: ["ヤーラのサファリは早い時間に始まることが多いため、前日に長い観光を重ねない方が安心です。ホテルに着いたら、集合場所、出発時刻、服装、飲み物、カメラの準備を確認します。", "国立公園の許可は、日付・人数・車両に関係します。野生動物保護局の許可予約サービスでは、訪問前の予約と、上限に達した後は予約が締め切られることが案内されています。希望日が決まったら、早めに手配条件を確認しましょう。"], note: "サファリの予定は、入園許可、ジープ、ホテルの朝食時間をまとめて確認します。" },
      { label: "DAY 3", stay: "ゴールまたは南部海岸泊", title: "早朝サファリを楽しみ、午後はゴールへ移動する", body: "早朝にヤーラ国立公園のサファリへ出発し、終了後はホテルで休憩または朝食を取ってからゴール方面へ向かいます。この日は、サファリとホテル移動の二つを主役にし、他の観光を詰め込みすぎないことが大切です。", details: ["サファリでは、動物に近づくことだけを目的にせず、ガイドの案内に従いながら自然の中を移動する時間として楽しみましょう。保護地域では、入園時のルールや距離感を守り、動物やほかの来園者の体験を妨げない行動を心がけます。", "サファリ後は眠気や疲れが出やすくなります。ゴールに到着したら、城塞内の散策を翌朝に回しても構いません。海辺のホテルで休み、夕食を楽しむ程度に留めると、旅程に余白が生まれます。"], images: [{ src: "/manus-storage/safari_ddff1136.png", alt: "スリランカの国立公園を走るサファリジープ", caption: "DAY 3：サファリは早朝の主役にし、終了後はゴールへゆるやかに進みます。" }], note: "サファリジープと、ホテル間を移動する専用車は役割が異なります。荷物と長距離移動は専用車で整えます。" },
      { label: "DAY 4", stay: "帰国またはコロンボ泊", title: "ゴール旧市街を歩き、空港へ戻る", body: "最終日は、帰国便の時間から逆算して、ゴール旧市街を散策してから空港へ向かいます。朝に時間がある場合は、城壁・路地・カフェをゆっくり歩き、荷物は車に置いて身軽に回るのがおすすめです。", details: ["ゴールから空港へ戻る移動は、道路状況と休憩時間を見込みます。最終日に海岸や買い物の予定を増やすより、空港到着に余裕を持たせることを優先しましょう。", "旅程を延ばせる場合は、ゴールにもう一泊する、あるいはサファリ後に高原・エッラへ向かうなどの組み替えも可能です。ただし、ヤーラの早朝出発があることを前提に、移動日を増やして調整する方が無理がありません。"], images: [{ src: "/manus-storage/galle_46cff405.jpg", alt: "スリランカ南部の世界遺産ゴール旧市街", caption: "DAY 4：ゴール旧市街では、サファリの後に海辺の城塞都市をゆっくり歩きます。" }], note: "帰国便が早い場合は、ゴールの散策を前日の夕方に移し、空港への移動を優先します。" },
    ],
    safariBooking: { title: "ランカミーで予約する場合のサファリ手配チェックリスト", body: "ヤーラのサファリジープをランカミーで予約する場合、入園許可の手配を任せられるため、ご自身で許可を取得する必要がありません。プライベートジープを手配し、ジープにはドライバーが同乗して、見えている動物や現地の状況を説明します。サファリ当日の手配を一つにまとめたい方は、予約前に以下を確認しましょう。", href: "https://srilankataxicharterservice.com/ja/safari/", items: ["訪れたい国立公園、希望日、人数、ホテルのピックアップ場所と希望出発時刻", "入園許可、プライベートジープ、ドライバー同乗が手配内容に含まれること", "サファリ終了後のホテルまたはゴール方面への長距離移動をどうつなぐか", "動物観察・写真撮影・ドライバーからの説明について、事前に伝えておきたい希望"] },
    advice: "ヤーラの旅程では、サファリに使うジープと、都市間を移動する専用車を分けて考えることが重要です。早朝サファリに遅れないための前泊、荷物を運ぶための車、終了後にゴールや空港へ進むための長距離移動を、出発前に一つの計画として組み立てます。",
    goodFor: ["ヤーラの早朝サファリを、無理のない日程で楽しみたい方", "サファリとゴール・南部海岸を同じ旅行に入れたい方", "入園許可・ジープ・ホテル間の移動を整理したい方"],
    related: [
      { before: "サファリ・紅茶列車・ゴールまで入れる周遊にしたい場合は、", text: "スリランカ旅行7日間モデルコース", href: "/articles/sri-lanka-7-day-itinerary", after: "も参考にしてください。" },
      { before: "長距離のホテル移動と車種・料金の考え方は、", text: "スリランカのタクシーチャーターとは？", href: "/articles/sri-lanka-taxi-charter-guide", after: "で確認できます。" },
    ],
    faqs: [
      { question: "ヤーラのサファリは何泊で組むのがおすすめですか？", answer: "早朝サファリを楽しむなら、ティッサマハラーマ周辺に前泊する旅程が組みやすいでしょう。サファリ当日は疲れやすいため、終了後の長距離移動も余裕を持たせます。" },
      { question: "ヤーラ国立公園の許可は事前に必要ですか？", answer: "ご自身でジープを手配する場合は、野生動物保護局の許可予約を確認する必要があります。一方、ランカミーでサファリジープを予約する場合は、入園許可の手配を任せられるため、ご自身で許可を取る必要がありません。" },
      { question: "サファリ当日にゴールまで移動できますか？", answer: "可能ですが、早朝出発・サファリ・休憩の後に長距離移動となります。ゴール旧市街をしっかり歩きたい場合は、到着後は休息を優先し、散策は翌朝に回すと無理がありません。" },
    ],
    references: [{ label: "DWC Wildlife Park Permits Reservation eService", href: "https://dwc.lankagate.gov.lk/DWCEpermitApp/homeAction.action" }, { label: "Department of Wildlife Conservation", href: "https://www.dwc.gov.lk/" }],
  },
};

function Heading({ label, children }: { label: string; children: React.ReactNode }) { return <div className="mt-16 md:mt-20 mb-8"><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#E8732A" }}>{label}</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2></div>; }

function SpecialItinerary({ variant }: { variant: "west" | "tea" | "women" | "yala" }) {
  const course = courses[variant];
  useEffect(() => {
    document.title = course.title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null; if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); } meta.content = course.description;
    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null; if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); } keywords.content = course.keywords;
    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null; if (!canonical) { canonical = document.createElement("link"); canonical.id = "article-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); } canonical.href = `https://srilankataxicharter.com/articles/${course.slug}`;
    const id = `article-itinerary-${course.number}-jsonld`; document.getElementById(id)?.remove(); const jsonLd = document.createElement("script"); jsonLd.id = id; jsonLd.type = "application/ld+json"; jsonLd.text = JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: course.title, description: course.description, mainEntityOfPage: canonical.href, inLanguage: "ja", image: `https://srilankataxicharter.com${course.hero.src}` }, { "@type": "FAQPage", mainEntity: course.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }); document.head.appendChild(jsonLd); return () => document.getElementById(id)?.remove();
  }, [course]);
  return <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}><MediaHeader activeCategory="itinerary" /><main>
    <section className="relative overflow-hidden" style={{ minHeight: "min(680px, 78svh)" }}><img src={course.hero.src} alt={course.hero.alt} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.92) 0%, rgba(7,16,26,0.64) 52%, rgba(7,16,26,0.1) 100%), linear-gradient(0deg, #0A1520 0%, transparent 42%)" }} /><div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20"><div className="max-w-3xl"><Link href="/articles/itinerary" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> モデルコースの記事一覧へ</Link><div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>ITINERARY GUIDE · {course.number}</span></div><h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{course.title}</h1><p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>{course.hero.caption}</p><div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>モデルコース</span><span className="h-px w-5 bg-white/30" /><span>読了約10分</span></div></div></div></section>
    <article className="max-w-3xl mx-auto px-5 md:px-8 pb-24 md:pb-32"><div className="border-b py-11 md:py-14 space-y-7 md:space-y-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{course.intro.map((paragraph) => <p key={paragraph} className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>{paragraph}</p>)}</div>
      <Heading label="ROUTE AT A GLANCE">このモデルコースの流れ</Heading><div className="flex flex-wrap items-center gap-y-3 font-sans text-sm leading-7" style={{ color: "#D5E0E7" }}>{course.route.map((place, index) => <span key={`${course.slug}-${index}-${place}`} className="inline-flex items-center">{index > 0 && <ArrowRight size={15} className="mx-3" style={{ color: "#E8732A" }} />}<span className="border px-3 py-2" style={{ borderColor: "rgba(232,115,42,0.45)", backgroundColor: "rgba(232,115,42,0.06)" }}>{place}</span></span>)}</div>
      <Heading label="DAY BY DAY">日程別：無理をしない回り方</Heading><div className="border-l ml-2" style={{ borderColor: "rgba(232,115,42,0.5)" }}>{course.days.map((day) => <section key={day.label} className="relative pl-8 pb-16 md:pb-20 last:pb-0"><span className="absolute h-3 w-3 rounded-full -left-[6.5px] top-1" style={{ backgroundColor: "#E8732A", boxShadow: "0 0 0 5px #0A1520" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.19em]" style={{ color: "#F1A368" }}>{day.label} · {day.stay}</span><h2 className="font-serif-jp text-xl md:text-2xl font-bold leading-relaxed text-white mt-3 mb-5">{day.title}</h2><p className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{day.body}</p><div className="space-y-6 mt-7">{day.details.map((paragraph) => <p key={paragraph} className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{paragraph}</p>)}</div>{day.images?.map((image) => <figure key={image.src} className="mt-10 max-w-2xl"><div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" /></div><figcaption className="mt-3 pb-1 text-[11px] leading-6" style={{ color: "#8EA0AE" }}>{image.caption}</figcaption></figure>)}<p className="mt-8 border-l-2 py-1 pl-5 font-sans text-sm leading-7" style={{ borderColor: "#E8732A", color: "#B8C5D0" }}><span className="font-bold text-white">旅程のポイント：</span>{day.note}</p></section>)}</div>
      {course.safariBooking && <section className="mt-16 md:mt-20 border p-7 md:p-9" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.12), rgba(255,255,255,0.025))" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>SAFARI BOOKING CHECKLIST</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{course.safariBooking.title}</h2><p className="font-sans text-[15px] leading-8 md:leading-9 mt-6" style={{ color: "#D7E1E7" }}>{course.safariBooking.body}</p><ul className="mt-7 space-y-4 font-sans text-sm leading-7" style={{ color: "#D7E1E7" }}>{course.safariBooking.items.map((item) => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</li>)}</ul><a href={course.safariBooking.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-8 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A" }}>ランカミーにサファリジープを相談する <ArrowRight size={15} /></a></section>}
      {course.preparation && <section className="mt-16 md:mt-20 border p-7 md:p-9" style={{ borderColor: "rgba(232,115,42,0.5)", background: "linear-gradient(110deg, rgba(232,115,42,0.10), rgba(255,255,255,0.025))" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>TRAVEL PREPARATION</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{course.preparation.title}</h2><p className="font-sans text-[15px] leading-8 md:leading-9 mt-6" style={{ color: "#D7E1E7" }}>{course.preparation.body}</p><ul className="mt-7 space-y-4 font-sans text-sm leading-7" style={{ color: "#D7E1E7" }}>{course.preparation.items.map((item) => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</li>)}</ul></section>}
      <Heading label="MOVE WITH PURPOSE">この日程で、専用車をどう使う？</Heading><p className="font-sans text-[15px] md:text-base leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{course.advice}</p><div className="mt-8 border p-5 md:p-6" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}><div className="flex gap-3"><Route size={19} className="shrink-0 mt-1" style={{ color: "#E8732A" }} /><div><h2 className="font-serif-jp text-lg font-bold text-white mb-3">このモデルコースが向く方</h2><ul className="space-y-3 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{course.goodFor.map((item) => <li key={item} className="flex gap-3"><Check size={16} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</li>)}</ul></div></div></div>
      <section className="mt-16 md:mt-20 space-y-6">{course.related.map((link) => <p key={link.href} className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{link.before}<Link href={link.href} className="underline decoration-[#E8732A] underline-offset-4 hover:text-white">{link.text}</Link>{link.after}</p>)}</section>
      <Heading label="FAQ">このモデルコースでよくある質問</Heading><div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{course.faqs.map((faq, index) => <details key={faq.question} className="group py-6"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-5 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>)}</div>
      <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>MAKE THE ROUTE YOURS</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">この日程を、<br />自分の旅のペースに整えよう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div></section>
      {course.references && <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>{course.references.map((reference, index) => <li key={reference.href}>[{index + 1}] <a className="underline underline-offset-4 hover:text-white" href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}</a></li>)}</ol></section>}
    </article></main></div>;
}

export function ArticleItineraryColomboWest() { return <SpecialItinerary variant="west" />; }
export function ArticleItineraryTeaTrain() { return <SpecialItinerary variant="tea" />; }
export function ArticleItineraryYalaSafari() { return <SpecialItinerary variant="yala" />; }
export function ArticleItineraryWomenTravel() { return <SpecialItinerary variant="women" />; }
