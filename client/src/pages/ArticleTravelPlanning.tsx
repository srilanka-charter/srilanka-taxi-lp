/**
 * Design system: dark editorial travel guide with warm orange planning accents.
 * Expansion rule: every image appears beside the decision it helps explain; no detached galleries.
 */
import { useEffect, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { MediaHeader } from "@/components/MediaHeader";

type Image = { src: string; alt: string; caption: string; ratio?: "wide" | "standard" };
type Related = { before: string; text: string; href: string; after: string };
type Section = { label: string; title: string; body: string[]; image?: Image; links?: Related[] };
type Decision = { label: string; title: string; body: string[] };
type Ref = { label: string; href: string };
type Guide = {
  number: string; slug: string; title: string; description: string; keywords: string; readingTime: string;
  hero: Image; intro: string[]; decisions: Decision[]; overview: string[]; figure: Image; sections: Section[];
  planner: { title: string; intro: string; steps: Decision[] };
  checklist: { title: string; body: string; items: string[] };
  faqs: { question: string; answer: string }[]; references?: Ref[];
};

const guides: Record<"days" | "budget", Guide> = {
  days: {
    number: "23",
    slug: "sri-lanka-trip-duration-guide",
    title: "スリランカ旅行に必要な日数は？3日・5日・7日・10日の楽しみ方を比較",
    description: "スリランカ旅行に必要な日数を3日・5日・7日・10日で比較。世界遺産、高原、海岸、サファリをどう組み合わせるか、日数別に無理のない旅程を詳しく解説します。",
    keywords: "スリランカ 旅行 日数,スリランカ旅行 何日,スリランカ 3日 5日 7日 10日,スリランカ モデルコース",
    readingTime: "読了約20分",
    hero: { src: "/manus-storage/sri-lanka-trip-days-hero_79addc3a.png", alt: "スリランカの文化遺産・高原・海岸をつなぐ旅の道路", caption: "日数を増やすほど、行き先を増やすだけでなく、移動と滞在に余白をつくれます。", ratio: "wide" },
    intro: [
      "スリランカ旅行に何日必要かは、行きたい場所の数だけでは決まりません。空港に着く時間、最初に泊まる場所、ホテルを変える回数、そして帰国日に空港へ戻るまでの動線を一つの旅程として考えることで、必要な日数が見えてきます。",
      "地図上ではコンパクトに見えるスリランカでも、文化三角地帯、高原、南部海岸は、景色も観光の仕方もまったく異なります。移動そのものが旅の一部になる一方で、乗り換えや荷物移動が続くと、せっかくの時間が短く感じられることもあります。",
      "3日、5日、7日、10日では、旅の主役の置き方が変わります。短い日程は一つの地域に集中し、日数が増えたら世界遺産・紅茶列車・海岸・サファリを段階的に重ねる。この考え方なら、行き先を詰め込みすぎずに旅の密度を高められます。",
      "まずは『絶対に見たい景色』を二つか三つに絞り、それぞれに必要な滞在時間を置いてみましょう。その後に移動日、チェックイン、休憩、食事の時間を足すと、旅行日数に対して無理のない旅程かどうかを判断しやすくなります。",
      "個人旅行では、空港送迎、都市間のホテル移動、早朝の駅送迎のように、時間が固定される場面だけ専用車を使う方法もあります。列車や街歩きの自由さを楽しみながら、長い移動を整えておくと、限られた日数でも自分のペースを保ちやすくなります。",
    ],
    decisions: [
      { label: "STEP 01", title: "見たい場所ではなく、旅の主役を決める", body: ["『シーギリヤにもゴールにも行きたい』という希望を、最初から都市名だけで並べると、移動の多い旅程になりやすくなります。遺跡をじっくり歩きたいのか、紅茶畑で過ごしたいのか、海辺に連泊したいのかを先に言葉にしてみましょう。", "主役が決まると、削ってよい場所と、時間を使うべき場所が自然に分かれます。初めてなら文化三角地帯、景色を重視するなら高原、休息を重視するなら海岸というように、旅の軸を一つ置くことが出発点です。"] },
      { label: "STEP 02", title: "観光日に、移動日を混ぜすぎない", body: ["空港から遠方のホテルへ向かう日や、山岳地帯から海岸へ移る日は、景色が良くても体力を使います。その日に複数の有名観光地を足すより、途中の休憩やチェックインを含めて移動日として扱う方が、翌日の観光を楽しめます。", "短い日程ほど、移動日を失敗しないことが重要です。到着日、ホテルを変える日、出発日の三つを先にカレンダーへ固定し、その間に観光の主役を置くと、現実的な旅行日数が分かります。"] },
      { label: "STEP 03", title: "交通手段の役割を分ける", body: ["景色を楽しみたい区間は列車、近距離の街歩きはトゥクトゥク、ホテルをまたぐ長距離は専用車というように、移動手段に役割を与えると日程が整います。すべてを同じ交通手段に寄せるより、それぞれの良さを使い分ける考え方です。", "特に荷物がある日、到着時間が遅い日、早朝出発が必要な日は、事前に移動を整えておくと判断が減ります。旅程の自由度を保つために、必要な区間だけタクシーチャーターを検討するのも一つの方法です。"] },
    ],
    overview: ["3日：空港周辺または一つの地域に絞る", "5日：文化三角地帯を主役にする", "7日：世界遺産・高原・南部海岸をつなぐ", "10日：移動の余白を持ち、興味のある地域を深掘りする"],
    figure: { src: "/manus-storage/sri-lanka-trip-days-planning_9adb17bd.png", alt: "旅行日数ごとに旅程を考えるスリランカ旅行のプランニングイメージ", caption: "図：短い日程ほど主役を絞り、日数が増えたら移動だけでなく休息や滞在時間を足していきます。", ratio: "standard" },
    sections: [
      {
        label: "3 DAYS", title: "3日：到着・出発の移動を優先し、一つのエリアを味わう",
        body: [
          "3日間では、空港到着後に遠くまで進みすぎず、コロンボ・ネゴンボ周辺、または目的地を一つに絞る方が現実的です。到着日と帰国日はフライトの時間に左右されるため、観光に使える丸一日が何日あるかを先に数えましょう。",
          "短期旅行で大切なのは、見どころを数多く回ることではなく、空港とホテルの移動を迷わずに済ませることです。初日はホテルで休み、二日目を観光の主役にし、最終日は空港へ戻る。あえてシンプルに組むほど、街歩きや食事を楽しむ時間が残ります。",
          "到着が午後以降なら、初日に市内観光を詰め込む必要はありません。ホテルまでの移動、両替や通信の準備、近くでの夕食を済ませるだけでも、翌朝から落ち着いて動けます。旅の最初に余白を作ることが、短い旅を成功させる近道です。",
          "三日目に空港へ向かう時間も、帰国便の時刻から逆算します。早朝や深夜のフライトなら、公共交通の運行状況をその場で探すより、ホテルから空港までの移動を先に決めておくと安心です。",
          "3日間で遠方の世界遺産まで往復する案は、到着・出発時刻によっては移動だけで終わる可能性があります。どうしても一泊だけ遠出したい場合は、空港からの移動と帰路を一本の線として確認し、ホテル変更を最小限に抑えましょう。",
        ],
        image: { src: "/manus-storage/sri-lanka-duration-arrival-planning_42f2f4da.png", alt: "空港到着後の移動と旅程に余白を作るスリランカ旅行のイメージ", caption: "到着日と出発日は、観光を増やすより移動を確実にすることで、短い滞在の質が上がります。", ratio: "standard" },
        links: [{ before: "限られた日数での具体的な組み方は、", text: "スリランカ旅行3泊4日モデルコース", href: "/articles/sri-lanka-4-day-itinerary", after: "で確認できます。" }, { before: "空港からホテルまでの選択肢を先に整理するなら、", text: "スリランカで空港送迎は必要？", href: "/articles/colombo-airport-transfer-guide", after: "もあわせてご覧ください。" }],
      },
      {
        label: "5 DAYS", title: "5日：シーギリヤ・ダンブッラ・古都を主役にする",
        body: [
          "5日間なら、文化三角地帯を拠点にしてシーギリヤ、ダンブッラ、ポロンナルワ、アヌラーダプラを巡る旅程が組みやすくなります。世界遺産を一つずつ楽しむため、到着日と最終日の長距離移動、観光日、休憩を分けて考えるのがポイントです。",
          "この日数では、空港から文化三角地帯へ向かう日、遺跡を複数巡る日、空港へ戻る日を明確に分けると、日程が見通しやすくなります。遺跡では徒歩観光に集中し、移動中は荷物を車に置いて休むという役割分担も取りやすくなります。",
          "朝にシーギリヤを訪れ、午後にダンブッラへ進むような日は、出発時刻と暑さを考えて余白を置きます。入場、移動、食事、ホテルへの到着までを一つのまとまりとして見ると、『同じ日にもう一つ追加できるか』を冷静に判断できます。",
          "古都をすべて同じ濃さで回ろうとせず、遺跡の規模、歩く距離、興味のある歴史に合わせて主役を選びましょう。写真を撮りたい、建築を見たい、自転車で遺跡を巡りたいなど、自分の楽しみ方によって滞在時間は変わります。",
          "文化三角地帯では、宿泊地を頻繁に変えないことも重要です。同じホテルを拠点にできれば、チェックイン・チェックアウトの回数を減らし、夕方は休息や食事に使えます。5日間は『多く回る』より『一つずつ確実に残す』日数です。",
        ],
        image: { src: "/manus-storage/sri-lanka-duration-cultural-triangle_231766a5.png", alt: "シーギリヤを望む文化三角地帯を専用車で巡るスリランカ旅行の風景", caption: "文化三角地帯は、遺跡の徒歩観光と都市間移動を分けて考えると、5日間でも落ち着いて楽しめます。", ratio: "wide" },
        links: [{ before: "文化三角地帯を軸にした日程例は、", text: "スリランカ旅行5日間モデルコース", href: "/articles/sri-lanka-5-day-itinerary", after: "で詳しく紹介しています。" }, { before: "専用車の使い方や予約前の確認事項は、", text: "スリランカのタクシーチャーターとは？", href: "/articles/sri-lanka-taxi-charter-guide", after: "を参考にしてください。" }],
      },
      {
        label: "7 DAYS", title: "7日：世界遺産・高原・南部海岸を一つの旅にする",
        body: [
          "7日間になると、シーギリヤ周辺、キャンディ、紅茶列車、高原、ゴールをつなぐ周遊が視野に入ります。ただし、ホテルを毎日変えるだけでは移動の連続になりがちです。紅茶列車に乗る日、サファリの日、ゴールを歩く日には、旅の主役を一つずつ置きましょう。",
          "長距離のホテル移動は専用車でつなぎ、紅茶列車は景色を楽しむ区間に絞ると、交通手段の魅力を両立できます。7日間は、行き先を増やすためではなく、各地に一泊する余白を作るための日数と考えると、旅程が整います。",
          "キャンディから高原へ進むときは、列車に乗ること自体を一日の体験として扱うのがおすすめです。駅までの移動、乗車前の待ち時間、降車後のホテルへの移動までを考えれば、列車の区間を長く取りすぎずに済みます。",
          "高原から南部海岸へ向かう日は、山道と海岸部の景色が大きく変わります。途中に寄りたい場所がある場合も、夕方にゴール旧市街を急いで歩くより、ホテルに着いて休み、散策は翌朝に回す方が旅の印象を残しやすくなります。",
          "7日間の旅程は、天候や列車の状況に合わせて順番を入れ替えられる余地を残すと安心です。移動日を事前に整えておけば、現地では『どこを削るか』ではなく『どこを長く楽しむか』に時間を使えます。",
        ],
        image: { src: "/manus-storage/sri-lanka-duration-highland-coast_fda54b9d.png", alt: "紅茶畑の高原から南部海岸へ向かうスリランカ周遊の道路風景", caption: "高原と海岸を結ぶ日は、移動そのものを旅程に組み込み、到着後の時間に余白を残します。", ratio: "wide" },
        links: [{ before: "高原・紅茶列車・ゴールをつなぐ旅程は、", text: "スリランカ旅行7日間モデルコース", href: "/articles/sri-lanka-7-day-itinerary", after: "で詳しく確認できます。" }, { before: "列車を旅程に入れる際の駅送迎や荷物の考え方は、", text: "紅茶列車に乗るスリランカ旅行モデルコース", href: "/articles/sri-lanka-tea-train-itinerary", after: "が参考になります。" }],
      },
      {
        label: "10 DAYS", title: "10日：興味に合わせて、海岸・サファリ・高原の滞在を深める",
        body: [
          "10日間あれば、文化三角地帯と高原を回った後に、南部海岸やヤーラ国立公園のサファリを加えても、移動日を確保しやすくなります。ビーチを楽しみたい、紅茶畑に長く滞在したい、サファリを朝から体験したいなど、旅の目的に合わせて一泊ずつ増やせます。",
          "日数に余裕があるからといって、毎日別の都市へ移動する必要はありません。同じホテルに連泊し、天候や体調に合わせて観光順を変えられることが、10日間の大きな利点です。",
          "例えば、文化三角地帯に二泊、高原に二泊、海岸に二泊というように、移動と連泊を交互に置くと旅程が落ち着きます。連泊の日は、朝の出発を遅くしたり、カフェやホテルで過ごす時間を作ったりできるため、旅行全体に余裕が生まれます。",
          "サファリを入れるなら、早朝出発の前日に近くへ泊まることを優先しましょう。サファリ当日に遠方へ進むこともできますが、動物観察の後は疲れやすいため、その日の移動距離を短くする方が安全で快適です。",
          "10日間は、見どころの『網羅』より、興味に合わせた『深掘り』に向く日数です。海辺で過ごす日を増やす、紅茶列車の前後に高原泊を足す、南部でサファリを入れるなど、自分の旅の余白をどこに置きたいかを基準にしましょう。",
        ],
        links: [{ before: "サファリを旅の主役にしたい方は、", text: "ヤーラ国立公園サファリを入れたスリランカ旅行モデルコース", href: "/articles/yala-national-park-safari-itinerary", after: "を確認してください。" }, { before: "安全性とゆとりを意識した周遊例は、", text: "スリランカ女子旅モデルコース", href: "/articles/sri-lanka-women-travel-6-day-itinerary", after: "も参考になります。" }],
      },
    ],
    planner: {
      title: "旅行日数を決めた後、旅程を組み立てる順番", intro: "日数を選んだら、都市名を並べる前に、到着・宿泊・移動・観光の順で旅程を置いていきます。この順番にすると、行きたい場所を諦めるためではなく、より良い順番に整えるための調整ができます。",
      steps: [
        { label: "01 / ARRIVAL", title: "到着日と出発日を先に固定する", body: ["飛行機の到着・出発時刻を基準に、初日と最終日のホテル、空港への移動を置きます。ここが決まると、実際に観光に使える日数が明確になります。", "初日に無理をしない、最終日に余裕を残すという二つの原則を守るだけで、短期でも中期でも旅程は大きく安定します。"] },
        { label: "02 / STAY", title: "連泊する場所を決める", body: ["一泊ごとにホテルを変えるより、旅の主役になる地域で連泊を置くと、荷物をほどく時間と朝の余裕が生まれます。", "連泊は予定を減らすためではなく、現地の天候や体調に応じて行動を選べるようにするための余白です。"] },
        { label: "03 / MOVE", title: "移動の長い日だけを整える", body: ["列車、バス、トゥクトゥクを楽しむ日と、ホテルをまたぐ長距離移動の日を分けましょう。移動の長い日を事前に整えると、現地では観光に集中しやすくなります。", "専用車を使う場合は、空港送迎、都市間、早朝出発など必要な日だけに絞っても構いません。旅の目的に合う移動の組み合わせを選ぶことが大切です。"] },
      ],
    },
    checklist: { title: "日数を決める前のチェックポイント", body: "日数別のモデルコースを選ぶときは、見どころの数だけでなく、到着・出発の時刻、ホテルの位置、移動に使う時間を確認します。旅程に次の項目を当てはめると、自分に必要な日数を判断しやすくなります。", items: ["フライトの到着・出発時刻を含め、実際に観光できる日数を数える", "世界遺産・高原・海岸・サファリから、必ず行きたい主役を二つか三つに絞る", "ホテルを移る日は、観光を詰め込みすぎず移動と休憩を優先する", "列車に乗る日は、駅までと駅からの移動、荷物の扱いまで確認する", "早朝出発のアクティビティは、前日に近くへ泊まれるかを考える", "空港・都市間・駅の移動は、荷物と時間に合わせて事前手配を検討する", "一日だけでも予定を少なくし、天候や体調に応じて調整できる余白を残す"] },
    faqs: [
      { question: "スリランカ旅行は最低何日あれば楽しめますか？", answer: "到着・出発の時間にもよりますが、3日なら一つの地域、5日なら文化三角地帯、7日なら高原や南部海岸を組み合わせる旅程を検討しやすくなります。" },
      { question: "5日と7日ならどちらがおすすめですか？", answer: "世界遺産を主役にするなら5日、高原の紅茶列車やゴールまで入れたいなら7日が目安です。移動だけで終わらないよう、ホテル移動日と観光日を分けて考えましょう。" },
      { question: "10日間あればスリランカを一周できますか？", answer: "関心のある地域を組み合わせることは可能ですが、毎日都市を移るより、文化三角地帯・高原・海岸などで連泊を入れる方が旅を楽しみやすくなります。" },
      { question: "短い日程でもタクシーチャーターは使えますか？", answer: "使えます。空港送迎、ホテルをまたぐ移動、駅送迎など、荷物や時間の不確実性が大きい日だけに絞ると、短い滞在でも行動しやすくなります。" },
    ],
  },
  budget: {
    number: "24",
    slug: "sri-lanka-trip-budget-guide",
    title: "スリランカ旅行の予算はいくら？航空券・ホテル・移動費を含む費用の目安",
    description: "スリランカ旅行の予算を、航空券、ホテル、食事、観光、移動費に分けて考えるガイド。タクシーチャーターの費用を含め、個人旅行で予算を組み立てる方法を詳しく解説します。",
    keywords: "スリランカ 旅行 予算,スリランカ旅行 費用,スリランカ タクシーチャーター 料金,スリランカ 個人旅行 予算",
    readingTime: "読了約20分",
    hero: { src: "/manus-storage/sri-lanka-budget-hero_6c04a40a.png", alt: "スリランカ旅行の予算を考えるパスポートとカードと旅行小物", caption: "旅行費は総額だけでなく、航空券・ホテル・食事・観光・移動の五つに分けると考えやすくなります。", ratio: "wide" },
    intro: [
      "スリランカ旅行の予算は、航空券やホテルの価格だけで決まりません。行きたい地域の数、ホテルのグレード、食事のスタイル、移動手段、観光アクティビティを分けて考えることで、自分の旅に必要な費用が見えやすくなります。",
      "個人旅行では、移動費を後回しにすると、現地での選択肢が狭くなりがちです。公共交通を楽しむ日と、空港送迎・都市間・早朝出発に専用車を使う日を分け、見積もりに何が含まれるかを確認しておくと、予算と旅の快適さを両立しやすくなります。",
      "まずは、出発前に支払う費用と、現地で調整できる費用を分けるところから始めましょう。航空券、ホテル、保険、事前予約のアクティビティは前者に、食事、カフェ、買い物、追加の観光は後者に置くと、残りの使える金額が分かります。",
      "予算を抑えることは、すべてを安くすることではありません。自分にとって外せない景色、ホテルの快適さ、移動の確実さに費用を優先し、それ以外を調整する方が、旅行後の満足度を保ちやすくなります。",
      "また、為替や現地での予定変更に備えて、最初から予備費を残すことも大切です。旅程に余白があれば、急な雨や体調の変化があっても、無理に別の交通手段や宿泊を探さずに済む場合があります。",
    ],
    decisions: [
      { label: "STEP 01", title: "総額ではなく、五つの費目に分ける", body: ["旅行費を一つの合計金額だけで見ると、何を調整すればよいかが分かりにくくなります。航空券、ホテル、食事、観光、移動の五つに分けて、各費目の優先順位をつけましょう。", "たとえばホテルを少し抑えた分を、空港送迎や長距離移動の安心に使うという考え方もできます。数字を並べるより前に、自分が旅で失いたくない時間や体験を言葉にすることが重要です。"] },
      { label: "STEP 02", title: "固定費を先に確定し、変動費に余白を残す", body: ["航空券、宿泊、移動の一部は、予約した時点でほぼ確定する費用です。一方で食事、カフェ、現地で追加する観光、買い物は、現地で調整しやすい費用になります。", "固定費を先にまとめれば、現地で使えるお金と予備費を分けて持てます。予算表を複雑にする必要はなく、『確定』『調整できる』『予備』の三つに分けるだけでも管理しやすくなります。"] },
      { label: "STEP 03", title: "移動は料金と時間を一緒に比較する", body: ["一見安い移動でも、待ち時間、荷物の移動、ホテルへの到着時刻によっては、旅程全体の負担が増えることがあります。特に到着日やホテルを移る日は、料金だけでなく、到着後に何ができるかまで見て比較しましょう。", "列車やバスを楽しみたい区間は残しつつ、空港送迎や都市間の長い区間だけを事前に手配する方法もあります。交通費を単独で見るのではなく、旅程の自由度を保つための費用として考えると、選択しやすくなります。"] },
    ],
    overview: ["航空券：渡航時期と予約時期で変動", "ホテル：地域・部屋・食事条件で変動", "食事・観光：一日の過ごし方で調整", "移動：日数・人数・車種・料金に含まれる範囲で確認"],
    figure: { src: "/manus-storage/sri-lanka-budget-planning_92fc7f31.png", alt: "旅行費の項目を整理するスリランカ旅行の予算計画イメージ", caption: "図：予算は費目ごとに分け、先に決まる費用と現地で調整する費用を整理します。", ratio: "standard" },
    sections: [
      {
        label: "COST 01", title: "航空券：行き先を増やす前に、渡航時期と到着・出発時刻を見る",
        body: [
          "航空券は、渡航時期、予約する時期、乗り継ぎ、到着・出発の時間によって変わります。最安値だけで選ぶのではなく、深夜・早朝の到着になった場合に必要になる空港送迎や前泊も含めて、旅程全体で考えるのがポイントです。",
          "到着日から遠方へ進む場合は、空港送迎とホテルをどうつなぐかを先に決めます。航空券の時間に合わせて移動を整えることで、初日に余分なタクシー代やホテル変更を増やさずに済む場合があります。",
          "乗り継ぎ時間や到着時刻は、観光時間だけでなく初日の疲れ方にも影響します。到着後にすぐ行動したいのか、まずホテルで休みたいのかを決めてから航空券を比べると、価格以外の条件も見えやすくなります。",
          "早朝便で帰国する場合は、最終泊の場所も予算の一部です。空港から遠いホテルを選んだ場合の移動、起床時間、朝食の有無まで含めて考えれば、帰国日の追加費用や慌ただしさを減らせます。",
          "航空券の費用を下げたい場合も、到着・出発の時間が旅程に与える影響を確認しましょう。安い便を選んだことで、前後のホテルや送迎に費用がかかるなら、総額では大きな差にならないことがあります。",
        ],
        image: { src: "/manus-storage/sri-lanka-budget-airport-transfer_d02d91ef.png", alt: "空港到着後に送迎車へ向かうスリランカ個人旅行者のイメージ", caption: "航空券の時刻は、空港送迎・初日のホテル・観光に使える時間まで含めて比較します。", ratio: "standard" },
        links: [{ before: "空港からホテルまでの費用と動線を比較するなら、", text: "コロンボ空港送迎は必要？", href: "/articles/colombo-airport-transfer-guide", after: "を確認してください。" }],
      },
      {
        label: "COST 02", title: "ホテル：一泊単価だけでなく、連泊と立地で考える",
        body: [
          "ホテル代は、都市、ビーチか高原か、部屋のタイプ、食事の有無、予約時期で変わります。安いホテルを毎日変えるより、シーギリヤ周辺、キャンディ、ゴールなどで連泊し、移動回数を減らした方が、荷物・交通・時間の面で旅を整えやすいこともあります。",
          "予算を抑えたい場合も、空港からの距離、駅からの距離、早朝出発に対応しやすいかを確認しましょう。ホテルの立地によって移動費が増えることがあるため、部屋代と移動の負担を一緒に比較します。",
          "連泊には、チェックイン・チェックアウトの回数を減らせるだけでなく、洗濯、荷物の整理、天候に合わせた予定変更がしやすくなる利点があります。一泊の価格差だけでなく、旅の中で使える時間が増えるかどうかを見て選びましょう。",
          "朝早く世界遺産へ向かう日や、サファリに参加する前日は、目的地に近いホテルを選ぶと移動を短くできます。反対に、夜の食事や街歩きを楽しみたい日は、市街地に泊まる方が心地よい場合もあります。",
          "部屋代に朝食が含まれるか、周辺に食事の選択肢があるかも、日々の費用に関わります。価格だけではなく、滞在中に必要になりそうな移動や食事を想像し、総合的に自分に合う拠点を選びましょう。",
        ],
        image: { src: "/manus-storage/sri-lanka-budget-hotel-stay_34850f70.png", alt: "連泊の拠点として考えるスリランカの落ち着いたホテル客室", caption: "ホテルは一泊の価格だけでなく、連泊による時間の余白と立地をあわせて比べます。", ratio: "standard" },
        links: [{ before: "ホテル・通信・保険など、出発前の準備全体を確認するなら、", text: "スリランカ個人旅行の準備完全ガイド", href: "/articles/sri-lanka-independent-travel-preparation-guide", after: "が役立ちます。" }],
      },
      {
        label: "COST 03", title: "食事・観光：日ごとの主役を決め、現地で調整できる費用を残す",
        body: [
          "食事、カフェ、寺院・遺跡の入場、サファリ、アクティビティなどは、旅の楽しみとして現地で調整しやすい費目です。一日に多くの有料アクティビティを詰め込むより、世界遺産を歩く日、紅茶列車に乗る日、海岸で過ごす日と主役を分けると、予算も旅程も見通しが良くなります。",
          "現金が必要な場面とカードを使える場面は地域や店舗で異なります。多額の現金を一度に用意するのではなく、ホテル、移動、観光の予定に合わせて、現金・カード・予備の支払い手段を分けておくと安心です。",
          "旅行中の食事は、特別なレストランを楽しむ日と、ホテル近くでゆっくり済ませる日を作ると、費用の波を抑えやすくなります。毎食を同じ基準で選ぶ必要はなく、観光の密度や移動距離に応じてメリハリをつける考え方です。",
          "観光費も、すべてを事前に固定しなくて構いません。天候が良い日に海辺へ行く、疲れている日はホテルで休むなど、現地で選べる余白を残しておく方が、旅程と予算の両方に対応しやすくなります。",
          "お土産やカフェ代も、全体予算の中に小さな枠として入れておくと安心です。旅の最後に残った金額で考えるより、最初から『自由に使う分』として少し確保しておくと、心地よく調整できます。",
        ],
        links: [{ before: "列車・バス・配車アプリ・専用車を使い分けながら移動費を考えるなら、", text: "スリランカの移動手段は何が正解？", href: "/articles/sri-lanka-transport-guide", after: "を参考にしてください。" }],
      },
      {
        label: "COST 04", title: "移動費：総額ではなく、何が含まれているかを確認する",
        body: [
          "移動費は、空港送迎、都市間移動、列車の駅送迎、サファリの早朝出発など、旅程の節目で発生します。料金を比較するときは、単に一日あたりの数字だけでなく、車種、人数、ドライバー、立ち寄り、待機、通行料や駐車料など、見積もりに含まれる範囲を確認しましょう。",
          "専用車の費用は、日数、人数、車種、移動距離、旅程の内容によって変わります。公開されている料金はあくまで出発点として見て、実際の旅程を伝えたうえで、どの区間を依頼するかを確認するのが確実です。",
          "空港からホテル、遺跡から次の宿泊地、駅から高原のホテルというように、荷物を持って乗り換える場面を洗い出してみましょう。必要な日だけ専用車を使う計画にすれば、予算を抑えながら移動の不確実さを減らせます。",
          "同じ移動日でも、途中で寄りたい場所があるか、昼食や休憩をどこで取るかによって必要な時間は変わります。見積もりを依頼する際に、人数、スーツケースの数、希望する立ち寄り、ホテル名を共有しておくと、条件を比較しやすくなります。",
          "移動費は、目的地へ着くためだけの費用ではありません。到着日に迷わないこと、長距離移動の後に休めること、荷物を持って何度も乗り換えないことも、個人旅行の予算に含めて考える価値があります。",
        ],
        image: { src: "/manus-storage/sri-lanka-budget-private-van-route_345d78f7.png", alt: "ヤシの木が並ぶ道路を走るスリランカの専用車による都市間移動", caption: "移動費は金額だけでなく、車種・人数・立ち寄り・待機など、見積もりに含まれる内容を確認します。", ratio: "wide" },
        links: [{ before: "料金・車種・予約前の確認項目を詳しく知りたい方は、", text: "スリランカのタクシーチャーターとは？", href: "/articles/sri-lanka-taxi-charter-guide", after: "を確認してください。" }, { before: "旅行日数と移動を同時に考えたい方は、", text: "スリランカ旅行に必要な日数は？", href: "/articles/sri-lanka-trip-duration-guide", after: "もあわせてご覧ください。" }],
      },
    ],
    planner: {
      title: "予算を旅程へ落とし込む、実践的な順番", intro: "予算は、金額を一度に決めるより、旅程の節目ごとに積み上げる方が管理しやすくなります。航空券・ホテル・移動の大枠を決めてから、食事や観光の余白を置く流れで考えましょう。",
      steps: [
        { label: "01 / FIX", title: "先に確定する費用を書き出す", body: ["航空券、ホテル、保険、事前予約するアクティビティを先に並べます。ここで総額の土台が決まり、旅行の規模を無理なく判断できます。", "予約済みの費用と、まだ変えられる費用を分けて見ることで、どこを見直せばよいかが明確になります。"] },
        { label: "02 / ROUTE", title: "移動の節目を費用化する", body: ["空港、都市間、駅、早朝出発など、移動が必要になる場面を旅程に印をつけます。区間ごとに交通手段を考えると、移動費の抜け漏れを防げます。", "料金を見るときは、時間、荷物、到着後の行動まで含めて比較します。旅程がまとまれば、必要な手配だけを選びやすくなります。"] },
        { label: "03 / BUFFER", title: "予備費を先に残す", body: ["為替の変動、天候、食事や買い物の追加などに備え、使い切らない金額を予備費として分けておきます。余白があれば、現地で『予算を超えるかもしれない』と迷う場面を減らせます。", "予備費は何かを我慢するためのものではなく、旅を柔軟に楽しむためのものです。予定変更にも対応できる余裕を残して、最終的な総額を決めましょう。"] },
      ],
    },
    checklist: { title: "予算を組み立てるための確認チェック", body: "予算表を作るときは、すでに予約して確定した費用と、現地で調整できる費用を分けます。旅行日数と移動を先に決め、残りの費用を宿泊・食事・観光へ配分すると、旅の優先順位が見えやすくなります。", items: ["航空券・ホテル・保険など、出発前に確定する費用を分けて書き出す", "到着時刻と帰国便の時間から、空港送迎や最終泊の必要性を確認する", "ホテルは一泊単価だけでなく、立地・朝食・連泊による移動時間も比べる", "食事・カフェ・観光・買い物など、現地で調整できる費用に余白を持たせる", "移動は空港・都市間・駅送迎など、必要な日と区間を先に洗い出す", "タクシーチャーターは日数・人数・車種・含まれる内容を見積もりで確認する", "為替や予定変更に備え、予備費を残して総額を決める"] },
    faqs: [
      { question: "スリランカ旅行の予算は何で決まりますか？", answer: "航空券、ホテル、食事・観光、移動費が主な項目です。渡航時期、ホテルの立地、行き先の数、移動手段によって変わるため、費目ごとに分けて考えましょう。" },
      { question: "タクシーチャーターの料金は予算にどう入れればよいですか？", answer: "利用する日数、人数、車種、立ち寄り、料金に含まれる範囲を確認して見積もりに入れます。公開価格は目安として参照し、予約前には公式サイトで最新条件を確認してください。" },
      { question: "予算を抑えるならホテルを毎日変えない方がよいですか？", answer: "地域によっては連泊して移動回数を減らす方が、荷物・交通・時間の負担を抑えられます。部屋代だけでなく、ホテルの位置と移動費を一緒に比較するのがおすすめです。" },
      { question: "予算に予備費は必要ですか？", answer: "必要です。為替、食事、現地で追加する観光、天候による予定変更などに備え、確定費とは別に使わない分を残しておくと調整しやすくなります。" },
    ],
    references: [{ label: "ランカミー：スリランカタクシーチャーターサービス公式サイト", href: "https://srilankataxicharterservice.com/ja/" }],
  },
};

function Heading({ label, children }: { label: string; children: ReactNode }) {
  return <div className="mt-16 md:mt-20 mb-8"><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#E8732A" }}>{label}</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2></div>;
}

function ArticleImage({ image }: { image: Image }) {
  return <figure className="mt-8 md:mt-10 border p-2 md:p-3" style={{ borderColor: "rgba(232,115,42,0.38)", backgroundColor: "#0D1B28" }}><img src={image.src} alt={image.alt} loading="lazy" className={image.ratio === "standard" ? "w-full aspect-[4/3] object-cover" : "w-full aspect-[16/9] object-cover"} /><figcaption className="px-2 pt-3 pb-1 text-[11px] leading-6" style={{ color: "#8EA0AE" }}>{image.caption}</figcaption></figure>;
}

function PlanningGuide({ variant }: { variant: "days" | "budget" }) {
  const guide = guides[variant];
  useEffect(() => {
    document.title = guide.title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null; if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); } meta.content = guide.description;
    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null; if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); } keywords.content = guide.keywords;
    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null; if (!canonical) { canonical = document.createElement("link"); canonical.id = "article-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); } canonical.href = `https://srilankataxicharter.com/articles/${guide.slug}`;
    const id = `article-planning-${guide.number}-jsonld`; document.getElementById(id)?.remove(); const jsonLd = document.createElement("script"); jsonLd.id = id; jsonLd.type = "application/ld+json"; jsonLd.text = JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: guide.title, description: guide.description, mainEntityOfPage: canonical.href, inLanguage: "ja", image: `https://srilankataxicharter.com${guide.hero.src}` }, { "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }); document.head.appendChild(jsonLd); return () => document.getElementById(id)?.remove();
  }, [guide]);

  return <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}><MediaHeader activeCategory="travel-guide" /><main>
    <section className="relative overflow-hidden" style={{ minHeight: "min(640px, 74svh)" }}><img src={guide.hero.src} alt={guide.hero.alt} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.94) 0%, rgba(7,16,26,0.7) 52%, rgba(7,16,26,0.16) 100%), linear-gradient(0deg, #0A1520 0%, transparent 42%)" }} /><div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20"><div className="max-w-3xl"><Link href="/articles/travel-guide" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> 個人旅行ガイドの記事一覧へ</Link><div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>INDEPENDENT TRAVEL · {guide.number}</span></div><h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{guide.title}</h1><p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>{guide.hero.caption}</p><div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>個人旅行ガイド</span><span className="h-px w-5 bg-white/30" /><span>{guide.readingTime}</span></div></div></div></section>
    <article className="max-w-3xl mx-auto px-5 md:px-8 pb-24 md:pb-32"><div className="border-b py-11 md:py-14 space-y-7 md:space-y-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{guide.intro.map((paragraph) => <p key={paragraph} className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>{paragraph}</p>)}</div>
      <Heading label="START HERE">最初に決める三つのこと</Heading><div className="grid md:grid-cols-3 gap-4">{guide.decisions.map((decision) => <section key={decision.label} className="border p-6" style={{ borderColor: "rgba(232,115,42,0.35)", backgroundColor: "rgba(232,115,42,0.05)" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.18em]" style={{ color: "#F1A368" }}>{decision.label}</span><h2 className="font-serif-jp text-lg font-bold leading-8 text-white mt-3 mb-4">{decision.title}</h2><div className="space-y-4">{decision.body.map((paragraph) => <p key={paragraph} className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{paragraph}</p>)}</div></section>)}</div>
      <Heading label="AT A GLANCE">まず全体を整理する</Heading><div className="grid sm:grid-cols-2 gap-4">{guide.overview.map((item, index) => <div key={item} className="border p-5" style={{ borderColor: "rgba(232,115,42,0.35)", backgroundColor: "rgba(232,115,42,0.05)" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.18em]" style={{ color: "#F1A368" }}>0{index + 1}</span><p className="font-serif-jp text-base font-bold leading-7 text-white mt-2">{item}</p></div>)}</div>
      <Heading label="VISUAL GUIDE">旅の全体像を、画像でつかむ</Heading><ArticleImage image={guide.figure} />
      <Heading label="DETAILED GUIDE">日数・予算を旅程に落とし込む</Heading><div className="space-y-16 md:space-y-20">{guide.sections.map((section) => <section key={section.label} className="border-l-2 pl-6 md:pl-8" style={{ borderColor: "#E8732A" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.19em]" style={{ color: "#F1A368" }}>{section.label}</span><h2 className="font-serif-jp text-xl md:text-2xl font-bold leading-relaxed text-white mt-3 mb-5">{section.title}</h2><div className="space-y-6">{section.body.map((paragraph) => <p key={paragraph} className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{paragraph}</p>)}</div>{section.image && <ArticleImage image={section.image} />}{section.links && <div className="mt-8 space-y-4 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.12)" }}>{section.links.map((link) => <p key={link.href} className="font-sans text-[15px] leading-8" style={{ color: "#C7D3DB" }}>{link.before}<Link href={link.href} className="underline decoration-[#E8732A] underline-offset-4 hover:text-white">{link.text}</Link>{link.after}</p>)}</div>}</section>)}</div>
      <Heading label="PLAN WITH INTENT">{guide.planner.title}</Heading><section className="border p-7 md:p-9" style={{ borderColor: "rgba(232,115,42,0.45)", background: "linear-gradient(110deg, rgba(232,115,42,0.09), rgba(255,255,255,0.02))" }}><p className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#D7E1E7" }}>{guide.planner.intro}</p><div className="mt-9 space-y-9">{guide.planner.steps.map((step) => <div key={step.label} className="grid md:grid-cols-[100px_1fr] gap-3 md:gap-6"><span className="font-montserrat text-[10px] font-bold tracking-[0.18em] pt-1" style={{ color: "#F1A368" }}>{step.label}</span><div><h3 className="font-serif-jp text-lg md:text-xl font-bold leading-8 text-white mb-4">{step.title}</h3><div className="space-y-4">{step.body.map((paragraph) => <p key={paragraph} className="font-sans text-sm leading-8" style={{ color: "#C7D3DB" }}>{paragraph}</p>)}</div></div></div>)}</div></section>
      <section className="mt-16 md:mt-20 border p-7 md:p-9" style={{ borderColor: "rgba(232,115,42,0.5)", background: "linear-gradient(110deg, rgba(232,115,42,0.10), rgba(255,255,255,0.025))" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>FINAL CHECK</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{guide.checklist.title}</h2><p className="font-sans text-[15px] leading-8 md:leading-9 mt-6" style={{ color: "#D7E1E7" }}>{guide.checklist.body}</p><ul className="mt-7 space-y-4 font-sans text-sm leading-7" style={{ color: "#D7E1E7" }}>{guide.checklist.items.map((item) => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</li>)}</ul></section>
      <Heading label="FAQ">よくある質問</Heading><div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{guide.faqs.map((faq, index) => <details key={faq.question} className="group py-6"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-5 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>)}</div>
      <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>MAKE THE PLAN SIMPLE</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">旅程と移動を、<br />出発前に整えよう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div></section>
      {guide.references && <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>{guide.references.map((reference, index) => <li key={reference.href}>[{index + 1}] <a className="underline underline-offset-4 hover:text-white" href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}</a></li>)}</ol></section>}
    </article></main></div>;
}

export function ArticleTripDurationGuide() { return <PlanningGuide variant="days" />; }
export function ArticleTripBudgetGuide() { return <PlanningGuide variant="budget" />; }
