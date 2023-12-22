---
layout: post
title: Calcular our days in love
subtitle:  
---

## Our Story Begins

**In a haze a stormy haze**

**I'll be round**

**I'll be loving you always always**

**Here I am and I'll take my time**

**Here I am and I'll wait in line always always**


## EASONQIN & TONATOHE
<label for="startDate">Start:</label>
<input type="date" id="startDate" value="2020-01-01">

<label for="endDate">Today:</label>
<input type="date" id="endDate">

<button onclick="calculateDays()">Love U</button>

<p id="result"></p>

<script>
  
// 设置开始日期为固定值（例如：2023年1月1日）
var defaultStartDate = new Date('2020-01-01');
document.getElementById('startDate').valueAsDate = defaultStartDate;
// 设置结束日期为今天
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // 注意月份是从0开始计数的，所以要加1
var year = today.getFullYear();
var formattedToday = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

document.getElementById('endDate').value = formattedToday;
  function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    if (isNaN(startDate) || isNaN(endDate)) {
      alert('Please enter valid dates.');
      return;
    }

    var timeDiff = endDate - startDate;
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerHTML = 'We have been in love for : ' + daysDiff + ' days ^_^';
  }
</script>
