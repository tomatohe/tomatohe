
<label for="startDate">Start Date:</label>
<input type="date" id="startDate">

<label for="endDate">End Date:</label>
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

// 计算函数保持不变
function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    // Check if both dates are valid
    if (isNaN(startDate) || isNaN(endDate)) {
        alert('Please enter valid dates.');
        return;
    }

    // Calculate the time difference in milliseconds
    var timeDiff = endDate - startDate;

    // Calculate the number of days
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById('result').innerHTML = ' We have been in love for : ' + daysDiff + ' days ^_^';
}

</script>

