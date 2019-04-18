## 請解釋後端與前端的差異。
- 前端: 你所看到的！ \\ 娘子啊，跟牛魔王出來看上帝
   - 
   - 
   - 
- 後端: 你看不到的！ \\ 假的！哎呀！我眼睛業障重啊！
   - 
   - 
   - 
## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 送出一個 request 給 Google 的後台 Server 端。
2. Server 會再資料庫查找 "JavaScript" 相關關鍵字。
3. Database 將結果提交給 Server。
4. Server 送出一個 response 到 client 端。

## 請列舉出 5 個 command line 指令並且說明功用
// 抓到 bug ! github 上說 3 個，這裡 5 個，有 error !!!!!
1. more: 將檔案內容一頁頁印在終端機上，可以使用上下移動換頁，或按 q 離開。
   - `more README.md`
2. ping: 一種電腦網路工具，用來測試封包能否透過IP協定到達特定主機。
   - `ping google.com` \\ 可輸入 hostname 或是 IP
3. sudo: 指令類似 su，也是可以用來取得 root 或是其他帳號的權限，不過它在取得 root 或其他帳號權限的時候，是輸入自己的密碼，而不是 root 或其他帳號的密碼，使用上比較方便。
   - `sudo ls /usr/local/protected` \\ 查看一般使用者無法讀取的目錄
4. su: 指令可以讓一般的 Linux 使用者取得 root 權限，取得 root 權限的使用者就如同 root 一樣可以對系統進行各種變更動作。
   - `su`
5. apt-get: 套件管理工具。
   1. 可以更新套件
   2. 升級套件並下載安裝套件
   3. 搜尋相關軟體套件
   4. 安裝套件
   5. 移除套件
   - `sudo apt-get update`