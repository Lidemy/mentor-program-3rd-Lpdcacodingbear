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
5. 執行第 5 行，設定變數 i 是 2，檢查 i 是否 < array 的長度，是，繼續執行，開始進入第一圈迴圈
6. 執行第 6 行，判斷 arr[i] 是否不等於 arr[i-1] + arr[i-2]，不是，繼續往下
<<<<<<< HEAD
7. 執行第 8 行，回傳 'valid'
=======
7. 執行第 8 行，回傳 'valid'
>>>>>>> 30f9ee7820c7ca80d33fd66f2b647bd2143de207
