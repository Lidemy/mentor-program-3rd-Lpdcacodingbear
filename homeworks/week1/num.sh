#!/bin/bash
read -p "Please input an integer number: " number
i=0
n=0
while [ "$i" != "$number" ]
do
n=$(($i+1))
touch $n.js;
i=$(($i+1))
done
echo "檔案建立完成";
