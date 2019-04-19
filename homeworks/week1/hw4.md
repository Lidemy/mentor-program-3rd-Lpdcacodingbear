## 跟你朋友介紹 Git
1. Git 跟你用資料夾紀錄版本，最大的不同是記錄方式，你無法再資料夾馬上看出每個之間的差異性，但 Git 是紀錄每個版班之間的差異。
2. 更嚴格的說，是紀錄更動的差異，未更動的內容則指向前個版本。
3. 下載 Git，以下省略一千字 \\ Git 下載、安裝請 Google！已經有很多教學。
4. 指令說明：
   - `git --version`: 查詢 Git 安裝版本。
   - `git init`: 指令初始化目前的目錄。
   - `git status`: 查詢現在這個目錄的狀態。
   - `git diff`: 顯示工作目錄和索引(暫存區)的差異。
   - `git add`: 把檔案從工作目錄移至暫存區域。
   - `git commit`: 把暫存區的內容移至儲存庫。
   - `git log`: 檢視 Commit 的紀錄。
   - `git remote`: 跟遠端有關的操作。
   - `git clone`: 從伺服器上取得 Repository。
   - `git push`: 專案推上 GitHub。
   - `git pull`: 專案拉回本機更新。
   **git pull = git fetch + git merge**
5. `git add`與`git commint`提到的三個區塊分別是：
   - 工作目錄(Working Directory)
   - 暫存區域(Staging Area)
   - 儲存區(Repository)
6. 為什麼要二段式這麼麻煩?
   - 你可以想像有一個倉庫，倉庫門口有個小廣場:
      > 倉庫 = 儲存區
      > 小廣場 = 暫存區
   - 貨物一來先放到小廣場 (`git add`)
   - 等累積差不多就打開倉庫門，將廣場上的貨物送進倉庫裡 (`git commit`)
   - 並記錄下這批貨是什麼用途、誰送來的。
7. 什麼時候 Commit ?
   - 完成一個任務。
   - 下班的時候。
   - 隨時隨地。
8. 簡單範例：
   1. 先 `cd ~/joke` 做 `git init`
   2. 開份檔案 `touch joke.txt`
   3. 紀錄笑話。
   4. 寫入 Git 保存 `git add .`, `git commit -am "version01"`
   5. 用 `git status` 查詢狀態。
   6. 往後要更新版本，重複 3~5 ，版本記得遞增。
9. 放上 GitHub 保存：
   1. 在 GitHub 上開新的專案：
      1. 選擇 "New repository"。
      2. 填寫專案名稱。
      3. 按下 "Create repository"。
   2. 引導畫面：
      1. 全新開始。
         - 依照 "create a new repository on the command line" 指示操作。
      2. 上傳現存專案。
         - 則依照 "push an existing repository from the command line" 選項進行。
10. 範例二：
   1. 按照 9-2-1 的指示。
   2. 建立README.md `echo "# Joke" > README.md`
   3. `git init`
   4. `git add README.md`
   5. `git commit -m "first commit"`
   6. `git remote add origin git@github.com:vegetable/joke.git`
      - origin 是一個「代名詞」，指的是後面那串 GitHub 伺服器的位置。
   7. `git push -u origin master`
      - 把 master 這個分支的內容，推向 origin 這個位置。
      - 加上 -u 參數，表示要設定 upstream 的意思。
      - upstream，中文翻成「上游」。每個分支可設定一個「上游」，它會指向並追蹤(track)某個分支。
      - 如果有設定，當下次執行 `git push` 指令時，它就會用來當預設值。
         > 有設置之指令：`git push`
         > 未設置之指令：`git push origin master`