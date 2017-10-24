webpackJsonp([0x7448e38393fb],{384:function(o,n){o.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E6%89%8B%E5%8B%95">手動</a></li>\n<li><a href="#%E8%87%AA%E5%8B%95">自動</a></li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:'---\ntitle: Hexo優化之為外部鏈接添加nofollow屬性\ndate: 2017-02-25 22:00\ntags:\n  - Hexo\n  - SEO\n---\n我們的網頁通常會有很多鏈接，但是在爬蟲的時候可以分開哪一些是外部鏈接，哪一些是內部鏈接來優化搜尋結果。比如說增加`nofollow`標籤。nofollow是一個HTML標籤的屬性值，它可以告訴搜尋引擎不要追蹤這個鏈接。\n\n## 手動\n我們可以手動把每一個鏈接都加上nofollow屬性，比如這樣：\n```\n<a href="https://github.com/calpa" rel="nofollow">Calpa的Github主頁</a>\n<a href="https://github.com/calpa" rel="external nofollow">Calpa的Github主頁</a>\n```\n`external nofollow`是更加專業的寫法，告訴搜尋引擎這是一個外部鏈接。\n\n## 自動\n我們也可以利用`hexo-autonofollow`插件來做這一件事情。\n只需要輸入`npm install hexo-autonofollow --save`，然後在`_config.yml`裡面寫上下面就可以了：\n```\nnofollow:\n    enable: true\n    exclude:\n    - exclude1.com\n    - exclude2.com\n```\nexclude1.com和exclude2都是內部域名。\n\n## 參考資料\n1. [Hexo优化之为外部链接添加nofollow\n](https://liuzhichao.com/2016/hexo-auto-nofollow.html)\n'},frontmatter:{title:"Hexo優化之為外部鏈接添加nofollow屬性"}}},pathContext:{slug:"/hexo-seo-nofollow/"}}}});
//# sourceMappingURL=path---2017-02-25-hexo-seo-nofollow-f41451995c4de9a0f049.js.map