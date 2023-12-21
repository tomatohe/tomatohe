---
layout: post
title: Calcular our days in love
subtitle: EASONQIN & TONATOHE
---

In a haze a stormy haze

I'll be round

I'll be loving you always always

Here I am and I'll take my time

Here I am and I'll wait in line always always


## EASONQIN & TONATOHE

<label for="startDate">Start:</label>
<input type="date" id="startDate" value="2020-01-01">

<label for="endDate">Today:</label>
<input type="date" id="endDate">

<button onclick="calculateDays()">Calculate Days</button>

<p id="result"></p>

<script>
  function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    if (isNaN(startDate) || isNaN(endDate)) {
      alert('Please enter valid dates.');
      return;
    }

    var timeDiff = endDate - startDate;
    var secondsDiff = Math.floor(timeDiff / 1000);

    var days = Math.floor(secondsDiff / (3600 * 24));
    var hours = Math.floor((secondsDiff % (3600 * 24)) / 3600);
    var minutes = Math.floor((secondsDiff % 3600) / 60);
    var seconds = secondsDiff % 60;

    document.getElementById('result').innerHTML = 'We have been in love for: ' +
      days + ' days, ' +
      hours + ' hours, ' +
      minutes + ' minutes, ' +
      seconds + ' seconds ^_^';
  }
</script>
