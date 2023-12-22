
<label for="startDate">Start Date:</label>
<input type="date" id="startDate">

<label for="endDate">End Date:</label>
<input type="date" id="endDate">

<button onclick="calculateDays()">Calculate Days</button>

<p id="result"></p>

<script>
  // 设置开始日期为固定值（例如：2023年1月1日）
  var defaultStartDate = new Date('2020-01-01');
  document.getElementById('startDate').valueAsDate = defaultStartDate;

  // 计算函数保持不变
  function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date();  // 设置结束日期为今天

    // Check if both dates are valid
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
    
    document.getElementById('result').innerHTML = 'We have been in love for: ' + days + ' days, ' + hours + ' hours, '+ minutes + ' minutes, '+ seconds + ' seconds ^_^'; 
  }
</script>

