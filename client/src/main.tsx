import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// 公開HTMLは検索エンジン向けのプリレンダリング出力として残し、クライアント側では
// 新しいReactルートを生成する。ルーティング・アニメーション・クエリ文字列による
// 初回HTMLとの差異をhydrateRootで照合しないため、ハイドレーション不整合を防げる。
document.getElementById("static-seo-jsonld")?.remove();
createRoot(rootElement).render(<App />);
