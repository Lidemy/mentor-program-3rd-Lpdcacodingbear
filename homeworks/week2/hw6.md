``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 12 行，跑 isValid() 這個 function
2. 執行第 1 行，輸入 array [3, 5, 8, 13, 22, 35] 
3. 執行第 2 行，設定變數 i 是 0，檢查 i 是否 < array 的長度，是，繼續執行，開始進入第一圈迴圈
4. 執行第 3 行，判斷 arr[i] 是否小於等於 0，不是，繼續往下 p.s. 處理 special case
5. 回到第 2 行，i + 1 並重複執行 第 3 行、第 4 行的指令
6. 最後檢查完沒有元素等於 0，不回傳 invalid 跳到第 5 行
7. 執行第 5 行，設定變數 i 是 2，檢查 i 是否 < array 的長度，是，繼續執行，開始進入第一圈迴圈
8. 執行第 6 行，判斷 arr[i] 是否不等於 arr[i-1] + arr[i-2]，不是，繼續往下
9. 回到第 5 行，i + 1 並重複執行 第 5 行、第 6 行的指令
10. 在 i = 4 時，arr[i] !== arr[i-1] + arr[i-2] p.s. 22 !== 13 + 8
11. 回傳 'invalid'