## 教你朋友 CLI
1. 切到你想要新增的路徑: `cd D:\test`
   - 備註: `cd` 是切換路徑的指令，`pwd` 則是確認現在所在路徑的指令，`ls` 是列出當前目錄的所有檔案、文件資料。
   - e.g. h0w 想在 test 建新的檔案，但他要先確認現在的路徑，下了 `pwd` 的 command 顯示 D:\，再下 `ls` command 列出一堆資料夾，確認有 test 檔案，下 `cd test` 進到 test 這層目錄。

2. 新增 wifi 這份資料夾: `mkdir wifi`
   - 備註: `mkdir` 是新增資料夾的指令。
   - e.g. 延續 1. 在 D:\test 這路徑裡，要新增一個名叫 wifi 的資料夾，下 `mkdir wifi` 會在 test 裡新增一個資料夾叫 wifi，可以搭配 `ls` 確認有沒有新增資料夾。

3. 進入 wifi 資料夾: `cd wifi`
   - 備註: 如同 1. 備註裡寫的，bj4。
   - e.g. 在 test 這目錄下 `cd wifi` 進到 wifi 裡，下 `ls` 印出 D:\test\wifi。

4. 新增 afu.js 的檔案: `touch afu.js`
   - 備註: `touch` 字如其名，就是碰一下檔案的意思！
      - 狀況一: 有這檔案，刷新檔案時間。
      - 狀況二: 沒有這檔案，新建檔案。
   - e.g. 延續 3. 在 D:\test\wifi 裡，新增名為 afu.js 的檔案，`touch afu.js` 便會在 wifi 裡新增一個 afu.js 的檔案。